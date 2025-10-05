from datetime import datetime
import json
import os
import requests
import earthaccess
import xarray as xr
from pydap.net import create_session
from tabulate import tabulate
from IPython.display import display, HTML, Markdown
import sys
sys.path.append(os.path.abspath(".."))
from cloud_opendap_nb_utils import display_filtered_table

def getCollections(env, token, page_size, page_num):
    ''' CMR Search for all GESDISC Collections '''
    daac='GES_DISC'
    params = {'provider':daac,
              'page_size':page_size, # Must be 2000 or less
              'page_num':page_num,  
             }
    searchUrl = getUrl(env,'collections.umm_json',params)
    collRecords = getResult(searchUrl)
    return collRecords

def getSvcAssoc():
    ''' 
    Returns a dictionary of collection concept-ids and nativeids associated to the Cloud Hyrax UMM-S record
    '''
    env = 'PROD'
    umms = 'S2874702816-XYZ_PROV'
    coll_names = {}
    LongName = None
    response = getResult(getUrl(env,'services'+'.umm_json',{'concept_id':umms}))
    if len(response['items']) == 1 :
        LongName = response['items'][0]['umm']['LongName']
        collections = response['items'][0]['meta']['associations']['collections']
    for cid in collections:
        if 'GES_DISC' in cid:
            nid = concept2native(env,cid)
            if nid is not None:
                coll_names[cid] = nid
    return coll_names, LongName

def getResult(url):
    ''' Returns json-formatted response from an input URL '''
    result = requests.get(url)
    try:
        result.raise_for_status()
        return json.loads(result.text)
    except :
        print('failed URL:',url)
        return None
        
def getUrl(env, search_type, queryD):
    ''' Constructs a CMR search URL '''

    base = 'https://cmr.earthdata.nasa.gov'

    # Expand the query's key:value pairs into search parameters
    params = ''
    for k,key in enumerate(queryD.keys()):
        if k == 0: 
            prefix = ''
        else:
            prefix = '&'
        facet = prefix + key + '=' + str(queryD[key])
        params += facet

    # Build the URL
    url = '{}/{}?{}'.format(base, search_type, params)
    return url

def concept2native(env,cID):
    '''
    Returns a collection's native-id when given a concept-id and a CMR environment
    '''
    # construct the search URL and get the response
    url = getUrl(env,'collections.umm_json',{'concept-id':cID})
    response = getResult(url)
    try:
        return response['items'][0]['meta']['native-id']
    except :
#        print('failed URL',url)
        return None
    
colls_opendap_prod, LongName = getSvcAssoc()

display_filtered_table(colls_opendap_prod)
earthaccess.login()

# Create search query for 2000-01-01 Cloud OPeNDAP URL
results = earthaccess.search_data(
    short_name="GLDAS_NOAH10_3H",
    version='2.0',
    temporal=('2000-01-01', '2000-01-01'), 
    bounding_box=(-180, 0, 180, 90)
)

# Parse out URL from request, add to OPeNDAP URLs list for querying multiple granules with constraint expressions
opendap_urls = []
for item in results:
    for urls in item['umm']['RelatedUrls']:  # Iterate over RelatedUrls in each request step
        if 'OPENDAP' in urls.get('Description', '').upper():  # Check if 'OPENDAP' is in the Description
            # Extract OPeNDAP URL, replace "https" with "dap4"
            url = urls['URL'].replace('https', 'dap4')

            # Subset Tair_f_inst, lat, lon, and time
            # To view all variables, comment out these two lines
            ce = "?dap4.ce=/{}%3B/{}%3B/{}%3B/{}".format("Tair_f_inst", "lat", "lon", "time")
            url = url + ce

            # Add URL to list
            opendap_urls.append(url)

opendap_urls

my_session = create_session()

try:
    # Load dataset object and metadata, but don't open the values yet
    # NOTE: When opening HDF files, the group to be accessed must be specified with the "group=" parameter. 
    #       E.g., for GPM IMERG, group="Grid" must be entered or an error will occur
    # Remove the session parameter if you are just using a .netrc file to authenticate
    # Change to open_mfdataset if you want to open and concatenate all URLs
    ds = xr.open_dataset(opendap_urls[0], engine="pydap", session=my_session)
except OSError as e:
    print('Error', e)
    print('Please check that your .edl_token file exists and is valid, or that your username/password were entered correctly.')
    raise

print(ds)