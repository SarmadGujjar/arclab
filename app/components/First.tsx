import Image from 'next/image'
import React from 'react'
import bg1 from '@/app/asset/bg1.webp'
import { TbPlayerPlay } from "react-icons/tb";

const First = () => {
  return (
    <div className="bg-fixed flex  mt-1  items-center bg-cover bg-center h-screen w-full" style={{backgroundImage: `url("${bg1.src}")`}}>
      {/* <Image className='h-screen bg-fixed w-full' alt='bgimg' height={1000} width={1500} src={bg1} /> */}
      <main className='flex flex-col gap-5 pl-40'>
        <h2 className='text-5xl w-40 leading-tight'>
          Modern
          Innovative
          Architecture
        </h2>
        <span className='w-96 text-gray-400'>From as low as $20 A small river named Duden flows by their place and supplies it with the necessary regelialia.</span>
        <div>
          <button className='bg-green-600 px-3 py-3 text-white rounded-md'>Explore Projects</button>
          <span className='text-xl'>
            <button className='bg-green-600 rounded-full p-3 text-white text-xl mt-1 mr-2 ml-3'><TbPlayerPlay />
            </button>
            Watch our video
          </span>
        </div>
      </main>
    </div>
  )
}

export default First