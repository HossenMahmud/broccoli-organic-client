import React from 'react';
import './Banner.css';
import Bicon from '../../../images/Banner-icon.png';
import banner1 from '../../../images/banner11.png';
// import banner2 from '../../../images/banner22.png';
const Banner = () => {

    return (
        <div className='banner-bg py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-start">
                        <div className="banner-info ms-3">
                            <div className='d-flex'>
                                <img src={Bicon} alt="" />
                                <h5 className='ms-2'>100% genuine Products</h5>
                            </div>
                            <h1>Tasty and Healthy</h1>
                            <h1>Organic Food</h1>
                            <button className='banner-btn mt-3'>EXPLORE PRODUCTS</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img className='img-fluid' src={banner1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;