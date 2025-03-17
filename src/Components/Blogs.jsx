import React, { useEffect, useState } from 'react';

const Blogs = () => {


    const [Blogs, SetBlogs] = useState([]);

    useEffect ( ()=> {

        fetch('../../public/blogs.json')
        .then( res => res.json())
        .then( data => SetBlogs(data))
    },[])
    return (
        <div className='md:w-2/3 ml-8'>
            <h1 className='text-xl font-bold'>Blogs: {Blogs.length} </h1>
        </div>
    );
};

export default Blogs;