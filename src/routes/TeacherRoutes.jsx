import React, { useEffect, useState } from 'react'
import {  Routes, Route } from 'react-router-dom'
import Notification from '../components/TeacherComponent/Notification'
import Messaging from '../components/TeacherComponent/Messaging'
import Navbar from '../components/StudentNavbar' 
import TeacherDashboard from  '../pages/TeacherDashboard'
import Overview from '../components/TeacherComponent/Overview' 
import axios from 'axios';
import TeacherProfile from '../components/TeacherComponent/TeacherProfile'

const TeacherRoutes = () => {
  const [teacherDetails, setTeacherDetails] = useState({})

  const  getUserDetails = async()=>{ 

    const token = localStorage.getItem("token");  
    const teacherId = localStorage.getItem("isTeacher")
    try {
      let userData = await axios.get(`http://localhost:8080/api/v1/teacher/${teacherId}`, {
        headers:{
          Authorization:token
        }
      })
      console.log(userData)
      setTeacherDetails(userData.data.payload) 
    } catch (error) {
      
    }
  }

  useEffect(()=>{
  getUserDetails();
  },[])

  return (
    <>
     {/* <Navbar/> */}
    <TeacherDashboard teacherDetails={teacherDetails}>
    <Routes>
            <Route path="/" element={<Overview teacherDetails={teacherDetails}/>}/> 
            <Route path="/Notification" element={<Notification/>}/>
            <Route path="/Messaging" element={<Messaging/>}/>
            <Route path="/profile/:id" element={<TeacherProfile teacherDetails={teacherDetails}/>} />
            <Route path="*" element={<div><h2>404 PAGE NOT FOUND</h2></div>}/>
    </Routes>
    </TeacherDashboard>
    </>

  )
}

export default TeacherRoutes