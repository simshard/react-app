
import React from 'react';
import { useParams } from 'react-router';

const BlogPost = () => {
 const params = useParams();
    return (
        <div>
            <h1>Blog Post X: {params.id} </h1>
        </div>
    )
}

export default  BlogPost;