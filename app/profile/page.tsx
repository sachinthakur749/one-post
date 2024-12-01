"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import styles here since they don't depend on SSR
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Dynamically import ReactQuill without SSR
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function BlogPostForm() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    imageUrl: "",
    authorName: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditorChange = (value: string) => {
    setFormData({ ...formData, body: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create blog post");
      }

      setMessage("Blog post created successfully!");
      setFormData({ title: "", body: "", imageUrl: "", authorName: "" });
    } catch (error) {
      console.error("Error creating blog post:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="p-4 w-full mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="title" className="block font-medium mb-1">
              Title
            </label>
            <Input
              name="title"
              id="title"
              onChange={handleChange}
              value={formData?.title}
              type="text"
              placeholder="Enter blog title"
              required
            />
          </div>
          <div>
            <label htmlFor="imageUrl" className="block font-medium mb-1">
              Image URL
            </label>
            <Input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="Enter image URL"
              required
            />
          </div>
          <div>
            <label htmlFor="authorName" className="block font-medium mb-1">
              Author Name
            </label>
            <Input
              type="text"
              id="authorName"
              name="authorName"
              value={formData.authorName}
              onChange={handleChange}
              placeholder="Enter author name"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="body" className="block font-medium mb-2">
            Body
          </label>
          <ReactQuill
            value={formData.body}
            onChange={handleEditorChange}
            className="w-full h-[400px] border border-gray-300 rounded"
            theme="snow"
          />
        </div>

        <div className="text-right !mt-[75px]">
          <Button type="submit">Submit</Button>
        </div>
      </form>

      {message && (
        <p
          className={`mt-4 ${
            message.includes("successfully") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
