import React from 'react';
import worth from './images/worth.jpg';
import {NavLink} from 'react-router-dom';
import Common from './Common';
import { Paper } from '@material-ui/core';
import './About.css';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import CardCarousel from './CardCarousel';

const About=()=>{
    const [state, setState] = React.useState({
    
        bottom: false,
        
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    return (<>
    <Common name='We try to make your experience' 
    imgsrc={worth}
    visit="/contact" 
    btname="Contact Now"/>
    <div className="aboutdiv"></div>
    <center><Paper elevation={3} className="aboutPaper">    <div>
      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <center><button className="goto" onClick={toggleDrawer(anchor, true)}>Terms and Conditions</button></center>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <div className="swipe">
              <center><div className="tcheading">Terms and Conditions</div></center>
            {/* <span className="swipeline">1. Cancellation and return policy is not available as of now.</span>
            <span className="swipeline">2. Free delivery on order above ₹499.</span>
            <span className="swipeline">3. For instant delivery on the same day the delivery charge will be ₹50.</span>
            <span className="swipeline">4. We take precautionary measures at every level of order processing.</span>
            <span className="swipeline">5. For adding your store to Worth-It contact- 9752763949.</span>
            <span className="swipeline">6. There is no night service.</span>
            <span className="swipeline">7. We assure you quality in our services.</span> */}
            <ul> 
              <li>Cancellation and return policy is not available as of now.</li>
              <li>Free delivery on order above ₹499.</li>
              <li>For instant delivery on the same day the delivery charge will be ₹50.</li>
              <li>We take precautionary measures at every level of order processing.</li>
              <li>For adding your store to Worth-It contact- 9752763949.</li>
              <li>There is no night service.</li>
              <li>We assure you quality in our services.</li>
            </ul>
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div></Paper></center>
    <br></br>
    <CardCarousel/>
    </>);
};

export default About;