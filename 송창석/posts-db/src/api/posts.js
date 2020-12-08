import axios from 'axios'

export const getPosts = async () => {
    const response = await axios.get(`http://localhost:3030/posts`)
    return response.data
}

export const createPost = async ({title, author}) => {
    const response = await axios.post(`http://localhost:3030/posts`, {title, author})
    return response.data
}

export const getPostById = async id => {
    const response = await axios.get(`http://localhost:3030/posts/${id}`)
    return response.data
}

export const deletePostById = async id => {
    const response = await axios.delete(`http://localhost:3030/posts/${id}`)
    return response.data
}

export const updatePostById = async ({id, title, author}) => {
    const response = await axios.put(`http://localhost:3030/posts/${id}`, {title, author})
    return response.data
}

export const getPostComments = async () => {
    const response = await axios.get(`http://localhost:3030/comments`)
    return response.data
}

export const getPostProfile = async () => {
    const response = await axios.get(`http://localhost:3030/profile`)
    return response.data
}