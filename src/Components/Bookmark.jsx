import React from 'react';
import Book from './Book';

const Bookmark = ({bookmark}) => {


    return (
        <div className='md:w-1/3 '>
            <h1 className='font-bold text-xl'> Bookmark : {bookmark.length}</h1>
            
            {
                  bookmark.map(bookmark => <Book bookmark={bookmark}></Book>)
            }
        </div>
    );
};

export default Bookmark;