import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,image,title,price}) {
    
    const [dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    
    return (
        <div className="checkoutProduct">
            <img className='checkoutProduct_image' src={image}/>
            <div className='checkoutProduct_info'>
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                <small>Rs.</small>
                <strong>{price}</strong>
                </p>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
