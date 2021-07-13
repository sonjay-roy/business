import React from 'react';
import './Product.css';



const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div >
                <img src={img}></img>
            </div>

            <div className="product-name">
                <h3>{name}</h3>
                <br />
                <p><small>by:{seller}</small></p>
                <p>${price}</p>

                <p><small>Only{stock} left in stock - order soon</small></p>
                <button className="main-btn"
                onClick={() => props.handleAddproduct(props.product)}
                
                > add to cart</button>
            </div>

        </div>
    );
};

export default Product;