import { useNavigate } from 'react-router-dom';
import React from 'react';
import Logo from '../assets/Logo.png';

function SignUpPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className='flex flex-col gap-[80px] items-center justify-center min-h-screen bg-gray-50'>
        <div>
          <img src={Logo} alt="Logo" className='w-[300px] transform transition-transform hover:scale-105' />
        </div>
        <div className='w-96 border-2 flex flex-col border-gray-200 rounded-lg px-7 py-10 gap-6 bg-white shadow-lg hover:shadow-xl transition-shadow'>
          <div> 
            <h1 className='text-5xl font-bold text-gray-800'>Sign Up</h1>
          </div>
          <div className='flex flex-col gap-4'>
            <div>
              <p className='text-sm text-gray-600'>Enter your username</p>
              <input 
                type="text" 
                placeholder='Username' 
                className='border w-full border-gray-300 p-3 rounded-lg focus:outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700 transition-colors' 
              />
            </div>
            <div>
              <p className='text-sm text-gray-600'>Enter email</p>
              <input 
                type="email" 
                placeholder='Email' 
                className='border w-full border-gray-300 p-3 rounded-lg focus:outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700 transition-colors' 
              />
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-sm text-gray-600'>Enter password</p>
              <input 
                type="password" 
                placeholder='Password' 
                className='border w-full border-gray-300 p-3 rounded-lg focus:outline-none focus:border-green-700 focus:ring-1 focus:ring-green-700 transition-colors' 
              />
            </div>
          </div>
          <div>
            <button className='bg-green-700 text-white w-full p-3 rounded-lg hover:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-offset-2'>
              Sign Up
            </button>
          </div>
          <div>
            <p className='text-center text-sm text-gray-600'>
              Already have an account? <span onClick={() => navigate('/login')} className='text-green-700 underline cursor-pointer hover:text-green-800 transition-colors'>Sign in</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
