import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createPost, getPostProfile } from '../../api/posts';
import PostCreatePresenter from './PostCreatePresenter';

const PostCreateContainer = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState()
  const history = useHistory()

  useEffect(() => {
    getPostProfile().then(profile => {
      setAuthor(profile.name)
    })
  }, [])

  const goBack = () => history.goBack()
  const handleChange = e => setTitle(e.target.value)
  const handleCreate = e => {
    e.preventDefault()
    createPost({title, author})
    goBack()
  }

  return (
    <PostCreatePresenter
      goBack={goBack}
      onChange={handleChange}
      onSubmit={handleCreate}
      title={title}
    />
  );
};

export default PostCreateContainer;