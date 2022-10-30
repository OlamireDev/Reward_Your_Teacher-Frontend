import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom' 
import { LeftSideBar, SideBarLink } from '../styles/StudentStyles/SidebarStyles';
// import { DashboardContainer, DashboardMainBody} from '../styles/TeacherStyles/TeacherDashBoardStyles';
import { Topbar, ImageWrapper,TopbarLeftSide,TopbarRighttSide} from '../styles/NavbarStyles';
import { DashboardContainer, DashboardMainBody } from '../styles/StudentStyles/Studentdashboardstyle';
//import "./style.css"
import UserIcon from '../assets/Images/Ellipse 25.png'
import Logo from '../assets/Images/Frame12.png'
import LogOutComfirmation from '../components/LogOutComfirmation';



const TeacherDashboard = ({children, teacherDetails}) => {
  const [isLogout, setIsLogout] = useState(false)
  const teacherId = localStorage.getItem("isTeacher")
  const [isOpen, setIsOpen] = useState(false);
  const handleBurger = () => setIsOpen(!isOpen);
  const handleCloseSideBar = () => setIsOpen(true);
  const navigate = useNavigate();
  // const [teacherDetails, setTeacherDetails] = useContext(ContextProvider)

  const handleLogout = ()=>{
  setIsLogout(true)

  }



  
  return (
    <>
     < Topbar>
        <TopbarLeftSide>
            <ImageWrapper>
                <img src={Logo} alt="" /> 
            </ImageWrapper>
            <h1>Reward your Teacher</h1>
            <span onClick={handleBurger}><i className='fa fa-bars'></i></span>
        </TopbarLeftSide>
        <Link to={`/teacher/profile/${teacherId}`} style={{textDecoration:"none"}}>
        <TopbarRighttSide> 

            <ImageWrapper>
                <img src={UserIcon} alt="" /> 
            </ ImageWrapper>
            <h3>{teacherDetails.name?.substring(0, 10)}</h3>
        </TopbarRighttSide>
       </Link>

    </Topbar>
   
   <DashboardContainer>
      <LeftSideBar className={isOpen ? "closeSideBar" : "openSideBar"}>
        <ul>
          <SideBarLink activeclassname="active" onClick={handleCloseSideBar} to="/teacher" end>
          <i className="fas fa-th-large"></i>
           
            <li> Overview </li>
          </SideBarLink> 
          <SideBarLink activeclassname="active" onClick={handleCloseSideBar} to="/teacher/notification">
          <i className="fa fa-bell"></i>
            <li> Notifications </li>
          </SideBarLink>
          <SideBarLink activeclassname="active" onClick={handleCloseSideBar} to="/teacher/messaging">
          <i className="fa fa-comment-dots"></i>
            <li> Messaging  </li>
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
    </>
  )
}


export default TeacherDashboard