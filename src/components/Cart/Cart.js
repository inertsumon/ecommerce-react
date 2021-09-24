import React from 'react';
import "./Cart.css"
const Cart = (props) => {
    
    const { cart } = props;
    const price = (prev, curr) => prev + curr.price;
    const totalPrice = cart.reduce(price, 0);
    
    const shipping = (prev, curr) => prev + curr.shipping;
    const totalShipping = cart.reduce(shipping, 0);
    
    
    const totalTax = (totalPrice / 100) * 20;
    const allTotal = totalPrice + totalShipping + totalTax;

    return (
        <div className="cart-details">
            <h4>Item Order: {cart.length}</h4>
            <div className="cart-calc">
            <p>Price : ${totalPrice.toFixed(2)}</p>
            <p>Shipping: ${totalShipping.toFixed(2)}</p>
                <p>Tax: ${totalTax.toFixed(2)}</p>
                <h4>Order Total: ${allTotal.toFixed(2)} </h4>
                <button>Review Order</button>
            </div>
            
        </div>
    );
};

export default Cart;