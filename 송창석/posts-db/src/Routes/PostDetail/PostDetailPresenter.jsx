import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Comment from '../../Components/Comment/index'
import './PostDetail.scss'

const PostDetailPresenter = ({ post, update, id, onEvent }) => {
  const {goBack, onDelete, onToggle, onChange, onUpdate} = onEvent
  return (
      
    !update
    ?
    <>
      <Button
        variant="contained"
        className={"btn btn_update"}
        onClick={onToggle}
      >
        수정
      </Button>
      <Button
        variant="contained"
        className={"btn btn_back"}
        onClick={goBack}
      >
        뒤로가기
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
    :
    <>
      <div className={"update_wrap"}>
        <form noValidate autoComplete="off" onSubmit={onUpdate}>
          <div className={"form_wrap"}>
            <TextField
              id="outlined-basic"
              label="제목"
              variant="outlined"
              name={"title"}
              value={post.title}
              onChange={onChange}
            />
            <Button
              variant="contained"
              className={"btn btn_add"}
              onClick={onUpdate}
            >
              확인
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostDetailPresenter;