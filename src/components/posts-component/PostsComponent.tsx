import React from 'react';
import {apiService} from "@/service/api.service";
import Link from "next/link";

const PostsComponent = async () => {
    const posts = await apiService.getPosts();

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={{pathname: `/posts/${post.id}`, query:{data: JSON.stringify(post)}}}>{post.title}</Link>
                        <hr/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;