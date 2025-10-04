import "./Bars.css";
import ActivityIcon from "../../public/icons/ActivityIcon";
import AlertIcon from "../../public/icons/AlertIcon";
import FilterIcon from "../../public/icons/FilterIcon";
import HomeIcon from "../../public/icons/HomeIcon";
import MenuIcon from "../../public/icons/MenuIcon";


export default function Sidebar({selected}) {
    return (
        <div class="sidebar">
            <HomeIcon color={selected=="home" ? "white" : "black"} />
            <ActivityIcon color={selected=="activity" ? "white" : "black"} />
            <AlertIcon color={selected=="alert" ? "white" : "black"} />
            <FilterIcon color={selected=="filter" ? "white" : "black"} />
            <div style={{flexGrow:1}}></div>
            <MenuIcon color={"black"}/>
        </div>
    )
}