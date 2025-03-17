import React from "react";
import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa6";

const BlogCard = ({ blog , handeladdBookmark}) => {
  const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;

  return (
    <div className=" bg-white rounded-lg shadow-md overflow-hidden border mb-5 h-auto mt-10">
      {/* Cover Image */}
      <div className="w-full">
        <img src={cover} alt={title} className="w-full h-52 object-cover" />
      </div>

      {/* Blog Content */}
      <div className="p-4">
        {/* Author Info */}
        <div className="flex items-center ">
          <img src={author_img} alt={author} className="w-10 h-10 rounded-full object-cover" />
          <div className="ml-5">
            <p className="text-sm font-semibold">{author}</p>
            <p className="text-xs text-gray-500">{posted_date}</p>
          </div>
             
             <div className="ml-80">
                <span className="  text-xl text-gray-500">{reading_time} min read</span>
                   <button onClick={()=> handeladdBookmark(blog)} className="ml-3"><FaBookmark />
                   </button>
             </div>


          
        </div>

        {/* Title */}
        <h2 className="mt-2 text-lg font-bold text-gray-900">{title}</h2>

        {/* Hashtags */}
        <div className="mt-2 flex flex-wrap text-sm text-blue-500">
          {hashtags.map((tag, index) => (
            <span key={index} className="mr-2">#{tag}</span>
          ))}
        </div>

        {/* Mark as Read */}
        <p className="mt-3 text-blue-600 text-sm cursor-pointer hover:underline">Mark as read</p>
      </div>
    </div>
  );
};

// Props Validation

BlogCard.propTypes = {
  Blogss: PropTypes.array.isRequired,
};

export default BlogCard;
