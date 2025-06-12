"use client";
import { useComments } from "@/hooks/useComments";
import { usePosts } from "@/hooks/usePosts";

export default function CommentPage() {
  const {
    data: postData,
    isLoading: postLodading,
    error: postError,
  } = usePosts();

  const postId = postData?.[0]?.id;
  const {
    data: commentData,
    isLoading: commentLoading,
    error: errorLoading,
  } = useComments(postId);

  if (postLodading || commentLoading) {
    return <p>Loading...</p>;
  }
  if (postError || errorLoading) {
    return <p>Error loading data.</p>;
  }

  // Safety check: make sure commentData is an array
  if (!Array.isArray(commentData)) {
    return <p>No comments found or wrong format.</p>;
  }
  return (
    <div>
      <h1>Post: {postData?.[0]?.title}</h1>
      <h2>Comments: </h2>
      <ul>
        {commentData.map((comment: any) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
}
