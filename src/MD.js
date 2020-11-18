import React from 'react'
import './Product.css'
import Product from './Product'
import './shop.css'
import md from './images/md.jpg'

function MD() {
    return (
        <>
        
        <div className="shop">
        <div className="shop-title">
            Mediline Diagnostics
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Dream-Catcher1" 
            price={550} 
            image={md}/>
            <Product 
            id="975272"
            title="Dream-Catcher2" 
            price={750} 
            image={md}/>
            {/* Product */}
        </div>
        <div className="shop_row">
        <Product 
            id="975273"
            title="chocolate1" 
            price={550} 
            image={md}/>
        <Product 
            id="975274"
            title="chocolate1" 
            price={550} 
            image={md}/>
                 </div>
    <div className="shop_row">
    <Product 
            id="975275"
            title="chocolate1" 
            price={550}   
            image={md}/>

    <Product 
            id="975276"
            title="chocolate1" 
            price={550} 
            image={md}/>
    
        {/* Product */}
    </div>
    <div className="shop_row">
    <Product 
            id="975277"
            title="chocolate1" 
            price={550} 
            image={md}/>
            <Product 
            id="975278"
            title="chocolate1" 
            price={550} 
            image={md}/>
    </div>
    </div>
    </>

    )
}

export default MD
