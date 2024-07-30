import Image from 'next/image'
import React from 'react'
import prj1 from '@/app/asset/prj1.webp'
import prj2 from '@/app/asset/prj2.webp'
import prj3 from '@/app/asset/prj3.webp'
import prj4 from '@/app/asset/prj4.webp'
import prj5 from '@/app/asset/prj5.webp'

const Project = () => {
    return (
        <main>
            <div className='md:flex hidden flex-col items-center mt-32 '>
                <main className='text-green-400'>PROJECTS</main>
                <h2 className='flex text-3xl md:text-6xl mt-5 mb-10'>Our Unique Latest Projects</h2>
                <main className='flex gap-10 mt-10'>
                    <Image className='h-[630px]' alt='img' height={800} width={500} src={prj1} />
                    <div className='flex flex-col pt-40'>
                        <span>EXTERIOR {12 / 7 / 2020}</span>
                        <a className='font-semibold text-5xl mt-6' href='*'>Geometric Building</a>
                        <span className='my-8 w-[550px]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                            live the blind texts. Separated they live in Bookmarksgrove.</span>
                        <a href='#' className='text-green-300'>VIEW PORTFOLIO</a>
                    </div>
                </main>

                <main className='flex gap-10 mt-20'>
                    <div className='flex flex-col pt-40'>
                        <span>EXTERIOR {12 / 7 / 2020}</span>
                        <a className='font-semibold text-5xl mt-6' href='*'>Twin Office</a>
                        <span className='my-8 w-[550px]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                            live the blind texts. Separated they live in Bookmarksgrove.</span>
                        <a href='#' className='text-green-300'>VIEW PORTFOLIO</a>
                    </div>
                    <Image className='h-[630px]' alt='img' height={800} width={500} src={prj2} />
                </main>

                <main className='flex gap-10 mt-20'>
                    <Image className='h-[630px]' alt='img' height={800} width={500} src={prj3} />
                    <div className='flex flex-col pt-40'>
                        <span>EXTERIOR {12 / 7 / 2020}</span>
                        <a className='font-semibold text-5xl mt-6' href='*'>Cultural Complex Centre</a>
                        <span className='my-8 w-[550px]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                            live the blind texts. Separated they live in Bookmarksgrove.</span>
                        <a href='#' className='text-green-300'>VIEW PORTFOLIO</a>
                    </div>
                </main>

                <main className='flex gap-10 mt-20'>
                    <div className='flex flex-col pt-40'>
                        <span>EXTERIOR {12 / 7 / 2020}</span>
                        <a className='font-semibold text-5xl mt-6' href='*'>Twin Office</a>
                        <span className='my-8 w-[550px]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                            live the blind texts. Separated they live in Bookmarksgrove.</span>
                        <a href='#' className='text-green-300'>VIEW PORTFOLIO</a>
                    </div>
                    <Image className='h-[630px]' alt='img' height={800} width={500} src={prj5} />
                </main>

                <main className='flex gap-10 mt-20'>
                    <Image className='h-[630px]' alt='img' height={800} width={500} src={prj4} />
                    <div className='flex flex-col pt-40'>
                        <span>EXTERIOR {12 / 7 / 2020}</span>
                        <a className='font-semibold text-5xl mt-6' href='*'>Cultural Complex Centre</a>
                        <span className='my-8 w-[550px]'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                            live the blind texts. Separated they live in Bookmarksgrove.</span>
                        <a href='#' className='text-green-300'>VIEW PORTFOLIO</a>
                    </div>
                </main>
            </div>

            {/* Mobile */}


            <div className='md:hidden flex flex-col mt-20'>
                <main className='flex flex-col  gap-7 mt-10 px-2'>
                    <Image className='h-[630px] w-full pt-9' alt='img' height={800} width={500} src={prj1} />
                    <div className='flex flex-col pt-4 px-5'>
                        <span>EXTERIOR {12 / 7 / 2020}</span>
                        <a className='font-semibold text-3xl mt-6' href='*'>Geometric Building</a>
                        <span className='my-6 w-full'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                            live the blind texts. Separated they live in Bookmarksgrove.</span>
                        <a href='#' className='text-green-300'>VIEW PORTFOLIO</a>
                    </div>
                </main>

                <main className='flex flex-col gap-7 mt-20 px-2' >
                    <Image className='h-[630px] w-full' alt='img' height={800} width={500} src={prj2} />
                    <div className='flex flex-col pt-4 px-5'>
                        <span>EXTERIOR {12 / 7 / 2020}</span>
                        <a className='font-semibold text-3xl mt-6' href='*'>Twin Office</a>
                        <span className='my-6 w-full'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                            live the blind texts. Separated they live in Bookmarksgrove.</span>
                        <a href='#' className='text-green-300'>VIEW PORTFOLIO</a>
                    </div>
                </main>

                <main className='flex flex-col gap-7  mt-20 px-2'>
                    <Image className='h-[630px] w-full' alt='img' height={800} width={500} src={prj3} />
                    <div className='flex flex-col pt-4 px-5'>
                        <span>EXTERIOR {12 / 7 / 2020}</span>
                        <a className='font-semibold text-3xl mt-6' href='*'>Cultural Complex Centre</a>
                        <span className='my-6 w-full'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                            live the blind texts. Separated they live in Bookmarksgrove.</span>
                        <a href='#' className='text-green-300'>VIEW PORTFOLIO</a>
                    </div>
                </main>

                <main className='flex flex-col gap-10 mt-20 px-2'>
                    <Image className='h-[630px] w-full' alt='img' height={800} width={500} src={prj5} />
                    <div className='flex flex-col pt-4 px-5'>
                        <span>EXTERIOR {12 / 7 / 2020}</span>
                        <a className='font-semibold text-3xl mt-6' href='*'>Twin Office</a>
                        <span className='my-6 w-full'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                            live the blind texts. Separated they live in Bookmarksgrove.</span>
                        <a href='#' className='text-green-300'>VIEW PORTFOLIO</a>
                    </div>
                </main>

                <main className='flex flex-col gap-10 mt-20 px-2'>
                    <Image className='h-[630px] w-full' alt='img' height={800} width={500} src={prj4} />
                    <div className='flex flex-col pt-4 px-5'>
                        <span>EXTERIOR {12 / 7 / 2020}</span>
                        <a className='font-semibold text-3xl mt-6' href='*'>Cultural Complex Centre</a>
                        <span className='my-6 w-full'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                            live the blind texts. Separated they live in Bookmarksgrove.</span>
                        <a href='#' className='text-green-300'>VIEW PORTFOLIO</a>
                    </div>
                </main>
            </div>

        </main>
    )
}
export default Project