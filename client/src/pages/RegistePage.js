import React, { useState } from 'react'

const RegistePage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const register = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        if (response.response === 200) {
            alert('Successfully registered');
        } else {
            alert('Successfully Failed');
        }
    };
    return (
        <form className='register' onSubmit={register}>
            <h1>Register</h1>
            <input
                type='text'
                placeholder='Enter Email'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type='password'
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type='submit'>Register</button>
        </form>
    )
}

export default RegistePage