import React, { useEffect, useState } from 'react';
import './MangeReviews.css';

const MangeReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    // Order Delete Function
    const handleDelete = (id) => {
        let conform = window.confirm('Are You Sure Delete Item?');
        if (conform) {
            fetch(`http://localhost:5000/deletereview/${id}`, {
                method: "DELETE",
                headers: { "Content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((result) => {
                    if (result.deletedCount) {
                        alert('Succesfully Deleted');
                        const remainingUser = reviews.filter(user => user._id !== id);
                        setReviews(remainingUser)
                    }

                });
        }
        else {
            alert('Delete Canceled')
        }
    };
    return (
        <div>
            <div className="container my-5">
                <div className="review-title">
                    <h2 className='fw-bold'>All reviews</h2>
                </div>
                <div className="row">
                    <div className=" table-responsive table-responsive-sm table-responsive-md">
                        <table className="table table-success table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col">Message</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    reviews.map((review, index) => (
                                        <tr key={review._id}>
                                            <td>{index}</td>
                                            <td>{review.name}</td>
                                            <td>{review.email}</td>
                                            <td>{review.rating}</td>
                                            <td>{review.message.slice(0, 30)}...</td>
                                            <td className='order-icon'>
                                                <i className="fas fa-trash-alt icon2" onClick={() => handleDelete(review._id)}></i>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MangeReviews;