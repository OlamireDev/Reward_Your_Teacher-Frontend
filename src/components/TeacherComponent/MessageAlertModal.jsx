import React from 'react'
import done from '../TeacherComponent/Successfully_Done.png'
// import styled from 'styled-components'
const MessageAlert = ({successAlert, setTeacherPaymentToggle, teacherDetail, amount}) => {
// console.log(setTransferSuccessfulToggle)

    function close(){ 

    successAlert(false)
    setTeacherPaymentToggle(false)
    }

    return (
        
        <div className='top-0 left-0 margin-auto  w-screen fixed'> 
<div className='h-screen flex items-center justify-center bg-[#f5f5f5] bg-opacity-70'>
        <div className='py-4 px-16 bg-[#ffffff] shadow-xl max-w-[350px] sm:max-w-[450px] lg:max-w-[500px] m-auto'>
            <div className='flex flex-col items-center justify-center'>
                <img src={done} alt="/" />
                <div className='py-4'>
                    <h1 className='text-center text-3xl text-[#21334F] py-2'>Reward Sent Successfully</h1>
                    <p className='text-[#21334F] py-2 text-center text-lg'>
                        You just sent <span className='font-bold'>N{amount}</span> to <span className='font-bold'>{teacherDetail.name}</span>
                    </p>
                    <div>
                        <button onClick={close} className='w-full py-2 bg-[#80B918]/20'>
                            <p className='text-[#55A630] o'>Done</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default MessageAlert
      

    
