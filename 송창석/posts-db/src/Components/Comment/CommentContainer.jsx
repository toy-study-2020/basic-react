import React, { useEffect, useState } from 'react';
import { getPostCommentById } from '../../api/posts';
import CommentPresenter from './CommentPresenter';

const CommentContainer = ({id}) => {
  const [comment, setComment] = useState([])

  useEffect(() => {
    getPostCommentById(id).then(data => {
      setComment(data)
    })
  }, [id])
  
  return (
    <CommentPresenter comment={comment} />
  )
};

export default CommentContainer;