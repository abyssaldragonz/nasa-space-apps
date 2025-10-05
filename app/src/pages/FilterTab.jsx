import { useState } from 'react'
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

    const [currEvent, setEvent] = useState("stargazing")

    return (
        <div style={{display: "flex", justifyContent: "space-between", gap: "5rem", width: "100%"}}>
            <div className="filter-container">
                <h3 style={{lineHeight: 0}}>Events</h3>
                <hr style={{border: "1px solid black", width: "100%"}} />
                {data.map((event, index) => (
                    <FilterCard key={index} prop={event} />
                ))}
            </div>
            
            <div style={{display: "flex", flexDirection: "column", gap: "1rem", width: "fit-content"}}>
                <div style={{display: "flex", gap: "3rem", textWrap: "nowrap"}}>
                    <h2 style={{lineHeight: 0}}>Best Day for:</h2> 
                    <button>{currEvent} &nbsp; ×</button>
                </div>
                <div style={{display: "flex", gap: "3rem"}}>
                    <h2 style={{lineHeight: 0}}>Location: </h2>
                    <button>LOCATION HERE &nbsp; ×</button>
                </div>
            </div>

            <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
                <h1>DATE HERE</h1>
                <WeatherCard />
            </div>
        </div>
    )
}