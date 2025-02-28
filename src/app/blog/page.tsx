// import { client } from "../../../sanity/lib/client";
// import BlogCard from "../components/sharedComponents/Card";

// const GetData = async () => {
//   const BlogData = await client.fetch(
//     `*[_type == "blogPost"] {
//       title,
//       shortDescription,
//       slug,
//       "MainImageURL": mainImage.asset->url,
//       content,
//       publishedAt
//     }`
//   );
//   return BlogData;
// };





// async function page() {
//   const Blog = await GetData();

//   return (
//     <div className="container min-h-[80vh] mx-auto px-3 sm:py-4 py-2">
//     <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
//       {Blog.map((item: any, i: any) => {
//         return (
//           <div key={i}>
//             <BlogCard
//               image={item.MainImageURL}
//               title={item.title}
//               link={item.slug.current}
//               shortdescription={item.shortDescription}
//               Date={item.publishedAt} 
//             />
//           </div>
//         );
//       })}
//     </div>
//     </div>
//   );
// }

// export default page;






'use client'



import React, { useState, useEffect } from "react";
import { client } from "../../../sanity/lib/client";
import BlogCard from "../components/sharedComponents/Card";

function Page() {
  // State to store blog data
  const [Blog, setBlog] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);  // Loading state

  // Fetch data using useEffect
  useEffect(() => {
    const GetData = async () => {
      try {
        const fetchedBlogData = await client.fetch(
          `*[_type == "blogPost"] {
            title,
            shortDescription,
            slug,
            "MainImageURL": mainImage.asset->url,
            content,
            publishedAt
          }`
        );
        setBlog(fetchedBlogData);  // Store fetched data in state
        setLoading(false);  // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setLoading(false);  // Set loading to false in case of error
      }
    };

    GetData();  // Call the function to fetch data
  }, []);  // Empty dependency array means this effect runs only once on mount

  // Loading and error handling
  if (loading) {
    return <p>Loading blogs...</p>;
  }

  if (Blog.length === 0) {
    return <p>No blog posts available.</p>;
  }

  return (
    <div className="container min-h-[80vh] mx-auto px-3 sm:py-4 py-2">
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
        {Blog.map((item: any, i: any) => {
          return (
            <div key={i}>
              <BlogCard
                image={item.MainImageURL}
                title={item.title}
                link={item.slug.current}
                shortdescription={item.shortDescription}
                Date={item.publishedAt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
