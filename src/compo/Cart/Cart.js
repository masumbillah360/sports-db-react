import React from 'react';
import './Cart.css'

const Cart = ({cartInfo}) => {
    console.log(cartInfo);
    return (
        <div className='cart-list'>
            <h1>On Your List</h1>
            <ol>
            {cartInfo.map((name,index)=><li key={index}>{name.strPlayer} : {index}</li>)}
            </ol>
        </div>
    );
};

export default Cart;