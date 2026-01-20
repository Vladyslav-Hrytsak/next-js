import { apiService } from "@/service/api.service";
import Link from "next/link";

const PostsPage = async () => {
    const posts = await apiService.getPosts();

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                        <hr/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsPage;
