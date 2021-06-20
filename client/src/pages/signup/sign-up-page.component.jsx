import React from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../../components/sign-up/sign-up.component';
import Icon from '../../assets/icon.index';

import './sign-up-page.styles.css';

const SignUpPage = () => (
    <div className='base'>
        <SignUp />
    </div>
);

export default SignUpPage;
