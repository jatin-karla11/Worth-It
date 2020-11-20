import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider'

function Product({id,title,image,price,description}) {

    const[{basket},dispatch]=useStateValue();
    console.log("basket",basket)
    const addToBasket=()=>{
        //dispatch an item to the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price
            }
        })
    }

    return (
        <div className="product">
            <div className="product_info">
                <span><strong>{title}</strong></span><br></br>
                {/* <span>{description}</span><br></br> */}
                <span className="product_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </span>
            </div>    
            <img src={image} className="product_image" alt=""/>
            <button onClick={addToBasket} className="addto">Add to Basket</button>
        </div>
    )
}

export default Product
