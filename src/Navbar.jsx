import React from 'react';
import worth from './worth.jpg';
import {NavLink} from 'react-router-dom';
import MoodIcon from '@material-ui/icons/Mood';

const Navbar = ()=>{
    return(
        <>
        <div className="container-fluid nav_bg">
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
      <li className="nav-item">
      {/* <button type="button" className="btn-get-started" data-toggle="modal" data-target="#exampleModal">
  Sign-in
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
      </li>
      
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