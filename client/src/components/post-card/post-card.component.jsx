import React from 'react';
import STYLES from './card-styles.data';

import './post-card.styles.css';

const PostCard = ({type, author, post_ts, post_content, likes}) => (
    <div 
        className='post-card' 
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
            <p className='post-content'>{post_content}</p>
        </div>
        
        <div 
            className='post-card-footer'
            style={(type)?STYLES[type].footer:{}}
        >
            <button className='post-like'>
                <span>{likes}</span>
            </button>
        </div>
    </div>
);

const getStyle = (type) => {
    return (type)? STYLES[type]: {}
}

export default PostCard;
