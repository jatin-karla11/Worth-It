import React from 'react'
import './Product.css'
import Product from './Product'
import './shop.css'
import vindhy from './images/vindhy.jpg'
import vindhy1 from './images/vindhy1.png'
import vindhy2 from './images/vindhy2.png'
import vindhy3 from './images/vindhy3.png'
import vindhy4 from './images/vindhy4.png'
import vindhy5 from './images/vindhy5.png'
import vindhy6 from './images/vindhy6.png'
import vindhy7 from './images/vindhy7.png'
import vindhy8 from './images/vindhy8.png'
import vindhy9 from './images/vindhy9.png'
import vindhy10 from './images/vindhy10.png'
import vindhy11 from './images/vindhy11.png'
import vindhy12 from './images/vindhy12.png'
import vindhy13 from './images/vindhy13.png'
import vindhy14 from './images/vindhy14.png'

function Vindhy() {
    return (
        <>
        
        <div className="shop">
        <div className="shop-title">
            Vindhy Store
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Silver Shiva Rudraksha Om Trishul and Damroo Kada Bracelet for Men and Women (Brown)" 
            price={200} 
            image={vindhy1}/>
            <Product 
            id="975272"
            title="Gold Plated Meena Om Cuff Rudraksha American Diamond Brass Kada Bracelet for Men"
            description="xyxxxxxzzzzz" 
            price={299} 
            image={vindhy2}/>
            {/* Product */}
        </div>
        <div className="shop_row">
        <Product 
            id="975273"
            title="Vindhy's Gold Plated Brass Kada Bracelet for Men"
            description="xyxxxxxzzzzz" 
            price={250} 
            image={vindhy3}/>
        <Product 
            id="975274"
            title="Golden Plated Rudraksha Om Trishul Damroo Designer Bahubali Kada Bracelet for Men and Women" 
            description="xyxxxxxzzzzz"
            price={299} 
            image={vindhy5}/>
                 </div>
    <div className="shop_row">
    <Product 
            id="975275"
            title="Vindhy's Shiva Kada Bracelet for Men and Women" 
            description="xyxxxxxzzzzz"
            price={200}   
            image={vindhy4}/>

    <Product 
            id="975276"
            title="Vindhy's Silver Shiva Rudraksha Om Trishul and Damroo Kada Bracelet for Men and Women" 
            description="xyxxxxxzzzzz"
            price={299} 
            image={vindhy6}/>
    
        {/* Product */}
    </div>
    <div className="shop_row">
    <Product 
            id="975277"
            title="Vindhy's Leather Gold Plated Brass Damroo Trishul Bracelet for Men" 
            description="xyxxxxxzzzzz"
            price={200} 
            image={vindhy7}/>
            <Product 
            id="975278"
            title="Vindhy's Mahakal Kada Bracelet for Men and Women" 
            description="xyxxxxxzzzzz"
            price={299} 
            image={vindhy8}/>
    </div>
    </div>
    <div className="shop_row">
    <Product 
            id="975277"
            title="Golden Leather Shiva Rudraksha Om Trishul and Damroo Kada Bracelet for Men and Women" 
            description="xyxxxxxzzzzz"
            price={200} 
            image={vindhy9}/>
    <Product 
            id="975278"
            title="Vindhy's American Diamond Gold Plated Mangalsutra with Love Design for Women" 
            description="xyxxxxxzzzzz"
            price={240} 
            image={vindhy10}/>
    </div>
    <div className="shop_row">
    <Product 
            id="975277"
            title="Nickel Brass Kavach Rudraksha Trishula Damru Locket Pendant Necklace for Men and Women" 
            description="xyxxxxxzzzzz"
            price={299} 
            image={vindhy11}/>
            <Product 
            id="975278"
            title="Beautiful Mahakal Bracelet, Shiv, Mahakal" 
            description=""
            price={200} 
            image={vindhy12}/>
    </div>
    <div className="shop_row">
    <Product    
            id="975277"
            title="Nickel and Brown Wood and Brass Kavach Rudraksha Trishula Damru Locket Pendant Necklace for Men and Women" 
            description="xyxxxxxzzzzz"
            price={299} 
            image={vindhy13}/>
            <Product 
            id="975278"
            title="Natural Beaded Pure Rudraksha Gold Plated Brass Channel Design Bracelet for Men and Women" 
            description="xyxxxxxzzzzz"
            price={299} 
            image={vindhy14}/>
    </div>
    </>
    )
}

export default Vindhy
