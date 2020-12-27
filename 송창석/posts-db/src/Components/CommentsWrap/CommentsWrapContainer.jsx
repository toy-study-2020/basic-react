import React, { useState, useEffect } from 'react';
import { createComment, deleteComment, getPostCommentById, updateComment } from '../../api/comments';
import CommentCreate from '../CommentCreate/CommentCreate';
import CommentsList from '../CommentsList/CommentsList';

const CommentsWrapContainer = ({id}) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchComments = async () => {
      const fetch = await getPostCommentById(id)
      setComments(fetch.reverse())
    }
    fetchComments()
  }, [id])

  
  const handleCreate = ({body, postId}) => {
    createComment({body, postId}).then(async () => {
      const fetch = await getPostCommentById(id)
      setComments(fetch.reverse())
    })
  }

  const handleDelete = commentId => {
    deleteComment(commentId).then(async () => {
      const fetch = await getPostCommentById(id)
      setComments(fetch.reverse())
    })
  }

  const handleUpdate = ({id, body, postId}) => {
    updateComment({id, body, postId}).then(async () => {
      const fetch = await getPostCommentById(postId)
      setComments(fetch.reverse())
    })
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