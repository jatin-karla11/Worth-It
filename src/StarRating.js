import React, { useEffect, useState } from 'react'
import {FaStar} from 'react-icons/fa';
import './StarRating.css'
import { useStateValue } from './StateProvider';

function StarRating() {
    const [{basket,user1},dispatch]=useStateValue();
    const name=user1?.email
    const [rating, setRating]=useState(null);
    const [hover,setHover]=useState(null);
    const [gotrating,setGotrating]=useState([]);

    useEffect(() => {
        getRating();
    }, [])

    const getRating=()=>{
        fetch('https://worthit-backend.herokuapp.com/getRating',{method: 'POST',
        headers: { 'Content-Type': 'application/json' },body:JSON.stringify({email:name})}).then(response => response.json()).then(data => setGotrating(data));
        // console.log(gotrating);
    }

    const SubmitRating=()=>{
        fetch('https://worthit-backend.herokuapp.com/sendRating',{method: 'POST',
        headers: { 'Content-Type': 'application/json' },body:JSON.stringify({email:name,rating:rating})}).then(response => response.json()).then(data => console.log(data));
        alert("Rating Submitted!!")
        getRating();
    }

    const NewRating=()=>{
        fetch('https://worthit-backend.herokuapp.com/NewRating',{method: 'POST',
        headers: { 'Content-Type': 'application/json' },body:JSON.stringify({email:name})}).then(response => response.json()).then(data => setGotrating(data));
        alert("Old rating removed!!..Press OK to re-rate!")
        
    }

    return (
        <div>
            {(gotrating.length)?<>
                <center><strong>Thanks for Rating!!!</strong></center>
                <br></br>
                {gotrating.map((gR)=>(<>
                    
                <p><strong>Email: </strong>{gR.email}</p>
                <p><strong>Rating: </strong>{gR.rate}</p>
                <center>
                {[...Array(5)].map((start,i)=>{
                    const ratingValue=i+1;
                    return (
                        <label>
                            <input type="radio" name="rating" value={gR.rate}/>
                            <FaStar className="star" color={ratingValue<=gR.rate?"teal":"rgb(234, 237, 237)"}
                             size={40}
                            //  onMouseEnter={()=>setHover(ratingValue)}
                            //  onMouseLeave={()=>setHover(null)}
                             />
                        </label>
                    )
                })}
                </center>
                <br></br>
                <p><strong>Date: </strong>{gR.date.toString()}</p>

                <center><button onClick={NewRating}>Tap to update Rating!</button></center>
                </>))}
            </>:<>{
                <center>
                {[...Array(5)].map((start,i)=>{
                    const ratingValue=i+1;
                    return (
                        <label>
                            <input type="radio" name="rating" value={ratingValue} onClick={()=>setRating(ratingValue)}/>
                            <FaStar className="star" color={ratingValue<=(hover || rating)?"teal":"rgb(234, 237, 237)"}
                             size={40}
                             onMouseEnter={()=>setHover(ratingValue)}
                             onMouseLeave={()=>setHover(null)}
                             />
                        </label>
                    )
                })}
                <br></br>
                <br></br>
                
                <p><strong>Selected rating is: {rating}</strong></p>
                <br></br>
                <form>
                <input type="email" required value={name}/>
                {name?(<button className="goto" onClick={SubmitRating}>Submit your rating</button>):""}
                </form>
            </center>
            }</>}
            
        </div>
    )
}

export default StarRating
