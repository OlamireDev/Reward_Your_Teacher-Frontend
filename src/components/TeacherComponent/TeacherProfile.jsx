import '../../styles/StudentStyles/userprofile.css';
import React, { useState,useEffect } from 'react';
import Icon from '../../assets/Icon.svg';
import axios from "../../api/axios";


export default function TeacherProfile({teacherDetails}) { 
  const [formData, setFormData] = useState({})
  const [schools, setSchool] = useState([])

  async function updateProfile (){
    console.log('React tire me')
    await  axios.post("http://localhost:8080/api/v1/teacher/update", formData, {
      headers:{Authorization: localStorage.getItem("token")}

    }).then((responses)=>{
      console.log(responses)
    })
  }
  const  getUserDetails = async()=>{
    const token = localStorage.getItem("token");
    const teacherId = localStorage.getItem("isTeacher")

    let teacherDetails = await axios.get(`http://localhost:8080/api/v1/teacher/${teacherId}`, {
      headers:{
        Authorization:token
      }
    })
    let schoolData = await axios.get(`http://localhost:8080/api/v1/school/retrieve`, {
      headers:{
        Authorization:token
      }})
    console.log(teacherDetails)
      setFormData({
        ...formData, 
        name:teacherDetails.name,
        email: teacherDetails.email,
        schoolName: teacherDetails.schoolName
      })
    let scData = schoolData.data.payload
    setSchool(scData)
  }

  useEffect(()=>{
    getUserDetails()
  }, [])
  return (
    <div className='profile-container'>
      <h2>Profile</h2>

      <div className='user-settings'>
        <form className='user-form' onSubmit={updateProfile}>
          <h5 className='user-info'>Basic Information</h5>

          <p className='disclaimer'>Only you can view and edit your information</p>
          
          <label className='user-label'  htmlFor="First Name">Name</label>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <div className="input-section">
          <input className='formInput form-input' value={formData.name} onChange={(e)=>{setFormData({...formData, name:e.target.value})}} type="text" placeholder='First Name' /><br/>
          <img src={Icon} alt="Icon" />
          </div> 
          </div>




            <label className='user-label'  htmlFor="Phone Number">Phone number</label>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div className="input-section">
          <input className='formInput form-input' type="tel" name='phonenumber' placeholder='phone number' /><br/>
          <img src={Icon} alt="Icon" />
          </div>
          </div>


          <label className='user-label'  htmlFor="Email">Email</label>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div className="input-section">
          <input className='formInput form-input' value={formData.email} onChange={(e)=>{setFormData({...formData, email:e.target.value})}}  type="email" name='email' placeholder='Email' /><br/>
          <img src={Icon} alt="Icon" />
          </div>
          </div>


          <label className="" style={{margin: "0px"}}>School</label>
          <div className="d-flex flex-row align-items-center mb-4">

            <div className="form-outline flex-fill mb-0">
              <select className="form-select" required aria-label="Default select example" value={formData.schoolName} onChange={(e)=>{setFormData({...formData, schoolName:e.target.value})}}
              >
                <option value=""></option>
                {schools.map((school, index) => {
                  return (
                      <option value={school.schoolName}>{school.schoolName}</option>
                  );
                })}
              </select>
              {/* <label className="form-label" for="form3Example4cd">Repeat your password</label> */}
            </div>
          </div>

          <button className='saveBtn' type='submit'>Save</button>
        </form>
      </div>
    </div>
  )
}
