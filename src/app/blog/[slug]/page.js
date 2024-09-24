import { client } from '@/lib/sanity';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import React from 'react';

async function getPost(params) {
  const query = `
    *[_type == "post" && slug.current == '${params}'] {
  title,
  "currentSlug": slug.current,
  "mainImage": mainImage.asset -> url,
  "author": author -> {
    name,
    "authorImage": image.asset -> url
  },
  body
}[0]`;

  const data = client.fetch(query)
  return data
}

export default async function BlogPost({ params }) {
  const data = await getPost(params.slug)
  // console.log(data)
  return (
    <div className='w-full h-full pb-24 pt-12 px-[4%]'>
      <section role='presentation' className='mx-auto'>
        <Image src={data.mainImage} width={400} height={400} alt={data.title} />

        <div className='prose prose-headings:underline'>
          <PortableText value={data.body} />
        </div>
      </section>
    </div>
  );
}
