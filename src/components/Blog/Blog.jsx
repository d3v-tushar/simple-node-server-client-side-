import React from 'react';
import { useActionData } from 'react-router-dom';
import useTitle from '../../../Custom Hook/UseTitle/UseTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div>
            <h2>This is Blog</h2>
        </div>
    );
};

export default Blog;