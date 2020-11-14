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
import { HashRouter,Switch,Route,Redirect, Link } from 'react-router-dom';
import Footer from './Footer';
import Grocery from './Grocery'
import Chocolates from './Chocolates';
import Dream from './Dream'
import Dairy from './Dairy' 
import Checkout from './Checkout'
import Payment from './Payment';
import { useStateValue } from './StateProvider';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { ThemeProvider,createMuiTheme } from "@material-ui/core/styles"
// import {Paper} from '@material-ui/core'
import {Modal,Button} from 'react-bootstrap'
import AutoPop from './AutoPop'
import {CubeGrid} from 'styled-loaders-react'
import MD from './MD';

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
      setTimeout(()=>{
        handleShow();
      },10000)
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
    <HashRouter>
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
        <Route exact path="/md" component={MD}/>
        {/* <Route exact path="/grocery" component={Grocery}/>
        <Route exact path="/grocery" component={Grocery}/> */}
        <Redirect to="/" />
    </Switch>
    </HashRouter>
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
      <center><strong>Variants- 100ml-500ml-5L</strong><br></br><br></br>
      <Link to="/md"><Button onClick={handleClose} variant="info">View Store</Button></Link></center>
      </Modal.Body>
        <Modal.Footer>
          
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>    
        </Modal.Footer>
      </Modal>
    {/* <div class="modal" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div> */}
</>
    }
    
    </>
    // </Paper>
    // </ThemeProvider> 
    );
};

export default MainApp;