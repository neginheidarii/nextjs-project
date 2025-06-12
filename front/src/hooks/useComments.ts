import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchComments = async(postId: string)=>{
    const response = await axios.get(
        `http://localhost:3000/comments?postId=${postId}`

    )
    return response.data
}
console.log("fetchComments", fetchComments)


export const useComments= (postId:string)=>{
    return useQuery ({
        queryKey: ['comments', postId],
        queryFn: ()=> fetchComments(postId),
        enabled: !!postId
    })
}