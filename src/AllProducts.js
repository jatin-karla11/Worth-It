import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function AllProducts() {
    const [{basket,user1},dispatch]=useStateValue();
    return (
        <div className="container-fluid">
            <br></br><br></br>
            All products!
            <marquee>This page is under build!!!</marquee>
            {/* <img src={process.env.PUBLIC_URL + '/main-logo.jpg'} /> */}
            <br></br>
            <br></br><br></br><br></br>
            {(user1?.email==="adminmhu@gmail.com")?<><Link to="/addProduct"><button className="goto">ADD PRODUCT</button></Link></>:""}
        </div>
    )
}

export default AllProducts
