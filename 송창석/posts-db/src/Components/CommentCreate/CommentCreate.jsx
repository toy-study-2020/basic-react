import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

const CommentCreate = ({id, onSubmit}) => {
  const [comment, setComment] = useState({
    body: "",
    postId: Number(id)
  })

  const handleChange = e => setComment({
    ...comment,
    [e.target.name] : e.target.value
  })

  const onSubmitHandler = e => {
    e.preventDefault()
    const {body, postId} = comment
    if(body !== "") {
      onSubmit({body, postId})
      setComment({
        ...comment,
        body: ""
      })
    } else {
      alert("내용을 입력해주세요.")
    }
  }

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmitHandler}>
      <div className={"form_wrap comment"}>
        <TextField
          id="outlined-basic"
          label="댓글을 입력하세요."
          variant="outlined"
          name={"body"}
          value={comment.body}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          className={"btn btn_add"}
          onClick={onSubmitHandler}
        >
          추가
        </Button>
      </div>
    </form>
  );
};

export default CommentCreate;