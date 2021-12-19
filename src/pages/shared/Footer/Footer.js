import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import payment from '../../../images/payment-4.png';
const Footer = () => {
    return (
        <>
            <div className="footer-bg py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-12 col-sm-12 col-md-6 mb-4">
                            <div className="footer-contact-info text-start">
                                <h4 className='mb-4'>Contact Info</h4>
                                <p>Address: 123 Main Street,Anytown,CA 12345 - USA.</p>
                                <p>Phone: (012) 800 000 789</p>
                                <p>Fax: (012) 800 888 789</p>
                                <p>Email: demo@hashthemes.com</p>
                                <div className='social-icons'>
                                    <Link to='/home'>
                                        <i className="fab fa-facebook-f"></i>
                                    </Link>
                                    <Link to='/home'>
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                    <Link to='/home'>
                                        <i className="fab fa-instagram"></i>
                                    </Link>
                                    <Link to='/home'>
                                        <i className="fab fa-linkedin-in"></i>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 col-sm-12 col-md-6 mb-4">
                            <div className="row footer-link text-start">
                                <div className="col-lg-6 col-12 col-sm-12 col-md-6">
                                    <div className="footer-link-item">
                                        <h4 className='mb-4'>Information</h4>
                                        <Link to="/home" className="nav-link text-black">Home</Link>
                                        <Link to="/home" className="nav-link text-black">About Us</Link>
                                        <Link to="/home" className="nav-link text-black">Quick Contact</Link>
                                        <Link to="/home" className="nav-link text-black">Blog Pages</Link>
                                        <Link to="/home" className="nav-link text-black">Client Feed</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-12 col-sm-12 col-md-6">
                                    <div className="footer-link-item">
                                        <h4 className='mb-4'>Information</h4>
                                        <Link to="/home" className="nav-link text-black">Extras</Link>
                                        <Link to="/home" className="nav-link text-black">Concord History</Link>
                                        <Link to="/home" className="nav-link text-black">Client Feed</Link>
                                        <Link to="/home" className="nav-link text-black">About Us</Link>
                                        <Link to="/home" className="nav-link text-black">Blog Pages</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 col-sm-12 col-md-6 mb-4">
                            <div className="footer-item text-start">
                                <h4 className='mb-4'>Get the app</h4>
                                <p>GreenLife App is now available on Google Play & App Store. Get it now.</p>
                                <h4 className='mb-4'>We Accept</h4>
                                <img src={payment} className='img-fluid' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-bottom-bg'>
                <div className="container">
                    <p className='pb-4'>Copyright © Hossen 2021. All Right Reserved.</p>
                </div>
            </div>
        </>
    );
};

export default Footer;