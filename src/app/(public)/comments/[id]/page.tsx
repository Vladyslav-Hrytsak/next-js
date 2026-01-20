import { apiService } from "@/service/api.service";

interface Props {
    params: {
        id: string;
    };
}

const CommentDetailsPage = async ({ params }: Props) => {
    const {id} = await params
    const comment = await apiService.getCommentById(id)

    return (
        <div>
            <h1>{comment.id}</h1>
            <p>Name: {comment.name}</p>
            <p>PostID: {comment.postId}</p>
            <p>Body: {comment.body}</p>
            <p>Email: {comment.email}</p>

        </div>
    );
};

export default CommentDetailsPage;
