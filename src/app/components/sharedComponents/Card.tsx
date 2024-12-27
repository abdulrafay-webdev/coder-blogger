import React from 'react';
import promotion from '../../../../public/Images/promotion.png'
import Image from 'next/image';




const BlogCard= () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Image
        src={promotion}
        alt="Blog Image"
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Hello World</h3>
        <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus veniam facilis sit rerum assumenda asperiores fuga ea iusto dolorum sed?</p>
        <a href='' className="text-blue-500 hover:text-blue-700">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;