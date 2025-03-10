import React from 'react';
import { Link } from 'react-router';

const Blog = () => {
    return (
        <div>
            <ul>
                <li><Link to="/blog/1" >post 1</Link></li>
                <li><Link to="blog/2" >post 2</Link></li>
            </ul>
        </div>
    )
}

export default Blog;