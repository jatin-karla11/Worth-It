import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import './Product.css'
import Product from './Product'
import './shop.css'
import dc from './images/dc.jpg'
import SearchIcon from '@material-ui/icons/Search';

function AllProducts() {
    const [{basket,user1},dispatch]=useStateValue();
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        getAllProducts();
    },[])

    const getAllProducts=()=>{
        fetch('https://worthit-backend.herokuapp.com/getAllProducts',{method: 'POST',
        headers: { 'Content-Type': 'application/json' },body:JSON.stringify()}).then(response => response.json()).then(data => setProducts(data));
        // alert("yo")
        // console.log(products)
    }

    const [search,setSearch]=useState("");

    const products1=products.filter(product1=>{
        return product1.name.toLowerCase().indexOf(search.toLowerCase())!==-1
    })
    
    return (
        <div className="container-fluid">
            <br></br>
            <marquee>This page is under build!!!</marquee>
            {/* <img src={process.env.PUBLIC_URL + '/productImages/jatin.jpg'} /> */}
            <br></br>
            <div className="searchProducts"><center><input className="searchInput" onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search for product.."/><SearchIcon fontSize="large" className="search"/></center></div>
            <br></br>
            <div className="shop">
            <div className="shop_row">
            <div className="allproducts">
            {(search==="")?<>
            {products.map((product)=>(<><hr></hr>
                
            <Product 
            id={product.pid} 
            title={product.name}
            description="" 
            price={product.price} 
            image={process.env.PUBLIC_URL + '/productImages/'+product.productFileName}/>
            
            </>))}</>  
:<>
            {products1.map((product)=>(<>
                
                <hr></hr>
                
                <Product 
            id={product.pid} 
            title={product.name}
            description="" 
            price={product.price} 
            image={process.env.PUBLIC_URL + '/productImages/'+product.productFileName}/>
            </>))}</>}

            
    <br></br>
    
                        </div>
        </div>
                
            </div>
            <br></br><br></br><br></br>
            {(user1?.email==="adminmhu@gmail.com")?<><Link to="/addProduct"><button className="goto">ADD PRODUCT</button></Link></>:""}
        </div>
    )
}

export default AllProducts
  