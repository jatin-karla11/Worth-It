import React from 'react'
import './Product.css'
import Product from './Product'
import './shop.css'

function Chocolates() {
    return (
        <div className="shop">
        <div className="shop_row">
            <Product 
            id="975271"
            title="chocolate1" 
            price={550} 
            image="https://wallpaperaccess.com/full/116027.jpg"/>
            <Product 
            id="975272"
            title="chocolate1" 
            price={550} 
            image="https://wallpaperaccess.com/full/116027.jpg"/>
            {/* Product */}
        </div>
        <div className="shop_row">
        <Product 
            id="975273"
            title="chocolate1" 
            price={550} 
            image="https://wallpaperaccess.com/full/116027.jpg"/>
        <Product 
            id="975274"
            title="chocolate1" 
            price={550} 
            image="https://wallpaperaccess.com/full/116027.jpg"/>
        <Product 
            id="975275"
            title="chocolate1" 
            price={550} 
            image="https://wallpaperaccess.com/full/116027.jpg"/>
         </div>
    <div className="shop_row">
    <Product 
            id="975276"
            title="chocolate1" 
            price={550} 
            image="https://wallpaperaccess.com/full/116027.jpg"/>
    <Product 
            id="975277"
            title="chocolate1" 
            price={550} 
            image="https://wallpaperaccess.com/full/116027.jpg"/>
        {/* Product */}
    </div>
    </div>
    )
}

export default Chocolates