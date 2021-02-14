import React from 'react';
import {useLocation} from 'react-router-dom';
import SignUp from '../../components/SignUp';
import SignIn from '../../components/Signin';

function Auth() {
    const location = useLocation();
    return (
        <div>
            {location.pathname === "/signup"?
            <SignUp></SignUp>:
            <SignIn></SignIn>}
        </div>
    )
}

export default Auth;
