import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider';
import "./OrderHistory.css";

function AllOrders() {
    // const [deliveryStatus,setDeliveryStatus]=useState("");
    const [{basket,user1},dispatch]=useStateValue();
    const name=user1?.email
    const [orders,setOrders]=useState([]);
    useEffect(() => {
        adminOrder();
    }, []) 
    const [deliveryEmail,setDeliveryEmail]=useState("");

    const adminOrder=()=>{
        // alert("getOrderHistory called")
        // alert(name)
        fetch('https://worthit-backend.herokuapp.com/getOrderAdmin',{method: 'POST',
        headers: { 'Content-Type': 'application/json' },body:JSON.stringify({email:name})}).then(response => response.json()).then(data => setOrders(data));
            
          
    }

    const ChangeDeliveryStatus=()=>{
         
        // setDeliveryStatus("Delivered!");
        alert("changed to delivered!!!");
        // console.log(deliveryStatus)
        fetch('https://worthit-backend.herokuapp.com/updateToDelivered',{method: 'POST',
        headers: { 'Content-Type': 'application/json' },body:JSON.stringify({email:deliveryEmail})}).then(response => response.json()).then(data => console.log(data));
        // console.log(deliveryStatus)

    }

    return (
        <div className="container-fluid">
            <br></br>
            <br></br>

            <strong><center><h2>All orders!</h2></center></strong><hr></hr>
            <br></br>
            
            {(name==="adminmhu@gmail.com")?<>
            <div><center><label>Change delivery status to delivered:</label><input onChange={(e)=>setDeliveryEmail(e.target.value)} placeholder="enter respective email id/order id.."/><button className="goto" onClick={ChangeDeliveryStatus}>Update</button></center></div>
            <br></br>
            <div id="bgoh">
            {orders.map((order)=>(<>
                <p><strong>Delivery Status: {order.deliveryStatus}</strong></p>
                <p>email: {order.email}</p>
                <p><strong>Contact: {order.contact}</strong></p>
                <p><strong>Delivery Address: {order.address}</strong></p>
                <p><strong>Cash on delivery: {order.checked}</strong></p>
            <p>{order.items.map(item=><span>{item.title}-<img className="orderimage" src={item.image}/><br></br> </span>)}</p>
            <p>date: {order.date.toString()}</p>
            <p><strong>Order total: {order.totalAmount}</strong></p>
            <p><strong>Delivery Charges: {(order.totalAmount)>499?"Free delivery!!!":"Rs.30"}</strong></p>
            <p>order id: {order.orderId}</p>
            <p>payment id: {order.paymentId}</p><hr></hr>
            </>
            ))}
            </div>
            </>:<><marquee><strong>You are not admin!</strong></marquee></>}
            
        </div>
    )
}

export default AllOrders
