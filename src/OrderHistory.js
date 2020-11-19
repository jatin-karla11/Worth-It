import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider';
import "./OrderHistory.css";

function OrderHistory() {
    const [{basket,user1},dispatch]=useStateValue();
    const name=user1?.email
    const [orders,setOrders]=useState([]);
    useEffect(() => {
        getOrder();
    }, [])

    const getOrder=()=>{
        // alert("getOrderHistory called")
        // alert(name)
        fetch('https://worthit-backend.herokuapp.com/getOrderHistory',{method: 'POST',
        headers: { 'Content-Type': 'application/json' },body:JSON.stringify({email:name})}).then(response => response.json()).then(data => setOrders(data));
            
          
    }

    // const addAll=()=>{
    //     //dispatch an item to the data layer
    //     dispatch({
    //         type:'ADD_TO_BASKET',
    //         item:{
    //             id:id,
    //             title:title,
    //             image:image,
    //             price:price
    //         }
    //     })
    // }

    return (
        <div className="container-fluid">
            <br></br>
            <br></br>
            
            <strong><center><h2>Your order history!</h2></center></strong><hr></hr>
            <br></br>
            <div id="bgoh">
            {(!(user1?.email))?<marquee><strong>Sign in to view order history!</strong></marquee>:<>
            {orders.map((order)=>(<>
                <p><strong>Email: {order.email}</strong></p>
            <p>{order.items.map(item=><span><strong>{item.title}(₹{item.price})</strong>-<img className="orderimage" src={item.image}/><br></br> </span>)}</p>
            <p><strong>Date: {order.date.toString()}</strong></p>
            <p><strong>Order total: {order.totalAmount}</strong></p>
            <p><strong>Order id: {order.orderId}</strong></p>
            <p><strong>Payment id: {order.paymentId}</strong></p><hr></hr>
            {/* <button onClick={addAll}>Re-Order</button> */}
            </>
            ))}    </>}
            
              </div>
        </div>
    )
}

export default OrderHistory
