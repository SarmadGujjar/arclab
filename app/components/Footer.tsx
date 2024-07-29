import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaMapLocation } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";



const Footer = () => {
    return (
        <div className='bg-black text-white mt-20'>
            <main className='flex mx-40 justify-between pt-32'>
                <div className="gap-10 flex flex-col">
                    <h2 className='text-xl font-semibold text-white'>ArchLab.</h2>
                    <span className="w-48 flex text-gray-400">Far far away, behind the word mountains, far from the countries.</span>
                    <span className="flex gap-6 text-gray-400 text-2xl"> <FaFacebook />
                        <AiFillTwitterCircle />
                        <FaSquareInstagram /></span>
                </div>
                <div className='flex flex-col gap-3 text-gray-400'>
                    <h2 className='text-xl font-semibold text-white mb-7'>Community</h2>
                    <span className="flex"><main className="text-xl font-bold pt-1"><MdNavigateNext /></main>Projects</span>
                    <span className="flex"><main className="text-xl font-bold pt-1"><MdNavigateNext /></main>Team</span>
                    <span className="flex"><main className="text-xl font-bold pt-1"><MdNavigateNext /></main>Reviews</span>
                    <span className="flex"><main className="text-xl font-bold pt-1"><MdNavigateNext /></main>FAQs</span>
                </div>

                <div className='flex flex-col gap-3 text-gray-400'>
                    <h2 className='text-xl font-semibold text-white mb-7'>About Us</h2>
                    <span className="flex"><main className="text-xl font-bold pt-1"><MdNavigateNext /></main>Our Story</span>
                    <span className="flex"><main className="text-xl font-bold pt-1"><MdNavigateNext /></main>Meet the Team</span>
                    <span className="flex"><main className="text-xl font-bold pt-1"><MdNavigateNext /></main>Careers</span>
                </div>

                <div className='flex flex-col gap-3 text-gray-400'>
                    <h2 className='text-xl font-semibold mb-7 text-white'>Company</h2>
                    <span className="flex"><main className="text-xl font-bold pt-1"><MdNavigateNext /></main>About Us</span>
                    <span className="flex"><main className="text-xl font-bold pt-1"><MdNavigateNext /></main>Press</span>
                    <span className="flex"><main className="text-xl font-bold pt-1"><MdNavigateNext /></main>Contact</span>
                    <span className="flex"><main className="text-xl font-bold pt-1"><MdNavigateNext /></main>Careers</span>
                </div>

                <div className='flex flex-col gap-3 text-gray-400'>
                    <h2 className='text-xl font-semibold text-white mb-7'>Have a Question?</h2>
                    <main className='flex gap-3 mb-3'><span className="pt-1 text-gray-400 text-lg"><FaMapLocation /></span><span className='text-gray-400 w-40'>	203 Fake St. Mountain View, San Francisco, California, USA</span></main>
                    <main className='flex gap-3 mb-3'><span className="pt-1 text-gray-400"><FaPhone /></span><span className='text-gray-400'>(+1) 435 3533</span></main>
                    <main className='flex gap-3'> <span className="pt-1 text-gray-400 text-lg"><IoMdMail /></span><span className='text-gray-400'>info@yourdomain.com</span></main>
                </div>

            </main>

            <main className='flex  justify-center mt-20 pb-40'>
                <div className='text-gray-400 flex text-lg'>Copyright © 2024 All rights reserved | This template is made with <span className="mx-2 pt-1"><FaHeart /></span>  by <a className="text-green-400 ml-2" href="#">Colorlib</a> </div>
            </main>
        </div>
    )
}

export default Footer