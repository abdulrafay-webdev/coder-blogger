import React from 'react';
import Image from 'next/image';
import Link from 'next/link';




const BlogCard= (props:any) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Image
        src={props.image}
        alt="Blog Image"
        width={500}
        height={500}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
      <p className="text-gray-500 mt-6">
            Published At : {new Date(props.Date).toLocaleDateString()}
          </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{props.title}</h3>
        
        <p className="text-gray-600 text-sm mb-4" >{props.shortdescription}</p>
        <Link href={`/blog/${props.link}`} className="text-blue-500 hover:text-blue-700">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;