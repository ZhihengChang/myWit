import React from 'react';
import { Link } from 'react-router-dom';

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

    handleSubmit = event => {
        event.preventDefault();
        console.log("submit the form");
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
                        <Link className='action' to='https://wit.edu/about/contact-us'>
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