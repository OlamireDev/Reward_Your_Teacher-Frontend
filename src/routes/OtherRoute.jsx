import React from 'react' 
import {  Routes, Route } from 'react-router-dom' 
// import TeacherProfile from '../pages/TeacherProfile'
// import MessageAlert from '../pages/MessageAlert'
// import Payment from '../components/PaymentModal'  
// import StudentSignup from '../pages/StudentSignup'
import HomePage from '../components/HomePage/home'
import TeacherSignUp from '../components/RegisterPage/TeacherSignUp'
import StudentSignup from '../components/RegisterPage/RegisterPage'
import LoginPage from '../pages/LoginPage'


const OtherRoute = () => {
  return (
    <Routes>
       <Route path="/" exact element={<HomePage />} />
        <Route path="/teachersignup" element={<TeacherSignUp/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/studentsignup" element={<StudentSignup/>}/> 
        {/* <Route path="/teacherprofile" element={<TeacherProfile/>}/> */}
        {/* <Route path="/messagealert" element={<MessageAlert/>}/> */}
        {/* <Route path='/payment' element={<Payment/>}/> */}
        <Route path="*" element={<div><h2>404 PAGE NOT FOUND</h2></div>}/>

       
            {/* <Route path="/register" element={<RegisterPage />} />
            <Route path='/teacher' element={<TeacherSignUp/>}></Route> */}
    </Routes>
  )
}

export default OtherRoute