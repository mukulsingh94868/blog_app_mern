import { Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

const Header = () => {
    const {userInfo, setUserInfo} = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/profile', {
            credentials: 'include',
        }).then((response) => response.json().then((userInfo) => {
            setUserInfo(userInfo);
        }))
    }, [setUserInfo]);

    const logout = () => {
        fetch('http://localhost:5000/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
    };
    const username = userInfo?.username;
    return (
        <header>
            <Link className='logo' to='/'>Blogs</Link>
            <nav>
                {username && (
                    <>
                        <Link to="/create">Create New post</Link>
                        <Typography onClick={logout}>Logout</Typography>
                    </>
                )}
                {!username && (
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </>
                )}
            </nav>
        </header>
    )
}

export default Header