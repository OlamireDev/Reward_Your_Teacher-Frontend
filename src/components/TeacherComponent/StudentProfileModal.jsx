import React, { useState } from 'react'
import teacherLogo from '../../assets/Images/Ellipse 44.png'
import {AiOutlineClose} from 'react-icons/ai'

const StudentProfileModal = ({setStudentprofiletoggle,
    studentDetail,
    setStudentDetail }) => {

    function close(){
        setStudentprofiletoggle(false)
    }
console.log(studentDetail)
  return (
    <div className='top-0 left-0 margin-auto  w-screen fixed'>
         <div className='h-screen pt-9 flex items-center justify-center bg-[#f5f5f5] bg-opacity-70'>
        <div className='py-4 bg-[#ffffff] shadow-xl max-w-[350px] sm:max-w-[450px] lg:max-w-[500px] m-auto relative'>
            <div className='flex items-center justify-center pb-2'>
                <h2 className='text-xl text-[#03435F]'>Profile Details</h2>
            </div>
            <AiOutlineClose size={18} onClick={close} className='absolute right-5 top-5 cursor-pointer'/>
            <hr />
            <div className='px-6 lg:px-9'>
                <div className='flex justify-between py-4'>
                    <div className='flex items-center'> 
                        <img src={teacherLogo} alt="/" />
                        <div className='ml-3 text-[#03435F]'>
                            <p className='font-bold text-lg'>{studentDetail.name}</p>
                            <p>{studentDetail.schoolName}</p>
                            <p>Student</p>
                        </div>
                    </div>
                </div>


                <div className='py-2'>
                    <h5 className='text-[#C4C4C4]'>Other info</h5>
                    <p className='text-[#03435F]'>{studentDetail.email}</p>
                    <p className='text-[#03435F]'>{studentDetail.phoneNumber}</p>
                </div>

            </div>
        </div>
        </div>
    </div>
  // teacherprofiletoggle= {teacherprofiletoggle}>
  )
} 

export default StudentProfileModal

