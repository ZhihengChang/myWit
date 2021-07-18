import React from 'react';
import PostCard from '../post-card/post-card.component';

import './post-card-list.styles.css';

class PostCardList extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        console.log(this.props.data);
        return (
            <div className='post-container'>
                {
                    this.props.data.map(({_id, ...postProps}) => <PostCard key={_id} {...postProps} />)
                }
            </div>
        )
    }
}

export default PostCardList;