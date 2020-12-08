import React, { useState, useEffect } from 'react';
import { getPosts } from '../../api/posts';
import PostsListPresneter from './PostsListPresenter'

const PostsListContainer = () => {
  const [posts, setPosts] = useState([])
  
  useEffect(() => {
    getPosts().then(data => setPosts(data))
  }, [])
  
  return (
    <PostsListPresneter posts={posts}/>
  );
};

export default PostsListContainer;