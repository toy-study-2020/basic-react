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
      <ol className={"posts_list"}>
        {
          posts.length > 0
          ?
          posts.map((post) => {
            return (
              <li key={post.id}>
                <Button
                  variant="contained"
                  className={"btn"}
                  component={Link}
                  to={`boards/${post.id}`}
                >
                  <strong>{post.title}</strong>
                  <span>{post.author}</span>
                </Button>
              </li>
            )
          })
          :
          <li>리스트가 없습니다.</li>
        }
      </ol>
    </>
  );
}
