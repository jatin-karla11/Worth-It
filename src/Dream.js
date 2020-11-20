import React from 'react'
import './Product.css'
import Product from './Product'
import './shop.css'
import dc from './images/dc.jpg'

function Dream() {
    return (
        <>
        
        <div className="shop">
        <div className="shop-title">
            Dream-Catchers by xyz
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Dream-Catcher1"
            description="xyxxxxxzzzzz" 
            price={550} 
            image={dc}/>
            <Product 
            id="975272"
            title="Dream-Catcher2" 
            price={750} 
            image={dc}/>
            {/* Product */}
        </div>
        <div className="shop_row">
        <Product 
            id="975273"
            title="chocolate1" 
            price={550} 
            image={dc}/>
        <Product 
            id="975274"
            title="chocolate1" 
            price={550} 
            image={dc}/>
                 </div>
    <div className="shop_row">
    <Product 
            id="975275"
            title="chocolate1" 
            price={550}   
            image={dc}/>

    <Product 
            id="975276"
            title="chocolate1" 
            price={550} 
            image={dc}/>
    
        {/* Product */}
    </div>
    <div className="shop_row">
    <Product 
            id="975277"
            title="chocolate1" 
            price={550} 
            image={dc}/>
            <Product 
            id="975278"
            title="chocolate1" 
            price={550} 
            image={dc}/>
    </div>
    </div>
    </>
    )
}

export default Dream
