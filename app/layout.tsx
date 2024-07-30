'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";



const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState<any>();
  const path = usePathname()
  return (
    <html lang="en">
      <body className="bg-white">
        <div className="flex absolute md:hidden top-0 left-0 transparent justify-between w-full mt-10 px-10 z-50">
          <span className="flex mr-5 font-bold text-xl">ArcLab.</span>
          <div className="flex font-semibold text-gray-500">
            <button onClick={() => setOpen(true)}>Menu</button>
          </div>
          {open ? (
            <div className="bg-white left-0 top-0">
              <button className="mr-6 flex" onClick={() => setOpen(false)}>Menu</button>
              <ul className="md:flex bg-black text-white p-3 pr-20 pl-10 py-4  gap-8 mr-[500px]">
                <li className={`hover:text-green-400 ${path === '/' && 'text-green-400'}`}> <Link href="/">Home</Link> </li>
                <li className={`hover:text-green-400 ${path === '/about' && 'text-green-400'}`}> <Link href="/about">About</Link> </li>
                <li className={`hover:text-green-400 ${path === '/team' && 'text-green-400'}`}> <Link href="/team">Team</Link> </li>
                <li className={`hover:text-green-400 ${path === '/service' && 'text-green-400'}`}> <Link href="/service">Services</Link> </li>
                <li className={`hover:text-green-400 ${path === '/project' && 'text-green-400'}`}> <Link href="/project">Project</Link> </li>
                <li className={`hover:text-green-400 ${path === '/blog' && 'text-green-400'}`}> <Link href="/blog">Blog</Link> </li>
                <li className={`hover:text-green-400 ${path === '/contact' && 'text-green-400'}`}> <Link href="/contact">Contact</Link> </li>
              </ul>
            </div>
          ) : null}
        </div>

        {/* Screen */}
        <div className="md:flex hidden absolute top-0 left-0 transparent justify-between w-full mt-10 px-10 z-50">
          <span className="flex mr-5 font-bold text-xl">ArcLab.</span>
          <ul className="md:flex  gap-8 mr-5">
            <li className={`hover:text-green-400 ${path === '/' && 'text-green-400'}`}> <Link href="/">Home</Link> </li>
            <li className={`hover:text-green-400 ${path === '/about' && 'text-green-400'}`}> <Link href="/about">About</Link> </li>
            <li className={`hover:text-green-400 ${path === '/team' && 'text-green-400'}`}> <Link href="/team">Team</Link> </li>
            <li className={`hover:text-green-400 ${path === '/service' && 'text-green-400'}`}> <Link href="/service">Services</Link> </li>
            <li className={`hover:text-green-400 ${path === '/project' && 'text-green-400'}`}> <Link href="/project">Project</Link> </li>
            <li className={`hover:text-green-400 ${path === '/blog' && 'text-green-400'}`}> <Link href="/blog">Blog</Link> </li>
            <li className={`hover:text-green-400 ${path === '/contact' && 'text-green-400'}`}> <Link href="/contact">Contact</Link> </li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  );
}
