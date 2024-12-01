import React from "react";
import ShortBlogCard from "./ShortBlogCard";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Blog } from "@/lib/types";

const BlogSection = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const data = await prisma.blog.findMany({
    select: {
      id: true,
      slug: true,
      title: true,
      body: true,
      imageUrl: true,
      authorName: true,
    },
  });

  return (
    <div>
      <h2 className="text-[24px] font-semibold mb-6">Top Insights</h2>
      <div className="grid grid-cols-3 gap-[50px]">
        {data.map((blog: Blog): any => (
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
