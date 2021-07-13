import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
   const first10 = fakeData.slice(0,10);
   const [products, setProducts] = useState(first10);
  
   const handleAddproduct = (product) =>{
          console.log('add product', product);
   }

    return (
        <div className="shop-container">
          <div className="product-container">
          <ul>
                {
                    products.map(product => <Product 
                        handleAddproduct ={handleAddproduct}
                        product={product}
                        ></Product>)
                }
            </ul>
          </div>
          <div className="cart-container">
              <h3>This is card</h3>
          </div>
            
        </div>
    );
};

export default Shop;