import React from 'react'
import './Product.css'
import Product from './Product'
import './shop.css'
import grocery1 from './images/grocery1.jpg'

function Grocery() {
    return (
        <>
        
        <div className="shop">
        <div className="shop-title">
            Groceries by xyz
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Dream-Catcher1" 
            price={550} 
            image={grocery1}/>
            <Product 
            id="975272"
            title="Dream-Catcher2" 
            price={750} 
            image={grocery1}/>
            {/* Product */}
        </div>
        <div className="shop_row">
        <Product 
            id="975273"
            title="chocolate1" 
            price={550} 
            image={grocery1}/>
        <Product 
            id="975274"
            title="chocolate1" 
            price={550} 
            image={grocery1}/>
                 </div>
    <div className="shop_row">
    <Product 
            id="975275"
            title="chocolate1" 
            price={550}   
            image={grocery1}/>

    <Product 
            id="975276"
            title="chocolate1" 
            price={550} 
            image={grocery1}/>
    
        {/* Product */}
    </div>
    <div className="shop_row">
    <Product 
            id="975277"
            title="chocolate1" 
            price={550} 
            image={grocery1}/>
            <Product 
            id="975278"
            title="chocolate1" 
            price={550} 
            image={grocery1}/>
    </div>
    </div>
    </>

    )
}

export default Grocery
