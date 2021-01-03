import React from 'react';
import worth from './images/worth.jpg';
import {NavLink} from 'react-router-dom';
import Common from './Common';
import { Paper } from '@material-ui/core';
import './About.css';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import CardCarousel from './CardCarousel';

const About=()=>{
  //   const hey=()=>{
  //     console.log("hey called!")
  //     const publicVapidKey='BG5ui8drP4P1gxjSM1jSy0eCDSDwujI1_6mdnONdEhrp6AKLVYN1OU_Vx6uygFvWr0oJMva6z9pqSZlhKG2ec8I';
  //     if ('serviceWorker' in navigator) {
  //       console.log("ok")
  //     navigator.serviceWorker.ready.then(registration => {
  //       console.log("okay")
  //       if (!registration.pushManager) {
  //         alert("Push Unsupported")
  //         return
  //       }
        
  //       registration.pushManager
  //         .subscribe({
  //           userVisibleOnly: true, //Always display notifications
  //           applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
  //         })
  //         .then(subscription => fetch('http://localhost:1337/subscribe',{
  //           method:'POST',
  //           body:JSON.stringify(subscription),
  //           headers:{
  //               'content-type':'application/json'
  //           }
  //       }))
  //         .catch(err => console.error("Push subscription error: ", err))
  //     })

  //     function urlBase64ToUint8Array(base64String) {
  //       const padding = '='.repeat((4 - base64String.length % 4) % 4);
  //       const base64 = (base64String + padding)
  //         .replace(/-/g, '+')
  //         .replace(/_/g, '/');
      
  //       const rawData = window.atob(base64);
  //       const outputArray = new Uint8Array(rawData.length);
      
  //       for (let i = 0; i < rawData.length; ++i) {
  //         outputArray[i] = rawData.charCodeAt(i);
  //       }
  //       return outputArray;
  //     }
  //   }
  // }
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
    <center><button>Subscribe</button></center>
    {/* onClick={hey} */}
    <CardCarousel/>
    </>);
};

export default About;