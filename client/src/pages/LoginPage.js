import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const { setUserInfo } = useContext(UserContext);

  const login = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
      credentials: 'include'
    });

    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      })
    } else {
      alert('wrong credentials');
    }
  };

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <>
      <form className='login' onSubmit={login}>
        <h1>Login</h1>
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

        <button>login</button>
      </form>
    </>
  )
}

export default LoginPage