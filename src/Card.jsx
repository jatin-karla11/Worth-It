import React from 'react';
import worth from './images/worth.jpg'
import { Link } from 'react-router-dom';
const Card=(props)=>{
    return (<>
    
                        <div className="col-md-4 col-10 mx-auto">
                        <div className="card">
  <center><img src={props.imgsrc} className="card-img-top" alt="..." /></center>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">..................</p>
    <Link to={props.to} className="btn btn-secondary">Grab Some!</Link>
    </div>
</div>
</div>
                    
    </>);
};

export default Card;