"use client"
import { usePosts } from "@/hooks/usePosts"

export default function PostPage(){
    const {data, isLoading, error} = usePosts();

    if(isLoading) return <p> Loading ... </p>;
    if(error) return <p>Error loading posts: {(error as Error).message}</p>

    return(
        <div>
            <h1>Posts</h1>
            <ul>
                {data.map((post: any)=>(
                    <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
            
        </div>
    )
    
}