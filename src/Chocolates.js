import React from 'react'
import './Product.css'
import Product from './Product'
import './shop.css'
import chocolate from './images/Chocolate.jpg';

function Chocolates() {

    return (
        <>
        
        <div className="shop">
        <div className="shop-title">
            Chocolates by xyz
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Dream-Catcher1" 
            price={550} 
            image={chocolate}/>
            <Product 
            id="975272"
            title="Dream-Catcher2" 
            price={750} 
            image={chocolate}/>
            {/* Product */}
        </div>
        <div className="shop_row">
        <Product 
            id="975273"
            title="chocolate1" 
            price={550} 
            image={chocolate}/>
        <Product 
            id="975274"
            title="chocolate1" 
            price={550} 
            image={chocolate}/>
                 </div>
    <div className="shop_row">
    <Product 
            id="975275"
            title="chocolate1" 
            price={550}   
            image={chocolate}/>

    <Product 
            id="975276"
            title="chocolate1" 
            price={550} 
            image={chocolate}/>
    
        {/* Product */}
    </div>
    <div className="shop_row">
    <Product 
            id="975277"
            title="chocolate1" 
            price={550} 
            image={chocolate}/>
    </div>
    </div>
    </>
    )
}

export default Chocolates