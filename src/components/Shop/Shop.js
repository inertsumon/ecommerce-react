import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {

    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        fetch("./products.JSON")
            .then(res => res.json())
            .then(data => setProducts(data))
    })

    const [cart, setCart] = useState([]);
    const handleProductBtn = (product) => {
    
        const newCart = [...cart, product];
        setCart(newCart);
}

    return (
        <div className="shop-container">

            <div className="products-container">
                {
                    products.map(product => <Product handleProductBtn={handleProductBtn} key={product.key} product={product}></Product>

                    )
                }

            </div>

            <div className="cart-container">
                <h2>Order Summery</h2>
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;