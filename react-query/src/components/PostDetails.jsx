import React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PostDetails = () => {
  const { id } = useParams();

  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3001/posts/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="p-6 text-center text-gray-300">
        <p className="text-lg">Loading post...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 text-center text-red-400">
        <p className="text-lg">Error: {error.message}</p>
        <Link to="/posts" className="text-blue-400 hover:underline">
          ← Back to Posts
        </Link>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="p-6 text-center text-gray-300">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <Link to="/posts" className="text-blue-400 hover:underline">
          ← Back to Posts
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-2">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-4">
        By <span className="font-medium text-gray-300">{post.author}</span> •{" "}
        {new Date(post.date).toLocaleDateString()}
      </p>
      <p className="text-gray-300 mb-6">{post.content}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {(post.tags || []).map((tag, index) => (
          <span
            key={index}
            className="bg-blue-900/30 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="text-sm text-gray-400">
        ❤️ {post.likes} · {(post.comments || []).length} comments
      </div>
      <div className="mt-6">
        <Link
          to="/posts"
          className="text-blue-400 hover:underline text-sm inline-block mt-4"
        >
          ← Back to Posts
        </Link>
      </div>
    </div>
  );
};

export default PostDetails;
