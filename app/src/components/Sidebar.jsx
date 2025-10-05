import "./Bars.css";
import ActivityIcon from "../assets/icons/ActivityIcon";
import AlertIcon from "../assets/icons/AlertIcon";
import FilterIcon from "../assets/icons/FilterIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import MenuIcon from "../assets/icons/MenuIcon";

export default function Sidebar({selected, recall}) {
    
    return (
        <div className="sidebar">
            <button className="sidebar-btn" onClick={() => recall("home")}><HomeIcon color={selected=="home" ? "white" : "black"} /></button>
            <button className="sidebar-btn" onClick={() => recall("activity")}><ActivityIcon color={selected=="activity" ? "white" : "black"} /></button>
            <button className="sidebar-btn" onClick={() => recall("alert")}><AlertIcon color={selected=="alert" ? "white" : "black"} /></button>
            <button className="sidebar-btn" onClick={() => recall("filter")}><FilterIcon color={selected=="filter" ? "white" : "black"} /></button>
            <div style={{flexGrow:1}}></div>
            <MenuIcon color={"black"}/>
        </div>
    )
}