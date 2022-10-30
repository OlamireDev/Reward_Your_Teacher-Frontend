import React from 'react'
import account from '../assets/Images/layer 5.png'
import settings from '../assets/Images/layer 11.png'
import help from '../assets/Images/help.png'
import logout from '../assets/Images/arrow.png'

const SettingsModal = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-[#f5f5f5]'>
        <div className='py-4 pl-8 pr-20 bg-[#ffffff] shadow-xl max-w-[350px] sm:max-w-[450px] lg:max-w-[500px] m-auto'>
            <div className='flex flex-col'>
                <div className='py-4'>
                    <div className='flex gap-8 items-center py-2'>
                        <img src={account} alt="" />
                        <p className='text-[#21334F] text-lg'>Account</p>
                    </div>
                    <div className='flex gap-8 items-center py-2'>
                        <img src={settings} alt="" />
                        <p className='text-[#21334F] text-lg'>Settings</p>
                    </div>
                    <div className='flex gap-8 items-center py-2'>
                        <img src={help} alt="" />
                        <p className='text-[#21334F] text-lg'>Help Center</p>
                    </div>
                    <div className='flex gap-8 items-center py-2'>
                        <img src={logout} alt="" />
                        <p className='text-[#21334F] text-lg'>Logout</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SettingsModal