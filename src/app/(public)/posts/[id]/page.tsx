import {SearchParams} from "next/dist/server/request/search-params";
import {IPost} from "@/models/IPost";

interface Props {
    searchParams: Promise<SearchParams>
}

const PostDetailsPage = async ({ searchParams }: Props) => {

    const {data} =  await searchParams;
    let post = null
    if (typeof data === "string") {
        post = JSON.parse(data) as IPost;
    }

    return (
        <div>
            {post && <>
                <h1>{post.id}</h1>
                <p>Title: {post.title}</p>
                <p>UserID: {post.userId}</p>
                <p>Body: {post.body}</p>
            </>}
        </div>
    );
};

export default PostDetailsPage;
