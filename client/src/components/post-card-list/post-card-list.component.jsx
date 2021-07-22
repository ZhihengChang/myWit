import React from 'react';
import PostCard from '../post-card/post-card.component';

import './post-card-list.styles.css';

const PostCardList = ({data, userid}) => {
    return (
    <div className='post-container'>
        {
            data.map((post, index) => <PostCard key={index}  post={post} userid={userid}/>)
        }
    </div>
)}

export default PostCardList;