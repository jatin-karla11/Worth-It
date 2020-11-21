import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider';
import "./OrderHistory.css";

function OrderHistory() {
    const [{basket,user1},dispatch]=useStateValue();
    const name=user1?.email
    const [orders,setOrders]=useState([]);
    const [reorder,setReorder]=useState("");
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

    const yo=()=>{
        alert(reorder);
    }
    var orderid="";
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
                <p><strong>Contact: {order.contact}</strong></p>
                <p><strong>Delivery Address: {order.address}</strong></p>
            <p>{order.items.map(item=><span><strong>{item.title}(₹{item.price})</strong>-<img className="orderimage" src={item.image}/><br></br> </span>)}</p>
            <p><strong>Date: {order.date.toString()}</strong></p>
            <p><strong>Order total: {order.totalAmount}</strong></p>
            <p><strong>Order id: {order.orderId}</strong></p>
            {/* {orderid=order.orderId} */}
            <p><strong>Payment id: {order.paymentId}</strong></p>
            {/* <button onClick={()=>{setReorder(orderid)
            yo()
        }}>Re-Order</button> */}
            <hr></hr>
            </>
            ))}    </>}
            
              </div>
        </div>
    )
}

export default OrderHistory
