import React from 'react'
import './Product.css'
import Product from './Product'
import './shop.css'
import kajukatli from './images/kajukatli.jpg';
import besanladdu from './images/besanladdu.jpg';
import mohanthal from './images/mohanthal.jpg';
import moongdalhalwa from './images/moongdalhalwa.jpg';
import sevkibarfi from './images/sevkibarfi.jpg';
import boondikeladdu from './images/boondikeladdu.jpg';
import coconutladdu from './images/coconutladdu.jpg';
import dryfruitchikki from './images/dryfruitchikki.jpg';
import gajarhalwa from './images/gajarhalwa.jpg';
import gudattaladdu from './images/gudattaladdu.jpg';
import khajooranjirroll from './images/khajooranjirroll.jpg';
import Khoprapak from './images/Khoprapak.jpg';
import majoon from './images/majoon.jpg';
import makhanbada from './images/makhanbada.jpg';
import mavasoojiladdu from './images/mavasoojiladdu.jpg';
import methimathri from './images/methimathri.jpg';
import namakpare from './images/namakpare.jpg';
import peanutchikki from './images/peanutchikki.jpg';
import shakkarpare from './images/shakkarpare.jpg';
import sitafalrabdi from './images/sitafalrabdi.jpg';
import sugarcoatedshakarpare from './images/sugarcoatedshakarpare.jpg';
import sweetboondi from './images/sweetboondi.jpg';
import khuskhushalwa from './images/khuskhushalwa.jpg';
import til from './images/til.jpg';
// import tuttifrutti from './images/tuttifrutti.jpg';
import besanpapdi from './images/besanpapdi.jpg';
import attamathri from './images/attamathri.jpg';
import masalafries from './images/masalafries.jpg';
import guddfchikki from './images/guddfchikki.jpg';
import roseSharbat from './images/rosesharbat.jpg'
import cpsharbat from './images/Cherry Pudina Sharbat.jpg';
import thandai from './images/Thandai.jpg'
import kalakhattaSharbat from './images/kalakhattaSharbat.jpg'
import khasSharbat from './images/khasSharbat.jpg'
import lemonSharbat from './images/lemonSharbat.jpg'
import pineappleSharbat from './images/PineappleSharbat.jpg'
import mangoSharbat from './images/MangoSharbat.jpg'
import roseSharbat1 from './images/RoseSharbat1.jpg'


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
            title="Rose Sharbat"
            price={100} 
            image={roseSharbat}/>
            {/* <Product 
            id="975274"
            title="Makkhan bada" 
            price={100} 
            image={makhanbada}/> */}
            {/* Product */}
        </div>
        <div className="shop_row">
            <Product 
            id="975275" 
            title="Boondi Ke laddu"
            price={100} 
            image={boondikeladdu}/>
            <Product 
            id="975276" 
            title="Khoprapak"
            price={90} 
            image={Khoprapak}/>
           
        </div>
        <div className="shop_row">
            <Product 
            id="975277" 
            title="Mango Sharbat"
            price={100} 
            image={mangoSharbat}/>
            <Product 
            id="975278"
            title="Pineapple Sharbat" 
            price={100} 
            image={pineappleSharbat}/>
        </div>
        <div className="shop_row">
            <Product 
            id="975277" 
            title="Kala-Khatta Sharbat"
            price={100} 
            image={kalakhattaSharbat}/>
            <Product 
            id="975278"
            title="Khas Sharbat" 
            price={100} 
            image={khasSharbat}/>
        </div>
        <div className="shop_row">
            <Product 
            id="975277" 
            title="Lemon Sharbat"
            price={100} 
            image={lemonSharbat}/>
            <Product 
            id="975278"
            title="Cherry-Pudina Sharbat" 
            price={100} 
            image={cpsharbat}/>
        </div>
        <div className="shop_row">
            <Product 
            id="975277" 
            title="Thandai"
            price={100} 
            image={thandai}/>
            {/* <Product 
            id="975278"
            title="Cherry-Pudina Sharbat" 
            price={100} 
            image={cpsharbat}/> */}
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
            image={makhanbada}/>
            {/* Product */}
        </div>
        <div className="shop_row">
            <Product 
            id="975277" 
            title="Mohan Thal"
            price={100} 
            image={mohanthal}/>
            <Product 
            id="975278"
            title="Sev ki Barfi" 
            price={100} 
            image={sevkibarfi}/>
        </div>
        <div className="shop_row">
            <Product 
            id="975279" 
            title="Majoon"
            price={200} 
            image={majoon}/>
            <Product 
            id="9752710"
            title="Gud atta laddu" 
            price={65} 
            image={gudattaladdu}/>
            {/* Product */}
        </div>
        <div className="shop_row">
            <Product 
            id="9752711" 
            title="Sitafal Rabdi"
            price={100} 
            image={sitafalrabdi}/>
            <Product 
            id="9752712"
            title="Coconut laddu" 
            price={90} 
            image={coconutladdu}/>
            {/* Product */}
        </div>
        <div className="shop_row">
            <Product 
            id="9752713" 
            title="Mava Suji laddu"
            price={90} 
            image={mavasoojiladdu}/>
            <Product 
            id="9752714"
            title="Dry fruit chikki" 
            price={200} 
            image={dryfruitchikki}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="9752715" 
            title="Gud dry fruit chikki"
            price={200} 
            image={guddfchikki}/>
            <Product 
            id="9752716"
            title="khush khush badam halwa" 
            price={150} 
            image={khuskhushalwa}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="9752717" 
            title="Khajoor anjir roll"
            price={200} 
            image={khajooranjirroll}/>
            <Product 
            id="9752718"
            title="Gajar ka halwa" 
            price={100} 
            image={gajarhalwa}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="9752719" 
            title="Sweet boondi"
            price={90} 
            image={sweetboondi}/>
            <Product 
            id="9752720"
            title="Til gud chikki" 
            price={65} 
            image={til}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="9752721" 
            title="Peanut chikki"
            price={50} 
            image={peanutchikki}/>
            
        </div>
        <br></br>
        {/* <div><strong><center>Cakes Corner</center></strong></div>
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
            id="9752721"
            title="Tutti Frutti Muffins(per piece price)" 
            price={30} 
            image={tuttifrutti}/>
    <Product 
            id="9752723"
            title="Zebra Cake" 
            price={300}   
            image={chocolate}/>

                 </div>
                 <br></br> */}
        <div><strong><center>Taste of Namkeen</center></strong></div>
        {/* <marquee>Cakes prices per</marquee> */}
    <div className="shop_row">
        <Product 
            id="9752722"
            title="Atta mathri" 
            price={50} 
            image={attamathri}/>
    
        {/* Product */}
    </div>
    <div className="shop_row">
    <Product 
            id="9752723"
            title="Methi mathri" 
            price={50} 
            image={methimathri}/>
            <Product 
            id="9752724"
            title="Atta Shakkarpare" 
            price={50} 
            image={shakkarpare}/>
    </div>
    <div className="shop_row">
    <Product 
            id="9752725"
            title="Sugar Shakkarpare" 
            price={50} 
            image={sugarcoatedshakarpare}/>
            <Product 
            id="9752726"
            title="Namakpare" 
            price={50} 
            image={namakpare}/>
    </div>
    <div className="shop_row">
    <Product 
            id="9752727"
            title="Besan papdi" 
            price={50} 
            image={besanpapdi}/>
            <Product 
            id="9752728"
            title="Masala Fries" 
            price={50} 
            image={masalafries}/>
    </div>
    </div>
    </>
    )
}

export default Mithas