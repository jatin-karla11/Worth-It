import React from 'react'
import './Product.css'
import Product from './Product'
import './shop.css'
import chocolate from './images/Chocolate.jpg';
import kajukatli from './images/kajukatli.jpg';
import besanladdu from './images/besanladdu.jpg';
import mohanthal from './images/mohanthal.jpg';
import moongdalhalwa from './images/moongdalhalwa.jpg';
import sevkibarfi from './images/sevkibarfi.jpg';


function Mithas() {

    return (
        <>
        
        <div className="shop">
        <div className="shop-title">
            Mithas by Neelam Rajani
        </div>
        <marquee>Delivery will be done after 1 day of order placing!</marquee>
        <center>Prices shown are per 250 gm</center>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Kaju Katli"
            price={200} 
            image={kajukatli}/>
            <Product 
            id="975272"
            title="Besan laddu" 
            price={100} 
            image={besanladdu}/>
            {/* Product */}
        </div>
        <div className="shop_row">
            <Product 
            id="975273" 
            title="Moong dal halwa"
            price={100} 
            image={moongdalhalwa}/>
            <Product 
            id="975274"
            title="Makkhan bada" 
            price={100} 
            image={chocolate}/>
            {/* Product */}
        </div>
        <div className="shop_row">
            <Product 
            id="975275" 
            title="Mohan Thal"
            price={100} 
            image={mohanthal}/>
            <Product 
            id="975276"
            title="Sev ki Barfi" 
            price={100} 
            image={sevkibarfi}/>
            {/* Product */}
        </div>
        <div className="shop_row">
            <Product 
            id="9752731" 
            title="Majoon"
            price={550} 
            image={chocolate}/>
            <Product 
            id="9752732"
            title="Gud atta laddu" 
            price={750} 
            image={chocolate}/>
            {/* Product */}
        </div>
        <div className="shop_row">
            <Product 
            id="975277" 
            title="Sitafal Rabdi"
            price={90} 
            image={chocolate}/>
            <Product 
            id="975278"
            title="Coconut laddu" 
            price={90} 
            image={chocolate}/>
            {/* Product */}
        </div>
        <div className="shop_row">
            <Product 
            id="975279" 
            title="Mava Suji laddu"
            price={90} 
            image={chocolate}/>
            <Product 
            id="9752710"
            title="Dry fruit chikki" 
            price={200} 
            image={chocolate}/>
            {/* Product */}
        </div>
        <div className="shop_row">
            <Product 
            id="9752711" 
            title="Gud dry fruit chikki"
            price={200} 
            image={chocolate}/>
            <Product 
            id="9752712"
            title="khush khush badam halwa" 
            price={150} 
            image={chocolate}/>
            {/* Product */}
        </div>
        <div className="shop_row">
            <Product 
            id="9752713" 
            title="Khajoor pista roll"
            price={125} 
            image={chocolate}/>
            <Product 
            id="9752714"
            title="Gajar ka halwa" 
            price={100} 
            image={chocolate}/>
            {/* Product */}
        </div>
        <div className="shop_row">
            <Product 
            id="9752715" 
            title="Sweet boondi"
            price={90} 
            image={chocolate}/>
            <Product 
            id="9752716"
            title="Til gud chikki" 
            price={65} 
            image={chocolate}/>
            {/* Product */}
        </div>
        <div className="shop_row">
            <Product 
            id="9752717" 
            title="Peanut chikki"
            price={50} 
            image={chocolate}/>
            
        </div>
        <br></br>
        <div><strong><center>Cakes Corner</center></strong></div>
        <marquee>Cakes prices per</marquee>
        <div className="shop_row">
           
            <Product 
            id="9752718"
            title="Rasmalai Cake" 
            price={450} 
            image={chocolate}/>
            <Product 
            id="9752722"
            title="Chocolava Cake" 
            price={350} 
            image={chocolate}/>
            {/* Product */}
        </div>
        <div className="shop_row">
            <Product 
            id="9752719" 
            title="Red velvet Cake"
            price={450} 
            image={chocolate}/>
            <Product 
            id="9752720"
            title="Chocochip Cake" 
            price={440} 
            image={chocolate}/>
            {/* Product */}
        </div>
        <div className="shop_row">
        <Product 
            id="9752721"
            title="Rossete Vanila Cake" 
            price={350} 
            image={chocolate}/>
    <Product 
            id="9752723"
            title="Zebra Cake" 
            price={300}   
            image={chocolate}/>

                 </div>
    <div className="shop_row">
    

    <Product 
            id="9752724"
            title="Atta mathri" 
            price={550} 
            image={chocolate}/>
    
        {/* Product */}
    </div>
    <div className="shop_row">
    <Product 
            id="9752725"
            title="Methi mathri" 
            price={550} 
            image={chocolate}/>
            <Product 
            id="9752726"
            title="Atta Shakkarpare" 
            price={550} 
            image={chocolate}/>
    </div>
    <div className="shop_row">
    <Product 
            id="9752727"
            title="Sugar Shakkarpare" 
            price={550} 
            image={chocolate}/>
            <Product 
            id="9752728"
            title="Namakpare" 
            price={550} 
            image={chocolate}/>
    </div>
    <div className="shop_row">
    <Product 
            id="9752729"
            title="Besan papdi" 
            price={550} 
            image={chocolate}/>
            <Product 
            id="9752730"
            title="Masala Fries" 
            price={550} 
            image={chocolate}/>
    </div>
    </div>
    </>
    )
}

export default Mithas