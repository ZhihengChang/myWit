import React from 'react';
import { Link } from 'react-router-dom';

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

    handleSubmit = event => {
        event.preventDefault();
        console.log("submit the form");
        this.setState({ username: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return(
            <div className='login'>
                <form className='login-form' onSubmit={this.handleSubmit}>
                    <div className='login-form-username'>
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
                    </div>
                    <div className='login-form-password'>
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
                    </div>
                    <div className='login-form-actions'>
                        <Link className='action' to='/register'>
                            Don't have an account?
                        </Link>
                        <Link className='action' to='/recover'>
                            Forgot password?
                        </Link>
                    </div>
                    <div className='login-form-submit'>
                        <CustomButton type='submit'>Login</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;