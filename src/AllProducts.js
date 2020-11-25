import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import './Product.css'
import Product from './Product'
import './shop.css'
import dc from './images/dc.jpg'

function AllProducts() {
    const [{basket,user1},dispatch]=useStateValue();
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        getAllProducts();
    },[])

    const getAllProducts=()=>{
        fetch('http://localhost:1337/getAllProducts',{method: 'POST',
        headers: { 'Content-Type': 'application/json' },body:JSON.stringify()}).then(response => response.json()).then(data => setProducts(data));
        // alert("yo")
        // console.log(products)
    }

    return (
        <div className="container-fluid">
            <br></br><br></br>
            All products!
            <marquee>This page is under build!!!</marquee>
            {/* <img src={process.env.PUBLIC_URL + '/productImages/jatin.jpg'} /> */}
            <br></br>
            <div className="shop">
            <div className="shop_row">
            <div className="allproducts">
            {products.map((product)=>(<>
                <br></br>
                <hr></hr>
                <p><br></br></p>
                <Product 
            id="975271" 
            title={product.name}
            description="" 
            price={product.price} 
            image={process.env.PUBLIC_URL + '/productImages/'+product.productFileName}/>
    <br></br>
    
            </>))}
            </div>
        </div>
                
            </div>
            <br></br><br></br><br></br>
            {(user1?.email==="adminmhu@gmail.com")?<><Link to="/addProduct"><button className="goto">ADD PRODUCT</button></Link></>:""}
        </div>
    )
}

export default AllProducts
  