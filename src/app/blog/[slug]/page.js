import React from 'react';
import data from '@/data/blog.json';

// Generate static paths for each blog post based on slug
export async function generateStaticParams() {
  if (!Array.isArray(data)) {
    throw new Error('Data should be an array');
  }

  return data.map((post) => ({
    slug: post.slug,
  }));
}

// Component to display a specific blog post
export default function BlogPost({ params }) {
  const post = data.find((post) => post.slug === params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <menu className='flex items-center gap-x-6'>
      </menu>
      <section className='w-max flex flex-col items-start gap-y-3 mx-auto mt-12'>
        <h2 className='text-xl font-semibold'>{post.title}</h2>
        <p>{post.desc}</p>
        <div>{post.content}</div>
      </section>
    </div>
  );
}
