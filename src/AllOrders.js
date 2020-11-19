import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider';

function AllOrders() {

    const [{basket,user1},dispatch]=useStateValue();
    const name=user1?.email
    const [orders,setOrders]=useState([]);
    useEffect(() => {
        adminOrder();
    }, [])

    const adminOrder=()=>{
        // alert("getOrderHistory called")
        // alert(name)
        fetch('https://worthit-backend.herokuapp.com/getOrderAdmin',{method: 'POST',
        headers: { 'Content-Type': 'application/json' },body:JSON.stringify({email:name})}).then(response => response.json()).then(data => setOrders(data));
            
          
    }

    return (
        <div className="container-fluid">
            <br></br>
            <br></br>
            <br></br>
            <strong>All orders!</strong><hr></hr>
            <br></br>
            {orders.map((order)=>(<>
                <p>email: {order.email}</p>
            <p>{order.items.map(item=><span>{item.title}-<img className="orderimage" src={item.image}/><br></br> </span>)}</p>
            <p>date: {order.date.toString()}</p>
            <p>order id: {order.orderId}</p>
            <p>payment id: {order.paymentId}</p><hr></hr>
            </>
            ))}
        </div>
    )
}

export default AllOrders
