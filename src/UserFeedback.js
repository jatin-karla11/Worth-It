import React from 'react'
import StarRating from './StarRating'
import './StarRating.css'
import { useStateValue } from './StateProvider';

function UserFeedback() {
    const [{basket,user1},dispatch]=useStateValue();
    const name=user1?.email
    return ( 
        <div className="container fluid">
            <br></br>
            <br></br>
            <center><h2>Rate our Service!</h2></center>
            <br></br>
            <div className="starback">
            
            <StarRating/>
            <br></br>
            {name?"":<><strong>(*Sign in is must for giving feedback..)</strong></>}
            </div>
        </div>
    )
}

export default UserFeedback
