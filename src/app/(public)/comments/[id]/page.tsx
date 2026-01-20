import { apiService } from "@/service/api.service";
import {SearchParams} from "next/dist/server/request/search-params";
import {IComment} from "@/models/IComment";

interface Props {
    searchParams:Promise<SearchParams>
}

const CommentDetailsPage = async ({ searchParams }: Props) => {

    const {data} = await searchParams;
    let comment = null
    if(typeof data == "string") {
        comment = JSON.parse(data) as IComment;
    }

    return (
        <div>
            {
                comment && <>
                    <h1>{comment.id}</h1>
                    <p>Name: {comment.name}</p>
                    <p>PostID: {comment.postId}</p>
                    <p>Body: {comment.body}</p>
                    <p>Email: {comment.email}</p>
                </>
            }

        </div>
    );
};

export default CommentDetailsPage;
