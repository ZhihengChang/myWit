import React from 'react';
import PostCard from '../post-card/post-card.component';

import './post-card-list.styles.css';

const PostCardList = ({data, userid, styles, select}) => {
    return (
    <div className='post-container' style={styles}>
        {
            data.map((post, index) => <PostCard key={index}  post={post} userid={userid} select={select}/>)
        }
    </div>
)}

export default PostCardList;