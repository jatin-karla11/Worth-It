import React from 'react';

const Signin=({handleLogout})=>{
    return(
        <>
        <button onClick={handleLogout}>Logout</button>
        </>
    );
};

export default Signin;