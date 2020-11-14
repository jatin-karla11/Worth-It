import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import worth1 from './images/worth1.jpg';

function loadScript(src){
    return new Promise(resolve=>{
    const script=document.createElement('script')
    script.src=src
    
    script.onload=()=>{
        resolve(true)
    }
    script.onerror=()=>{
        resolve(false)
    }
    document.body.appendChild(script)
})
}

const __DEV__=document.domain==="localhost"


function Payment() {
    const [{basket,user1},dispatch]=useStateValue();
    
    async function displayRazorpay(){

        const res=await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if(!res){
            alert("Razorpay SDK failed to load.Are you online?")
            return
        }

        const data=await fetch('https://worthit-backend.herokuapp.com/razorpay',{method:'POST'}).then((t)=>t.json())
        
        console.log(data)

        const options = {
            "key": __DEV__?"rzp_test_so1UY4l640zHli":"PRODUCTION_KEY", 
            // "amount": "500", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            // "currency": "INR",
            currency:data.currency,
            amount:data.amount.toString(),
            order_id:data.id,
            "name": "Donation",
            "description": "Thankyou for nothing",
            "image": {worth1},
            // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9999999999"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open()
    }
    
    
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
                        <div className="payment_details">
                            <button onClick={displayRazorpay}>Pay with Razorpay</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment