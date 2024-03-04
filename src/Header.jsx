import React from "react";


import vaultBjjLogo from "../assets/logo.png"

export default function Header() {
  return (
    
    <div className="header-content-wrapper">
        
    <div className="logo-title-links-toprow-container"> 
    
    <h1>The Vault Jiu Jitsu</h1>
    <h2>Delco's Premier Jiu Jitsu Academy</h2>
    <h4>Classes for all ages and skill levels!</h4>
        <div className="logo-container"> 
            <img src={vaultBjjLogo}></img>
        </div>

        <div className="header-btn-container">
        <button>Home</button>
        <button>About</button>
        <button>Schedule</button>
        <button>Programs</button>
        <button>Contact/FAQ</button>
        </div>
    
    </div>



    </div>
  )
}


