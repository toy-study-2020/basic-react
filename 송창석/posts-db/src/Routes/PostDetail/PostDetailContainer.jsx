import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { deletePostById, getPostById, updatePostById } from '../../api/posts';
import PostDetailPresenter from './PostDetailPresenter';


const PostDetailContainer = () => {
  const [update, setUpdate] = useState(false)
  const [post, setPost] = useState({})

  const {id} = useParams()
  const history = useHistory()

  useEffect(() => {
    getPostById(id).then(data => setPost(data))
  }, [id])

  const goBack = () => history.goBack()
  const handleDelete = () => {
    deletePostById(id)
    goBack()
  }
  const updateToggleHandler = () => setUpdate(!update)
  const handleChange = e => setPost({
    ...post,
    [e.target.name] : e.target.value
  })
  const handleUpdate = e => {
    e.preventDefault()
    const {title, author} = post
    updatePostById({id, title, author})
    updateToggleHandler()
  }

  const onEvent = {
    goBack: goBack,
    onDelete: handleDelete,
    onToggle: updateToggleHandler,
    onChange: handleChange,
    onUpdate: handleUpdate
  }
  
  return (
    <>
      <PostDetailPresenter
        post={post}
        update={update}
        id={id}
        onEvent={onEvent}
      />
    </>
  );
};

export default PostDetailContainer;