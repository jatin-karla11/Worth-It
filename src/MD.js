import React from 'react'
import './Product.css'
import Product from './Product'
import './shop.css'
import md from './images/md.jpg'
import md1 from './images/md1.jpg'
import md2 from './images/md2.jpg'
import md3 from './images/md3.jpg'
import md4 from './images/md4.jpg'

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
            title="Biolab's 5 litre alcohol based sanitizer" 
            price={1050} 
            image={md1}/>
            <Product 
            id="975272"
            title="Biolab's 500ml alcohol based sanitizer" 
            price={150} 
            image={md2}/>
            {/* Product */}
        </div>
        <div className="shop_row">
        <Product 
            id="975273"
            title="Biolab's 100ml alcohol based sanitizer" 
            price={60} 
            image={md3}/>
        <Product 
            id="975274"
            title="Biolab's 100ml spray- alcohol based sanitizer" 
            price={550} 
            image={md4}/>
                 </div>
    
    </div>
    </>

    )
}

export default MD
