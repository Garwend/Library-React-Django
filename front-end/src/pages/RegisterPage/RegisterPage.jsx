import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

import './RegisterPage.css'

const RegisterPage = () => {

    return (
        <section className='register-wrap'>
            <RegisterForm />
            <article>
                <p>log in</p>
            </article>
        </section>
    )
}

export default RegisterPage;