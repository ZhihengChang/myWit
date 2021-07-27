import React from 'react';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-up-page.styles.css';

const SignUpPage = (props) => (
    <div className='base'>
        <SignUp 
            history={props.history}
            handleAuthentication = {props.handleAuthentication}
        />
    </div>
);

export default SignUpPage;
