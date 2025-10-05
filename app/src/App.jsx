import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from "./components/Sidebar";
import UserInput from "./components/UserInput";
import { Link } from "react-router-dom";
import ActivityTab from "./pages/ActivityTab";
import AlertTab from "./pages/AlertTab";
import FilterTab from "./pages/FilterTab";
import HomeTab from "./pages/HomeTab";

function App() {
  const [currTab, setTab] = useState("home")
  console.log(currTab)

  return (
    <>
      <div className="app">
        <Sidebar selected={"home"} recall={setTab} />
        <div style={{display: "flex", flexDirection: "column", width: "100vh", margin: "3rem", gap: "3rem"}}>
          <UserInput />

          <div>
            {
              currTab == "home" && 
              <HomeTab />
            }

            {
              currTab == "activity" && 
              <ActivityTab />
            }

            {
              currTab == "alert" && 
              <AlertTab />
            }

            {
              currTab == "filter" && 
              <FilterTab />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
