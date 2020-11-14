import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'

function Payment() {
    const [{basket,user1},dispatch]=useStateValue();
    return (
        <div className="container-fluid">
            <div className="payment">
                <div className="payment_container">

                    <h1>
    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                    </h1>

                    <div className="payment_section">
                        <div className="payment_title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment_address">
                            <p>{user1?.email}</p>
                            <p>Bombay gym</p>
                            <p>Aastha cinema</p>
                        </div>
                    </div>
                    <div className="payment_section">
                        <div className="payment_title">
                            <h3>Review items and delivery</h3>
                        </div>
                        <div className="payment_items">
                            {basket.map(item=>(
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="payment_section">
                        <div className="payment_title">
                            <h3>Payment Method</h3>
                        </div>
                        <div className="payment_details"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment