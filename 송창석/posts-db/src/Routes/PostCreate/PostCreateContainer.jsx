import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { createPost, getPostById, getPostProfile, updatePostById } from '../../api/posts';
import PostCreatePresenter from './PostCreatePresenter';

const PostCreateContainer = () => {
  const [post, setPost] = useState({
    title: "",
    author: ""
  })
  const {title, author} = post
  const history = useHistory()
  const {id} = useParams()

  useEffect(() => {
    if(!id) getPostProfile().then(profile => {
      setPost(post => {
        return {
          ...post,
          author: profile.name
        }
      })
    })
    else getPostById(id).then(data => {
      const {title, author} = data
      setPost({
        title,
        author
      })
    })
  }, [id])

  const goBack = () => history.goBack()
  const handleChange = e => setPost({
    ...post,
    [e.target.name] : e.target.value
  })
  const handleCreate = e => {
    e.preventDefault()
    if(title !== "") {
      if(!id) createPost({title, author})
      else updatePostById({id, title, author})
      goBack()
    } else {
      alert("내용을 입력해주세요.")
    }
  }

  return (
    <PostCreatePresenter
      id={id}
      title={title}
      goBack={goBack}
      onChange={handleChange}
      onSubmit={handleCreate}
    />
  );
};

export default PostCreateContainer;