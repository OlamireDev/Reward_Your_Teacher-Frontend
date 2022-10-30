import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import LogOutComfirmation from '../components/LogOutComfirmation';
import { LeftSideBar, SideBarLink } from '../styles/StudentStyles/SidebarStyles';
import { DashboardContainer, DashboardMainBody } from '../styles/StudentStyles/Studentdashboardstyle';
import "../styles/StudentStyles/style.css"

const StudentDashboard = ({children,studentDetails}) => {
  const [isLogout, setIsLogout] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const handleBurger = () => setIsOpen(!isOpen);
  const handleCloseSideBar = () => setIsOpen(true);
  const navigate = useNavigate()
  const [refresh, setRefresh] = useState(false)

const handleLogout = ()=>{
  setIsLogout(true)
}
 

  return (
    <DashboardContainer>
      <LeftSideBar className={isOpen ? "closeSideBar" : "openSideBar"}>
        <ul>
          <SideBarLink activeclassname="active" onClick={handleCloseSideBar} to="/student">
          <i className="fas fa-th-large"></i>
            <li>Overview </li>
          </SideBarLink>
          <SideBarLink activeclassname="active" onClick={handleCloseSideBar} to="/student/schools">
          <i className="fa fa-school"></i>
             <li> Schools  </li>
          </SideBarLink>
          <SideBarLink activeclassname="active" onClick={handleCloseSideBar} to="/student/notification">
          <i className="fa fa-bell"></i>
            <li> Notifications</li>
          </SideBarLink>
          <SideBarLink activeclassname="active" onClick={handleCloseSideBar} to="/student/messaging">
          <i className="fa fa-comment-dots"></i>
            <li> Messaging </li>
          </SideBarLink>

        </ul>
        <button onClick={handleLogout}>
          <i className="fa fa-sign-out"></i>
          <span>Logout</span>
        </button>
      </LeftSideBar>
      <DashboardMainBody>
        {children}
      </DashboardMainBody>
    {isLogout && <LogOutComfirmation setIsLogout={setIsLogout} />}
    </DashboardContainer>
  )
}


export default StudentDashboard;