import React from 'react';
import './CommentsList.scss';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import DeleteIcon from '@material-ui/icons/Delete';

const CommentsList = ({comments, onDelete}) => {

  return (
    <ol className={"comments_list"}>
      {
        comments.length > 0
        ?
        comments.map((desc) => {
          return (
            <li key={desc.id}>
              <p>{desc.body}</p>
              <div className="comments_btns">
                <AutorenewIcon/>
                <DeleteIcon onClick={() => onDelete(desc.id)}/>
              </div>
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