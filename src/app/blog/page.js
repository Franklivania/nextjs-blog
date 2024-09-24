import { client } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

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

export default async function Blog() {
  const data = await getPost()
  console.log(data)

  return (
    <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-content-center place-items-center'>
      {data.map((item) => (
        <Link 
          key={item.slug} 
          className='w-max px-6 py-4 rounded-md shadow-md border border-slate-200 transition-all duration-150 ease-in-out hover:scale-105'
          href={`/blog/${item.slug}`}
        >
          <Image src={item.mainImage} width={200} height={200} alt={item.title} />
          <h1>{item.title}</h1>
        </Link>
      ))}
    </div>
  )
}
