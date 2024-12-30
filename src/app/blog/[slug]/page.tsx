import React from 'react'
import { client } from '../../../../sanity/lib/client';
import { PortableText } from 'next-sanity';

export interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}


async function page({params}:PageProps) {
  
  const resolvedParams = await params; // Await the promise
  const { slug } = resolvedParams;

  const getData=async()=>{
    const SingleBlog = await client.fetch(`
      *[_type == "blogPost" && slug.current == "${slug}"][0] {
      title,
      slug,
     "MainImageURL": mainImage.asset->url,
      shortDescription,
      content,
      publishedAt
    }
      `)
      return SingleBlog
  }
  const SingleBlogData = await getData()
  const res = await SingleBlogData
  
  return (
    <div className="w-full h-auto container max-w-4xl mx-auto px-3 py-10">
      {SingleBlogData ? (
        <div>
          <h1 className="text-3xl sm:text-5xl uppercase font-bold mb-4">{SingleBlogData.title}</h1>
          {SingleBlogData.MainImageURL && (
            <img
              src={SingleBlogData.MainImageURL}
              alt={SingleBlogData.title}
              className="w-full h-auto mb-4 rounded"
            />
          )}
          <p className="text-gray-700 mb-6">{SingleBlogData.shortDescription}</p>
          <div className="prose">
            {/* Render Content Blocks */}
            {SingleBlogData.content && (
              <PortableText value={SingleBlogData.content}/>
            )}
          </div>
          <p className="text-gray-500 mt-6">
            Published At: {new Date(SingleBlogData.publishedAt).toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>No blog post found.</p>
      )}
    </div>
  );
}


export default page