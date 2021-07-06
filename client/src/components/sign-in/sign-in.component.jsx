import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import showAlert from '../../util/alert';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.css';


class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        try {
            const username = this.state.username;
            const password = this.state.password;

            let result = await axios.post(
                '/api/users/login', 
                { username, password }
            );

            console.log(result.data);
            showAlert('success', `Hello, ${username}`);
            //go to home page
        } catch(err) {
            console.log(err.response.data);
            showAlert('error', err.response.data.message);
        }
        this.setState({ username: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='login'>
                <p>Sign in</p>
                <form className='login-form' onSubmit={this.handleSubmit}>
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
                    <div className='form-actions'>
                        <Link className='action' to='/register'>
                            Don't have an account?
                        </Link>
                        <Link className='action' to='/recover'>
                            Forgot password?
                        </Link>
                    </div>

                    <div className='form-submit'>
                        <CustomButton type='submit'>Login</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;