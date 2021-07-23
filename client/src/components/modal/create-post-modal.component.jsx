import React from 'react';
import axios from 'axios';
import Icon from '../../assets/icon.index'
import showAlert from '../../util/alert';

import './modal.styles.css';
import './create-post-modal.styles.css';


class CreatePostModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        try {
            
            const author = this.props.author;
            const content = this.state.content;

            let result = await axios.post(
                '/api/posts/create', 
                { author, content, post_ts: new Date()}
            );
            let response = result.data;
            console.log(response);
            
            showAlert('success', 'New moment posted!');
            setTimeout(()=>{
                this.props.close();
                window.location.reload();
            }, 500);
            

        } catch(err) {
            console.log(err);
            console.log(err.response.data);
            showAlert('error', err.response.data.message);
        }
        
        this.setState({ content: '' }, this.props.fetch);
    }

    render() {
        return(
            <div className='webmodal'>
                <div className='modal-post-create'>
                    <div className='modal-header'>
                        <span className='modal-title'>
                            <Icon name='pen' width={10} fill={"white"} className={"icon"}/>
                            New Moment
                        </span>
                        <span className='modal-close' onClick={this.props.close}>
                            <Icon name='close' width={10} fill={"white"} className={"close"}/>
                        </span>
                    </div>
                    <form className='form--create-post' onSubmit={this.handleSubmit}>
                        <div className='div__post-content'>
                            <textarea 
                                id='post-content'
                                name='content'
                                placeholder='Right now I am thinking ...'
                                onChange={(e) => {this.setState({content: e.target.value})}}
                            ></textarea>
                        </div>
                        
                        <div className='modal-footer'>
                            <div className='div__post-attachment'>
                                <label className='form-file-upload' htmlFor='post-attachment'>Upload Pictures</label>
                                <input id='post-attachment' type='file' name='attachment'></input>
                            
                            </div>
                            <button type='submit'>
                                <Icon name='post' width={10} fill={"white"} className={"post"}/>   
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default CreatePostModal;