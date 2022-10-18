import React from 'react';
import './Home.css'
import Picture from '../../assets/image/rm388-rm355-c22-mockup.jpg'
import Cards from '../Cards/Cards';

const Home = () => {
    return (
        <div className='mb-20'>
            <div className='home-container'>
                <img src={Picture} alt="" />
            </div>
            <div className='my-10'>
                <Cards />
            </div>
        </div>
    );
};

export default Home;