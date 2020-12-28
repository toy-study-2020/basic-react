import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { deletePostById, getPostById } from '../../api/posts';
import PostDetailPresenter from './PostDetailPresenter';


const PostDetailContainer = () => {
  const [post, setPost] = useState({})

  const {id} = useParams()
  const history = useHistory()

  useEffect(() => {
    getPostById(id).then(data => {
      setPost(data)
    })
  }, [id])

  const goBack = () => history.goBack()
  const handleDelete = () => {
    deletePostById(id)
    goBack()
  }
  
  return (
    <>
      <PostDetailPresenter
        post={post}
        id={id}
        goBack={goBack}
        onDelete={handleDelete}
      />
    </>
  );
};

export default PostDetailContainer;