import React from 'react'
import "./Product.css"
import chocolate1 from './images/chocolate1.jpg'

function Product({id,title,image,price}) {
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <img src={image} alt=""/>
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
