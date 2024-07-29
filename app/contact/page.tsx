import Image from 'next/image'
import React from 'react'
import aboutbg from '@/app/asset/aboutbg.webp'
import Link from 'next/link'
import { MdNavigateNext } from "react-icons/md";

const page = () => {
  return (
    <div>
         <main className='mb-[162px]'>
            <Image className='absolute w-full h-[570px]' alt='img' width={2000} height={1000} src={aboutbg} />
            <div className='flex flex-col relative pt-80 pl-40'>
                <main className='flex gap-3  text-gray-400'>
                    <Link className='flex' href="#">HOME <span className='font-bold mt-1 text-lg text-green-300'><MdNavigateNext /></span></Link>
                    <span className='flex'>CONTACT US <span className='mt-1 text-lg'><MdNavigateNext /></span></span>
                </main>
                <h2 className='text-5xl mt-4'>Contact Us</h2>
            </div>
        </main>
    </div>
  )
}

export default page