import { useState } from 'react'
import "./Bars.css";
import ActivityIcon from "../assets/icons/ActivityIcon";
import AlertIcon from "../assets/icons/AlertIcon";
import FilterIcon from "../assets/icons/FilterIcon";
import HomeIcon from "../assets/icons/HomeIcon";
import MenuIcon from "../assets/icons/MenuIcon";

export default function Sidebar({selected, recall}) {
    const [menuActive, setActive] = useState(true);
    
    return (
        <div className={menuActive ? `sidebar` : `deactive`} >
            {menuActive && <div className={menuActive ? `sidebar-btn-container` : `btn-deactive`}>
                <button className="sidebar-btn" onClick={() => recall("home")}><HomeIcon color={selected=="home" ? "white" : "black"} /></button>
                <button className="sidebar-btn" onClick={() => recall("activity")}><ActivityIcon color={selected=="activity" ? "white" : "black"} /></button>
                <button className="sidebar-btn" onClick={() => recall("alert")}><AlertIcon color={selected=="alert" ? "white" : "black"} /></button>
                <button className="sidebar-btn" onClick={() => recall("filter")}><FilterIcon color={selected=="filter" ? "white" : "black"} /></button>
            </div>}
            <div style={{flexGrow:1}}></div>
            <button className="sidebar-btn" onClick={()=> setActive(!menuActive)}><MenuIcon color={menuActive ? "black" : "white"}/></button>
        </div>
    )
}