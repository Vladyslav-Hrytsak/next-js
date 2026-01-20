import {IUsers} from "@/models/IUsers";
import {IPost} from "@/models/IPost";
import {IComment} from "@/models/IComment";


export const apiService = {

    getUsers: async ():Promise<IUsers[]> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return response.json();
    },

    getUserById: async (id: string):Promise<IUsers> => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        return response.json();
    },

    getPosts: async ():Promise<IPost[]> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return response.json();
    },

    getPostsById: async (id: string):Promise<IPost> => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.json();
    },

    getComments: async ():Promise<IComment[]> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        return response.json();
    },
    getCommentById: async (id: string):Promise<IComment> => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
        return response.json();
    }
};
