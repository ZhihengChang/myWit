import React from 'react';
import axios from 'axios';
import STYLES from '../post-card/card-styles.data';
import Icon from '../../assets/icon.index'
import showAlert from '../../util/alert';
import PostComments from '../post-comment/post-comment.component';

import './modal.styles.css';
import './post-detail-modal.styles.css';

class PostDetailModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null,
            message: '',
            comments:[],
            liked: false,
            numberOfLikes: 0,
            numberOfComments: 0,
        }
    }

    componentDidMount(){
        this.fetchPostDetail();
    }

    getStyle = (type) => {
        return (type)? STYLES[type]: {}
    }

    getColor = (type) => {
        return (type==='post')? '#2b2b2b':'#ffffffdf';
    }

    getfill = (type, icon) => {
        let fill = this.getColor(type);
        if(icon === 'like'){
            return (this.state.liked)? "#f55045" : fill;
        }
        return fill;
    }

    fetchPostDetail = async () => {
        try{
            const result = await axios.get(`/api/posts/${this.props.post_id}`);
            const post = result.data.data.post;
            const user = this.props.user;
            const user_id = (user)? user._id : '';
            this.setState({ 
                post: post,
                liked: (post.likes.includes(user_id)),
                numberOfLikes: post.likes.length,
                numberOfComments: post.comments.length,
            }, this.fetchComments);
        }catch(err){
            console.log(err);
        }
    }

    fetchComments = async () => {
        try{
            const post_id = this.props.post_id;
            const result = await axios.get(`/api/posts/comments/${post_id}`);
            const response = result.data;
            this.setState({ comments: response.data.comments });
        }catch(err){
            console.log(err);
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        try {
            const user = this.props.user;
            const comments = this.state.comments;
            if(user){
                const user_id = user._id;
                const username = user.username;
                const post_id = this.props.post_id;
                const message = this.state.message;

                let result = await axios.post('/api/posts/comment', 
                    { user_id, username, post_id, message, post_ts: new Date()}
                );
                let response = result.data;
                console.log(response);
                comments.push(response.comment);
                this.setState({ 
                    numberOfComments: this.state.numberOfComments + 1,
                    comments: comments
                });
            }else{
                showAlert('error', 'Please sign in');
            } 
        } catch(err) {
            console.log(err);
            console.log(err.response.data);
            showAlert('error', err.response.data.message);
        }
        
        this.setState({ message: '' });
    }

    render(){
        
        const post = this.state.post;
        const comments = this.state.comments;
        const type = (post)? post.type : '';

        return (

            <div className='webmodal'>
                {
                    post && 
                    (
                        <div className='modal-post-detail'
                            style={this.getStyle(type).header}
                        >
                            <div className='modal-header' >
                                <span className={(type==='post')? "modal-title-post" : "modal-title"}>
                                    <Icon width={10}
                                        name='detail'  
                                        className={"icon"}
                                        fill={this.getColor(type)}
                                    />
                                    {post.author}
                                </span>

                                <span className='modal-close' onClick={this.props.close}>
                                    <Icon width={10}
                                        name='close'
                                        fill={this.getColor(type)}
                                        className={"close"}
                                    />
                                </span>

                            </div>
                            
                            <div className='post-detail' 
                                style={{color: this.getColor(type)}}
                            >
                                {post.content}
                            </div>
                            
                            <div className='post-card-footer'
                                style={this.getStyle(type).footer}
                            >
                                <div className='post-action time'
                                    style={{color: this.getColor(type)}}
                                >
                                    {post.post_ts}
                                </div>
                            
                                <div className='post-action like' onClick={this.likePost}>
                                    <Icon width={5}
                                        name={"like"} 
                                        className={"action"}  
                                        fill={this.getfill(type, 'like')}
                                    />
                                    <span style={{color: this.getColor(type)}}>
                                        {this.state.numberOfLikes}
                                    </span>
                                </div>
                                
                                <div className='post-action comment' onClick={this.commentPost}>
                                    <Icon width={5}
                                        name={"comment"} 
                                        className={"action"} 
                                        fill={this.getfill(type, 'comment')}
                                    />
                                    <span style={{color: this.getColor(type)}}>
                                        {this.state.numberOfComments}
                                    </span>
                                </div>
                            </div>

                            <PostComments comments={comments}/>
                            
                            <form className='comment-form' onSubmit={this.handleSubmit}>
                                <input 
                                    type='text'
                                    placeholder='To my way of thinking ...' 
                                    value = {this.state.message}
                                    onChange={(e) => {this.setState({message: e.target.value})}} 
                                />
                                <button type='submit'>
                                    <Icon width={10}
                                        name='speak'  
                                        className={"speak"}
                                        fill={this.getColor(type)}
                                    />
                                </button>
                            </form>
                        </div>
                    )
                }
                
            </div>
        )
    }
}

export default PostDetailModal;
