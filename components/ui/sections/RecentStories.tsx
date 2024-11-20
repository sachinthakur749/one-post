"use client";

import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard";

const RecentStories = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blog posts from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("/api/blogs"); // Adjust the URL based on your actual API endpoint
        const data = await response.json();
        setBlogs(data); // Assuming the API returns an array of blog posts
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h2 className="text-[24px] font-semibold mb-6">Related Tech Stories</h2>
      {/* Map through the blogs and pass the data to BlogCard */}
      <div className="flex flex-wrap gap-6">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            body={blog.body}
            imageUrl={blog.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentStories;
