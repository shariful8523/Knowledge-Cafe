import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const Blogs = ({handeladdBookmark}) => {
    const [Blogss, SetBlogss] = useState([]);

    useEffect(() => {
        fetch('../../public/blogs.json')
            .then(res => res.json())
            .then(data => SetBlogss(data))
    }, []);

    return (
        <div className='md:w-2/3 ml-8'>
            <h1 className='text-xl font-bold'>Blogs: {Blogss.length}</h1>

            {

                Blogss.map(blog => 
                
                <BlogCard
                
                
                key={blog.id} blog={blog}
                handeladdBookmark={handeladdBookmark}
                
                
                > 
                </BlogCard>)
            }
        </div>
    );
};

export default Blogs;
