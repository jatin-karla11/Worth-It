import React from 'react'
import './Product.css'
import Product from './Product'
import './shop.css'
import dairy from './images/dairy.jpg'
import paneer from './images/paneer.jpg'
import mava from './images/mava.jpg'
import ghee from './images/ghee.jpg'

function Dairy() {
    return (
        <>
        
        <div className="shop">
        <div className="shop-title">
            Dairy Products by xyz
        </div>
        <marquee>Dairy products will be delivered on the same day between 6pm and 9pm</marquee>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Fresh paneer(250grams) at your doorstep" 
            price={550} 
            image={paneer}/>
            <Product 
            id="975272"
            title="Fress mava(250grams)" 
            price={750} 
            image={mava}/>
            {/* Product */}
        </div>
        <div className="shop_row">
        <Product 
            id="975273"
            title="Ghee (250grams)" 
            price={550} 
            image={ghee}/>
        <Product 
            id="975274"
            title="chocolate1" 
            price={550} 
            image={dairy}/>
                 </div>
    <div className="shop_row">
    <Product 
            id="975275"
            title="chocolate1" 
            price={550}   
            image={dairy}/>

    <Product 
            id="975276"
            title="chocolate1" 
            price={550} 
            image={dairy}/>
    
        {/* Product */}
    </div>
    <div className="shop_row">
    <Product 
            id="975277"
            title="chocolate1" 
            price={550} 
            image={dairy}/>
            <Product 
            id="975278"
            title="chocolate1" 
            price={550} 
            image={dairy}/>
    </div>
    </div>
    </>
    )
}

export default Dairy
