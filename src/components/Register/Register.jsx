import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context-API/UseContext';

const Register = () => {
const {createUser,updateProfileName ,emailVarify}=useContext(AuthContext)
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target
        const name=form.name.value
        const email=form.email.value
        const password=form.password.value
        console.log(email,password,name);

        createUser(email,password)
        .then(result =>{
         const user=result.user
         console.log(user);
         form.reset();
         updateName(name);
         emailVarification();
         
        })
        .catch(error =>{
            console.log(error);
        })
       
    }
    const updateName=(name)=>{
        updateProfileName(name)
       .then(()=>{
        
       })
       .catch(error =>{
        console.log(error);
       })
    }
    const emailVarification=()=>{
        emailVarify()
        .then(()=>{
            toast.success('Please Check your email and verify account',{autoClose: 500})
            
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl font-bold">Please Register now!!!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required/>
                            </div>

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
                                    <Link to='/login' className="label-text-alt link link-hover ">You have account? Please Login</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;