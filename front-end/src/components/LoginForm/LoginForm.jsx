import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../actions/userActions';

import './LoginForm.css'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = e => setUsername(e.target.value);
    const handlePasswordChange = e => setPassword(e.target.value);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.length !== 0 && password.length !== 0) {
            dispatch(loginUser(username, password));
        }
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