import React from 'react'
import { SiAltiumdesigner } from "react-icons/si";
import { MdOutlineTempleBuddhist } from "react-icons/md";
import { GiSupersonicBullet } from "react-icons/gi";
import { HiOutlineHomeModern } from "react-icons/hi2";




const Second = () => {
    return (
        <div>
            <main className='flex justify-center bg-lime-500 text-center py-20 text-white gap-6'>
                <div className='flex flex-col gap-4'>
                    <i className='flex justify-center text-3xl'><SiAltiumdesigner /></i>
                    <h3 className='text-2xl'>Design Process</h3>
                    <span className='w-56'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</span>
                </div>

                <div className='flex flex-col gap-4'>
                    <i className='flex justify-center text-3xl'><GiSupersonicBullet /></i>
                    <h3 className='text-2xl'>Super Vision</h3>
                    <span className='w-56'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</span>
                </div>

                <div className='flex flex-col gap-4'>
                    <i className='flex justify-center text-3xl'><MdOutlineTempleBuddhist /></i>
                    <h3 className='text-2xl'>Budget Planning</h3>
                    <span className='w-56'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</span>
                </div>

                <div className='flex flex-col gap-4'>
                    <i className='flex justify-center text-3xl'><HiOutlineHomeModern /></i>
                    <h3 className='text-2xl'>Build a Home For You</h3>
                    <span className='w-56'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</span>
                </div>

            </main>
        </div>
    )
}

export default Second