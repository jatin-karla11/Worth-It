import React,{useState,useEffect} from 'react';
import worth from './images/worth.jpg';
import {Link, NavLink,useHistory} from 'react-router-dom';
import fire from './fire';
import Login from './Login';
import Home from './Home';
import Signin from './Signin';
import Service from './Service';
import  { Redirect } from 'react-router-dom'
import $ from 'jquery';
import firebase from 'firebase'
import worth1 from './images/worth1.jpg';
import worth2 from './images/worth2.jpg';
import {auth} from './fire'
import {useStateValue} from './StateProvider'


const Common=(props)=>{

  const [{basket,user1},dispatch]=useStateValue();

  const history=useHistory();  
  //const [user,setUser]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [emailError,setEmailError]=useState('');
    const [passwordError,setPasswordError]=useState('');
    const [hasAccount,setHasAccount]=useState(false);

    

    const clearInputs=()=>{
      setEmail('');
      setPassword('');
    };

    const clearErrors=()=>{
      setEmailError('');
      setPasswordError('');
    };

    const handleLogin=(e)=>{
      e.preventDefault()
      clearErrors();
      
       auth
        .signInWithEmailAndPassword(email,password)
        .then((auth)=>{
          if(auth){
            history.push('/service');
          }
        })
        .catch(err=>{
          switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
            setEmailError(err.message);
            break;
            case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          }
        })
        
            
    };

    const handleSignup=(e)=>{
      e.preventDefault()
      clearErrors();
      
        
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
          if(auth){
            history.push('/service');
          }
        })
        .catch(err=>{
          switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
            setEmailError(err.message);
            break;
            case "auth/weak-password":
            setPasswordError(err.message);
            break;
          }
        })
    };
    
    const handleLogout=()=>{
      auth.signOut();
    };

    const authListener=()=>{
      fire.auth().onAuthStateChanged(user=>{
        // console.log("the user is>>>" ,user);
        if(user){
          clearInputs();
          //setUser(user);
          dispatch({
            type:'SET_USER',
            user1:user
          })
          // setmodalDismiss({modalDismiss:"modal"})
          $('body').removeClass('modal-open');
$('.modal-backdrop').remove();
  
        }else{
          //setUser('');
          dispatch({
            type:'SET_USER',
            user1:null
          })
        }
      })
    };
    // console.log(user)
    useEffect(()=>{
      authListener();
    },[]);

    return (
    
    <>
    <section id="header" className="d-flex align-items-center">
    <div className="container-fluid">
            <div className='row'>
                <div className="col-10 mx-auto">
                    <div className="row">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
    <span className="home-msg"><b>{props.name}</b> <strong className="brand-name">Worth-It, {!user1?'Guest':user1.email}</strong>!</span>
                        <h2 className="my-3">
                            Team of 1
                        </h2>
                        <div className="mt-3">
                        
                        {/* Signin handleLogout={handleLogout} */}
    {/* <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink> */}
{user1?(<><Link to="/service"><button className="goto">Go to Stores</button></Link><Signin handleLogout={handleLogout}/></>):(<Login email={email} setEmail={setEmail} password={password} setPassword={setPassword}
handleLogin={handleLogin} handleSignup={handleSignup} hasAccount={hasAccount} setHasAccount={setHasAccount}
emailError={emailError} passwordError={passwordError}   />)}

                 </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 header-img ">
                        {/* <img src={props.imgsrc} className="img-fluid animated" alt="home img"/> */}
                        <div style={{height:"40px"}}></div>
                        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={props.imgsrc} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={worth1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={worth2} class="d-block w-100" alt="..." />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
                    </div>
                    </div>
                </div>
            </div>
            
    </div>
    </section>
    </>);

    
};

export default Common;