import "./Bars.css";
import ActivityIcon from "../assets/icons/ActivityIcon";
import AlertIcon from "../assets/icons/AlertIcon";
import FilterIcon from "../assets/icons/FilterIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import MenuIcon from "../assets/icons/MenuIcon";
import { Link } from "react-router-dom";

export default function Sidebar({selected, recall}) {
    
    return (
        <div className="sidebar">
            <HomeIcon color={selected=="home" ? "white" : "black"} />
            <ActivityIcon color={selected=="activity" ? "white" : "black"} />
            <AlertIcon color={selected=="alert" ? "white" : "black"} />
            <FilterIcon color={selected=="filter" ? "white" : "black"} />
            <div style={{flexGrow:1}}></div>
            <MenuIcon color={"black"}/>
        </div>
    )
}