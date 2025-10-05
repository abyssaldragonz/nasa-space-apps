import FilterCard from "../components/FilterCard";
import WeatherCard from "../components/WeatherCard";
import "./Pages.css";

export default function FilterTab() {
    const data = [{"name": "Stargazing", "condition": "clear skies"},
        {"name": "Rocket Launch", "condition": "clear skies"},
        {"name": "Beach Sports", "condition": "clear skies and sunny"},
        {"name": "Snow Sports", "condition": "snowy"},
        {"name": "Water Sports", "condition": "safe winds"},
        {"name": "Outdoor Celebrations", "condition": "sunny"},
        {"name": "Indoor Activities", "condition": "rainy"}
    ];
    

    return (
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div className="filter-container">
                <h3 style={{lineHeight: 0}}>Events</h3>
                <hr style={{border: "1px solid black", width: "100%"}} />
                {data.map((event, index) => (
                    <FilterCard key={index} prop={event} />
                ))}
            </div>
            
            <div style={{display: "flex", flexDirection: "column"}}>
                <h2>Best Day for: </h2>
                <h2>Location: </h2>
                <WeatherCard />
            </div>
        </div>
    )
}