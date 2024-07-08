import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Blogsbar from '../Components/Blogsbar';

export default function Blogs() {
    const[blogs, setBlogs] = useState([]);
  return (
    <>
    <Blogsbar/>
    
    <div>
        <h1> The JSbin blogs</h1>
    {blogs.map((blog) =>{
        return (
            <>
             <p className="text-base mt-6">
                <span className="pe-4">{blog.createdAt.slice(0, 10)}</span>
                <span className="underline decoration-solid text-blue-700">
                  <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
                </span>
              </p>

              <p className="mt-2 truncate ...">{blog.desc}</p>
              <Link
                className="underline decoration-solid text-blue-700"
                to={`/blogs/${blog._id}`}
              >
                Read Post
              </Link>
            </>
        )
    })}
    </div>

    </>
  )
}
