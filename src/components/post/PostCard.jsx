import React from "react";
//import PostService from "../../services/post.services.js"
import { Link } from "react-router-dom";

function PostCard({
    id,
    title,
    description,
    image,
    date,

}) {


    return (

        <div className="bg-white rounded shadow-md p-4">
            <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
            <div className="gap-2">
            <h2 className="text-2xl font-bold mt-4">{title}</h2>
            <span>Date: {date.split('T')[0]}</span>
            </div>
            <p className="mt-2 text-gray-600">{description}</p>
            <Link to={`/posts/${id}`} className="text-blue-600 mt-4 inline-block">Read More</Link>
        </div>

    );
}
export default PostCard;
