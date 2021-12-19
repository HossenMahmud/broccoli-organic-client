import React, { useState } from 'react';

const AddProduct = () => {
    const [product, setProduct] = useState({})
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...product };
        newData[field] = value;
        setProduct(newData);
    }
    const handleProductSubmit = (e) => {
        // Collect data
        const foodData = {
            ...product
        }
        fetch("https://pure-sea-65908.herokuapp.com/addFoods", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(foodData),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Successfully Added Product");
                    e.target.reset();
                }
            });
        e.preventDefault();
    }
    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <h2 className='mb-3'>Add New Organic Food</h2>
                        <div className="review-form">
                            <form onSubmit={handleProductSubmit}>
                                <div className="mb-3">
                                    <input required onBlur={handleOnBlur} name="title" type="text" placeholder='Enter Food Name' className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <input required onBlur={handleOnBlur} name="price" type="number" placeholder='Enter Price' className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <input required onBlur={handleOnBlur} name="rating" type="number" placeholder='Enter Food Rating' className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <input required onBlur={handleOnBlur} name="image" type="text" placeholder="Put Watch Image Link" className=" form-control" />
                                </div>
                                <button type="submit" className="btn btn-warning mb-3 fw-bold">Add Watch</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;