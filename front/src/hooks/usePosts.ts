import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async() =>{
    const response = await axios.get(
        "http://localhost:3000/posts"
    )
    return response.data;
}

export const usePosts = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts
    })
}