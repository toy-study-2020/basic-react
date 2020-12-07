import React from 'react';
import CommentPresenter from './CommentPresenter';

const CommentContainer = ({comment}) => {
  return (
    <CommentPresenter comment={comment}/>
  );
};

export default CommentContainer;