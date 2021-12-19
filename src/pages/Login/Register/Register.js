import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
// import useFirebase from '../../../Hooks/useFirebase';
import './Register.css';

const Register = () => {
    const { registerUser, error, user, isLoading } = useAuth();
    const [registerData, setRegisterData] = useState({});
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }
    const handleRegisterSubmit = e => {
        if (registerData.password === registerData.repassword) {
            registerUser(registerData.email, registerData.password, registerData.name, navigate);
        }
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
                            <h3 className='mb-3'>Register</h3>
                            <form onSubmit={handleRegisterSubmit}>
                                <div className="mb-3">
                                    <input name="name" onBlur={handleOnBlur} type="text" className="form-control" placeholder="Enter Name" />
                                </div>
                                <div className="mb-3">
                                    <input name="email" onBlur={handleOnBlur} type="email" className="form-control" placeholder="Enter Email" />
                                </div>
                                <div className="mb-3">
                                    <input name="password" onBlur={handleOnBlur} type="password" placeholder="Enter Password" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <input name="repassword" onBlur={handleOnBlur} type="password" placeholder="Re-Type Password" className=" form-control" />
                                </div>
                                <button type="submit" className="login-button mb-3">Register</button>

                                {isLoading && <div class="spinner-border text-warning" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>}
                                {user?.email && <div class="alert alert-success" role="alert">
                                    Successfully User Created
                                </div>}
                                {error && <div class="alert alert-success" role="alert">
                                    {error}
                                </div>}

                            </form>
                            <Link style={{ textDecoration: 'none' }} to='/login'>
                                Already Registered? Please Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;