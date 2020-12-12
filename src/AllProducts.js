import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import './Product.css'
import Product from './Product'
import './shop.css'
import SearchIcon from '@material-ui/icons/Search';
import OpenMenu from './OpenMenu';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));

  


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
  
    const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

    return (
        <div className="container-fluid">
            <br></br>
            {/* <marquee>This page is under build!!!</marquee> */}
            {/* <img src={process.env.PUBLIC_URL + '/productImages/jatin.jpg'} /> */}
            <br></br>
            <div className="searchProducts"><center><input className="searchInput" onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search for product.."/><SearchIcon aria-describedby={id} variant="contained" onClick={handleClick} fontSize="large" className="search"/></center></div> 
            <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>Automatic search is on!</Typography>
      </Popover>
            <br></br>
            
            <center><OpenMenu/></center>
            <div className="shop">
            <div className="shoprow1">
            
            {(search==="")?<>
            {products.map((product)=>(<>
                <div className="allproducts">    
            <Product 
            id={product.pid} 
            title={product.name}
            description="" 
            price={product.price} 
            image={process.env.PUBLIC_URL + '/productImages/'+product.productFileName}/>
            </div>
            </>))}</>  
:<>
            {products1.map((product)=>(<>
                
                
                
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
            <br></br><br></br><br></br>
            {(user1?.email==="adminmhu@gmail.com")?<><Link to="/addProduct"><button className="goto">ADD PRODUCT</button></Link></>:""}
        </div>
    )
}

export default AllProducts
  