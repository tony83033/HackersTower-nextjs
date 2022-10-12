import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'
const Sign = () => {
  const router = useRouter();
  const checkLogin = ()=>{
    
    if(localStorage.getItem('token')){
        router.push('/');
    }
  }
  useEffect(() => {
    checkLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const [email, setemail] = useState('')
  const [name, setname] = useState('')
  const [password, setpassword] = useState('')
  const onChangeHandler = (e)=>{
    if(e.target.name=='name'){
      setname(e.target.value)
    } else if(e.target.name == 'email'){
      setemail(e.target.value)
    } else if(e.target.name == 'password'){
      setpassword(e.target.value)
    }
  }


  const handleSubmit = async (e)=>{
    //e.preventDefault()
   // e.preventDefault()
    e.preventDefault()
   // e.preventDefault()

    let data = {name,email,password}

  let res =  await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/usersign`, {
    method: 'POST', // or 'PUT'
    headers: {
    'Content-Type': 'application/json',
},
body: JSON.stringify(data),
}) 

let response = await res.json();
console.log(response)
setname('')
setemail('')
setpassword('')


  toast.success('Your account has been created successfully', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  }
  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900">
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

    <a
      href="#"
      className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
    >
      {/* <Image
        className="w-8 h-8 mr-2"
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
        alt="logo"
      /> */}
      HackersTower
    </a>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create an account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" method='POST'>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              onChange={onChangeHandler}
              value={email}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@company.com"
              required=""
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Full Name
            </label>
            <input
              type="text"
              name="name"
              onChange={onChangeHandler}
              value={name}
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Full Name"
              required=""
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={onChangeHandler}
              value={password}
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
         <button type='submit' className='w-full mx-auto bg-indigo-500 font-bold hover:bg-indigo-600 py-2 text-white  rounded-md '>Sign</button>
         
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Login to you account{" "}
            <Link href="/login"><a
              
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </a></Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Sign