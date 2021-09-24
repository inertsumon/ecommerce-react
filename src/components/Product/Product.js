import React from 'react';
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Product = (props) => {
    // console.log(props)
    
    const { img, name, price, shipping, seller, stock, } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

  

    return (
        <div className="product-container">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h3>{name}</h3>
                <p>Price: {price}</p>
                <p>Shipping Cost: {shipping}</p>
                <p>Seller: {seller}</p>
                <p>Stock: {stock}</p>
                <button onClick={() => props.handleProductBtn(props.product)}>{element} Buy</button>
            </div>
        </div>
    );
};

export default Product;