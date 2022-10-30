import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'

export const ProtectTeacherRoute = ({children}) => {
    const location = useLocation();
    const isLoggedIn = localStorage.getItem("token")
    const isTeacher = localStorage.getItem("isTeacher")
    if(isLoggedIn && isTeacher){
        return children
    }else if(isLoggedIn && window.location.pathname == "/teacherlogin"){
        return <Navigate to="/teacher" state={{from: location}} replace />
        // window.location.href="/teacher"
    }
    
    else{ 
        return <Navigate to="/login" state={{from: location}} replace />
    }

    // if(isLoggedIn && window.location.pathname == "/teacherlogin"){
    // console.log(isLoggedIn)
    //     return <Navigate to="/teacher"/>
    // }
    // return children
}