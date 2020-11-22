import React from 'react';
import worth from './images/worth.jpg';
import {Link, NavLink} from 'react-router-dom';
import Common from './Common';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import chocolate from './images/Chocolate.jpg';
import './Home.css'
import dc from './images/dc.jpg'
import md from './images/md.jpg'
import dairy from './images/dairy.jpg'
import vindhy from './images/vindhy.jpg'
import grocery1 from './images/grocery1.jpg'
import mithas from './images/mithas.jpg'
import TC from './images/T-C.png'

const responsive = {
    0: { items: 3 },
    568: { items: 3 },
    1024: { items: 6 },
};

const items = [
    <div className="item"><Link to="/dreamcatchers"><img className="slideHome" src={dc}/><br></br></Link></div>,
    <div className="item"><Link to="/vindhy"><img className="slideHome" src={vindhy}/></Link></div>,
    <div className="item"><Link to="/grocery"><img className="slideHome" src={grocery1}/></Link></div>,
    <div className="item"><Link to="/dairy"><img className="slideHome" src={dairy}/></Link></div>,
    <div className="item"><Link to="/md"><img className="slideHome" src={md}/></Link></div>,
    <div className="item"><Link to="/mithas"><img className="slideHome" src={mithas}/></Link></div>,
    <div className="item"><Link to="/tc"><img className="slideHome" src={TC}/></Link></div>,
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
    </>);
};

export default Home;