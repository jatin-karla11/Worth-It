import React, { useEffect, useState } from 'react'

function OrderHistory() {
    const [orders,setOrders]=useState([]);
    useEffect(() => {
        getOrder();
    }, [])

    const getOrder=()=>{
        // alert("getOrderHistory called")
        fetch('https://worthit-backend.herokuapp.com/getOrderHistory').then(response => response.json()).then(data => setOrders(data));
            
          
    }

    return (
        <div className="container-fluid">
            <br></br>
            <br></br>
            <br></br>
            <strong>Your order history!</strong><hr></hr>
            <br></br>
            {orders.map((order)=>(<>
                <p>email: {order.email}</p>
            <p>{order.items.map(item=><span>{item.title}, </span>)}</p>
            <p>date: {order.date.toString()}</p>
            <p>order id: {order.orderId}</p>
            <p>payment id: {order.paymentId}</p><hr></hr>
            </>
            ))}      
        </div>
    )
}

export default OrderHistory
