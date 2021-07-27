import React from 'react';
import axios from 'axios';
import Icon from '../../assets/icon.index';

import './post-comment.styles.css';

class PostComments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount(){
        this.fetchComments();
    }

    fetchComments = async () => {
        try{
            const post_id = this.props.post_id;
            const result = await axios.get(`/api/posts/comments/${post_id}`);
            const response = result.data;
            console.log(response.data.comments );
            this.setState({ comments: response.data.comments });
        }catch(err){
            console.log(err);
        }
    }

    render(){
        const comments = this.state.comments;

        return (
            <div className='post-comments'>
                <ul className='post-comments-list'>
                    {
                        comments.length === 0 ?
                        <li>
                            No Comment yet
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