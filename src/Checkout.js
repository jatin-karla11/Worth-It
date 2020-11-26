import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import ad from './images/ad.jpg'

function Checkout() {
    
    const [{basket,user1},dispatch]=useStateValue();

    return (
        <div className="container-fluid">
        <div className="checkout" style={{marginTop:"30px"}}>
            <div className="checkout_left">
                <img className="checkout_ad" src={ad} alt=""/>
                <div>
    <h3>{(user1)?"Hello, "+user1.email:"Hey Guest!"}</h3>
                    <h2 className="checkout_title">
                        Your Shopping Basket:
                    </h2>

                    {basket.map(item=>(
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                        />
                    ))}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
        </div>
    )
}

export default Checkout
