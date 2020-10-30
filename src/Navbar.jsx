import React from 'react';
import worth from './worth.jpg';
import {Link, NavLink} from 'react-router-dom';
import MoodIcon from '@material-ui/icons/Mood';
import fire from './fire'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
// import Nav from './Nav'
// import $ from 'jquery'
// import {Helmet} from "react-helmet";

const Navbar = ()=>{
  

  // var user = fire.auth().currentUser;
  //   var name, email, photoUrl, uid, emailVerified;
    
  //   if (user != null) {
  //     name = user.displayName;
  //     email = user.email;
  //     photoUrl = user.photoURL;
  //     emailVerified = user.emailVerified;
  //     uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
  //                      // this value to authenticate with your backend server, if
  //                      // you have one. Use User.getToken() instead.
  //   }

  const[{basket},dispatch]=useStateValue();

  return(
        <>
        
        <div className="container-fluid nav_bg" id="fix">
            <div className='row'>
                <div className="col-12 mx-auto">

                
            <nav className="navbar navbar-expand-lg navbar-light">
  <NavLink className="navbar-brand" to="/">
  {/* <img src={worth} alt="logo" height="150"/> */}
  We are here for you! <MoodIcon className="mood" fontSize="large"/>
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

      


  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">

      <li className="nav-item active">
        <NavLink exact activeClassName="menu_active" className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <Link to="/checkout">
      <li className="nav-item">
      <ShoppingCartIcon className="basket" fontSize="large"/>
  <span className="basket_count">{basket?.length}</span>
      </li>
      </Link>
      
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
      
    </ul>
    
  </div>
</nav>
</div>
            </div>
        </div>
        
        </>
    );
};

export default Navbar;