import React, { useEffect, useState } from 'react'
import StudentDashboard from '../pages/StudentDashboard'
import {  Routes, Route } from 'react-router-dom'


import School from '../components/StudentComponent/School'
import Notification from '../components/StudentComponent/Notification'
import Messaging from '../components/StudentComponent/Messaging'
import Overview from '../components/StudentComponent/Overview'
import StudentProfile from '../components/StudentComponent/StudentProfile'
import Search from "../components/StudentComponent/Search"


import Navbar from '../components/StudentNavbar'
import SchoolInfo from '../components/StudentComponent/SchoolInfo'
import axios from 'axios'

const StudentRoutes = () => {
  const [studentDetails, setStudentDetails] = useState({})

  const  getUserDetails = async()=>{ 

    const token = localStorage.getItem("token");  
    const studentId = localStorage.getItem("isStudent")
    try {
      let userData = await axios.get(`http://localhost:8080/api/v1/student/${studentId}`, {
        headers:{
          Authorization:token
        }
      })
      setStudentDetails(userData.data.payload) 
      console.log(studentDetails)
    } catch (error) {
      
    }
  }

  useEffect(()=>{
  getUserDetails();
  },[])
  return (
    <>
    
    <Navbar studentDetails={studentDetails}/>
     <StudentDashboard studentDetails={studentDetails}>
        <Routes>
            <Route path="/"  studentDetails={studentDetails} element={<Overview/>}/>
            <Route path="/Schools" element={<School/>}/>
            <Route path="/Notification" element={<Notification/>}/>
            <Route path="/Messaging" element={<Messaging/>}/> 
            <Route path="/schools/teachers" element={<SchoolInfo/>}/>
            <Route path="/profile/:id" element={<StudentProfile/>} />
            <Route path="/schools/searchTeachers" element={<Search/>}/>
            <Route path="*" element={<div><h2>404 PAGE NOT FOUND</h2></div>}/>
        </Routes>
    </StudentDashboard>
    </>
  )
}

export default StudentRoutes