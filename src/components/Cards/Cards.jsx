import React from 'react';
import { Link } from 'react-router-dom';

const Cards = () => {
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl mb-5">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <Link to='/id-1'><button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>
            </div>
            {/* card-1 */}
            <div className="card card-side bg-base-100 shadow-xl mb-5">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <Link to='/id-2'><button className="btn btn-primary">Buy Now</button></Link>
                        
                    </div>
                </div>
            </div>
            {/* card-2 */}
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <Link to='/id-3'><button className="btn btn-primary">Buy Now</button></Link>
                    </div>
                </div>
            </div>
            {/* card-3 */}
            
        </div>
    );
};

export default Cards;