import React from 'react';
import { Link } from 'react-router-dom'
import './PostsList.scss'

export default function PostsListPresenter({posts}) {

    return (
        <ul className={"posts_list"}>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <Link to={`boards/${post.id}`}>
                  <strong>{post.title}</strong>
                  <span>{post.author}</span>
                </Link>
              </li>
            )
          })}
        </ul>
    );
}
