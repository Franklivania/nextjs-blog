"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const data = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Blog",
    link: "/blog"
  },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className='w-full px-[6%] py-4 flex items-center justify-between bg-white'>
      <Image src={"/icons/next-logo.svg"} width={56} height={56} alt='Next Logo' />

      <menu className='flex items-center gap-x-6'>
        {data.map((item) => (
          <Link 
            key={item.title}
            href={item.link}
            className={`hover:text-gray-500 ${pathname === item.link || pathname.startsWith(`${item.link}/`) ? "text-red-600" : "text-black"}`}
          >
            {item.title}
          </Link>
        ))}
      </menu>
    </nav>
  )
}
