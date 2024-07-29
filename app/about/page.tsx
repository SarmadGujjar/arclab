import Image from 'next/image'
import aboutbg from '@/app/asset/aboutbg.webp'
import Link from 'next/link'
import { MdNavigateNext } from "react-icons/md";
import About from '../components/About';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';


const Page = () => {
  return (
    <div>
        <main className='mb-[162px]'>
            <Image className='absolute w-full h-[570px]' alt='img' width={2000} height={1000} src={aboutbg} />
            <div className='flex flex-col relative pt-80 pl-40'>
                <main className='flex gap-3  text-gray-400'>
                    <Link className='flex' href="#">HOME <span className='font-bold mt-1 text-lg text-green-300'><MdNavigateNext /></span></Link>
                    <span className='flex'>ABOUT US <span className='mt-1 text-lg'><MdNavigateNext /></span></span>
                </main>
                <h2 className='text-5xl mt-4'>About Us</h2>
            </div>
        </main>
        <About />
        {/*  */}

        {/*  */}

        <Pricing />
            <div className='flex my-10'></div>
        <Footer />
    </div>
  )
}

export default Page