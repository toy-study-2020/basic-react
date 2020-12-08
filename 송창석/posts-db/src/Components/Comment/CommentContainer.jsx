import React, { useEffect, useState } from 'react';
import { getPostComments } from '../../api/posts';
import CommentPresenter from './CommentPresenter';

const filterComments = async id => {
  const res = await getPostComments()
  const filterd = res.filter(comment => comment.postId === Number(id) && comment)
  return filterd
}

const CommentContainer = ({id}) => {
  const [comments, setComments] = useState()

  useEffect(() => {
    filterComments(id).then(data => setComments(data))
  }, [id])
  
  return (
    <CommentPresenter comments={comments} />
  )
};

export default CommentContainer;