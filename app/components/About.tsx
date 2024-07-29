import Image from 'next/image'
import React from 'react'
import about from '@/app/asset/about.webp'
import about2 from '@/app/asset/about2.webp'

const About = () => {
    return (
        <div className='flex mx-10 '>
            <main className='flex flex-col pt-20 ml-40 mr-16 gap-5 text-gray-500 w-[440px]'>
                <h2 className='flex text-black text-6xl'>ArchLab</h2>
                <p>A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic country,
                    in which roasted parts of sentences fly into your mouth.
                </p>
                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from
                    it would have been rewritten a thousand times and everything that was left from its origin
                    would be the word "and" and the Little Blind Text should turn around and return to its own,
                    safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers
                    ambushed her, made her drunk with Longe and Parole and dragged her into their
                    agency, where they abused her for their.
                </p>
            </main>
            <Image className='h-[600px] w-[290px] mr-8' alt='img' height={1000} width={900} src={about} />
            <div>
                <Image className='h-[600px] w-[320px] absolute' alt='img' height={1000} width={900} src={about2} />
                <div className='relative flex flex-col text-white px-6 pt-10'>
                    <span>BE PART OF OUR BUSINESS</span>
                    <h2 className='text-3xl font-semibold mt-3'>Request A Quote</h2>
                    <main className='flex flex-col gap-10 pt-6 text-white'>
                    <div className='mt-'>
                        <input className='text-black outline-none bg-transparent w-full border-b-2 border-white' type='text' placeholder='First Name' />
                    </div>

                    <div className=''>
                        <input className='text-black outline-none bg-transparent w-full border-b-2 border-white' type='text' placeholder='Last Name' />
                    </div>

                    <div className=''>
                        <input className='text-black outline-none bg-transparent w-full border-b-2 border-white' type='text' placeholder='Select Your Service' />
                    </div>

                    <div className=''>
                        <input className='text-black outline-none bg-transparent w-full border-b-2 border-white' type='number' placeholder='Phone' />
                    </div>

                    <div className=''>
                        <input className='text-black outline-none bg-transparent w-full border-b-2 border-white' type='text' placeholder='Message' />
                    </div>

                    </main>
                    <div className='flex justify-center mt-6'>
                    <button className='bg-green-400 px-9 py-4 text-white rounded-md'>Request A Quote</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About