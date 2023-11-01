import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Link className='logo' to='/'>Blogs</Link>

            <nav>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </nav>
        </header>
    )
}

export default Header