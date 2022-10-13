import React from 'react'
import Image  from 'next/dist/client/image'
import { useState } from 'react';
import LINK from 'next/link'
import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
const Navbar = ({key,user, logout}) => {
  const [myaccount, setmyaccount] = useState(false)
  return (
    <>
        <nav className="my-1 shadow-lg sticky top-0 bg-white  z-50 " >
  <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link href={"/"}><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Image
          className="w-150 h-10 "
          src="/logo.png"
          alt=""
          viewbox="0 0 24 24"
          width={200}
          height={40}

        />
      </a></Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base space-x-8 justify-center font-bold">
        <LINK href="/"><a className="  hover:text-indigo-600 cursor-pointer ">Home</a></LINK>
        <LINK href="/blogs"><a className=" hover:text-indigo-600 cursor-pointer ">Blog</a></LINK>
        <LINK href="/workshop"><a className=" hover:text-indigo-600 cursor-pointer ">Workshop</a></LINK>
        <LINK href="/courses"><a className=" hover:text-indigo-600 cursor-pointer ">Courses</a></LINK>
        <LINK href="/about"><a className=" hover:text-indigo-600 cursor-pointer ">About</a></LINK>
        <LINK href="/contact"><a className=" hover:text-indigo-600 cursor-pointer ">ContactUs</a></LINK>
      { myaccount && <div onMouseOver={()=>setmyaccount(true)} onMouseLeave={()=>setmyaccount(false)} className='absolute right-2 bg-blue-500 rounded-md p-2 top-12 px-5 '>
         
          <ul className='text-base'>
            <li className=' hover:text-white  cursor-pointer'>My Account</li>
            <li className=' hover:text-white  cursor-pointer'>Cources</li>
            <li onClick={logout} className=' hover:text-white cursor-pointer '>Logout</li>
          </ul>
        </div>}
        {user.value && <FaUserCircle onMouseOver={()=>setmyaccount(true)} onMouseLeave={()=>setmyaccount(false)} className='text-2xl' />}
        { !user.value && <LINK href="/login"><button className="bg-indigo-500 hover:bg-indigo-600  py-1 px-2 rounded-md border border-black-600">
          Login
        </button></LINK>}
        <ul></ul>
       
      </nav>
     
    </div>
  </header>
</nav>


    </>
  )
}

export default Navbar