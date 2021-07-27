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
            liked: false,
            numberOfLikes: 0,
            numberOfComments: 0,
        }
    }

    componentDidMount(){
        this.fetchPost();
    }

    getStyle = (type) => {
        return (type)? STYLES[type]: {}
    }

    getColor = (type) => {
        return (type=='post')? '#2b2b2b':'#ffffffdf';
    }

    getfill = (type, icon) => {
        let fill = this.getColor(type);
        if(icon == 'like'){
            return (this.state.liked)? "#f55045" : fill;
        }
        return fill;
    }

    fetchPost = async () => {
        try{
            const result = await axios.get(`/api/posts/${this.props.post._id}`);
            const post = result.data.data.post;
            this.setState({ 
                post: post,
                liked: (post.likes.includes(this.props.userid)),
                numberOfLikes: post.likes.length,
                numberOfComments: post.comments.length,
            });
        }catch(err){
            console.log(err);
        }
    }

    render(){
        
        const post = this.state.post;
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
                                <span className={(type=='post')? "modal-title-post" : "modal-title"}>
                                    <Icon width={10}
                                        name='information'  
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

                            <PostComments post_id={post._id}/>
                            
                        </div>
                    )
                }
                
            </div>
        )
    }
}

export default PostDetailModal;
