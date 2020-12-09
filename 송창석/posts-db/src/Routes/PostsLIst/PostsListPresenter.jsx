import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import './PostsList.scss'

export default function PostsListPresenter({posts}) {
  return (
    <>
      <Button
        variant="contained"
        className={"btn btn_add"}
        component={Link}
        to={`/boards/create`}
      >
        추가
      </Button>
      <hr/>
      {
        posts.length > 0
        ?
        <ol className={"posts_list"}>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <Button
                  variant="contained"
                  className={"btn"}
                  component={Link}
                  to={`boards/${post.id}`}
                >
                  <strong><i>{post.id}</i>{post.title}</strong>
                  <span>{post.author}</span>
                </Button>
              </li>
            )
          })}
        </ol>
        :
        <div>리스트가 없습니다.</div>
      }
    </>
  );
}
