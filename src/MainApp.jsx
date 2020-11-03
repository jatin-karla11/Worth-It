import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './index.css';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Signin from './Signin';
import { Switch,Route,Redirect, Link } from 'react-router-dom';
import Footer from './Footer';
import Grocery from './Grocery'
import Chocolates from './Chocolates';
import Dream from './Dream'
import Dairy from './Dairy' 
import Checkout from './Checkout'
import Payment from './Payment';
import { useStateValue } from './StateProvider';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const MainApp=()=>{
    const [{basket,user1},dispatch]=useStateValue();
    return (<>
    <Navbar/>
    <div className="Gap"></div>
    {(basket.length>0)?<center><div className="basketMobile"><Link to="/checkout" ><ShoppingCartIcon className="basket" fontSize="large"/>
  <span className="basket_count"><small>{basket?.length}</small></span></Link></div></center>:""}
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/grocery" component={Grocery}/>
        <Route exact path="/chocolatestore" component={Chocolates}/>
        <Route exact path="/dreamcatchers" component={Dream}/>
        <Route exact path="/dairy" component={Dairy}/>
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/payment" component={Payment} />
        {/* <Route exact path="/grocery" component={Grocery}/>
        <Route exact path="/grocery" component={Grocery}/> */}
        <Redirect to="/" />
    </Switch>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Footer/>
    </>);
};

export default MainApp;