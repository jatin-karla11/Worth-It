import React from 'react'
import './Product.css'
import Product from './Product'
import './shop.css'
// import dairy from './images/dairy.jpg'
import paneer from './images/paneer.jpg'
import mava from './images/mava.jpg'
import ghee from './images/ghee.jpg'
import butter from './images/butter.jpg'
import freshcream from './images/freshcream.jpg'

function Dairy() {
    return (
        <>
        
        <div className="shop">
        <div className="shop-title">
            Krishna Milk Products
        </div>
        <marquee>Dairy products will be delivered on the same day between 6pm and 9pm</marquee>
        <div className="shop_row">
            <Product 
            id="9752743" 
            title="Fresh paneer(500grams) at your doorstep" 
            price={140} 
            image={paneer}/>
            <Product 
            id="9752744"
            title="Fress mava(500grams)" 
            price={150} 
            image={mava}/>
            {/* Product */}
        </div>
        <div className="shop_row">
        <Product 
            id="9752745"
            title="Ghee (500grams)" 
            price={240} 
            image={ghee}/>
        <Product 
            id="9752746"
            title="Fresh Cream(500gm)" 
            price={170} 
            image={freshcream}/>
                 </div>
    <div className="shop_row">
    <Product 
            id="9752747"
            title="Butter (500gm)" 
            price={220}   
            image={butter}/>

    {/* <Product 
            id="975276"
            title="chocolate1" 
            price={550} 
            image={dairy}/>
     */}
        {/* Product */}
    </div>
    {/* <div className="shop_row">
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
    </div> */}
    </div>
    </>
    )
}

export default Dairy
