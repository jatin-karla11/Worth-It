import React from 'react';
import worth from './images/worth.jpg';
import {Link, NavLink} from 'react-router-dom';
import Common from './Common';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Home.css'
import dc from './images/dc.jpg'
import md from './images/md.jpg'
import dairy from './images/dairy.jpg'
import vindhy from './images/vindhy.jpg'
import grocery1 from './images/grocery1.jpg'
import mithas from './images/mithas.jpg'
import TC from './images/T-C.png'
import pizza from './images/pizza.jpg'
import ig from './images/ig.jpg'
import { Paper } from '@material-ui/core';
import modicare from './images/modicare.png'
import ServiceCard from './ServiceCard'
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import cakead from './images/cakead.jpg'
import sanitizerad from './images/sanitizerad.jpg'
import sweetad from './images/sweetad.jpg'
import dairyad from './images/dairyad.jpg'
import groceryad from './images/groceryad.jpg'
import braceletad from './images/braceletad.jpg'
import allSharbat from './images/allsharbat.jpg'


const responsive = { 
    0: { items: 3 },
    568: { items: 3 },
    1024: { items: 6 },
};

const items = [
    
    <div className="item1"><Link to="/grocery"><img className="slideHome" src={grocery1}/></Link></div>,
    <div className="item1"><Link to="/dairy"><img className="slideHome" src={dairy}/></Link></div>,
    <div className="item1"><Link to="/md"><img className="slideHome" src={md}/></Link></div>,
    <div className="item1"><Link to="/mithas"><img className="slideHome" src={mithas}/></Link></div>,
    <div className="item1"><Link to="/vindhy"><img className="slideHome" src={vindhy}/></Link></div>,
    <div className="item1"><Link to="/mc"><img className="slideHome" src={modicare}/></Link></div>,
    <div className="item1"><Link to="/pizza"><img className="slideHome" src={pizza}/></Link></div>,
    <div className="item1"><Link to="/dreamcatchers"><img className="slideHome" src={dc}/><br></br></Link></div>,
    <div className="item1"><Link to="/tc"><img className="slideHome" src={TC}/></Link></div>,
    
];

const Home=()=>{
    return (<>
    <Common name='Grow your business with' 
    imgsrc={worth}
    visit="/" 
    btname="Sign-In"/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="imgslider"><AliceCarousel mouseTracking items={items}
        responsive={responsive} disableDotsControls="false" disableButtonsControls="false" />
    </div>
    <br></br>
    <div className="mdhome">
        <a href="https://medilinediagnostics.in/"><img className="mdimage" src={md} alt=""/></a>
        <div className="mddesc">
        <strong>Diagnostics Products Distributor</strong><br></br>
        <span className="mddescription">Kits, Lab Equipments, Rapid tests, Analytical chemicals, Plastict-wares and consumables.</span>
        
        <br></br>
        <strong><a className="linkmd" href="https://medilinediagnostics.in/">Mediline Diagnostics</a></strong>
        </div>
    </div>
    <br></br>
    <Link className="pizzaPaperLink" to="/mc"><Paper className="pizzaPaper" elevation={3} ><img className="homePaperImage" src={modicare}/><div className="contactHarsh"><strong>Available Products:</strong><br></br><span className="mcspan">Skin Care, Home Care, Personal Care, Watches, Colors, Jewellery</span></div></Paper></Link>
    <br></br>
    <div className="sliderjatin">
    
            <OwlCarousel className="owl-theme"
            items="1"
            autoplay
            autoplayTimeout={7000}
            dots
            loop    
            
            autoplayHoverPause
            autoplaySpeed={4000}
            >
                <div className="item">
                <ServiceCard title={sweetad} where="mithas"/>
                </div>
                <div className="item">
                {/* <img src={image1}/> */} 
                <ServiceCard title={cakead} where="cakes"/>
                </div>
                <div className="item">
                <ServiceCard title={sanitizerad} where="md"/>
                </div>
                <div className="item">
                <ServiceCard title={allSharbat} where="mithas"/> 
                </div>
                <div className="item">
                <ServiceCard title={dairyad} where="dairy"/> 
                </div>
                <div className="item">
                <ServiceCard title={groceryad} where="grocery"/>
                </div>
                
                <div className="item">
                <ServiceCard title={braceletad} where="vindhy"/>
                </div>
            </OwlCarousel>
            
            </div>
    <br></br>
    <div className="dog">
    <div className="mddesc">
        <strong>Contact- 8630268941</strong><br></br>
        <span className="dogdescription">For dogs training and behaviour related issues or for any animal rescue.. </span>
        
        </div>
    <a href="https://www.instagram.com/caninekrishna/"><img className="mdimage" src={ig} alt=""/></a>   
    </div>
    <br></br>
    <br></br>
    <center><Paper elevation={3} className="feedback">
        
        <center><Link to="/feedback"><button className="goto">Tap to rate our service!!</button></Link></center>
    </Paper></center>
    </>);
};

export default Home;