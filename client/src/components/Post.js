import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Post = ({ _id, title, summary, cover, content, createdAt, author }) => {
    console.log('cover', cover)
    return (
        <>
            <div className='post'>
                <div className='image'>
                    <Link to={`/post/${_id}`}>
                        <img src={'http://localhost:5000/' + cover} alt="" />
                    </Link>
                </div>
                <div className='texts'>
                    <Link to={`/post/${_id}`}>
                        <h2>{title}</h2>
                    </Link>
                    <p className='info'>
                        <a className='author' href='#/'>{author.username}</a>
                        <time>{moment(createdAt)?.format("DD/MM/YYYY")}</time>
                    </p>
                    <p className='summary'>{summary}</p>
                </div>
            </div>
        </>
    )
}

export default Post;