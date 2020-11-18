import React from 'react'
import './Product.css'
import Product from './Product'
import './shop.css'
import vindhy from './images/vindhy.jpg'

function Vindhy() {
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
            price={550} 
            image={vindhy}/>
            <Product 
            id="975272"
            title="Dream-Catcher2" 
            price={750} 
            image={vindhy}/>
            {/* Product */}
        </div>
        <div className="shop_row">
        <Product 
            id="975273"
            title="chocolate1" 
            price={550} 
            image={vindhy}/>
        <Product 
            id="975274"
            title="chocolate1" 
            price={550} 
            image={vindhy}/>
                 </div>
    <div className="shop_row">
    <Product 
            id="975275"
            title="chocolate1" 
            price={550}   
            image={vindhy}/>

    <Product 
            id="975276"
            title="chocolate1" 
            price={550} 
            image={vindhy}/>
    
        {/* Product */}
    </div>
    <div className="shop_row">
    <Product 
            id="975277"
            title="chocolate1" 
            price={550} 
            image={vindhy}/>
            <Product 
            id="975278"
            title="chocolate1" 
            price={550} 
            image={vindhy}/>
    </div>
    </div>
    </>
    )
}

export default Vindhy
