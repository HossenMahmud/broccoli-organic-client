import React from 'react';
import './Discount.css';
import ditem1 from '../../../images/1.jpg';
import ditem2 from '../../../images/2.jpg';
import ditem3 from '../../../images/3.jpg'
const Discount = () => {
    return (
        <div className='my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="discount-item">
                            <img src={ditem1} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="discount-item">
                            <img src={ditem2} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="discount-item">
                            <img src={ditem3} className='img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discount;