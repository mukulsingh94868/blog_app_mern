import React, { useEffect, useState } from 'react'
import Post from '../components/Post'

const IndexPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/post').then((response) => {
            response.json().then((posts) => {
                setPosts(posts);
            })
        })
    }, [])
    return (
        <>
            {
                posts?.length && posts?.map((post) => (
                    <Post {...post} />
                ))
            }
        </>
    )
}

export default IndexPage