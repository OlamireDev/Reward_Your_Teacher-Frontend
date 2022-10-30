import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'

export const ProtectStudentRoute = ({children}) => {
    const location = useLocation();
    const isLoggedIn = localStorage.getItem("token")
    const isStudent = localStorage.getItem("isStudent")
    if(isLoggedIn && isStudent && window.location.pathname != "/studentlogin"){
        return children
    }
    else if(isLoggedIn && window.location.pathname == "/studentlogin"){
        // return <Navigate to="/student" state={{from: location}} replace />
       return window.location.href="/student"
    }else{
        return <Navigate to="/login" state={{from: location}} replace />
    }

    // if(isLoggedIn && window.location.pathname == "/studentlogin"){
    // console.log(isLoggedIn)
    //     return <Navigate to="/student"/>
    // }
    // return children
}