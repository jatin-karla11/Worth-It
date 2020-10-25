import React from 'react';

const Login=(props)=>{
    
    const {email,setEmail,password,setPassword,handleLogin,
        handleSignup,hasAccount,setHasAccount,emailError,passwordError}=props;
    return(<>
        <button type="button" id="yo" className="btn-get-started" data-toggle="modal" data-target="#exampleModal">
  Sign in
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          
            <label>Email</label>
            <input type="email"
            autoFocus
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)} />
            <p className="errorMsg">{emailError}</p>
            <label>Passsword</label>
            <input type="password" required value={password} 
            onChange={e=>setPassword(e.target.value)} />
            <p className="errorMsg">{passwordError}</p>
            <div className="btnContainer">
                {hasAccount?(
                    <>
                        <button onClick={handleLogin}>Sign in</button>
                        <p>Don't have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span> </p>
                    </>
                ):(
                    <>
                    <button onClick={handleSignup}>Sign up</button>
                        <p>Have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Sign in</span></p>
                    </>
                )}
            </div>
      </div>
      <div class="modal-footer ">
        {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button> */}
        <button>Sign in with Google</button>
      </div>
    </div>
  </div>
</div>
       
    </>);
};

export default Login;