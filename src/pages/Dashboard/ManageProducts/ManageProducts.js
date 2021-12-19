import React, { useEffect, useState } from 'react';
import './ManageProducts.css';
const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://pure-sea-65908.herokuapp.com/foods')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    // Order Delete Function
    const handleDelete = (id) => {
        let conform = window.confirm('Are You Sure Delete Item?');
        if (conform) {
            fetch(`https://pure-sea-65908.herokuapp.com/deleteFood/${id}`, {
                method: "DELETE",
                headers: { "Content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((result) => {
                    if (result.deletedCount) {
                        alert('Succesfully Deleted')
                        const remainingUser = products.filter(user => user._id !== id);
                        setProducts(remainingUser)
                    }

                });
        }
        else {
            alert('Delete Canceled')
        }

    };

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-12 mb-3 text-center">
                        <div className="manage-product-title">
                            <h3>Manage Organic Food Items</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        products.map(product => <div key={product._id} className="col-lg-2 mb-4">
                            <div className="text-start manage-product-item">
                                <img className='img-fluid' src={product.image} alt="" />
                                <div className="py-3">
                                    <h5 className='text-black'>{product.title}</h5>
                                    <h3 className='text-start'><span style={{ color: '#D3A300' }}>$</span>{product.price}</h3>
                                    <div className='d-flex justify-content-between'>
                                        <button onClick={() => handleDelete(product._id)} className='btn btn-danger'>Delete</button>
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                    {/* Update product model */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Update Product</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <h5 className='text-warning'>Product Update System Comming Soon</h5>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;