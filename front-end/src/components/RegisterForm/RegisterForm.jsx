import React, { useState } from 'react';
import './RegisterForm.css'

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleUsernameChange = e => setUsername(e.target.value);
    const handlePasswordChange = e => setPassword(e.target.value);
    const handleEmailChange = e => setEmail(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form action="post" className='register-form' onSubmit={handleSubmit}>
            <input type="text" placeholder="username" value={username} onChange={handleUsernameChange} />
            <input type="email" placeholder="email" value={email} onChange={handleEmailChange} />
            <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
            <button type="submit">Register</button>
        </form>
    )
}

export default RegisterForm;