import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
// import {useStateValue} from './StateProvider'
import { StateContext, useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import worth1 from './images/worth1.jpg';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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

var paymentId="";
var orderId="";
function Payment() {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
      };
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    const history=useHistory();
    const [{basket,user1},dispatch]=useStateValue();
    const name=user1?.email
    const value=getBasketTotal(basket)
    const [checked, setChecked] =useState(false);
    const [deliveryStatus,setDeliveryStatus]=useState("Order Placed");

    async function afterCOD(){
        // alert("Order Placed!!!")
        handleClick();
        const response = await fetch('https://worthit-backend.herokuapp.com/value', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: value,array:basket }),
          })
        const response1 = await fetch('https://worthit-backend.herokuapp.com/setOrderHistory', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ array:basket,orderid:orderId,
                paymentid:paymentId,email:name,
            contact:contact,address:address,checked:checked,amount1:value,deliveryStatus:deliveryStatus}),
          })
          dispatch({
              type:"EMPTY_BASKET"
          })
          history.replace('/orders')
    }

    async function afterpayment(){
        alert("payment done!");
        const response1 = await fetch('https://worthit-backend.herokuapp.com/setOrderHistory', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ array:basket,orderid:orderId,
                paymentid:paymentId,email:name,
            contact:contact,address:address,amount1:value,deliveryStatus:deliveryStatus }),
          })
          dispatch({
              type:"EMPTY_BASKET"
          })
          history.replace('/orders')
    }

    async function displayRazorpay(){

        const response = await fetch('https://worthit-backend.herokuapp.com/value', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: value,array:basket }),
          })
          console.log("helloooooo")
        //   console.log(await response.json())
        const res=await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if(!res){
            alert("Razorpay SDK failed to load.Are you online? check out")
            return
        } 

        const data=await fetch('https://worthit-backend.herokuapp.com/razorpay',{method:'POST'}).then((t)=>t.json())
        // https://worthit-backend.herokuapp.com/razorpay
        //http://localhost:1337/razorpay
        console.log(data) 

        const options = {
            "key": __DEV__?"rzp_test_so1UY4l640zHli":"rzp_test_so1UY4l640zHli", 
            // "amount": "500", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            // "currency": "INR",
            currency:data.currency,
            amount:data.amount.toString(),
            order_id:data.id,
            "name": "Worth-It",
            "description": "Your Order Total:",
            "image": worth1,
            // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response){
                
                // alert(response.razorpay_payment_id);
                // alert(response.razorpay_order_id);
                // alert(response.razorpay_signature);
                console.log(response)
                paymentId=response.razorpay_payment_id;
                orderId=response.razorpay_order_id;
                afterpayment();
            },
            "prefill": {
                
                "email": `${name}`,
                
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "teal"
            }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open()
        
        // else{
        //     console.log("failed payment")
        // }
    }
    const [address,setAddress]=useState("");
    const [contact,setContact]=useState("");

    return (<>
        <div className="container-fluid">
            <div className="payment">
                <div className="payment_container">
                <br></br>
                    <h1>
    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                    </h1>

<marquee>Free delivery on orders above 499!!!..Please do not forget to add correct delivery address and contact number before checking cod else you will not be able to place the order..</marquee>
                    <div className="payment_section">
                        <div className="payment_title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment_address">
                            <p>{user1?.email}</p>
                            {/* <p>Bombay gym</p>
                            <p>Aastha cinema</p> */}
                            <input required type="text" onChange={(e)=>{setContact(e.target.value)}} placeholder="enter your contact number" style={{width:"250px"}}/><br></br>
                            <textarea required type="text" onChange={(e)=>{setAddress(e.target.value)}} placeholder="enter your delivery address" style={{width:"250px"}}/>
                            
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
                            <strong>Total of items: {value}</strong>
                            <br></br>
                            {(value>499)?<strong>Free delivery!!!</strong>:<strong>Delivery Charge Rs.30/-</strong>}
                            <br></br>
                            <label><strong>Cash on delivery</strong></label><input type="checkbox" onChange={()=>{if(!checked){setChecked(true)}else{setChecked(false)}}}/>
                            <br></br>{(checked && address!=="" && contact!=="" && value!==0)?<button onClick={afterCOD}>Place Order</button>:""}<br></br><hr></hr>
                            <span>Tap to pay online using UPIs, Netbanking, Cards.(Currently in test mode)</span>
                            <br></br><br></br>
                            <button style={{background:"lightcyan"}} onClick={displayRazorpay}>Pay Online :)</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message="Order Placed!!"
        action={
          <React.Fragment>
            
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
        </>
    )
}

export default Payment