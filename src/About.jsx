import React from 'react';
import worth from './images/worth.jpg';
import {NavLink} from 'react-router-dom';
import Common from './Common';

const About=()=>{
    return (<>
    <Common name='We try to make your experience' 
    imgsrc={worth}
    visit="/contact" 
    btname="Contact Now"/>
    </>);
};

export default About;