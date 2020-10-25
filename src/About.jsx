import React from 'react';
import worth from './images/worth.jpg';
import {NavLink} from 'react-router-dom';
import Common from './Common';

const About=()=>{
    return (<>
    <Common name='Welcome to About page!' 
    imgsrc={worth}
    visit="/contact" 
    btname="Contact Now"/>
    </>);
};

export default About;