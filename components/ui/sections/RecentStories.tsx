import { Key } from "react";
import BlogCard from "../BlogCard";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

const RecentStories = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const blogs = await prisma.blog.findMany({
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
      <h2 className="text-[24px] font-semibold mb-6">Related Tech Stories</h2>
      <div className="flex flex-wrap gap-6">
        {blogs.map(
          (blog: {
            id: Key | null | undefined;
            slug: any;
            title: string;
            body: string;
            imageUrl: string;
          }) => (
            <Link key={blog.id} href={`/blog/${blog?.slug}`}>
              <BlogCard
                title={blog.title}
                body={blog.body}
                imageUrl={blog.imageUrl}
              />
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default RecentStories;
