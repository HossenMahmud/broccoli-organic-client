import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth'
const AddReview = () => {
    const { user } = useAuth();
    const [review, setReview] = useState({});

    const email = `${user.email}`;
    const name = `${user.displayName}`;

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...review };
        newReviewData[field] = value;
        setReview(newReviewData);
    }

    const allReviewData = {

        email: email,
        name: name,
        ...review
    }

    const handleReviewSubmit = (e) => {
        // Collect data
        const reviewData = {
            ...allReviewData
        }
        fetch("https://pure-sea-65908.herokuapp.com/addReviews", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(reviewData),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Successfully Added Review");
                    e.target.reset();
                }
            });
        e.preventDefault();
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <h2 className='mb-3'>Add Product Review</h2>
                        <div className="review-form">
                            <form onSubmit={handleReviewSubmit}>
                                <div className="mb-3">
                                    <input min="1" max="5" required onBlur={handleOnBlur} name="rating" type="number" placeholder="Enter Our Food Quality (0-5)" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <textarea required onBlur={handleOnBlur} name="message" type="text" placeholder="Enter Review Message" className=" form-control" />
                                </div>
                                <button type="submit" className="btn btn-warning mb-3 fw-bold">Submit Review</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AddReview;