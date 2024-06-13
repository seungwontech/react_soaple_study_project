import React from "react";
import Comment from "./Comment";

const comments = [
    {name: "김종국", comment: "리액트 재미있어요."}
    , {name: "유재석", comment: "타입은 언제 배울래"}
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
            <Comment/>
        </div>
    );
}

export default CommentList;