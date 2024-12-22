import React from 'react'
import PostService from "../../services/post.services.js"
import { Link } from 'react-router-dom'

function PostCard({

    id,
    title,
    description,
    image,
    date,
    //likes,
    author
}) {


    return (
        <Link
            to={`/posts/${id}`}
            className="card">
            <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" >
                
                    <img src={image} loading="lazy" alt={title} className="w-full h-48 rounded-t-md" />
                    <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                        <div className="flex-none w-10 h-10 rounded-full">
                            <img 
                            src=
                            {author}
                            className="w-full h-full rounded-full" alt={author} />
                        </div>
                        <div className="ml-3">
                            <span className="block text-gray-900">
                                {author}
                            </span>
                            <span className="block text-gray-400 text-sm">{date}</span>

                        </div>
                    </div>
                    <div className="pt-3 ml-4 mr-2 mb-3">
                        <h3 className="text-xl text-gray-900">
                            {title}

                        </h3>
                        <p className="text-gray-400 text-sm mt-1">
                            {description}

                        </p>
                    </div>
                
            </article>
        </Link>
    )

}
export default PostCard