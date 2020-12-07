import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import './PostDetail.scss'
import Comment from '../../Components/Comment/index'

const PostDetailPresenter = ({post, comment}) => {
    const history = useHistory()

    return (
        <div>
            <Button
                variant="contained"
                className={"btn btn_back"}
                onClick={history.goBack}
            >
                BACK
            </Button>
            <Button
                variant="contained"
                className={"btn btn_del"}
                onClick={history.goBack}
            >
                DELETE
            </Button>
            <hr/>
            <section className={"sec_detail"}>
              <h4>제목 : {post.title}</h4>
              <span>작성자 : {post.author}</span>
            </section>
            <Comment comment={comment}/>
        </div>
    );
};

export default PostDetailPresenter;