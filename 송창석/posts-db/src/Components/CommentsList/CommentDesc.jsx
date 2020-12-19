import React, { useState } from 'react';

const CommentDesc = ({comment, onDelete, onUpdate}) => {
  const [update, setUpdate] = useState({
    isModify: false,
    id: comment.id,
    body: comment.body,
    postId: comment.postId
  })

  const commentDeleteHandler = () => onDelete(comment.id)

  const ToggleUpdateHandler = () => setUpdate({
    ...update,
    isModify: !update.isModify
  })

  const handleChange = e => setUpdate({
    ...update,
    [e.target.name] : e.target.value
  })

  const commentUpdateHandler = e => {
    e.preventDefault()
    const {id, body, postId} = update
    onUpdate({id, body, postId})
    ToggleUpdateHandler()
  }

  return (
    <>
      {
        !update.isModify
        ?
        <div>{comment.body}</div>
        :
        <div>
          <form onSubmit={commentUpdateHandler}>
            <input
              type={"text"}
              name={"body"}
              value={update.body}
              onChange={handleChange}
            />
          </form>
        </div>
      }
      <div className={"comments_btns"}>
        {
          !update.isModify
          ?
          <button
            onClick={ToggleUpdateHandler}
          >
            수정
          </button>
          :
          <button
            onClick={commentUpdateHandler}
          >
            확인
          </button>
        }
        
        <button
          onClick={commentDeleteHandler}
        >
          삭제
        </button>
      </div>
    </>
  );
};

export default CommentDesc;