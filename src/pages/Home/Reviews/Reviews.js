import React from 'react';
import './Reviews.css';
import review1 from '../../../images/review1.jpg'
import review2 from '../../../images/review2.jpg'
const Reviews = () => {
    return (
        <div className='reviews-bg py-5'>
            <div className="container">
                <div className="section-title">
                    <h1 className='py-3'>
                        Featured Products
                    </h1>
                </div>
                <div className="row">
                    <div className="col-lg-6 text-start">
                        <div style={{ backgroundColor: "white" }} className="review-item p-4">
                            <div className="row">
                                <div className="col-4">
                                    <img src={review1} className='img-fluid' alt="" />
                                </div>
                                <div className="col-lg-8">
                                    <div className="review-content mt-4">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, nihil! Facere, distinctio earum! Maiores odio earum placeat atque voluptas fugiat.</p>
                                        <h5>Hossen Mahmud</h5>
                                        <h6>Founder</h6>
                                    </div>
                                    <div className='text-end'>
                                        <i className="far fa-comments" style={{ color: "#8cb2b2", fontSize: '50px' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 text-start">
                        <div style={{ backgroundColor: "white" }} className="review-item p-4">
                            <div className="row">
                                <div className="col-4">
                                    <img src={review2} className='img-fluid' alt="" />
                                </div>
                                <div className="col-lg-8">
                                    <div className="review-content mt-4">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, nihil! Facere, distinctio earum! Maiores odio earum placeat atque voluptas fugiat.</p>
                                        <h5>Hossen Mahmud</h5>
                                        <h6>Founder</h6>
                                    </div>
                                    <div className='text-end'>
                                        <i className="far fa-comments" style={{ color: "#8cb2b2", fontSize: '50px' }}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Reviews;