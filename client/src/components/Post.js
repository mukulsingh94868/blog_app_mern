import React from 'react';
import MemorizzText from '../assets/memoriesText.png';

const Post = () => {
    return (
        <>
            <div className='post'>
                <div className='image'>
                    <img src={MemorizzText} alt="" />
                </div>
                <div className='texts'>
                    <h2>Full house Party</h2>
                    <p className='info'>
                        <a className='author' href='#/'>Blog App</a>
                        <time>2023-22-01 12:43</time>
                    </p>
                    <p className='summary'>Today we make a Blog App MERN</p>
                </div>
            </div>
        </>
    )
}

export default Post