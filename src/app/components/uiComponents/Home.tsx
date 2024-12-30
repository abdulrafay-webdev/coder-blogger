import Image from "next/image";
import React from "react";
import promotion from "../../../../public/Images/promotion.png";
import ButtonPrimary from "../sharedComponents/uiComponents/ButtonPrimary";
import BlogCard from "../sharedComponents/Card";
import { client } from "../../../../sanity/lib/client";

const GetData = async ()=>{
const BlogData = await client.fetch(
  `*[_type == "blogPost"] {
      title,
      shortDescription,
      slug,
      "MainImageURL": mainImage.asset->url,
      content,
      publishedAt
    }`
)
return BlogData
}

async function HomePage() {

  const Blog = await GetData()
  console.log(Blog)

  return (
    <div>
      <div className="container mx-auto px-3">
        {/* hero section  */}
        <div className="flex flex-col justify-center mb-7 items-center">
          <Image src={promotion} className="w-full" alt="promotion image" />
          {/* card  */}
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
                <ButtonPrimary>Learn More</ButtonPrimary>
              </div>
            </div>
          </div>
        </div>

        {/* latest blogs section  */}
        <div className="latest flex py-5 flex-col justify-center">
          <h1 className="scroll-m-20 text-center border-b pb-4 text-3xl font-semibold tracking-tight first:mt-0">
            Latest Blogs
          </h1>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
           {
               Blog.map((item:any,i:any)=>{
                 return(
                   <div key={i}>
                     <BlogCard image={item.MainImageURL} title={item.title} link={item.slug.current} shortdescription={item.shortDescription} Date={item.publishedAt} />
                   </div>
               )
               })
              }
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
