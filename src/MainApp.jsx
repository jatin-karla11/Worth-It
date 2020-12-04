import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import san1 from './images/san1.jpg';
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
import Chocolates from './Mithas';
import Dream from './Dream'
import Dairy from './Dairy' 
import Checkout from './Checkout'
import Payment from './Payment';
import { useStateValue } from './StateProvider';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { ThemeProvider,createMuiTheme } from "@material-ui/core/styles"
// import {Paper} from '@material-ui/core'
import {Modal,Button} from 'react-bootstrap'
import Pizza from './Pizza'
import {CubeGrid} from 'styled-loaders-react'
import MD from './MD';
import OrderHistory from './OrderHistory';
import AllProducts from './AllProducts';
import Vindhy from './Vindhy';
import AddProduct from './AddProduct';
import Tc from './Tc';
import AllOrders from './AllOrders';
import Queries from './Queries';
import UserFeedback from './UserFeedback';
import RealtimeChat from './RealtimeChat';
import Modicare from './Modicare';
import ForgotPassword from './ForgotPassword';


function ad(){
  setTimeout(()=>{
    
    //  $("#exampleModal2").show();
    //  $("#exampleModal2").css("opacity",1)
    
  },10000);
}

const MainApp=()=>{
    const [{basket,user1},dispatch]=useStateValue();
    // const theme=createMuiTheme({
    //   palette:{
    //     type:"dark"
    //   }
    // })
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const [loading,setLoading]=useState('true');
    useEffect(() => {
      setTimeout(()=>{
        setLoading()
      },3000)
      // setTimeout(() => {
      //   // console.log('This will run after 1 second!')
      //    $('#exampleModal2').modal();
      //   // alert("helllll") 
      // }, 10000);
    //   $(document).on('click',function (event) {
    //     var clickover = $(event.target);
    //     var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
    //     if (_opened === true && !clickover.hasClass("navbar-toggle")) {
    //         $("button.navbar-toggle").on('click');
    //     }
    // });
      setTimeout(()=>{
        handleShow();
      },70000)
      // ad();
      
    }, []);

    return (
       
      <>
    {/* // <ThemeProvider theme={theme}>
    //   <Paper> */}
    {loading?<div className="load">
    <CubeGrid color="darkcyan" /></div>:
    <>
    <Navbar/>
    <div className="Gap"></div>
    {(basket.length>0)?<center><div className="basketMobile"><Link to="/checkout" ><ShoppingCartIcon className="basket" fontSize="large"/>
  <span className="basket_count"><small>{basket?.length}</small></span></Link></div></center>:""}
    {/* <HashRouter> */}
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/grocery" component={Grocery}/>
        <Route exact path="/mithas" component={Chocolates}/>
        <Route exact path="/dreamcatchers" component={Dream}/>
        <Route exact path="/dairy" component={Dairy}/>
        <Route exact path="/checkout" component={Checkout}/>
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/md" component={MD}/>
        <Route exact path="/orders" component={OrderHistory} />
        <Route exact path="/allProducts" component={AllProducts} />
        <Route exact path="/vindhy" component={Vindhy}/>
        <Route exact path="/addProduct" component={AddProduct}/>
        <Route exact path="/tc" component={Tc}/>
        <Route exact path="/allorders" component={AllOrders}/>
        <Route exact path="/queries" component={Queries}/>
        <Route exact path="/pizza" component={Pizza}/>
        <Route exact path="/feedback" component={UserFeedback}/>
        <Route exact path="/chat" component={RealtimeChat}/>
        <Route exact path="/mc" component={Modicare}/>
        <Route exact path="/fp" component={ForgotPassword}/>

        <Redirect to="/" />
    </Switch>
    {/* </HashRouter> */}
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Footer/>
    <Modal className="ad1" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Effective Sanitizer</Modal.Title>
        </Modal.Header>
      <Modal.Body><img className="sanitizer" src={san1}/><br></br>
      <center><strong>Variants- 100ml-500ml-1L-5L</strong><br></br><br></br>
      <Link to="/md"><Button onClick={handleClose} variant="info">View Store</Button></Link></center>
      </Modal.Body>
        <Modal.Footer>
          
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>    
        </Modal.Footer>
      </Modal>
    
</>
    }
    
    </>
    // </Paper>
    // </ThemeProvider> 
    );
};

export default MainApp;