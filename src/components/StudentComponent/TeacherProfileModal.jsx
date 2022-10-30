import React, { useState } from 'react'
import teacherLogo from '../../assets/Images/Ellipse 44.png'
import {AiOutlineClose} from 'react-icons/ai'

const TeacherProfileModal = ({setTeacherprofiletoggle,setTeacherPaymentToggle,teacherDetail, setTeacherDetail}) => {
    const [teacherId, setTeacherId] = useState(localStorage.getItem("isTeacher"));
    const [togglePayment, setTogglePayment] = useState (false);
console.log(teacherDetail)
    function handleReward(){
        setTeacherPaymentToggle(true)
        setTeacherprofiletoggle(false)
    }
  return (
    <div className='top-0 left-0 margin-auto  w-screen fixed'>
         <div className='h-screen pt-9 flex items-center justify-center bg-[#f5f5f5] bg-opacity-70'>
        <div className='py-4 bg-[#ffffff] shadow-xl max-w-[350px] sm:max-w-[450px] lg:max-w-[500px] m-auto relative'>
            <div className='flex items-center justify-center pb-2'>
                <h2 className='text-xl text-[#03435F]'>Profile Details</h2>
            </div>
            <AiOutlineClose size={18} className='absolute right-5 top-5 cursor-pointer'/>
            <hr />
            <div className='px-6 lg:px-9'>
                <div className='flex justify-between py-4'>
                    <div className='flex items-center'> 
                        <img src={teacherLogo} alt="/" />
                        <div className='ml-3 text-[#03435F]'>
                            <p className='font-bold text-lg'>{teacherDetail.name}</p>
                            <p>{teacherDetail.schoolName}</p>
                            <p>Head Teacher</p>
                        </div>
                    </div>
                    { teacherId != null ?(
                    <div className='text-[#55A630] cursor-pointer font-bold'>
                        <p>Edit</p>
                    </div>) :(
                        <div className='text-[#55A630] cursor-pointer font-bold'>
                    </div>
                    )
}
                </div>

                <div className='py-2'>
                    <h5 className='text-[#C4C4C4]'>About</h5>
                    <p className='text-[#03435F]'>{teacherDetail.about}</p>
                </div>

                <div className='py-2'>
                    <h5 className='text-[#C4C4C4]'>Other info</h5>
                    <p className='text-[#03435F]'>choimaawoniyi@gmail.com</p>
                    <p className='text-[#03435F]'>08098556634</p>
                </div>

                <div className='py-2 flex justify-between sm:w-[380px] mx-auto'>
                    <button className='bg-[#55A630] text-white rounded-sm py-2 px-6 sm:px-9 cursor-pointer' onClick={handleReward}>Send Reward</button>
                    <button className='bg-[#f5f5f5] text-[#03435F] rounded-sm py-2 px-6 sm:px-9 cursor-pointer'>Send Message</button>
                </div>
            </div>
        </div>
        </div>
    </div>
  // teacherprofiletoggle= {teacherprofiletoggle}>
  )
} 

export default TeacherProfileModal

