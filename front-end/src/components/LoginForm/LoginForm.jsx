import React, { useState } from 'react';
import './LoginForm.css'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = e => setUsername(e.target.value);
    const handlePasswordChange = e => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form action="post" className='login-form' onSubmit={handleSubmit}>
            <input type="text" placeholder="username" value={username} onChange={handleUsernameChange} />
            <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
            <button type="submit">Log In</button>
        </form>
    )
}

export default LoginForm;