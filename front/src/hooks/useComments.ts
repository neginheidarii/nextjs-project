import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchComments = async (postId: string) => {
  try {
    const response = await axios.get(`http://localhost:3000/comments?postId=${postId}`);
    console.log("API response data for comments:", response.data);
    return response.data;
  } catch (err) {
    console.error("Error fetching comments:", err);
    throw err;
  }
};

console.log("fetchComments", fetchComments)


export const useComments= (postId: string)=>{
    return useQuery ({
        queryKey: ['comments', postId],
        queryFn: ()=> fetchComments(postId),
        enabled: !!postId
    })
}