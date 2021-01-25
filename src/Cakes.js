import React from 'react'
import './Product.css'
import Product from './Product'
import './shop.css'
// import dairy from './images/dairy.jpg'
import ButterscotchCake from './images/ButterscotchCake.jpg'
import StrawberryCake from './images/StrawberryCake.jpg'
import PaanCake from './images/PaanCake.jpg'
import DollCake from './images/DollCake.jpg'
import RabdiCake from './images/RabdiCake.jpg'
import ChocolateCake from './images/ChocolateCake.jpg'
import BlackforestCake from './images/BlackforestCake.jpg'
import WhiteforestCake from './images/WhiteforestCake.jpg'
import MarbleCake from './images/MarbleCake.jpg'
import RasmalaiCake from './images/RasmalaiCake.jpg'
import PhotoCake from './images/PhotoCake.jpg'
import RedvelvetCake from './images/RedvelvetCake.jpg'
import WheelCake from './images/WheelCake.jpg'

function Cakes() {
    return (
        <>
        
        <div className="shop">
        <div className="shop-title">
            Cakes by Varsha
        </div>
        <marquee>Cakes will be delivered after two days of order placing..</marquee>
        <div className="shop_row">
            <Product 
            id="9752743" 
            title="Black Forest Cake" 
            price={400} 
            image={BlackforestCake}/>
            <Product 
            id="9752744"
            title="Rasmalai Cake" 
            price={500} 
            image={RasmalaiCake}/>
            {/* Product */}
        </div>
        <div className="shop_row">
        <Product 
            id="9752745"
            title="White Forest Cake" 
            price={400} 
            image={WhiteforestCake}/>
        <Product 
            id="9752746"
            title="Chocolate Cake" 
            price={300} 
            image={ChocolateCake}/>
                 </div>
    <div className="shop_row">
    <Product 
            id="9752747"
            title="Butterscotch Cake" 
            price={300}   
            image={ButterscotchCake}/>

    <Product 
            id="975276"
            title="Strawberry Cake" 
            price={300} 
            image={StrawberryCake}/>
    
    
    </div>
    <div className="shop_row">
    <Product 
            id="975277"
            title="Red velvet Cake" 
            price={500} 
            image={RedvelvetCake}/>
            <Product 
            id="975278"
            title="Doll Cake" 
            price={400} 
            image={DollCake}/>
    </div>
    <div className="shop_row">
    <Product 
            id="975277"
            title="Paan Cake" 
            price={300} 
            image={PaanCake}/>
            <Product 
            id="975278"
            title="Rabdi Cake" 
            price={500} 
            image={RabdiCake}/>
    </div>
    <div className="shop_row">
    <Product 
            id="975277"
            title="Wheel Cake" 
            price={300} 
            image={WheelCake}/>
            <Product 
            id="975278"
            title="Photo Cake" 
            price={400} 
            image={PhotoCake}/>
    </div>
    <div className="shop_row">
    <Product 
            id="975277"
            title="Marble Cake" 
            price={400} 
            image={MarbleCake}/>
            
    </div>
    </div>
    </>
    )
}

export default Cakes
