import React, { useState } from 'react'
import './Product.css'
import Product from './Product'
import './shop.css'
import pizza from './images/pizza.jpg'

function Pizza() {
    // const [alert1,setAlert1]=useState("");
    // const yo=()=>{
    //     setAlert1("heck");
    //     alert("hi");
    //     setTimeout(() => {
    //         alert(alert1);    
    //     }, 5000);
        
    // }
    return (
        <>
        {/* <button onClick={yo}>Reset</button> */}
        <div className="shop">
        <div className="shop-title">
            Pizzas
        </div>
        {/* <marquee>Delivery will be done after 2hours of order placing!</marquee> */}
        <marquee>This Store is under build!..</marquee>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="" 
            price={1050} 
            image={pizza}/>
            <Product 
            id="975272"
            title="" 
            price={150} 
            image={pizza}/>
            {/* Product */}
        </div>
        <div className="shop_row">
        <Product 
            id="975273"
            title="" 
            price={60} 
            image={pizza}/>
        <Product 
            id="975274"
            title="" 
            price={240} 
            image={pizza}/>
                 </div>
    
    </div>
    </>
    )
}

export default Pizza
