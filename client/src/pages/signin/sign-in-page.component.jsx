import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../../components/sign-in/sign-in.component';
import Icon from '../../assets/icon.index';

import './sign-in-page.styles.css';

const SignInPage = () => (
    <div className='background'>
        <div>
            <Link to="/">
                <Icon className='wentworth' name='wentworth' width={100} />
            </Link>  
        </div>
        <div className='signin'>
            <SignIn />
        </div>
    </div>
);

export default SignInPage;