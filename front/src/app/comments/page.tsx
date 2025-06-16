'use client';

import { useEffect } from 'react';
import { useComments } from '@/hooks/useComments';
import { usePosts } from '@/hooks/usePosts';
import { usePostStore } from '../store/usePostStore';

export default function CommentPage() {
  const {
    data: postData,
    isLoading: postLoading,
    error: postError,
  } = usePosts();

  const posts = usePostStore((s) => s.posts);
  const setPosts = usePostStore((s) => s.setPosts);
  const selectedPost = usePostStore((s) => s.selectedPost);
  const selectPost = usePostStore((s) => s.selectPost);

  useEffect(() => {
    if (postData) {
      setPosts(postData);
    }
  }, [postData, setPosts]);

  const postId = selectedPost?.id;
  const {
    data: commentData,
    isLoading: commentLoading,
    error: commentError,
  } = useComments(postId || '');

  if (postLoading || commentLoading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (postError || commentError) {
    return <p className="text-center text-red-500">Error loading data.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10">💬 <span className="underline">Comment Viewer</span></h1>

      {/* Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {posts.map((post) => (
          <button
            key={post.id}
            onClick={() => selectPost(post)}
            className={`text-left bg-white border rounded-2xl p-6 shadow-md transition-all hover:shadow-lg ${
              selectedPost?.id === post.id ? 'border-blue-500 shadow-lg' : 'border-gray-200'
            }`}
          >
            <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-sm text-gray-500 mt-1">👁️ {post.views} views</p>
          </button>
        ))}
      </div>

      {/* Comments */}
      {selectedPost && (
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            📝 Comments for: <span className="underline">{selectedPost.title}</span>
          </h2>
          <ul className="space-y-3">
            {Array.isArray(commentData) && commentData.length > 0 ? (
              commentData.map((c: any) => (
                <li
                  key={c.id}
                  className="bg-white border border-gray-100 rounded-xl px-4 py-2 shadow-sm"
                >
                  {c.text}
                </li>
              ))
            ) : (
              <li className="text-gray-500 italic">No comments found.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
