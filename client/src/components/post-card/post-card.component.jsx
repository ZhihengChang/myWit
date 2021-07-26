import React from 'react';
import axios from 'axios';
import STYLES from './card-styles.data';
import Icon from '../../assets/icon.index'
import showAlert from '../../util/alert';

import './post-card.styles.css';

class PostCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post_id: null,
            liked: false,
            numberOfLikes: 0,
            numberOfComments: 0,
        }
    }

    componentDidMount(){
        const post = this.props.post;
        this.setState({
            post_id: post._id,
            liked: (post.likes.includes(this.props.userid)),
            numberOfLikes: post.likes.length,
            numberOfComments: post.comments.length,
        })
    }

    getStyle = (type) => {
        return (type)? STYLES[type]: {}
    }

    likePost = async () => {
        try{
            const result = await axios.post('/api/posts/like', {
                user_id: this.props.userid, 
                post_id: this.state.post_id
            });

            const liked = this.state.liked;
            let numberOfLikes = this.state.numberOfLikes;
            this.setState({ 
                liked: !liked, 
                numberOfLikes: (liked)? 
                    numberOfLikes - 1 : numberOfLikes + 1
            });
            
        }catch(e){
            console.log(e);
            showAlert('error', 'Please sign in');
        }   
    }

    commentPost = () => {
        this.props.select(this.props.post);
    }

    render(){
        const liked = this.state.liked;
        const post = this.props.post;
        const type = post.type;

        return (
            <div className='post-card' id={post._id}
                style={this.getStyle(type).general}
            >
                <div className='post-card-header'
                    style={this.getStyle(type).header}
                >
                    <span className='post-author'>{post.author}</span>
                    <div className='post-time'>{post.post_ts}</div>
                
                </div>
                
                <div className='post-card-body'
                    style={this.getStyle(type).body}
                >
                    <p className='post-content'>{post.content}</p>
                </div>
                
                <div className='post-card-footer'
                    style={this.getStyle(type).footer}
                >
                    <div className='post-action like' onClick={this.likePost}>
                        <Icon name={"like"} className={"action"} width={5} fill={(liked)? "#f55045" : "gray"}/>
                        <span>{this.state.numberOfLikes}</span>
                    </div>
                    <div className='post-action comment' onClick={this.commentPost}>
                        <Icon name={"comment"} className={"action"} width={5} fill={"gray"}/>
                        <span>{this.state.numberOfComments}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCard;
