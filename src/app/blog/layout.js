import React from 'react'
import Link from 'next/link'
import { client } from '@/lib/sanity';

export const metadata = {
  title: "Blog Page"
}

async function getPost() {
  const query = `
    *[_type == "post"] {
    title,
    "slug": slug.current,
    "mainImage": mainImage.asset -> url
  }`;

  const data = client.fetch(query)

  return data
}

export default async function BlogLayout({ children }) {
  const data = await getPost()

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
      <section className='flex items-center justify-center w-full max-w-3xl mx-auto'>
        {children}
      </section>
    </main>
  )
}
