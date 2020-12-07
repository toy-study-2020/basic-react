import React from 'react';
import './Comment.scss'

const CommentPresenter = ({comment}) => {
  console.log(comment)
  return (
    <ol className={"comment_list"}>
      {comment.map((desc) => {
        return (
          <li key={desc.id}>{desc.body}</li>
        )
      })}
    </ol>
  );
};

export default CommentPresenter;