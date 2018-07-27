import React from 'react';

const Product = function(props) {
  console.log(props);
  return (
    <div className="product-outer-container">
      <div className="product-image-container">
        {props.productImg}
      </div>
      <div className="product-name-price-container">
        {props.productName} ---------- {props.productPrice}
      </div>
    </div>
  )
}
export default Product;