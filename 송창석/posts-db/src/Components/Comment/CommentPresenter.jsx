import React from 'react';
import './Comment.scss'

const CommentPresenter = ({comment}) => {
  return (
    <ol className={"comment_list"}>
      {
        comment.length > 0
        ?
        comment.map((desc) => {
          return (
            <li key={desc.id}>{desc.body}</li>
          )
        })
        : 
        <li>댓글이 없습니다.</li>
      }
    </ol>
  );
};

export default CommentPresenter;