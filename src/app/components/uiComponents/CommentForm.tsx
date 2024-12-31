'use client'

import React, { useState } from 'react';
import { client } from '../../../../sanity/lib/client';

const CommentForm = ({ postId }: { postId: string }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newComment = {
      _type: 'comment',
      name,
      email,
      text,
      post: {
        _type: 'reference',
        _ref: postId, // Link to the post
      },
    };



    await client.create(newComment);
    alert('Comment submitted!');
    setName('');
    setEmail('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg">
  <h2 className="text-3xl font-bold text-center mb-6 text-white">Leave a Comment</h2>
  
  <div className="mb-4">
    <label htmlFor="name" className="block text-xl text-white mb-2">Name</label>
    <input
      type="text"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
      className="w-full p-3 rounded-lg border-2 border-transparent focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      placeholder="Enter your name"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="email" className="block text-xl text-white mb-2">Email</label>
    <input
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="w-full p-3 rounded-lg border-2 border-transparent focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      placeholder="Enter your email"
    />
  </div>

  <div className="mb-4">
    <label htmlFor="comment" className="block text-xl text-white mb-2">Comment</label>
    <textarea
      id="comment"
      value={text}
      onChange={(e) => setText(e.target.value)}
      required
      rows={5}
      className="w-full p-3 rounded-lg border-2 border-transparent focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      placeholder="Write your comment"
    />
  </div>

  <button
    type="submit"
    className="w-full bg-gray-700 px-6 py-2 flex justify-center items-center text-center sm:text-base text-sm text-white rounded font-semibold transition-all duration-300 hover:bg-gray-600 hover:scale-y-105"
  >
    Submit
  </button>
</form>

  );
};

export default CommentForm;
