import Image from 'next/image'
import aboutbg from '@/app/asset/aboutbg.webp'
import Link from 'next/link'
import { MdNavigateNext } from "react-icons/md";
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import blog5 from '@/app/asset/blog5.webp'
import blog6 from '@/app/asset/blog6.webp'
import blog7 from '@/app/asset/blog7.webp'
import blog8 from '@/app/asset/blog8.webp'
import { BiSolidMessageRounded } from "react-icons/bi";

const page = () => {
  return (
    <div>
        <main className='mb-[162px]'>
            <Image className='absolute w-full h-[570px]' alt='img' width={2000} height={1000} src={aboutbg} />
            <div className='flex flex-col relative pt-80 pl-40'>
                <main className='flex gap-3  text-gray-400'>
                    <Link className='flex' href="#">HOME <span className='font-bold mt-1 text-lg text-green-300'><MdNavigateNext /></span></Link>
                    <span className='flex'>BLOG<span className='mt-1 text-lg'><MdNavigateNext /></span></span>
                </main>
                <h2 className='text-5xl mt-4'>Blog</h2>
            </div>
        </main>

        <Blog />

        <main className='grid grid-cols-4 gap-10 mx-32 mb-16'>
                <div className='flex flex-col'>
                    <Image className='h-[270px]' alt='img' height={300} width={270} src={blog5} />
                    <div className='p-3 flex gap-2 my-2 pl-1 text-gray-400'>
                        <a href='#'>JUNE 01,2020 ADMIN </a><a className='pt-2' href='#'><BiSolidMessageRounded /></a><a href='#'>3</a>
                    </div>
                    <a href='#' className='hover:text-green-400 text-xl pl-1 pr-7'>Make Peace With Your Broken Pieces</a>
                </div>

                <div className='flex flex-col'>
                    <Image className='h-[270px] ' alt='img' height={370} width={270} src={blog6} />
                    <div className='p-3 pl-1 flex gap-2 my-2 text-gray-400'>
                        <a href='#'>JUNE 01,2020 ADMIN </a><a className='pt-2' href='#'><BiSolidMessageRounded /></a><a href='#'>3</a>
                    </div>
                    <a href='#' className='hover:text-green-400 text-xl pl-1 pr-7'>Make Peace With Your Broken Pieces</a>
                </div>

                <div className='flex flex-col '>
                    <Image className='h-[270px]' alt='img' height={250} width={270} src={blog7} />
                    <div className='p-3 pl-1 flex gap-2 my-2 text-gray-400'>
                        <a href='#'>JUNE 01,2020 ADMIN </a><a className='pt-2' href='#'><BiSolidMessageRounded /></a><a href='#'>3</a>
                    </div>
                    <a href='#' className='hover:text-green-400 text-xl pl-1 pr-7'>Make Peace With Your Broken Pieces</a>
                </div>

                <div className='flex flex-col'>
                    <Image className='h-[270px]' alt='img' height={300} width={270} src={blog8} />
                    <div className='p-3 flex gap-2 my-2 pl-1 text-gray-400'>
                        <a href='#'>JUNE 01,2020 ADMIN </a><a className='pt-2' href='#'><BiSolidMessageRounded /></a><a href='#'>3</a>
                    </div>
                    <a href='#' className='hover:text-green-400 text-xl pl-1 pr-7'>Make Peace With Your Broken Pieces</a>
                </div>
            </main>

        <div className='flex my-40'></div>

        <Footer />
    </div>
  )
}

export default page