import React from 'react'
import logo from '../assets/Images/Vector.png'
import { AiOutlineClose } from 'react-icons/ai'
import { usePaystackPayment } from 'react-paystack';
import axios from '../api/axios'
import { useState } from 'react';

const Payment = ({ setToggleModal, studentDetails, setStudentDetails }) => {
const [amount, setAmount] = useState("")
const [loading, setLoading] = useState(false)
const [ref, setRef] = useState("")
const [togglePay, setTogglePay] = useState(true)
const[toggleConfirm, setToggleConfirm] = useState(false)

    function handleClick() {
        // setToggleModal(false)
        setTogglePay(false)
        setToggleConfirm(true)
    }
    function paymentDone(){
    setToggleConfirm(false)
        setToggleModal(false)
    }
    const config = {
        reference: (new Date()).getTime().toString(),
        email: "user@example.com",
        amount: 20000,
        publicKey: 'sk_test_4eca7780fd55f4831d30f722d67e03ee49e8278d',
    };

    const onSuccess = (reference) => {
        console.log(reference);
    };

    const onClose = () => {
        console.log('closed')
    }

    const initializePayment = usePaystackPayment(config);

    const paymentDetails = {
        amount:setAmount
    }

    const handleAddMoney = async (e) =>{
        e.preventDefault()
        console.log(amount)
        const token = localStorage.getItem("token"); 
        console.log(token)
        const tokensplit = token.split(' ')[1]
        console.log(tokensplit)
    try {
        setLoading(true)
        // let res = await axios.post(`http://localhost:8080/api/v1/student/wallet-fund?amount=${amount}`, {
            let res = await axios.post(`http://localhost:8080/api/v1/student/test?amount=${amount}`, paymentDetails, {headers:{
                Authorization:token
              }})
            console.log(res)
            if(res.data.message ==='Authorization URL created'){
                console.log('we got here')
                setRef(res.data.data.reference)
                let link  = res.data.data.authorization_url
                window.open(link, 'blank')
                console.log('tab opened')
                setStudentDetails({})
                handleClick()
            }
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const confirmPay= async (e) =>{
        e.preventDefault()
        console.log(amount)
        const token = localStorage.getItem("token");
        console.log(token)
        const tokensplit = token.split(' ')[1]
        console.log(tokensplit)
        try {
            setLoading(true)
            console.log(ref)
            let res = await axios.post(`http://localhost:8080/api/v1/student/test/${ref}`, {headers:{
                Authorization:token
              }})
            console.log(res)
            if(res.data.data.gateway_response === 'Successful'){
                console.log('confirmed')
            setStudentDetails({})
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
                    <AiOutlineClose size={18} onClick={handleClick} className='absolute right-5 top-5 cursor-pointer' />
                    <hr />
                    {togglePay &&
                    <form onSubmit={handleAddMoney} className='px-6 lg:px-9'>
                        <div className='flex flex-col items-center justify-center py-2'>
                            <p className='text-[#979797]'>Enter Amount</p>
                            {/* <h1 className='text-4xl text-[#03435F] font-bold'>20,000</h1> */}
                            <input type="number"  value={amount} onChange={(e)=>setAmount(e.target.value)} className='border text-4xl text-[#03435F] font-bold'/>
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
                    </form>}
                    {toggleConfirm &&
                    <form onSubmit={confirmPay} className='px-6 lg:px-9'>
                        <button type='submit'
                                className='bg-[#55A630] text-white rounded-sm py-3 px-[5rem] sm:px-[7.5rem] cursor-pointer'>
                            {loading ?  'Processing...' : <span> Confirm Payment</span> }
                        </button>
                    </form>}
                </div>
            </div>
        </div>
    )
}

export default Payment