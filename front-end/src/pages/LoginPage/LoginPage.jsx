import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';

import './LoginPage.css'

const LoginPage = () => {

    return (
        <section className='login-wrap'>
            <LoginForm />
            <article style={{ textAlign: 'center' }}>
                <Link to='/register'>register</Link>
            </article>
        </section>
    )
}

export default LoginPage;