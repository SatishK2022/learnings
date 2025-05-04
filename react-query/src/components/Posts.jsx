import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Posts = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch, // For refetching the data manually
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3001/posts");
      return res.data;
    },
    // staleTime: 10000, // For how long to cache the data
    // refetchInterval: 1000, // For how often to refetch the data in ms. It will not fetch the data in the background
    // refetchIntervalInBackground: true, // For whether to refetch the data in the background
    // enabled: false, // If we don't want to fetch the data on the component mount
  });

  if (isLoading) {
    return (
      <div className="p-6 text-center text-gray-300">
        <p className="text-lg">Loading posts...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6 text-center text-red-400">
        <p className="text-lg">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <div className="flex flex-col items-center mb-5">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Latest Posts
        </h1>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer"
          onClick={refetch}
        >
          Fetch Posts
        </button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts?.map((post) => (
          <Link to={`/posts/${post.id}`} key={post.id}>
            <div className="bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-white mb-1">
                {post.title}
              </h2>
              <p className="text-sm text-gray-400 mb-2">
                By{" "}
                <span className="font-medium text-gray-300">{post.author}</span>{" "}
                • {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="text-gray-300 mb-4">{post.content}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-900/30 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>❤️ {post.likes}</span>
                <span>{post.comments.length} comments</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Posts;
