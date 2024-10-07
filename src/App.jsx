
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import { useState } from 'react';

function App() {
  const [dark,setDark]=useState(false);
  const handleTheme=()=>{
    setDark(!dark);
  }

  return (
    <div className={dark?'bg-black lg:px-20 lg:py-3 px-1 py-1':'bg-white lg:px-20 lg:py-3 px-1 py-1'} >
      <Navbar dark={dark} handleTheme={handleTheme}></Navbar>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
