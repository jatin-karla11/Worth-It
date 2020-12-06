import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider';
import "./OrderHistory.css";
import { Link } from 'react-router-dom';

function OrderHistory() {
    const [{basket,user1},dispatch]=useStateValue();
    const name=user1?.email
    const [orders,setOrders]=useState([]);
    const [reorder,setReorder]=useState("");
    // const [gotreorder,setGotreorder]=useState([]);
    // const [reorderline,setReorderline]=useState("");
    useEffect(() => {
        getOrder();
    }, [])

    const getOrder=()=>{
        // alert("getOrderHistory called")
        // alert(name)
        fetch('https://worthit-backend.herokuapp.com/getOrderHistory',{method: 'POST',
        headers: { 'Content-Type': 'application/json' },body:JSON.stringify({email:name})}).then(response => response.json()).then(data => setOrders(data));
            
            }
            var arr=[];
    
    const reordernow= async (e)=>{
          e.preventDefault();      
        // alert(reorder);
        // console.log("yo called",reorder);
        
        await fetch('https://worthit-backend.herokuapp.com/getReorder',{method: 'POST',
        headers: { 'Content-Type': 'application/json' },body:JSON.stringify({reorderid:reorder})}).then(response => response.json()).then(data => {arr=data;});
        // setTimeout(() => {
        //     addAll();    
        // }, 5000);
        // setReorderline("reorder pressed")
        // console.log(reorderline)
        // console.log(gotreorder)
        // setGotreorder(data)
        addAll();
    }
    
    const addAll=()=>{
        // //dispatch an item to the data layer
        // var r=0;
        arr.map((gR)=>{
            gR.items.map((item)=>{
                dispatch({
                    type:'ADD_TO_BASKET',
                    item:{
                        
                        title:item.title,
                        image:item.image,
                        price:item.price
                    }
                })
        
            })
            
        })
        
    //  alert(gotreorder.map((gR)=>(<>{gR.address}</>)))
    }


    return (
        <div className="container-fluid">
            <br></br>
            <br></br>
            
            <strong><center><h2>Your order history!</h2></center></strong><hr></hr>
            <br></br>
            {/* <div>{reorderline}</div>
    <div>{gotreorder.map((gR)=>(<>{gR.address}</>))}</div> */}
            <div id="bgoh">
            {(!(user1?.email))?<marquee><strong>Sign in to view order history!</strong></marquee>:<>
                {/* <marquee>Tap the Re-order Button twice if you want to re-order items of a previous order!!</marquee> */}
            {/* {console.log(orders)} */}
            {(!orders.length)?<><marquee>"You have not ordered anything yet!"</marquee>

            <br></br><br></br>
            <center><Link to="/service"><button>Go to Stores</button></Link></center></>:<>
            {orders.map((order,i)=>(<>
              
            <p><strong>{++i} Email: {order.email}</strong></p>
                <p><strong>Contact: {order.contact}</strong></p>
                <p><strong>Cash on delivery: {order.checked}</strong></p>
            <p><strong>Delivery Status: {order.deliveryStatus}</strong></p>
                <p><strong>Delivery Address: {order.address}</strong></p>
            <p>{order.items.map(item=><span><strong>{item.title}(₹{item.price})</strong>-<img className="orderimage" src={item.image}/><br></br> </span>)}</p>
            <p><strong>Date: {order.date.toString()}</strong></p>
            {/* <p>{order.items.map(item=>{var total=0; total+=item.price;})}</p> */}
            <p><strong>Order total: {order.totalAmount}</strong></p>
            <p><strong>Delivery Charges: {(order.totalAmount)>499?"Free delivery!!!":"Rs.30"}</strong></p>
            <p><strong>Order id: {order.orderId}</strong></p>
            {/* {orderid=order.orderId} */}
            <p><strong>Payment id: {order.paymentId}</strong></p>
<form onSubmit={reordernow}>
            <button style={{float:"right"}} onClick={()=>setReorder(order._id)}>Re-Order</button></form>
        <br></br>
            <hr></hr>
            </>
            ))}</>}
                </>}
                {/* {gotreorder.map((gR)=>(<>{gR.address}</>))} */}
            {/* <button onClick={yo}>Reset</button> */}
              </div>
        </div>
    )
}

export default OrderHistory
