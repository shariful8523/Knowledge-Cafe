import React from "react";
import PropTypes from "prop-types";

const BlogCard = ({ blog }) => {
  const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;

  return (
    <div className="max-w-xl bg-white rounded-lg shadow-md overflow-hidden border mb-5 ml-40 mt-10">
      {/* Cover Image */}
      <div className="w-full">
        <img src={cover} alt={title} className="w-full h-52 object-cover" />
      </div>

      {/* Blog Content */}
      <div className="p-4">
        {/* Author Info */}
        <div className="flex items-center space-x-3">
          <img src={author_img} alt={author} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="text-sm font-semibold">{author}</p>
            <p className="text-xs text-gray-500">{posted_date}</p>
          </div>
          <span className="  text-xs text-gray-500">{reading_time} min read</span>
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
