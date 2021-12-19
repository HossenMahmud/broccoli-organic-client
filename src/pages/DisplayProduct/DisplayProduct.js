import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayProduct.css';
const DisplayProduct = (props) => {
    const { title, image, price, _id } = props.product;
    return (
        <>
            <div className='col-lg-3 mb-4'>
                <div className="product-item">
                    <div className="product-img">
                        <img className='img-fluid' src={image} alt="" />
                        <div className="overlay text-center">
                            <Link to={`purchase/${_id}`} style={{ textDecoration: 'none', color: 'white' }}>
                                Buy Now
                            </Link>
                        </div>
                    </div>
                    <div className='product-info p-3'>
                        <h5 className='mt-3'>{title}</h5>
                        <h3>${price}</h3>
                    </div>
                </div>
            </div >
        </>
    );
};

export default DisplayProduct;