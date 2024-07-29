import Image from 'next/image';
import React from 'react'
import prj2 from '@/app/asset/prj2.webp'
import prj3 from '@/app/asset/prj3.webp'
import { TiTick } from "react-icons/ti";


export const Pricing = () => {
    return (
        <div className='flex flex-col items-center'>
            <main className='text-green-400 pt-20'>PRICING</main>
            <h2 className='flex text-6xl mt-5 mb-10'>Price & Plans</h2>

            <div className='grid grid-cols-3 gap-20'>
                <main className='flex flex-col hover:shadow-2xl shadow-lg'>
                    <Image alt='img' height={300} width={350} src={prj3} />
                    <div className='flex flex-col gap-5 pl-5 pt-5 pb-7'>
                        <span className="flex gap-1"><i className=" bg-green-200 text-white rounded-full p-1"><TiTick /></i>Planning Solution</span>
                        <span className="flex gap-1"><i className=" bg-green-200 text-white rounded-full p-1"><TiTick /></i>10 Construction Drawings</span>
                        <span className="flex gap-1"><i className=" bg-green-200 text-white rounded-full p-1"><TiTick /></i>Selection Materials</span>
                        <span className="flex gap-1"><i className=" bg-green-200 text-white rounded-full p-1"><TiTick /></i>Unlimited Revision</span>
                    </div>
                    <div className='flex justify-between px-5 bg-gray-100 py-2'>
                        <div className='my-2'>
                            <sup className='mr-1 text-lg'>$</sup>
                            <span className='text-3xl font-bold'>78</span>
                            <sub className='ml-1 text-lg'>/mos</sub>
                        </div>
                        <button className='bg-green-600 px-3 py-3 text-white rounded-md'>GET STARTED</button>
                    </div>
                </main>

                <main className='flex flex-col hover:shadow-2xl shadow-lg'>
                    <Image alt='img' height={300} width={350} src={prj2} />
                    <div className='flex flex-col gap-5 pl-5 pt-5 pb-7'>
                        <span className="flex gap-1"><i className=" bg-green-200 text-white rounded-full p-1"><TiTick /></i>Planning Solution</span>
                        <span className="flex gap-1"><i className=" bg-green-200 text-white rounded-full p-1"><TiTick /></i>10 Construction Drawings</span>
                        <span className="flex gap-1"><i className=" bg-green-200 text-white rounded-full p-1"><TiTick /></i>Selection Materials</span>
                        <span className="flex gap-1"><i className=" bg-green-200 text-white rounded-full p-1"><TiTick /></i>Unlimited Revision</span>
                    </div>
                    <div className='flex justify-between px-5 bg-gray-100 py-2'>
                        <div className='my-2'>
                            <sup className='mr-1 text-lg'>$</sup>
                            <span className='text-3xl font-bold'>88</span>
                            <sub className='ml-1 text-lg'>/mos</sub>
                        </div>
                        <button className='bg-green-600 px-3 py-3 text-white rounded-md'>GET STARTED</button>
                    </div>
                </main>

                <main className='flex flex-col hover:shadow-2xl shadow-lg'>
                    <Image alt='img' height={300} width={350} src={prj3} />
                    <div className='flex flex-col gap-5 pl-5 pt-5 pb-7'>
                        <span className="flex gap-1"><i className=" bg-green-200 text-white rounded-full p-1"><TiTick /></i>Planning Solution</span>
                        <span className="flex gap-1"><i className=" bg-green-200 text-white rounded-full p-1"><TiTick /></i>10 Construction Drawings</span>
                        <span className="flex gap-1"><i className=" bg-green-200 text-white rounded-full p-1"><TiTick /></i>Selection Materials</span>
                        <span className="flex gap-1"><i className=" bg-green-200 text-white rounded-full p-1"><TiTick /></i>Unlimited Revision</span>
                    </div>
                    <div className='flex justify-between px-5 bg-gray-100 py-2'>
                        <div className='my-2'>
                            <sup className='mr-1 text-lg'>$</sup>
                            <span className='text-3xl font-bold'>98</span>
                            <sub className='ml-1 text-lg'>/mos</sub>
                        </div>
                        <button className='bg-green-600 px-3 py-3 text-white rounded-md'>GET STARTED</button>
                    </div>
                </main>
                
            </div>
        </div>
    )
};

export default Pricing
