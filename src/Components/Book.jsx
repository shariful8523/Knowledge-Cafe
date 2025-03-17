import React from 'react';

const Book = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div>
            <h1 className='ml-5 mt-5 bg-slate-200  rounded-xl p-5'>{title}</h1>
        </div>
    );
};

export default Book;