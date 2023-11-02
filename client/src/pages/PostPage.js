import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import moment from 'moment';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const PostPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [postInfo, setPostInfo] = useState(null);
    const { userInfo } = useContext(UserContext);
    useEffect(() => {
        fetch(`http://localhost:5000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                });
            });
    }, [id]);

    if (!postInfo) return '';
    return (
        <div className='post-page'>
            <h1>{postInfo?.title}</h1>
            <time>{moment(postInfo?.createdAt)?.format("DD/MM/YYYY")}</time>
            <div className='author'>By @{postInfo?.author?.username}</div>

            {
                userInfo?.id === postInfo?.author?._id && (
                    <div className='edit-row'>
                        <Button onClick={() => navigate(`/edit/${postInfo?._id}`)} className='buttonEdit' variant="contained" startIcon={<EditIcon />}>Edit the post</Button>
                    </div>
                )
            }

            <div className='image'>
                <img src={`http://localhost:5000/${postInfo?.cover}`} alt="" />
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
    )
}

export default PostPage