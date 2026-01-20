import { apiService } from "@/service/api.service";

interface Props {
    params: {
        id: string;
    };
}

const PostDetailsPage = async ({ params }: Props) => {
    const {id} = await params
    const post = await apiService.getPostsById(id);

    return (
        <div>
            <h1>{post.id}</h1>
            <p>Title: {post.title}</p>
            <p>UserID: {post.userId}</p>
            <p>Body: {post.body}</p>
        </div>
    );
};

export default PostDetailsPage;
