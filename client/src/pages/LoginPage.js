import React from 'react'

const LoginPage = () => {
  return (
    <>
        <form className='login'>
            <h1>Login</h1>
            <input type='text' placeholder='Enter Email' />
            <input type='password' placeholder='Enter Password' />

            <button>login</button>
        </form>
    </>
  )
}

export default LoginPage