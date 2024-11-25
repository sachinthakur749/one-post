"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import the styles for the editor

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
      setMessage("Blog post created successfully!");
      setFormData({ title: "", body: "", imageUrl: "", authorName: "" });
    } catch (error) {
      console.log(error);
      console.error("Error creating blog post:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add Blog Post</h1>
      <form onSubmit={handleSubmit} className="flex space-x-8">
        <div className="flex-1">
          <div>
            <label htmlFor="title" className="block font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="imageUrl" className="block font-medium mb-1">
              Image URL
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="authorName" className="block font-medium mb-1">
              Author Name
            </label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              value={formData.authorName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
        </div>
        <div className="flex-1">
          <div>
            <label htmlFor="body" className="block font-medium mb-1">
              Body
            </label>
            <ReactQuill
              value={formData.body}
              onChange={handleEditorChange}
              className="w-full h-96 border border-gray-300 p-2 rounded"
              theme="snow"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
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
