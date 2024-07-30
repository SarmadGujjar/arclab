import Image from 'next/image'
import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import client1 from '@/app/asset/client1.webp'


const Testominal = () => {
  return (
    <div className='bg-gray-100 flex flex-col md:mt-10 items-center mt-32'>
         <main className='flex pt-10 md:pt-20 text-green-400'>TESTOMINAL</main>
         <h2 className='flex text-3xl md:text-6xl mt-5 mb-3 md:mb-10'>Happy Clients</h2>
         <main className='mb-20 md:grid md:grid-cols-3 flex fleex-col px-2 md:px-0 justify-center mt-12 gap-9'>
          <div className='flex flex-col bg-white p-3 shadow-lg pl-4  w-[330px]'>
            <i className='text-green-400  text-2xl'><RiDoubleQuotesL /></i>
            <span className='text-gray-400 mb-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
            live the blind texts.</span>
            <div className='flex gap-3 md:mb-5 mb-2'>
              <Image className='rounded-full' alt='img' width={75} height={70} src={client1}/>
              <main className='flex flex-col gap-2'>
                <span className='text-2xl mt-2'>Roger Scott</span>
                <span className='text-gray-400 flex'>Marketing Manager</span>
              </main>
            </div>
          </div>

          <div className='md:flex hidden flex-col bg-white  p-3 shadow-lg pl-4 w-[330px]'>
            <i className='text-green-400  text-2xl'><RiDoubleQuotesL /></i>
            <span className='text-gray-400 mb-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
            live the blind texts.</span>
            <div className='flex gap-3 mb-5'>
              <Image className='rounded-full' alt='img' width={75} height={70} src={client1}/>
              <main className='flex flex-col gap-2'>
                <span className='text-2xl mt-2'>Roger Scott</span>
                <span className='text-gray-400 flex'>Marketing Manager</span>
              </main>
            </div>
          </div>

          <div className='md:flex hidden flex-col bg-white p-3 shadow-lg pl-4 w-[330px]'>
            <i className='text-green-400  text-2xl'><RiDoubleQuotesL /></i>
            <span className='text-gray-400 mb-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
            live the blind texts.</span>
            <div className='flex gap-3 mb-5'>
              <Image className='rounded-full' alt='img' width={75} height={70} src={client1}/>
              <main className='flex flex-col gap-2'>
                <span className='text-2xl mt-2'>Roger Scott</span>
                <span className='text-gray-400 flex'>Marketing Manager</span>
              </main>
            </div>
          </div>
         </main>
    </div>
  )
}

export default Testominal