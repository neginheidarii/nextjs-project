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

  // Save fetched posts to Zustand
  useEffect(() => {
    if (postData) {
      setPosts(postData);
    }
  }, [postData, setPosts]);

  // Get comments for the selected post
  const postId = selectedPost?.id;
  const {
    data: commentData,
    isLoading: commentLoading,
    error: commentError,
  } = useComments(postId || '');

  if (postLoading || commentLoading) {
    return <p>Loading...</p>;
  }

  if (postError || commentError) {
    return <p>Error loading data.</p>;
  }

  if (!Array.isArray(commentData)) {
    return <p>No comments found or data is not an array.</p>;
  }

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <button onClick={() => selectPost(post)}>
              {post.title}
            </button>
          </li>
        ))}
      </ul>

      {selectedPost && (
        <>
          <h2>Selected: {selectedPost.title}</h2>
          <h3>Comments:</h3>
          <ul>
            {commentData.map((c) => (
              <li key={c.id}>{c.text}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
