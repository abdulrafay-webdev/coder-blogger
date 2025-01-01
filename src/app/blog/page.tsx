import { client } from "../../../sanity/lib/client";
import BlogCard from "../components/sharedComponents/Card";

const GetData = async () => {
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
  return BlogData;
};





async function page() {
  const Blog = await GetData();

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

export default page;
