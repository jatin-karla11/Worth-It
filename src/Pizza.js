import React from 'react'
import pizza from './images/pizza.jpg'

function Pizza() {
    return (
        <>
        
        <div className="shop">
        <div className="shop-title">
            Pizzas
        </div>
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
