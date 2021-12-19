import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayProduct from '../../DisplayProduct/DisplayProduct';
import './HomeProducts.css';
const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://pure-sea-65908.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='py-5'>
            <div className='container'>
                <div className="section-title">
                    <h1 className='py-3'>
                        Featured Products
                    </h1>
                </div>
                <div className="row">
                    {
                        products.slice(0, 8).map(product => <DisplayProduct
                            key={product.id}
                            product={product}
                        ></DisplayProduct>)
                    }
                    <div className="col-lg-12">
                        <Link to='products'>
                            <button className='product-btn'>See All Products</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;