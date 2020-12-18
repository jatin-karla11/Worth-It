import React, { useEffect } from 'react';
import './Footer.css'
import io from 'socket.io-client';
import {Link} from 'react-router-dom';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import LocationOnTwoToneIcon from '@material-ui/icons/LocationOnTwoTone';
// import PhoneTwoToneIcon from '@material-ui/icons/PhoneTwoTone';
// import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
let socket;
const Footer=()=>{

    useEffect(() => {
        socket=io("https://worthit-backend.herokuapp.com/", {
            withCredentials: true,
            extraHeaders: {
              "my-custom-header": "abcd"
            }
          });    
    }, [])
    
    const sendMessage=(e)=>{
        // alert("yop")
        e.preventDefault();
        alert("Messange sent successfully to Worth-It!")
        socket.emit("messageSent",{
            "email":document.getElementById("email").value,
            "message":document.getElementById("message").value
        })
    }

    return(
        <>
        <div className="container-fluid">
            <footer>
                <div className="main-content">
                    <div className="left box">
                        <h2>About us</h2>
                        <div className="content">
                            <p>hey there, we are here for you.. </p>
                            <p><Link className="tcabout" to="/tc">View our Terms and Conditions</Link></p>
                            <div className="social">
                                {/* <a href="#"><span className="fab fa-facebook-f"></span></a> */}
                                <a href="https://www.instagram.com/jatin.karla11/"><span className="fab fa-instagram"></span></a>
                                <a href="https://github.com/jatin-karla11"><span className="fab fa-github"></span></a>
                                <a href="https://www.linkedin.com/in/jatin-karla11/"><span className="fab fa-linkedin"></span></a>
                                <a href="tel:9752763949"><span className="fas fa-phone"></span></a>
                                <a href="https://wa.me/+919752763949"><span className="fab fa-whatsapp"></span></a>
                            </div>
                        </div> 
                    </div>
                    <div className="center box">
                        <h2>Address</h2>
                        <div className="content">
                            <div className="place">
                                <span className="fas fa-map-marker-alt"></span>
                                <span className="text">55, Sanjay Nagar</span>
                            </div>
                            <div className="phone">
                            <a href="tel:9752763949"><span className="fas fa-phone-alt"></span></a>
                                <span className="text">09752763949</span>
                            </div>
                            {/* mailto:admin@binarycurve.com?Subject=Hey%20Binary%20Curve */}
                            <div className="email">
                            <a href="mailto:worthwrhfy@gmail.com?Subject=Hey%20Worth-It"><span className="fas fa-envelope"></span></a>
                                <span className="text">worthwrhfy@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="right box">
                        <h2>Contact us</h2>
                        <div className="content">
                            <form>
                                <div className="email">
                                    <div className="text"> Email *</div>
                                    <input type="email" id="email" required/>
                                </div>
                                <div className="msg">
                                    <div className="text">Message *</div>
                                    <textarea cols="25" rows="3" id="message" required></textarea>
                                </div>
                                <div className="btn11">
                                    <button type="submit" onClick={sendMessage} >Send</button>
                               
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <center>
                        <span className="credit">Created By <a href="https://www.linkedin.com/in/jatin-karla11/"><strong>beast</strong></a> | </span>
                        <span className="far fa-copyright"></span><span> 2020 All rights reserved.</span>
                    </center>
                </div>
            </footer>
            </div>
        </>
    )
};

export default Footer;