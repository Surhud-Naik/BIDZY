import { useNavigate } from 'react-router-dom';
import React from 'react';
import { assets } from '../assets/assets/assets.js';
import Logo from '../assets/Logo.png';

function ForgotPassword() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-[60px] items-center justify-center min-h-screen bg-gray-50'>
      <div>
        <img src={Logo} alt="Logo" className='w-[300px] transform transition-transform hover:scale-105' />
      </div>
      <div className='w-96 border-2 flex flex-col border-gray-200 rounded-lg px-7 py-10 gap-6 bg-white shadow-lg hover:shadow-xl transition-shadow'>
        <h1 className='text-5xl font-bold text-gray-800'>Reset Password</h1>
        <form className='flex flex-col gap-5 mt-4'>
          <div className='flex flex-col gap-4'>
            <div>
              <p className='text-sm text-gray-600'>Enter your email</p>
              <div className='flex items-center gap-3 w-full px-4 py-3 rounded-lg border border-gray-300 focus-within:border-green-700 focus-within:ring-1 focus-within:ring-green-700 transition-colors'>
                <img src={assets.mail_icon} alt="" className='w-5 h-5' />
                <input 
                  type="email" 
                  placeholder='Email' 
                  className='w-full bg-transparent focus:outline-none' 
                />
              </div>
            </div>

            <div>
              <p className='text-sm text-gray-600'>New Password</p>
              <div className='flex items-center gap-3 w-full px-4 py-3 rounded-lg border border-gray-300 focus-within:border-green-700 focus-within:ring-1 focus-within:ring-green-700 transition-colors'>
                <img src={assets.lock_icon} alt="" className='w-5 h-5' />
                <input 
                  type="password" 
                  placeholder='New Password' 
                  className='w-full bg-transparent focus:outline-none' 
                />
              </div>
            </div>

            <div>
              <p className='text-sm text-gray-600'>Confirm New Password</p>
              <div className='flex items-center gap-3 w-full px-4 py-3 rounded-lg border border-gray-300 focus-within:border-green-700 focus-within:ring-1 focus-within:ring-green-700 transition-colors'>
                <img src={assets.lock_icon} alt="" className='w-5 h-5' />
                <input 
                  type="password" 
                  placeholder='Confirm New Password' 
                  className='w-full bg-transparent focus:outline-none' 
                />
              </div>
            </div>
          </div>

          <button className='bg-green-700 text-white w-full p-3 rounded-lg hover:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2'>
            Reset Password
          </button>

          <p className='text-center text-sm text-gray-600'>
            Remember your password? <span onClick={() => navigate('/login')} className='text-green-700 underline cursor-pointer hover:text-green-800 transition-colors'>Sign in</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;