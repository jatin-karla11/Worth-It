import React from 'react';
import worth from './images/worth.jpg';
import {NavLink} from 'react-router-dom';
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

const responsive = {
    0: { items: 3 },
    568: { items: 3 },
    1024: { items: 6 },
};

const items = [
    <div className="item"><img className="slideHome" src={dc}/></div>,
    <div className="item"><img className="slideHome" src={vindhy}/></div>,
    <div className="item"><img className="slideHome" src={grocery1}/></div>,
    <div className="item"><img className="slideHome" src={dairy}/></div>,
    <div className="item"><img className="slideHome" src={md}/></div>,
    <div className="item"><img className="slideHome" src={chocolate}/></div>,
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