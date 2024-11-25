import React from "react";
import ShortBlogCard from "./ShortBlogCard";
import Link from "next/link";

const BlogSection = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const response = await fetch(`${baseUrl}/api/blogs`);
  const data = await response.json();

  return (
    <div>
      <h2 className="text-[24px] font-semibold mb-6">Related Tech Stories</h2>
      <div className="grid grid-cols-3 gap-[50px]">
        {data.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog?.slug}`}>
            <ShortBlogCard
              title={blog.title}
              body={blog.body}
              imageUrl={blog.imageUrl}
              authorName={blog?.authorName}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
