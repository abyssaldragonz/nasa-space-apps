export default function FilterCard({prop}) {
    return (
        <div className="filter-card">
            
            <div style={{}}>
                <h5>{prop.name}</h5>
                <p>{prop.condition}</p>
            </div>
        </div>
    )
}