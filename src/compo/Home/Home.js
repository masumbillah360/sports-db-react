import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Players from '../Players/Players';
import './Home.css'

const Home = () => {
    const [cart, setCart] = useState([]);
    const setPlayer =(player)=>{
        const newCart = [...cart, player];
        setCart(newCart);
    }
    return (
        <div className='container'>
            <div className="players">
                <Players setPlayer = {setPlayer}></Players>
            </div>
            <div className="cart">
                <Cart cartInfo={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;