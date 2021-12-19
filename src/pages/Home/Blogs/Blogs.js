import React, { useEffect, useState } from 'react';
import './Blogs.css';
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('/blogData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);
    return (
        <div className='py-5'>
            <div className="container">
                <div className="section-title">
                    <h1 className='py-3'>
                        Latest Blog
                    </h1>
                </div>
                <div className="row">
                    {
                        blogs.map(blog => <div
                            key={blog.id}
                            className="col-lg-4 mb-4">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img className='img-fluid' src={blog.image} alt="" />
                                </div>
                                <div className="blog-info text-start p-3">
                                    <div className='d-flex justify-content-between'>
                                        <div className='blog-icon'>
                                            <i className='far fa-user'></i>
                                            <small className='fw-bold'> by: {blog.author}</small>
                                        </div>
                                        <div className='blog-icon'>
                                            <i className="fas fa-calendar-week"></i>
                                            <small className='fw-bold'> {blog.date}</small>
                                        </div>
                                    </div>
                                    <h4 className='mt-3'>{blog.title}</h4>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;