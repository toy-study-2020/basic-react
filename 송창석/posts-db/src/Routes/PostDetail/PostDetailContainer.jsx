import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById, getPostComments } from '../../api/posts';
import PostDetailPresenter from './PostDetailPresenter';

const getPost = async id => {
  const fetchPost = await getPostById(id)
  return fetchPost
}
const getComment = async id => {
  const commentsArr = await getPostComments()
  const filterComment = commentsArr.filter(comment => comment.postId === Number(id) && comment)
  return filterComment
}

const PostDetailContainer = () => {
    const [post, setPost] = useState({})
    const [comment, setComment] = useState([])
    const {id} = useParams()
    
    useEffect(() => {
      getPost(id).then(data => setPost(data))
      getComment(id).then(data => setComment(data))
    }, [id])

    return (
        <PostDetailPresenter post={post} comment={comment}/>
    );
};

export default PostDetailContainer;