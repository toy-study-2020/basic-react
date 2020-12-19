import axios from 'axios'

export const getPostCommentById = async id => {
  const response = await axios.get(`http://localhost:3030/posts/${id}/comments`)
  return response.data
}

export const createComment = async ({body, postId}) => {
  const response = await axios.post(`http://localhost:3030/comments`, {body, postId})
  return response.data
}

export const deleteComment = async id => {
  const response = await axios.delete(`http://localhost:3030/comments/${id}`)
  return response.data
}

export const updateComment = async ({id, body, postId}) => {
  const response = await axios.put(`http://localhost:3030/comments/${id}`, {body, postId})
  return response.data
}