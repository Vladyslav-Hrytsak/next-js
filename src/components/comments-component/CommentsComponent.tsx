import React from 'react';
import {apiService} from "@/service/api.service";
import Link from "next/link";

const CommentsComponent =async () => {

    const comments = await apiService.getComments()

    return (
        <ul>
            <li>
                {comments.map( comment => (
                    <li key={comment.id}>
                        <Link href = {`/comments/${comment.id}`}>{comment.name}</Link>
                        <hr/>

                    </li>
                ))}
            </li>
        </ul>
    );
};

export default CommentsComponent;