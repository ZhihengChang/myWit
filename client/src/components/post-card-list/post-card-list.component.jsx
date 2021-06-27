import React from 'react';
import PostCard from '../post-card/post-card.component';

import './post-card-list.styles.css';

class PostCardList extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className='post-container'>
                {
                    this.props.data.map(({id, ...postProps}) => <PostCard key={id} {...postProps} />)
                }
            </div>
        )
    }
}

export default PostCardList;