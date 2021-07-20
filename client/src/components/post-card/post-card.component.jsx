import React from 'react';
import STYLES from './card-styles.data';
import Icon from '../../assets/icon.index'

import './post-card.styles.css';

const PostCard = ({_id, type, author, post_ts, content, likes, comments}) => (
    <div 
        className='post-card' 
        id={_id}
        style={getStyle(type).general}
    >
        <div 
            className='post-card-header'
            style={(type)?STYLES[type].header:{}}
        >
            <span className='post-author'>{author}</span>
            <div className='post-time'>{post_ts}</div>
        
        </div>
        
        <div 
            className='post-card-body'
            style={(type)?STYLES[type].body:{}}
        >
            <p className='post-content'>{content}</p>
        </div>
        
        <div 
            className='post-card-footer'
            style={(type)?STYLES[type].footer:{}}
        >
            <div className='post-action like'>
                <Icon name={"like"} className={"action"} width={5} fill={"#f55045"}/>
                <span>{likes.length}</span>
            </div>
            <div className='post-action comment'>
                <Icon name={"comment"} className={"action"} width={5} fill={"#ff863b"}/>
                <span>{comments.length}</span>
            </div>
        </div>
    </div>
);

const getStyle = (type) => {
    return (type)? STYLES[type]: {}
}

export default PostCard;
