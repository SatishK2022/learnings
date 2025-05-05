import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";

const addPost = (post) => {
  return axios.post("http://localhost:3001/posts", post);
};

const AddPost = () => {
    const queryClient = useQueryClient();

  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    author: "",
    content: "",
    tags: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const { mutate } = useMutation({
    mutationFn: addPost,
    onSuccess: (newData) => {
    //   queryClient.invalidateQueries(["posts"]); // Invalidate the cache when a new post is added, this is done automatically by react-query by default
        queryClient.setQueryData(["posts"], (oldQueryData) => {
            return [...oldQueryData, newData];
        })  
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now().toString(),
      title: form.title,
      author: form.author,
      content: form.content,
      date: new Date().toISOString(),
      tags: form.tags.split(",").map((tag) => tag.trim()),
      likes: 0,
      comments: [],
    };

    console.log("Submitted Post:", newPost);

    mutate(newPost);

    // Clear form & close modal
    setForm({ title: "", author: "", content: "", tags: "" });
    setIsOpen(false);
  };

  return (
    <div className="p-6 text-center">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        + Add Post
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg p-8 w-full max-w-lg text-left relative">
            <h2 className="text-2xl font-bold mb-6 text-white">
              Create New Post
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400"
              />
              <input
                type="text"
                name="author"
                placeholder="Author"
                value={form.author}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400"
              />
              <textarea
                name="content"
                placeholder="Content"
                value={form.content}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 min-h-[100px]"
              />
              <input
                type="text"
                name="tags"
                placeholder="Tags (comma separated)"
                value={form.tags}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400"
              />

              <div className="flex justify-between items-center mt-6">
                <button
                  type="submit"
                  className="bg-blue-600 px-5 py-2 rounded text-white hover:bg-blue-700 transition"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:underline"
                >
                  Cancel
                </button>
              </div>
            </form>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPost;
