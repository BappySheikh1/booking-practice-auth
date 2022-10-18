import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context-API/UseContext';
import './Header.css'

const Header = () => {
    const {user} =useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                <div className='header-container'>
                    <Link to='/home'>Home</Link>
                <Link to='/login'>LogIn</Link>
                <Link to='/register'>Register</Link>
                <span>{user.displayName}</span>
                </div>
            </div>
            
        </div>
    );
};

export default Header;