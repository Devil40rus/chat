import React from "react"
import { Route } from 'react-router-dom';

import LoginForm from '../../modules/LoginForm/components/LoginForm';
import RegisterForm from '../../modules/RegisterForm/components/RegisterForm';

import './Auth.css';

const Auth = () => (
    <section className="auth">
        <div className="auth__content">
            <Route exact path={["/", "/login"]} component={LoginForm} />
            <Route exact path="/register" component={RegisterForm} />
        </div>
    </section>
)

export default Auth;
