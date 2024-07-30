import Image from 'next/image'
import React from 'react'
import bg1 from '@/app/asset/bg1.webp'
import { TbPlayerPlay } from "react-icons/tb";

const First = () => {
  return (
    <div className="bg-fixed flex mt-1 items-center bg-cover bg-center h-screen w-full" style={{backgroundImage: `url("${bg1.src}")`}}>
      <div className='absolute'>

    <div className="bg-fixed flex  mt-1  h-20 bg-center" style={{backgroundImage: `url("${bg1.src}")`}}></div>
      <main className='flex relative flex-col gap-5 px-5  md:pl-40'>
        <h2 className='text-4xl md:text-5xl md:pt-0 pt-5 w-40 leading-tight'>
          Modern
          Innovative
          Architecture
        </h2>
        <span className='md:w-96 w-full text-gray-400'>From as low as $20 A small river named Duden flows by their place and supplies it with the necessary regelialia.</span>
        <div>
          <button className='bg-green-600 px-3 py-3 text-white rounded-md'>Explore Projects</button>
          <span className='md:text-xl text-lg'>
            <button className='bg-green-600 rounded-full p-3 text-white md:text-xl text-lg mt-1 mr-1 md:mr-2 ml-3'><TbPlayerPlay />
            </button>
            Watch our video
          </span>
        </div>
      </main>
      </div>

    </div>
  );
};

export default First