import React from 'react';
import './CommentsList.scss';
import CommentDesc from './CommentDesc'



const CommentsList = ({comments, onDelete, onUpdate}) => {
  return (
    <ol className={"comments_list"}>
      {
        comments.length > 0
        ?
        comments.map((comment) => {
          return (
            <li key={comment.id}>
              <CommentDesc
                comment={comment}
                onDelete={onDelete}
                onUpdate={onUpdate}
              />
            </li>
          )
        })
        : 
        <li><p>댓글이 없습니다.</p></li>
      }
    </ol>
  );
};

export default CommentsList;