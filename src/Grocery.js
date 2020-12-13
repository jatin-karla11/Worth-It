import React, { useState } from 'react'
import './Product.css'
import Product from './Product'
import './shop.css'
import grocery1 from './images/grocery1.jpg'
import './modicare.css'
import maggi from './images/maggi.jpg'
import yippee from './images/yippee.jpg'
import toordal from './images/toordal.jpg'
import moongmogar from './images/moongmogar.jpg'
import moongchilka from './images/moongchilka.jpg'
import masoordal from './images/masoordal.jpg'
import chanadal from './images/chanadal.jpg'
import kabulichana from './images/kabulichana.jpg'
import desichana from './images/desichana.jpeg'
import rajma from './images/rajma.jpg'
import haldi from './images/haldi.jpg'
import kissanketchup from './images/kissanketchup.jpg'
import dhaniyapowder from './images/dhaniyapowder.jpg'
import neerajketchup from './images/neerajketchup.jpg'


const options = [
    {
      label: "Health Drinks",
      value: "healthdrinks",
    },
    {
      label: "Cooking Oil",
      value: "cookingoil",
    },
    {
      label: "Biscuits & Snacks",
      value: "biscuits&snacks",
    },
    {
      label: "Tea & Coffee",
      value: "tea&coffee",
    },
    {
        label: "Noodles",
        value: "noodles",
      },
      {
        label: "Beverages",
        value: "beverages",
      },
      {
        label: "Personal Care",
        value: "personalcare",
      },
      {
        label: "Home Essentials",
        value: "homeessentials",
      },
      {
        label: "Spices & Masala",
        value: "spices&masala",
      },
      {
        label: "Pulses & Rice",
        value: "pulses&rice",
      },
      {
        label: "Breakfast Essentials",
        value: "breakfastessentials",
      },
      {
        label: "Flour",
        value: "flour",
      },
  ];

function Grocery() {
    const [category,setCategory]=useState("healthdrinks");
    const handleChange=(e)=> {
        // console.log(e.target.value)        
        setCategory(e.target.value);
   
      }

    return (
        <>
        
        <div className="shop">
        <div className="shop-title">
            Groceries by Mahadev General Store
        </div>
        {/* <marquee>Groceries will be delivered on the next day of order placing..</marquee> */}
        <marquee>This Store is under build.</marquee>
        <center><select className="selectModicare" value={category} onChange={handleChange}>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select></center>
        
        {(category==="healthdrinks")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="" 
            price={550} 
            image={grocery1}/>
            <Product 
            id="975272"
            title="" 
            price={750} 
            image={grocery1}/>
            
        </div>
        </>:""}
        {(category==="cookingoil")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="" 
            price={550} 
            image={grocery1}/>
            <Product 
            id="975272"
            title="" 
            price={750} 
            image={grocery1}/>
            
        </div>
        </>:""}
        {(category==="biscuits&snacks")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="" 
            price={550} 
            image={grocery1}/>
            <Product 
            id="975272"
            title="" 
            price={750} 
            image={grocery1}/>
            
        </div>
        </>:""}
        {(category==="tea&coffee")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="" 
            price={550} 
            image={grocery1}/>
            <Product 
            id="975272"
            title="" 
            price={750} 
            image={grocery1}/>
            
        </div>
        </>:""}
        {(category==="noodles")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Maggi" 
            price={12} 
            image={maggi}/>
            <Product 
            id="975272"
            title="Yippee" 
            price={10} 
            image={yippee}/>
            
        </div>
        </>:""}
        {(category==="beverages")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="" 
            price={550} 
            image={grocery1}/>
            <Product 
            id="975272"
            title="" 
            price={750} 
            image={grocery1}/>
            
        </div>
        </>:""}
        {(category==="personalcare")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="" 
            price={550} 
            image={grocery1}/>
            <Product 
            id="975272"
            title="" 
            price={750} 
            image={grocery1}/>
            
        </div>
        </>:""}
        {(category==="homeessentials")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="" 
            price={550} 
            image={grocery1}/>
            <Product 
            id="975272"
            title="" 
            price={750} 
            image={grocery1}/>
            
        </div>
        </>:""}
        {(category==="spices&masala")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Haldi (500gm)" 
            price={100} 
            image={haldi}/>
            <Product 
            id="975272"
            title="Dhaniya powder (500gm)" 
            price={90} 
            image={dhaniyapowder}/>
            
        </div>
        </>:""}
        {(category==="pulses&rice")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Toor Dal (1Kg)" 
            price={110} 
            image={toordal}/>
            <Product 
            id="975272"
            title="Moong Mogar (1Kg)" 
            price={110} 
            image={moongmogar}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Masoor Dal (1Kg)" 
            price={110} 
            image={masoordal}/>
            <Product 
            id="975272"
            title="Chana Dal (1Kg)" 
            price={70} 
            image={chanadal}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Moong Chilka (1Kg)" 
            price={95} 
            image={moongchilka}/>
            <Product 
            id="975272"
            title="Kabuli Chana (1Kg)" 
            price={100} 
            image={kabulichana}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Desi Chana (1Kg)" 
            price={90} 
            image={desichana}/>
            <Product 
            id="975272"
            title="Rajma (1Kg)" 
            price={140} 
            image={rajma}/>
            
        </div>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Moong Chilka (1Kg)" 
            price={95} 
            image={moongchilka}/>
            <Product 
            id="975272"
            title="Kabuli Chana (1Kg)" 
            price={100} 
            image={kabulichana}/>
            
        </div>
        </>:""}
        {(category==="breakfastessentials")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="Kissan Ketchup (1kg)" 
            price={125} 
            image={kissanketchup}/>
            <Product 
            id="975272"
            title="Neeraj Ketchup (1kg)" 
            price={75} 
            image={neerajketchup}/>
            
        </div>
        </>:""}
        {(category==="flour")?<>
        <div className="shop_row">
            <Product 
            id="975271" 
            title="" 
            price={550} 
            image={grocery1}/>
            <Product 
            id="975272"
            title="" 
            price={750} 
            image={grocery1}/>
            
        </div>
        </>:""}

        
    </div>
    </>

    )
}

export default Grocery
