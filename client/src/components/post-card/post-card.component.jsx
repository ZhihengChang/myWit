import React from 'react';
import STYLES from './card-styles.data';
import Icon from '../../assets/icon.index'

import './post-card.styles.css';

class PostCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Liked: false
        }
    }

    getStyle = (type) => {
        return (type)? STYLES[type]: {}
    }

    render(){
        const post = this.props.post;
        const type = post.type;

        return (
            <div className='post-card' id={post._id}
                style={this.getStyle(type).general}
            >
                <div 
                    className='post-card-header'
                    style={this.getStyle(type).header}
                >
                    <span className='post-author'>{post.author}</span>
                    <div className='post-time'>{post.post_ts}</div>
                
                </div>
                
                <div 
                    className='post-card-body'
                    style={this.getStyle(type).body}
                >
                    <p className='post-content'>{post.content}</p>
                </div>
                
                <div 
                    className='post-card-footer'
                    style={this.getStyle(type).footer}
                >
                    <div className='post-action like'>
                        <Icon name={"like"} className={"action"} width={5} fill={"#f55045"}/>
                        <span>{post.likes.length}</span>
                    </div>
                    <div className='post-action comment'>
                        <Icon name={"comment"} className={"action"} width={5} fill={"#ff863b"}/>
                        <span>{post.comments.length}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCard;
