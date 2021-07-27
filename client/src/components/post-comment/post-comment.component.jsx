import React from 'react';
import axios from 'axios';
import Icon from '../../assets/icon.index';

import './post-comment.styles.css';

class PostComments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        const comments = this.props.comments;

        return (
            <div className='post-comments'>
                <ul className='post-comments-list'>
                    {
                        comments.length === 0 ?
                        <li>
                            No Comment yet.
                        </li>
                        :
                        comments.map((comment)=>{
                            return (
                                <li>
                                    <div className='comment'>
                                        <span className='comment-username'>{`${comment.username}: `}</span>
                                        <span className='comment-message'>{comment.message}</span>
                                        <span className='comment-comment_ts'>{new Date(comment.comment_ts).toDateString()}</span>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default PostComments;