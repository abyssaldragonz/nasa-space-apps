import { useState } from "react";
import "./Bars.css";
import Calendar from "./Calendar"

export default function UserInput() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="user-input">
            <input type="text" id="location-search" name="name" placeholder="Enter location" />
            <Calendar />
        </div>
    )
}