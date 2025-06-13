import {create} from 'zustand';


export type Post = {
    id: string;
    title: string;
    views: number;
}

type PostStore = {
    posts: Post[];
    selectedPost: Post | null;
    setPosts: (posts: Post[]) => void;
    selectPost: (post: Post) => void;
    resetPosts: () => void;
}

export const usePostStore = create<PostStore>((set) => ({
    posts: [],
    selectedPost: null,

    setPosts: (posts) => set({posts}),
    selectPost: (post) => set({selectedPost: post}),
    resetPosts: () => set({posts:[], selectedPost: null}),
}));