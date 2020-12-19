import React, { useState, useEffect } from 'react';
import { createComment, deleteComment, getPostCommentById, updateComment } from '../../api/comments';
import CommentCreate from '../CommentCreate/CommentCreate';
import CommentsList from '../CommentsList/CommentsList'

const fetchPostCommentById = async (id) => {
  const res = await getPostCommentById(id)
  return res
}

const CommentsWrapContainer = ({id}) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetch = fetchPostCommentById(id)
    fetch.then(comments => setComments(comments.reverse()))
  }, [id])

  
  const handleCreate = async ({body, postId}) => {
    const res = await createComment({body, postId})
    setComments(comments => comments.concat(res))
    const fetch = fetchPostCommentById(id)
    fetch.then(comments => setComments(comments.reverse()))
  }

  const handleDelete = commentId => {
    deleteComment(commentId)
    const fetch = fetchPostCommentById(id)
    fetch.then(comments => setComments(comments.reverse()))
  }

  const handleUpdate = ({id, body, postId}) => {
    updateComment({id, body, postId})
    const fetch = fetchPostCommentById(postId)
    fetch.then(comments => setComments(comments.reverse()))
  }


  return (
    <>
      <CommentCreate
        id={id}
        onSubmit={handleCreate}
      />
      <CommentsList
        comments={comments}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </>
  );
};

export default CommentsWrapContainer;