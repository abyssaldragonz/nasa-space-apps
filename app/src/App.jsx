import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from "./components/Sidebar";
import UserInput from "./components/UserInput";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="app">
        <Sidebar selected={"home"} />
        {/* <UserInput /> */}
        <div>

        </div>
      </div>
    </>
  )
}

export default App
