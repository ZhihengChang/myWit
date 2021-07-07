import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import showAlert from '../../util/alert';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.css';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            wit_id: '',
            username: '',
            email: '',
            password: '',
            passwordConfirm: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        try {
            let result = await axios.post('/api/users/signup', { 
                wit_id: this.state.wit_id,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                passwordConfirm: this.state.passwordConfirm
            });
            let response = result.data;

            console.log(response);
            showAlert('success', 'Signed up successfully!');
            
            window.setTimeout(()=>{
                this.props.handleAuthentication(response.token, response.data.user);
                this.props.history.push('/');
            }, 1000);
            
        } catch(err) {
            console.log(err.response.data);
            showAlert('error', err.response.data.message);
        }
        
        this.setState({ 
            wit_id: '',
            username: '',
            email: '',
            password: '',
            passwordConfirm: ''
        });
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='signup'>
                <p>Sign up</p>
                <form className='signup-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        id='wit_id' 
                        type='text' 
                        name='wit_id'
                        icon='id'
                        fill='orange'
                        value={this.state.wit_id} 
                        label="WIT ID"
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        id='usn' 
                        type='text' 
                        name='username'
                        icon='username'
                        fill='orange'
                        value={this.state.username} 
                        label="Username"
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        id='eml' 
                        type='email' 
                        name='email'
                        icon='email'
                        fill='orange'
                        value={this.state.email} 
                        label="Email"
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        id='pwd' 
                        type='password' 
                        name='password'
                        icon='password'
                        fill='orange'
                        value={this.state.password}
                        label="Password"
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        id='cfm' 
                        type='password' 
                        name='passwordConfirm'
                        icon='confirm'
                        fill='orange'
                        value={this.state.passwordConfirm}
                        label="Confirm Password"
                        handleChange={this.handleChange}
                        required
                    />

                    <div className='form-actions'>
                        <Link className='action' to='/signin'>
                            Have an account?
                        </Link>
                        <Link className='action' to={{ pathname:'https://wit.edu/about/contact-us'}} target='_blank'>
                            Not a WIT student?
                        </Link>
                    </div>
                    <div className='form-submit'>
                        <CustomButton type='submit'>Create account</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;