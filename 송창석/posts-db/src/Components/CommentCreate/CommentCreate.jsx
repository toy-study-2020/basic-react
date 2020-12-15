import { Button, TextField } from '@material-ui/core';
import React from 'react';

const CommentCreate = ({body, onChange, onSubmit}) => {
  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <div className={"form_wrap comment"}>
        <TextField
          id="outlined-basic"
          label="댓글을 입력하세요."
          variant="outlined"
          name={"body"}
          value={body}
          onChange={onChange}
        />
        <Button
          variant="contained"
          className={"btn btn_add"}
          onClick={onSubmit}
        >
          추가
        </Button>
      </div>
    </form>
  );
};

export default CommentCreate;