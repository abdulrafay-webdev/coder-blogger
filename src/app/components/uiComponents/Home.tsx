

// import Image from "next/image";
// import React from "react";
// import promotion from "../../../../public/Images/promotion.png";
// import ButtonPrimary from "../sharedComponents/uiComponents/ButtonPrimary";
// import BlogCard from "../sharedComponents/Card";
// import { client } from "../../../../sanity/lib/client";
// import Link from "next/link";

// const GetData = async ()=>{
// const BlogData = await client.fetch(
//   `*[_type == "blogPost"] {
//       title,
//       shortDescription,
//       slug,
//       "MainImageURL": mainImage.asset->url,
//       content,
//       publishedAt
//     }`
// )
// return BlogData
// }



  



// async function HomePage() {

// const Blog = await GetData()

//   return (
//     <div>
//       <div className="container mx-auto px-3">
//         {/* hero section  */}
//         <div className="flex flex-col justify-center mb-7 items-center">
//           <Image src={promotion} className="w-full" alt="promotion image" />
//           {/* card  */}
//           <div className="card bg-base-100 min-w-96 max-w-xl lg:-mt-[15vh] -mt-[10vh] shadow-xl">
//             <div className="card-body justify-center flex items-center">
//               <h2 className="card-title scroll-m-20 text-center border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
//                 The Impact of Technology on the Workplace: How Technology is
//                 Changing
//               </h2>
//               <p className="leading-7 [&:not(:first-child)]:mt-6">
//                 <b>Author :</b> Abdul Rafay
//               </p>
//               <div className="card-actions justify-center">
//                 <Link href={'/blog/the-impact-of-technology-on-the-workplace-how-technology-is-changing'}>
//                 <ButtonPrimary>Learn More</ButtonPrimary>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* latest blogs section  */}
//         <div className="latest flex py-5 flex-col justify-center">
//           <h1 className="scroll-m-20 text-center border-b pb-4 text-3xl font-semibold tracking-tight first:mt-0">
//             Latest Blogs
//           </h1>
//           <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
//            {
//                Blog.map((item:any,i:any)=>{
//                  return(
//                    <div key={i}>
//                      <BlogCard image={item.MainImageURL} title={item.title} link={item.slug.current} shortdescription={item.shortDescription} Date={item.publishedAt} />
//                    </div>
//                )
//                })
//               }
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomePage;



'use client'




import React, { useState, useEffect } from "react";
import Image from "next/image";
import promotion from "../../../../public/Images/promotion.png";
import ButtonPrimary from "../sharedComponents/uiComponents/ButtonPrimary";
import BlogCard from "../sharedComponents/Card";
import { client } from "../../../../sanity/lib/client";
import Link from "next/link";

 function HomePage() {
  // State to store fetched blog data
  const [BlogData, setBlogData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);  // Loading state

  // UseEffect to fetch blog data on component mount
  useEffect(() => {
    const GetData = async () => {
      try {
        const BlogData = await client.fetch(
          `*[_type == "blogPost"] {
            title,
            shortDescription,
            slug,
            "MainImageURL": mainImage.asset->url,
            content,
            publishedAt
          }`
        );
        console.log('Fetched Blog Data:', BlogData);  // Debugging log
        setBlogData(BlogData);  // Setting fetched data to state
        setLoading(false);  // Data fetched, loading finished
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);  // In case of error, set loading to false
      }
    };

    GetData(); // Calling the async function to fetch data
  }, []); // Empty dependency array ensures this runs once when component mounts

  // Loading and error handling
  if (loading) {
    return <p>Loading blog posts...</p>;
  }

  if (BlogData.length === 0) {
    return <p>No blog posts available.</p>;
  }

  return (
    <div>
      <div className="container mx-auto px-3">
        {/* Hero Section */}
        <div className="flex flex-col justify-center mb-7 items-center">
          <Image src={promotion} className="w-full" alt="promotion image" />
          {/* Card */}
          <div className="card bg-base-100 min-w-96 max-w-xl lg:-mt-[15vh] -mt-[10vh] shadow-xl">
            <div className="card-body justify-center flex items-center">
              <h2 className="card-title scroll-m-20 text-center border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </h2>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                <b>Author :</b> Abdul Rafay
              </p>
              <div className="card-actions justify-center">
                <Link href={'/blog/the-impact-of-technology-on-the-workplace-how-technology-is-changing'}>
                  <ButtonPrimary>Learn More</ButtonPrimary>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Blogs Section */}
        <div className="latest flex py-5 flex-col justify-center">
          <h1 className="scroll-m-20 text-center border-b pb-4 text-3xl font-semibold tracking-tight first:mt-0">
            Latest Blogs
          </h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
            {
              BlogData.map((item: any, i: any) => {
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
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
