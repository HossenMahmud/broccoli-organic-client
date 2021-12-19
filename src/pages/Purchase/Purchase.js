import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Purchase.css';
const Purchase = () => {
    const { user } = useAuth();
    let { id } = useParams();
    const [product, setProduct] = useState([]);
    const [purchaseData, setPurchaseData] = useState({})

    // use to get single product
    useEffect(() => {
        fetch(`http://localhost:5000/food/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    const email = `${user.email}`;
    const name = `${user.displayName}`;
    const price = `${product?.price}`;
    const productName = `${product?.title}`;

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...purchaseData };
        newRegisterData[field] = value;
        setPurchaseData(newRegisterData);
    }

    const orderData = {
        email: email,
        name: name,
        productName: productName,
        price: price,
        ...purchaseData,
    }

    const handleOrderSubmit = (e) => {
        // Collect data
        const order = {
            ...orderData,
        }
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Successfully Order This Package");
                    e.target.reset();
                }
            });
        e.preventDefault();
    }

    console.log(orderData);



    return (
        <>
            {/* Product Details Banner */}
            <div className='product-details-banner'>
                <div className="container py-12">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="product-details-banner-info">
                                <h1 className='text-white'>Product Details</h1>
                                <div>
                                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link >
                                    <span style={{ color: 'white', frontWeight: 'bold' }}> | </span>
                                    <span style={{ color: 'red' }}>Product Page</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='purchase-bg'>
                <div className="container py-5">
                    <div className="row">
                        {/* Single Product All Info Start */}
                        <div className="col-lg-4">
                            <div className="purchase-img">
                                <img className='img-fluid' src={product?.image} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 text-start mt-4">
                            <div className="purchase-info">
                                <div className='rating'>
                                    <i className="fas fa-star text-danger"></i>
                                    <i className="fas fa-star text-danger"></i>
                                    <i className="fas fa-star  text-danger"></i>
                                    <i className="fas fa-star  text-danger"></i>
                                    <i className="fas fa-star-half  text-danger"></i>
                                    <span style={{ color: "#699403" }}> (95 Reviews)</span>
                                </div>
                                <h3>{product.title}</h3>
                                <h1>${product.price}</h1>
                                <div className='purches-border'>
                                    <p>Categories:  Food</p>
                                    <p>Tags:  Healthy, Vegetarian, Farm</p>
                                    <p>SKU:  N/A</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mt-4">
                            <div className='purchase-form'>
                                <h3 className='text-black mb-3'>Submit To Order</h3>
                                <form onSubmit={handleOrderSubmit}>
                                    <div className="mb-3">
                                        <input required name="quantity" onBlur={handleOnBlur} type="number" min="1" max="20" placeholder="Enter Quantity Per Kg" className=" form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input required name="phone" onBlur={handleOnBlur} type="phone" placeholder="Enter Phone" className=" form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input required name="address" onBlur={handleOnBlur} type="text" placeholder="Enter Address" className=" form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <input required name="date" onBlur={handleOnBlur} type="date" placeholder="Enter Date" className=" form-control" />
                                    </div>
                                    <button type="submit" className="btn btn-warning mb-3">Purches Now</button>
                                </form>

                            </div>
                        </div>

                        {/* Product Descripton start */}
                        <div className="col-lg-12">
                            <div className="single-product-description text-start my-5">
                                <h2 className='text-bold'>Description</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
                                    Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Purchase;