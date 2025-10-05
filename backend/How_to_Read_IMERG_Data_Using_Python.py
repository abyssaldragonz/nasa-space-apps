import earthaccess
import xarray as xr
import numpy as np
import matplotlib.pyplot as plt
import cartopy.crs as ccrs
from cartopy.mpl.gridliner import LONGITUDE_FORMATTER, LATITUDE_FORMATTER
import matplotlib.ticker as mticker
from matplotlib.colors import BoundaryNorm

# Authenticate with Earthdata Login servers
auth = earthaccess.login()

# Search for granules
results = earthaccess.search_data(
    short_name="GPM_3IMERGM",
    version="07",
    temporal=('2014-01-01', '2014-01-01'),
    bounding_box=(-180, 0, 180, 90)
)

# Print search results
print(results)

# Download the granule to the current working directory
downloaded_files = earthaccess.download(
    results,
    local_path='.', # Change this string to download to a different path
)

ds = xr.open_mfdataset(downloaded_files, group="Grid")
ds

# Get the precipitation, latitude, and longitude variables
precip = ds['precipitation'][0,:,:].values
precip = np.transpose(precip)
theLats = ds['lat'].values
theLons = ds['lon'].values
x, y = np.float32(np.meshgrid(theLons, theLats))

# Set the figure size, projection, and extent
fig = plt.figure(figsize=(21, 7))
ax = plt.axes(projection=ccrs.PlateCarree())
ax.set_extent([-180, 180, -60, 60])  

# Add coastlines and formatted gridlines
ax.coastlines(resolution="110m", linewidth=1)
gl = ax.gridlines(crs=ccrs.PlateCarree(), draw_labels=True,
                  linewidth=1, color='black', linestyle='--')
gl.xlabels_top = False
gl.ylabels_right = False
gl.xlines = True
gl.xlocator = mticker.FixedLocator([-180, -90, 0, 90, 180])
gl.ylocator = mticker.FixedLocator([-60, -50, -25, 0, 25, 50, 60])
gl.xformatter = LONGITUDE_FORMATTER
gl.yformatter = LATITUDE_FORMATTER
gl.xlabel_style = {'size': 16, 'color': 'black'}
gl.ylabel_style = {'size': 16, 'color': 'black'}

# Set contour levels
clevs = np.arange(0, 3, 0.05)

# Normalize the data to match clevs
norm = BoundaryNorm(clevs, ncolors=plt.cm.rainbow.N, clip=True)

# Plot the data with pcolormesh
mesh = plt.pcolormesh(x, y, precip, cmap=plt.cm.rainbow, norm=norm, shading="auto")

# Add a colorbar
cb = plt.colorbar(mesh, ax=ax, orientation="vertical", pad=0.05, aspect=16, shrink=0.8)
cb.set_label('mm / hr', size=20)
cb.ax.tick_params(labelsize=16)

# Add a title
plt.title('GPM IMERG Monthly Mean Rain Rate for January 2014', size=24)

# Show the plot
plt.show()

# fig.savefig('GPM_3IMERG_plot.png', bbox_inches='tight', pad_inches = 0.1)