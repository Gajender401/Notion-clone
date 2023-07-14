'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa'
import { PiClockCountdownBold } from "react-icons/pi";
import { IoAddCircleSharp } from 'react-icons/io5'
import { AiFillSetting } from 'react-icons/ai'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Head from 'next/head';


const Sidebar: React.FC = () => {

  const [pageTitle, setPageTitle] = useState('Notion');

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);


  return (
    <div className="flex flex-col bg-FBFBFA w-64 h-vh text-[#8c8c8b] font-medium text-sm ">
      <div className="p-2">
        <h1 className="text-xl ">User</h1>
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
