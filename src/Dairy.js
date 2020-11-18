import React from 'react'
import './Product.css'
import Product from './Product'
import './shop.css'
import dairy from './images/dairy.jpg'

function Dairy() {
    return (
        <>
        
        <div className="shop">
        <div className="shop-title">
            Dairy Products by xyz
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Dream-Catcher1" 
            price={550} 
            image={dairy}/>
            <Product 
            id="975272"
            title="Dream-Catcher2" 
            price={750} 
            image={dairy}/>
            {/* Product */}
        </div>
        <div className="shop_row">
        <Product 
            id="975273"
            title="chocolate1" 
            price={550} 
            image={dairy}/>
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
