import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

import './RegisterPage.css'

const RegisterPage = () => {

    return (
        <section className='register-wrap'>
            <RegisterForm />
            <article style={{ textAlign: 'center' }}>
                <Link to='/login'>log in</Link>
            </article>
        </section>
    )
}

export default RegisterPage;