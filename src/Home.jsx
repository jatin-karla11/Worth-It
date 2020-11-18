import React from 'react';
import worth from './images/worth.jpg';
import {NavLink} from 'react-router-dom';
import Common from './Common';

const Home=()=>{
    return (<>
    <Common name='Grow your business with' 
    imgsrc={worth}
    visit="/" 
    btname="Sign-In"/>
    
    
    </>);
};

export default Home;