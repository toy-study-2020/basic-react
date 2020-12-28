import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import './PostCreate.scss'

const PostCreatePresenter = ({id, title, goBack, onChange, onSubmit}) => {
  return (
    <>
      <Button
        variant="contained"
        className={"btn btn_back"}
        onClick={goBack}
      >
        뒤로가기
      </Button>
      <hr/>
      <form noValidate autoComplete="off" onSubmit={onSubmit}>
        <div className={"form_wrap"}>
          <TextField
            id="outlined-basic"
            label="제목"
            variant="outlined"
            onChange={onChange}
            name={"title"}
            value={title}
          />
          <Button
            variant="contained"
            className={"btn btn_add"}
            onClick={onSubmit}
          >
            {id ? "수정" : "추가"}
          </Button>
        </div>
      </form>
    </>
  );
};

export default PostCreatePresenter;