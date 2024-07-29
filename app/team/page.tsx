import Image from 'next/image'
import aboutbg from '@/app/asset/aboutbg.webp'
import team1 from '@/app/asset/team1.webp'
import team2 from '@/app/asset/team2.webp'
import team3 from '@/app/asset/team3.webp'
import team4 from '@/app/asset/team4.webp'
import team5 from '@/app/asset/team5.webp'
import team6 from '@/app/asset/team6.webp'
import Link from 'next/link'
import { MdNavigateNext } from "react-icons/md";
import Footer from '../components/Footer';

const page = () => {
  return (
    <div>
        <main className='mb-[162px]'>
            <Image className='absolute w-full h-[570px]' alt='img' width={2000} height={1000} src={aboutbg} />
            <div className='flex flex-col relative pt-80 pl-40'>
                <main className='flex gap-3  text-gray-400'>
                    <Link className='flex' href="#">HOME <span className='font-bold mt-1 text-lg text-green-300'><MdNavigateNext /></span></Link>
                    <span className='flex'>ARCHITECT <span className='mt-1 text-lg'><MdNavigateNext /></span></span>
                </main>
                <h2 className='text-5xl mt-4'>Architect</h2>
            </div>
        </main>
<main className='grid grid-cols-4 mx-40 px-32 gap-5'>
        <div className='my-20'>
          <main className='absolute flex flex-col gap-2'>
            <Image alt='img' height={350} width={200} src={team1}/>
            <span className='text-green-400 pl-3'>ARCHITECT</span>
          </main>
            <div className=' relative bottom-0 pt-40 font-bold text-xl hover:text-white pl-3'>JOHN <br /> WILSON</div>
        </div>

        <div className='my-20'>
          <main className='absolute flex flex-col gap-2'>
            <Image alt='img' height={350} width={200} src={team2}/>
            <span className='text-green-400 pl-3'>ARCHITECT</span>
          </main>
          <div className=' relative bottom-0 pt-40 font-bold text-xl hover:text-white pl-3'>JOHN <br /> WILSON</div>
          </div>

        <div className='my-20'>
          <main className='absolute flex flex-col gap-2'>
            <Image alt='img' height={350} width={200} src={team3}/>
            <span className='text-green-400 pl-3'>ARCHITECT</span>
          </main>
          <div className=' relative bottom-0 pt-40 font-bold text-xl hover:text-white pl-3'>JOHN <br /> WILSON</div>
          </div>

        <div className='my-20'>
          <main className='absolute flex flex-col gap-2'>
            <Image alt='img'height={350} width={200} src={team4}/>
            <span className='text-green-400 pl-3'>ARCHITECT</span>
          </main>
          <div className=' relative bottom-0 pt-40 font-bold text-xl hover:text-white pl-3'>JOHN <br /> WILSON</div>
          </div>

        <div className='my-10'>
          <main className='absolute flex flex-col gap-2'>
            <Image alt='img' height={350} width={200}src={team5}/>
            <span className='text-green-400 pl-3'>ARCHITECT</span>
          </main>
          <div className=' relative bottom-0 pt-40 font-bold text-xl hover:text-white pl-3'>JOHN <br /> WILSON</div>
          </div>

        <div className='my-10'>
          <main className='absolute flex flex-col gap-2'>
            <Image alt='img' height={350} width={200} src={team6}/>
            <span className='text-green-400 pl-3'>ARCHITECT</span>
          </main>
          <div className=' relative bottom-0 pt-40 font-bold text-xl hover:text-white pl-3'>JOHN <br /> WILSON</div>
          </div>

          <div className='my-10'>
          <main className='absolute flex flex-col gap-2'>
            <Image alt='img' height={350} width={200} src={team1}/>
            <span className='text-green-400 pl-3'>ARCHITECT</span>
          </main>
          <div className=' relative bottom-0 pt-40 font-bold text-xl hover:text-white pl-3'>JOHN <br /> WILSON</div>
          </div>

          <div className='my-10'>
          <main className='absolute flex flex-col gap-2'>
            <Image alt='img' height={350} width={200} src={team5}/>
            <span className='text-green-400 pl-3'>ARCHITECT</span>
          </main>
          <div className=' relative bottom-0 pt-40 font-bold text-xl hover:text-white pl-3'>JOHN <br /> WILSON</div>
          </div>
</main>

        <div className='my-20 flex'></div>
        <Footer />
    </div>
  )
}

export default page