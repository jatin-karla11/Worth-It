import React from 'react'
import './Product.css'
import Product from './Product'
import './shop.css'
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
        <marquee>Delivery will be done on the next day of order placing!</marquee>
        <div className="shop_row">
            <Product 
            id="9752748" 
            title="Biolab's 5 litre alcohol based sanitizer" 
            price={1050} 
            image={md1}/>
            <Product 
            id="9752749"
            title="Biolab's 500ml alcohol based sanitizer" 
            price={150} 
            image={md2}/>
            {/* Product */}
        </div>
        <div className="shop_row">
        <Product 
            id="9752750"
            title="Biolab's 100ml alcohol based sanitizer" 
            price={60} 
            image={md3}/>
        <Product 
            id="9752751"
            title="Biolab's 1 Litre spray- alcohol based sanitizer" 
            price={240} 
            image={md4}/>
                 </div>
    
    </div>
    </>

    )
}

export default MD
