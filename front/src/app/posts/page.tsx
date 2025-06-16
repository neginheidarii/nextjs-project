"use client";

import { usePosts } from "@/hooks/usePosts";

export default function PostPage() {
  const { data, isLoading, error } = usePosts();

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading posts: {(error as Error).message}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">📚 <span className="underline">Posts</span></h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((post: any) => (
          <div
            key={post.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-500 text-sm">👁️ {post.views} views</p>
          </div>
        ))}
      </div>
    </div>
  );
}
