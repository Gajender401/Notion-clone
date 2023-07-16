'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa'
import { PiClockCountdownBold } from "react-icons/pi";
import { IoAddCircleSharp } from 'react-icons/io5'
import { AiFillSetting } from 'react-icons/ai'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Head from 'next/head';
import { useUserAuth } from '@/src/context/UserAuthContext';


const Sidebar: React.FC = () => {

  const [pageTitle, setPageTitle] = useState('Notion');
  const { user, logOut } = useUserAuth()
  const [isBoxVisible, setBoxVisible] = useState(false);


  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);


  return (
    <div className="flex flex-col bg-FBFBFA w-64 h-vh text-[#8c8c8b] font-medium text-sm ">
      <div onClick={() => setBoxVisible(!isBoxVisible)} className="p-2 flex items-center cursor-pointer">
        <Image className='rounded m-2' src={user.photoURL} width={20} height={20} alt='user' />
        <h1 className=" text-black font-semibold  ">
          {user.displayName}
        </h1>
        {isBoxVisible &&
          <div className="w-60 h-48 absolute top-12 left-5 bg-white rounded-md p-3 "
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", border: "solid 1px #e8e8e8" }}
          >
            <div className='text-[10px] ' >
              {user.email}
            </div>
            <div onClick={()=>logOut()} className='text-[10px] ' >
              logout
            </div>
          </div>}
      </div>
      <nav className="flex-1">
        <ul className="p-1">
          <li >
            <a
              href="#"
              className="flex items-center px-4 py-1 rounded-md hover:bg-gray-200"
            >
              <FaSearch className='mb-1 mr-3' />
              Search
            </a>
          </li>
          <li >
            <a
              href="#"
              className="flex items-center px-4 py-1 rounded-md hover:bg-gray-200"
            >
              <PiClockCountdownBold size={20} className=' mr-2' />
              Updates
            </a>
          </li>
          <li >
            <a
              href="#"
              className="flex items-center px-4 py-1 rounded-md hover:bg-gray-200"
            >
              <AiFillSetting size={20} className='mb-0.5 mr-2' />
              Settings
            </a>
          </li>
          <li >
            <a
              href="#"
              className="flex items-center px-4 py-1 rounded-md hover:bg-gray-200"
            >
              <IoAddCircleSharp size={20} className='mb-0.5 mr-2' />
              New page
            </a>
          </li>
        </ul>
      </nav>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <nav className="flex-1 mt-4">
        <ul className="p-1">
          <li >
            <a
              href="#"
              className="flex items-center px-4 py-1 rounded-md hover:bg-gray-200"
            >
              <MdOutlineKeyboardArrowRight size={20} />
              <Image width={20} height={20} className='mr-1' src='/quick.svg' alt='icon' />
              Quick Note
            </a>
          </li>

        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
