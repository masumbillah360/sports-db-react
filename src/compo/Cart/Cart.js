import React from 'react';
import Swal from 'sweetalert2'
import './Cart.css'

const Cart = ({cart, setCart}) => {
    const handleDelete=(id)=>{
        const leftPlayer = cart.filter(pd=> pd.idPlayer !== id);
        setCart(leftPlayer);
        Swal.fire("Deleted Item")
    }
    // console.log(cartInfo);
    return (
        <div className='cart-list'>
            <h1>On Your List {cart.length}</h1>
            <ol>
            {cart.map((name,index)=><li key={index}>{name.strPlayer} <button onClick={()=>handleDelete(name.idPlayer)} style={{marginLeft:"10px" ,backgroundColor:"red"}}>X</button></li>)}
            </ol>
        </div>
    );
};

export default Cart;