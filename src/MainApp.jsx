import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Signin from './Signin';
import { Switch,Route,Redirect } from 'react-router-dom';
import Footer from './Footer';
import Grocery from './Grocery'
import Chocolates from './Chocolates';
import Dream from './Dream'
import Dairy from './Dairy' 

const MainApp=()=>{
    return (<>
    <Navbar/>
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