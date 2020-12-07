import axios from 'axios'

export const getPosts = async () => {
    const response = await axios.get(`http://localhost:3030/posts`)
    return response.data
}

export const getPostById = async id => {
    const response = await axios.get(`http://localhost:3030/posts/${id}`)
    return response.data
}

export const getPostComments = async () => {
    const response = await axios.get(`http://localhost:3030/comments`)
    return response.data
}

export const getPostProfile = async () => {
    const response = await axios.get(`http://localhost:3030/profile`)
    console.log(response)
    return response.data
}