import React from 'react';
import { Link } from 'react-router-dom';
import './CardDetail.css'

const CardDetails = () => {
    return (
        <div className='text-center'>
             <h1 className='text-4xl my-36 font-bold'>This is card Details Components</h1>
             <Link to='/'><h2 className='text-3xl mb-64'>Different Buy</h2></Link>
        </div>
    );
};

export default CardDetails;