import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Players from '../Players/Players';
import './Home.css'

const Home = () => {
    const [cart, setCart] = useState([]);
    console.log(cart);
    return (
        <div className='container'>
            <div className="players">
                <Players cart={cart} setCart={setCart}></Players>
            </div>
            <div className="cart">
                <Cart cart={cart} setCart= {setCart}></Cart>
            </div>
        </div>
    );
};

export default Home;