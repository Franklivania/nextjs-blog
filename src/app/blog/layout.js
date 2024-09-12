import React from 'react'
import data from "@/data/blog.json"
import Link from 'next/link'

export const metadata = {
  title: "Blog Page"
}

export default function BlogLayout({ children }) {
  return (
    <main>
      <div className='flex items-center justify-between gap-y-8 px-[6%]'>
        <h1 className='text-xl font-bold'>Blog page</h1>

        <section className='flex items-center gap-x-4'>
          {data.map((item) => (
            <Link
              key={item.title}
              href={`/blog/${item.slug}`}
              className={`hover:text-gray-500`}
            >
              {item.title}
            </Link>
          ))}
        </section>
      </div>
      <section>
        {children}
      </section>
    </main>
  )
}
