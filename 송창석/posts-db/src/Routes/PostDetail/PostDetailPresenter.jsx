import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import Comment from '../../Components/Comment/index'
import './PostDetail.scss'

const PostDetailPresenter = ({ post, id, goBack, onDelete }) => {
  return (
    <>
      <Button
        variant="contained"
        className={"btn btn_back"}
        onClick={goBack}
      >
        뒤로가기
      </Button>
      <Button
        variant="contained"
        className={"btn btn_update"}
        component={Link}
        to={`/boards/update/${id}`}
      >
        수정
      </Button>
      <Button
        variant="contained"
        className={"btn btn_del"}
        onClick={onDelete}
      >
        삭제
      </Button>
      <hr/>
      <div className={"detail_wrap"}>
        <section className={"sec_detail"}>
          <h4>제목 : {post.title}</h4>
          <span>작성자 : {post.author}</span>
        </section>
        <Comment id={id} />
      </div>
    </>
  );
};

export default PostDetailPresenter;