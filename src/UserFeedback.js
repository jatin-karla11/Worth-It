import React from 'react'
import StarRating from './StarRating'
import './StarRating.css'

function UserFeedback() {
    return ( 
        <div className="container fluid">
            <br></br>
            <br></br>
            <center><h2>Rate our Service!</h2></center>
            <br></br>
            <div className="starback">
            
            <StarRating/>
            </div>
        </div>
    )
}

export default UserFeedback
