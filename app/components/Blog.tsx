import Image from 'next/image'
import React from 'react'
import blog1 from '@/app/asset/blog1.webp'
import blog2 from '@/app/asset/blog2.webp'
import blog3 from '@/app/asset/blog3.webp'
import blog4 from '@/app/asset/blog4.webp'
import { BiSolidMessageRounded } from "react-icons/bi";


const Blog = () => {
    return (
        <div className='flex flex-col items-center'>
            <main className='text-green-400 pt-40'>BLOG</main>
            <h2 className='flex text-6xl mt-5 mb-16'>Recent Blog</h2>
            <main className='grid grid-cols-4 gap-10 mx-32 mb-16'>
                <div className='flex flex-col'>
                    <Image className='h-[270px]' alt='img' height={300} width={270} src={blog1} />
                    <div className='p-3 flex gap-2 my-2 pl-1 text-gray-400'>
                        <a href='#'>JUNE 01,2020 ADMIN </a><a className='pt-2' href='#'><BiSolidMessageRounded /></a><a href='#'>3</a>
                    </div>
                    <a href='#' className='hover:text-green-400 text-xl pl-1 pr-7'>Make Peace With Your Broken Pieces</a>
                </div>

                <div className='flex flex-col'>
                    <Image className='h-[270px] ' alt='img' height={370} width={270} src={blog2} />
                    <div className='p-3 pl-1 flex gap-2 my-2 text-gray-400'>
                        <a href='#'>JUNE 01,2020 ADMIN </a><a className='pt-2' href='#'><BiSolidMessageRounded /></a><a href='#'>3</a>
                    </div>
                    <a href='#' className='hover:text-green-400 text-xl pl-1 pr-7'>Make Peace With Your Broken Pieces</a>
                </div>

                <div className='flex flex-col '>
                    <Image className='h-[270px]' alt='img' height={250} width={270} src={blog3} />
                    <div className='p-3 pl-1 flex gap-2 my-2 text-gray-400'>
                        <a href='#'>JUNE 01,2020 ADMIN </a><a className='pt-2' href='#'><BiSolidMessageRounded /></a><a href='#'>3</a>
                    </div>
                    <a href='#' className='hover:text-green-400 text-xl pl-1 pr-7'>Make Peace With Your Broken Pieces</a>
                </div>

                <div className='flex flex-col'>
                    <Image className='h-[270px]' alt='img' height={300} width={270} src={blog4} />
                    <div className='p-3 flex gap-2 my-2 pl-1 text-gray-400'>
                        <a href='#'>JUNE 01,2020 ADMIN </a><a className='pt-2' href='#'><BiSolidMessageRounded /></a><a href='#'>3</a>
                    </div>
                    <a href='#' className='hover:text-green-400 text-xl pl-1 pr-7'>Make Peace With Your Broken Pieces</a>
                </div>
            </main>
        </div>
    )
}

export default Blog