import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider';
import "./OrderHistory.css";
import { useHistory } from 'react-router-dom';

function AllOrders() {
    const history=useHistory();
    // const [deliveryStatus,setDeliveryStatus]=useState("");
    const [{basket,user1},dispatch]=useStateValue();
    const name=user1?.email
    const [orders,setOrders]=useState([]);
    useEffect(() => {
        adminOrder();
    }, []) 
    const [deliveryId,setDeliveryId]=useState("");

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
        headers: { 'Content-Type': 'application/json' },body:JSON.stringify({mongoid:deliveryId})}).then(response => response.json()).then(data => console.log(data));
        // console.log(deliveryStatus)
        history.replace('/')
    }
    const ChangeDeliveryStatusShipped=()=>{
         
        // setDeliveryStatus("Delivered!");
        alert("changed to Shipped!!!");
        // console.log(deliveryStatus)
        fetch('https://worthit-backend.herokuapp.com/updateToShipped',{method: 'POST',
        headers: { 'Content-Type': 'application/json' },body:JSON.stringify({mongoid:deliveryId})}).then(response => response.json()).then(data => console.log(data));
        // console.log(deliveryStatus)
        history.replace('/')

    }
    


    return (
        <div className="container-fluid">
            <br></br>
            <br></br>

            <strong><center><h2>All orders!</h2></center></strong><hr></hr>
            <br></br>
            
            {(name==="adminmhu@gmail.com")?<>
            <div><center><label>Change delivery status:</label><input onChange={(e)=>setDeliveryId(e.target.value)} placeholder="enter respective (mongo)order id/order id.."/><button className="goto" onClick={ChangeDeliveryStatusShipped}>Update To Shipped</button><button className="goto" onClick={ChangeDeliveryStatus}>Update To Delivered</button></center></div>
            <br></br>
            <div id="bgoh">
            {orders.map((order,i)=>(<>
                
            <p><strong>{++i} Delivery Status: {order.deliveryStatus}</strong></p>
            <p><strong>Mongo Id: {order._id}</strong></p>
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
