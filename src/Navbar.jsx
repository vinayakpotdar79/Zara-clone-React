import React, { useState } from 'react'
import { Link} from "react-router-dom"
import Profile from './Profile'
import "./Navbar.css"
const Navbar = () => {
  const [sidebar,setSidebar]=useState(false);
  const [darkmode,SetDarkmode]=useState(false)
  let toggle=()=>{
    setSidebar(!sidebar);
  }
  return ( <div>
    <div className='nav'> 
    <div className='logos'>
      <button id="sidebar" onClick={toggle}><img className="menulogo"src="src\assets\menu_logo.png" alt="menulogo" /></button>
    <img className='logo' src="https://www.logo.wine/a/logo/Zara_(retailer)/Zara_(retailer)-Logo.wine.svg" alt="Logo" />
    </div>
    <div className='subnav'>
    <a href="#">SEARCH</a>
    <a href="#">LOGIN</a>
    <a href="#">HELP</a>
    </div>
    </div>
      {/* Sidebar */}
      {/* <div className={`sidebar ${sidebar ? "active" : ""}`}>
        <b><Link to="/Women" className="sidebar-item">WOMEN</Link></b>
        <Link to="/Men" className="sidebar-item">MEN</Link>
        <Link to="/Kid" className="sidebar-item">KIDS</Link>
      </div> */}
            <p style={{ textAlign: "center", fontFamily:"inherit",fontSize:"30px" }}>The New</p>
      <Profile/>
    </div>
  )
}

export default Navbar