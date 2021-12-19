import React, { useEffect, useState } from 'react';
import DisplayProduct from '../DisplayProduct/DisplayProduct';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import ProductBanner from './ProductBanner/ProductBanner';
import './Products.css';
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://pure-sea-65908.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <>
            <Header></Header>
            <ProductBanner></ProductBanner>
            {/* All product part Start */}
            <div className='py-5'>
                <div className="container">
                    <div className="section-title">
                        <h1 className='py-3'>
                            All Organic Foods
                        </h1>
                    </div>
                    <div className="row">
                        {
                            products.map(product => <DisplayProduct
                                key={product.id}
                                product={product}
                            ></DisplayProduct>)
                        }
                    </div>
                </div>
            </div>
            {/* All product part End */}
            <Footer></Footer>
        </>
    );
};

export default Products;