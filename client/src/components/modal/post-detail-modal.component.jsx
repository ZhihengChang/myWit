import React from 'react';
import axios from 'axios';
import STYLES from '../post-card/card-styles.data';
import Icon from '../../assets/icon.index'
import showAlert from '../../util/alert';

import './modal.styles.css';
import './post-detail-modal.styles.css';

class PostDetailModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post_id: null,
            liked: false,
            numberOfLikes: 0,
            numberOfComments: 0,
            comments:[]
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

    render(){
        const liked = this.state.liked;
        const post = this.props.post;
        const type = post.type;

        return (
            <div className='webmodal'>
                <div className='modal-post-detail'
                    style={this.getStyle(type).general}
                >
                    <div className='modal-header' 
                        style={this.getStyle(type).header}
                    >
                        <span className={(type=='post')? "modal-title-post" : "modal-title"}>
                            <Icon name='information' width={10} fill={(type=='post')? 'gray' : 'white'} className={"icon"}/>
                            {post.author}
                        </span>
                        <span className='modal-close' onClick={this.props.close}>
                            <Icon name='close' width={10} fill={(type=='post')? 'gray' : 'white'} className={"close"}/>
                        </span>
                    </div>
                    
                    <div className='post-detail' 
                        style={this.getStyle(type).body}
                    >
                        {post.content}
                    </div>
                    
                    <div className='post-card-footer'
                        style={this.getStyle(type).footer}
                    >
                        <div className='post-action time'
                        style={this.getStyle(type).body}
                        >
                            {post.post_ts}
                        </div>
                        <div className='post-action like' onClick={this.likePost}>
                            <Icon name={"like"} className={"action"} width={5} fill={(liked)? "#f55045" : "gray"}/>
                            <span>{this.state.numberOfLikes}</span>
                        </div>
                        <div className='post-action comment' onClick={this.commentPost}>
                            <Icon name={"comment"} className={"action"} width={5} fill={"gray"}/>
                            <span>{this.state.numberOfComments}</span>
                        </div>
                    </div>
                    <div className='post-comments'>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default PostDetailModal;
