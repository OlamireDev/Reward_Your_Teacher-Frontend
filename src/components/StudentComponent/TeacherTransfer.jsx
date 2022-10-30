import React from 'react'
import logo from '../StudentComponent/Vector.png'
import { AiOutlineClose } from 'react-icons/ai'
import { usePaystackPayment } from 'react-paystack';
import axios from '../../api/axios'
import { useState } from 'react';
import TransferSuccess from "../TeacherComponent/MessageAlertModal"

const Payment = ({ setTeacherprofiletoggle, setTeacherPaymentToggle,teacherDetail}) => {
const [amount, setAmount] = useState("")
const [id, setId] = useState(teacherDetail.id)
const [loading, setLoading] = useState(false)
const [successAlert, setSuccessAlert] = useState(false);
console.log(teacherDetail)

    function paymentDone(){
        setSuccessAlert(true);
    //    setTeacherPaymentToggle(false)
        //setToggleModal(false)
    }

    const closeDialog=()=>{
        // setTeacherprofiletoggle(true)
        setTeacherPaymentToggle(false)
    }
    const onSuccess = (reference) => {
        console.log(reference);
    };

    const onClose = () => {
        console.log('closed')
    }


    const paymentDetails = {
        amount:setAmount
        
    }

    const handleSendMoney = async (e) =>{
        e.preventDefault()
        console.log(amount)
        const token = localStorage.getItem("token"); 
        console.log(token)
        const data = {id, amount}
        console.log (data)
    try {
        setLoading(true)
            let res = await axios.post(`http://localhost:8080/api/v1/student/wallet-transfer`, data, {
                Autherization: {
                    Headers:token
                }
            })
            console.log(res)
            if(res.data.message ==="Request Successful"){
                console.log('we got here')
                paymentDone()
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='top-0 left-0 margin-auto  w-screen fixed'>
            <div className='h-screen flex items-center justify-center bg-[#f5f5f5] bg-opacity-70'>
                <div className='py-4 bg-[#ffffff] shadow-xl max-w-[350px] sm:max-w-[450px] lg:max-w-[500px] m-auto relative'>
                    <div className='flex items-center justify-center pb-2'>
                        <img src={logo} alt="" />
                        {/* <h2 className='text-xl text-[#03435F] ml-3 font-bold'>Pay with Paystack</h2> */}
                        <h2 className='text-xl text-[#03435F] ml-3 font-bold'>Fund Wallet</h2>
                    </div>
                    <AiOutlineClose size={18} onClick={closeDialog} className='absolute right-5 top-5 cursor-pointer' />
                    <hr />
                    <form onSubmit={handleSendMoney} className='px-6 lg:px-9'>
                        <div className='flex flex-col items-center justify-center py-2'>
                            <p className='text-[#979797]'>Enter Amount</p>
                            {/* <h1 className='text-4xl text-[#03435F] font-bold'>20,000</h1> */}
                            <input type="number" required value={amount} onChange={(e)=>setAmount(e.target.value)} className='border text-4xl text-[#03435F] font-bold'/>
                        </div>

                        {/* <div className='py-2 flex items-center justify-center sm:w-[380px] mx-auto'>
                            <button className='bg-[#55A630] text-white py-2 px-5 sm:px-9 cursor-pointer'>Pay with Card</button>
                            <button className='bg-[#f5f5f5] text-[#03435F] py-2 px-5 sm:px-9 cursor-pointer'>Pay with Bank</button>
                        </div> */}

                        {/* <form className='py-2 mx-auto items-center justify-center flex flex-col'>
                            <div className='py-4'>
                                <label className='relative'>
                                    <input type="text" className='h-12 sm:w-[360px] px-4 border border-[#D9D9D9] outline-none focus:border-[#0BA4DB] focus:text-[#03435F] transition duration-200 bg-transparent' placeholder='0000 0000 0000 0000' />
                                    <span className='text-lg absolute left-0 -top-1 mx-4 text-[#03435F] bg-white transform -translate-y-6 -translate-x-3 scale-75'>Card Number</span>
                                </label>
                            </div>
                            <div className='grid sm:grid-cols-2 gap-8 justify-between items-center py-4'>
                                <div>
                                    <label className='relative'>
                                        <input type="text" className='h-12 sm:w-[165px] px-4 border border-[#D9D9D9] outline-none focus:border-[#0BA4DB] focus:text-[#03435F] transition duration-200 bg-transparent' placeholder='MM/YY' />
                                        <span className='text-lg absolute left-0 -top-1 mx-4 text-[#03435F] bg-white transform -translate-y-6 -translate-x-3 scale-75'>Valid Till</span>
                                    </label>
                                </div>
                                <div>
                                    <label className='relative'>
                                        <input type="text" className='h-12 sm:w-[165px] px-4 border border-[#D9D9D9] outline-none focus:border-[#0BA4DB] focus:text-[#03435F] transition duration-200 bg-transparent' placeholder='123' />
                                        <span className='text-lg absolute left-0 -top-1 mx-4 text-[#03435F] bg-white transform -translate-y-6 -translate-x-3 scale-75'>CVV</span>
                                    </label>
                                </div>
                            </div>
                        </form> */}

                        <div className='py-2 flex items-center justify-center mx-auto'>

                            {/* <button onClick={() => {
                                initializePayment(onSuccess, onClose)
                            }}
                                className='bg-[#55A630] text-white rounded-sm py-3 px-[5rem] sm:px-[7.5rem] cursor-pointer'>Pay NGR 20,000</button> */}

                            <button type='submit'
                                className='bg-[#55A630] text-white rounded-sm py-3 px-[5rem] sm:px-[7.5rem] cursor-pointer'>
                                  {loading ?  'Processing...' : <span> Pay NGR {amount} </span> }
                             </button>
                        </div>
                    </form>
                </div>
            </div>
            {successAlert && <TransferSuccess successAlert = {setSuccessAlert} amount={amount} teacherDetail={teacherDetail} setTeacherPaymentToggle={setTeacherPaymentToggle}/>}
   
        </div>
    )
}

export default Payment