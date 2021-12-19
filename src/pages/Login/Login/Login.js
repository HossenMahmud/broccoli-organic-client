import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
// import useFirebase from '../../../Hooks/useFirebase';
import './Login.css';
const Login = () => {
    const { loginUser } = useAuth();
    const [loginData, setLoginData] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    }
    return (
        <div className='register-bg py-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 col-12 col-sm-12 col-md-6 text-start mx-auto'>
                        <div className='register-form'>
                            <div className='py-3 text-center' style={{ backgroundColor: '#80B500', textDecoration: 'none' }}>
                                <span>Go to..... /</span>
                                <Link to="/" style={{ textDecoration: 'none' }}>Home</Link >
                            </div>
                            <h3 className='mb-3'>Login</h3>
                            <form onSubmit={handleLoginSubmit}>
                                <div className="mb-3">
                                    <input name="email" onBlur={handleOnBlur} type="email" className="form-control" placeholder="Enter Email" />
                                </div>
                                <div className="mb-3">
                                    <input name="password" onBlur={handleOnBlur} type="password" placeholder="Enter Password" className="form-control" />
                                </div>
                                <button type="submit" className="login-button mb-3">Submit</button>
                            </form>
                            <Link style={{ textDecoration: 'none' }} to='/register'>
                                Already Registered? Please Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;