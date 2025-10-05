import "./Card.css";
import Drop from "../assets/icons/Drop.svg?react";
import Flag from "../assets/icons/Flag.svg?react";
import Rain from "../assets/icons/Rain.svg?react";
import Wind from "../assets/icons/Wind.svg?react";

export default function WeatherCard({data}) {
    return (
        <div className="weather-card">
            <h2 style={{lineHeight: 0.5}}>Expected Weather</h2>
            <div style={{display: "flex"}}>
                <div className="graphic">
                </div>

                <div style={{display: "flex", flexDirection: "column", gap: "0rem", margin: '0rem 3rem'}}>
                    <h1 style={{lineHeight: 0, fontSize: "5rem"}}>0°F</h1>
                    <p>Very hot</p>
                </div>
            </div>
            <div style={{display: "flex", overflowWrap: "break-word", width: "100%", textWrap: "wrap", gap: "1rem", alignItems: "flex-start", justifyContent: "space-between"}}>
                <div>
                    <Wind height={35} />
                    <p><b>Wind Speed</b></p>
                    <p></p>
                </div>
                <div>
                    <Rain height={35} />
                    <p><b>Precipitation Chance</b></p>
                    <p></p>
                </div>
                <div>
                    <Drop height={35} />
                    <p><b>Humidity</b></p>
                    <p></p>
                </div>
                <div>
                    <Flag height={35} />
                    <p><b>Air Quality</b></p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}