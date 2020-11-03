import React, { useEffect } from 'react';
import fire from './fire'
import firebase from 'firebase' 
import './Login.css'
import { useStateValue } from './StateProvider';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const Login=(props)=>{

  
    function passwordeye() {
      var x=document.getElementById("inputpass");
      var y=document.getElementById("hide1");
      var z=document.getElementById("hide2");
      if(x.type==="password"){
        x.type="text";
        y.style.display="block";
        z.style.display="none";
      }
      else{
        x.type="password";
        y.style.display="none";
        z.style.display="block";
      }
    }
  
  const [{basket,user1},dispatch]=useStateValue();

      const {email,setEmail,password,setPassword,handleLogin,
      handleSignup,hasAccount,setHasAccount,emailError,passwordError,modalDismiss}=props;
    var user;
      const googleSignIn=()=>{
        var base_provider=new firebase.auth.GoogleAuthProvider()
        fire.auth().signInWithPopup(base_provider).then(function(result){
          user1 = result.user;
          console.log(result)
          console.log("Success login with google")
        }).catch(function(err){
          console.log(err)
          console.log("Failed login")
        })
      }
      
     //console.log(user)
     
    return(<>
        <button type="button" id="yo" className="btn-get-started" data-toggle="modal" data-target="#exampleModal">
  Sign in
</button>

<div className="login_container">
<div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"><strong>Sign-In</strong></h5>
        {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> */}
      </div>
      <div class="modal-body">
          
            <label><strong>Email</strong></label><br></br>
            <input type="email" className="input"
            autoFocus
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)} />
            <p className="errorMsg">{emailError}</p>
            <label><strong>Passsword</strong></label><br></br>
            <input type="password" className="input" 
            id="inputpass" required value={password} 
            onChange={e=>setPassword(e.target.value)} />
            <span onClick={passwordeye}>
            <VisibilityIcon id="hide1"/>
            <VisibilityOffIcon id="hide2"/>
            </span>
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
                {hasAccount?(
                    <>
                        <button className="login_button" onClick={handleLogin} data-dismiss="">Sign in</button>
                        <p>Don't have an account? <button onClick={()=>setHasAccount(!hasAccount)}>Sign up</button> </p>
                    </>
                ):(
                    <>
                    <button className="login_button" onClick={handleSignup} >Sign up</button>
                        <p>Have an account? <button onClick={()=>setHasAccount(!hasAccount)}>Sign in</button></p>
                    </>
                )}
            </div>
            <center><p>OR</p>
            <button className="login_button" onClick={googleSignIn}>Sign in with Google</button></center>
      </div>
      <div class="modal-footer ">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
        
      </div>
    </div>
  </div> 
</div>
</div>

    </>);
};

export default Login;