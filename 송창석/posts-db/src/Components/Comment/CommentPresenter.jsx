import React from 'react';
import './Comment.scss'

const CommentPresenter = ({comments}) => {
  return (
    <ol className={"comment_list"}>
      {
        comments !== undefined
        ?
        comments.map((desc) => {
          return (
            <li key={desc.id}>{desc.body}</li>
          )
        })
        : 
        <li>댓글을 입력해주세요.</li>
      }
    </ol>
  );
};

export default CommentPresenter;