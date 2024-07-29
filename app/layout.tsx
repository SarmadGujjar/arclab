'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname()
  return (
    <html lang="en">
      <body className="bg-white">
        <div className="flex absolute top-0 left-0 transparent justify-between w-full mt-10 px-10 z-50">
          <span className="flex mr-5 font-bold text-xl">ArcLab.</span>
          <ul className="flex gap-8 mr-5 ">
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
