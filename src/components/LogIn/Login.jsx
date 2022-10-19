import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context-API/UseContext';
import {FaGoogle } from 'react-icons/fa';

const Login = () => {
const {userLogIn,googleLoginWithPopUp}=useContext(AuthContext)
const navigate=useNavigate()
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        console.log(email,password);
        userLogIn(email,password)
        .then(result =>{
            const user =result.user
            console.log(user);
            form.reset()
            navigate('/')
        })
        
    }
     const handleGooglePopUpLogin=()=>{
        googleLoginWithPopUp()
        .then(result =>{
            const user =result.user
            console.log(user);
            navigate('/')
        })
        .catch(error =>{
            console.log(error);
        })
     }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Login now!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <Link  className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                                <br />
                                    <p>                    
                                    <Link to='/register' className="label-text-alt link link-hover">You have no account Please Register?</Link>
                                    </p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <button 

                        onClick={handleGooglePopUpLogin} 
                        className=' btn btn-outline btn-primary w-52 mx-auto flex justify-center'>
                            <FaGoogle className='mt-1 mr-3' />
                             Google Log In
                             </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;