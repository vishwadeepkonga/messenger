import React from 'react'
import Authform from './components/Authform'
const Auth = () => {
  return (
    <div className='        flex 
    flex-col 
    justify-center 
    align-middle items-center
    py-12 
    sm:px-6 
    lg:px-8
     h-full
    bg-gray-100
   
'>
     <div className='flex flex-col justify-center items-center  '>
        <img src='./logo.png' height={50} width={50} className='mx-auto ' alt='logo'/>
        <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
            Sign in to your account
        </h2>

        </div> 
        <Authform/>

    </div>
  )
}

export default Auth
