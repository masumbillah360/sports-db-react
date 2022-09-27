import React from 'react';
import Cart from '../Cart/Cart';
import Players from '../Players/Players';
import './Home.css'

const Home = () => {
    return (
        <div className='container'>
            <div className="players">
                <Players></Players>
            </div>
            <div className="cart">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;