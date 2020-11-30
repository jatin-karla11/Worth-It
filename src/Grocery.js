import React, { useState } from 'react'
import './Product.css'
import Product from './Product'
import './shop.css'
import grocery1 from './images/grocery1.jpg'
import './modicare.css'

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
        <marquee>Groceries will be delivered on the next day of order placing..</marquee>
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
        {(category==="pulses&rice")?<>
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
        {(category==="breakfastessentials")?<>
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
