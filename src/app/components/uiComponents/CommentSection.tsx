'use client'

import React, { useEffect, useState } from "react";
import { client } from "../../../../sanity/lib/client";

async function getComments(slug: string) {
  const comments = await client.fetch(`
    *[_type == "comment" && post->slug.current == "${slug}"]{
 name,
 email,
 text
 }
 `);
  return comments;
}

const CommentsSection = ({ slug }: { slug: string }) => {
  const [comments, setComments] = useState<any[]>([]);
  useEffect(() => {
    const fetchComments = async () => {
      const commentsData = await getComments(slug);
      setComments(commentsData);
    };

    fetchComments();
  }, [slug]);
  return (
    <div className="mt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg">
  <h2 className="text-3xl font-bold text-center mb-6 text-white">Comments</h2>
  {comments.map((comment, index) => (
    <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4">
      <p className="text-xl font-semibold text-indigo-600">{comment.name}</p>
      <p className="text-gray-800">{comment.text}</p>
      <p className="text-xs text-gray-500">{new Date(comment._createdAt).toLocaleString()}</p>
    </div>
  ))}
</div>
  );
};

export default CommentsSection;
