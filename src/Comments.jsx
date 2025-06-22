import { useState } from "react";
import CommentForm from "./CommentForm";

let style = { border: "2px solid white", borderRadius: "1rem",marginBottom:"1rem" };

export default function Comment() {
  let [comment, setComment] = useState([
    {
      username: "@Pg",
      comments: "Good",
      ratings: "5",
    },
  ]);

  function addComment(comment) {
    setComment((currComment) => {
      return [...currComment, comment];
    });
  }

  return (
    <>
      <h3>All Comments</h3>

      {comment.map((c,idx) => (
        <div className="comment" style={style} key={idx}>
          <span>{c.comments}</span>
          &nbsp; &nbsp;
          <span>(Ratings : {c.ratings})</span>
          <p>-{c.username}</p>
        </div>
        ))}
      <hr />

      <CommentForm addComment={addComment} />
    </>
  );
}
