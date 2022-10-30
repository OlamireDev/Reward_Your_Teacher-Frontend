import React from "react";
import { Navigate } from "react-router-dom";
import '../styles/card.css'

export default function LogOutComfirmation({setIsLogout}) {
  const handleLogout = () =>{
    setIsLogout(false)
  localStorage.clear()
    window.location.href="/"
  }
    return (
      <div className='top-0 left-0 margin-auto  w-screen fixed'>
      <div className='h-screen pt-9 flex items-center justify-center bg-[#f5f5f5] bg-opacity-70'>
      <div className='card-container'>
        <div className="header">
            <h2>Logout Comfirmation</h2>
        </div>
        <div className="paragraph">
            <p>Are you sure you want to logout from you account?</p>
        </div>

        <div className="btn-container">
            <button className="btnSec" onClick={()=>setIsLogout(false)}>No</button>
            <button className="btn" onClick={handleLogout}>Yes</button>
        </div>
       
        
      </div>
      </div>
      </div>
    )
  }