import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createComment, deleteComment, getPostCommentById } from '../../api/comments';
import CommentCreate from '../CommentCreate/CommentCreate';
import CommentsList from '../CommentsList/CommentsList'

const fetchPostCommentById = async id => {
  const res = await getPostCommentById(id)
  return res
}

const CommentsWrapContainer = () => {
  const {id} = useParams()
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState({
    body: "",
    postId: Number(id)
  })

  useEffect(() => {
    const fetch = fetchPostCommentById(id)
    fetch.then(data => setComments(data))
  }, [id])

  const handleChange = e => setComment({
    ...comment,
    [e.target.name] : e.target.value
  })
  const handleCreate = e => {
    e.preventDefault()
    const {body, postId} = comment
    if(body !== "") {
      createComment({body, postId})
      const fetch = fetchPostCommentById(id)
      fetch.then(data => setComments(data))
      setComment({
        ...comment,
        body: ""
      })
    } else {
      alert("내용을 입력해주세요.")
    }
  }
  const handleDelete = commentId => {
    deleteComment(commentId)
    const fetch = fetchPostCommentById(id)
    fetch.then(data => setComments(data))
  }


  return (
    <>
      <CommentCreate
        body={comment.body}
        onChange={handleChange}
        onSubmit={handleCreate}
      />
      <CommentsList
        comments={comments}
        onDelete={handleDelete}
      />
    </>
  );
};

export default CommentsWrapContainer;