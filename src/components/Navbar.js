import React from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {BsYoutube} from "react-icons/bs"
import {AiOutlineSearch} from "react-icons/ai"
import {FaMicrophone} from "react-icons/fa";
import {RiVideoAddLine} from "react-icons/ri"
import {BsBell} from "react-icons/bs"


export default function Home() {
  return (
    <div>
        <div className='flex justify-between px-14 h-14 items-center text-white bg-[#212121] opacity-95 sticky'>
            <div className='flex gap-8 items-center text-2xl'>
                <GiHamburgerMenu/>
            <div className='flex gap-2 items-center justify-center'>
                <BsYoutube className='text-3xl text-red-600'/>
                <span className='text-2xl font-bold'>Youtube</span>
            </div>
        </div>
              <div className='flex items-center justify-center gap-5'>
                <form >
                    <div className='flex items-center bg-zinc-900 h-10 px-4 pr-0 rounded-3xl'>

                      <div className='flex gap-5 item-center pr-5'>

                        <input type="text" placeholder='Search' className='w-96  bg-zinc-900 focus:outline-none border-none' />

                        <button className='h-10 w-16 rounded-r-3xl flex items-center justify-center bg-zinc-800 focus:outline-none border-none'>
                          <AiOutlineSearch className="text-xl " />
                        </button>
                      </div>
                    </div>
                </form>

                <div className='text-xl p-3 bg-zinc-900 rounded-full'>
                    <FaMicrophone/>
                </div>
           </div>
                <div className='flex gap-8 items-center text-xl'>
                    <RiVideoAddLine/>
                    <div className='relative'>
                        <BsBell/>
                        <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>9+</span>
                    </div>
                    <button>login</button>
                </div>
              
            </div>
       
    </div>
  );
}
