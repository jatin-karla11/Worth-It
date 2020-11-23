import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa';
import './StarRating.css'
import { useStateValue } from './StateProvider';

function StarRating() {
    const [{basket,user1},dispatch]=useStateValue();
    const name=user1?.email
    const [rating, setRating]=useState(null);
    const [hover,setHover]=useState(null);
    const [gotrating,setGotrating]=useState(null);

    const SubmitRating=()=>{
        fetch('http://localhost:1337/sendRating',{method: 'POST',
        headers: { 'Content-Type': 'application/json' },body:JSON.stringify({email:name,rating:rating})}).then(response => response.json()).then(data => setGotrating(data));

        console.log(gotrating)
    }

    return (
        <div>
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
                <input required value={name}/>
                <button className="goto" onClick={SubmitRating}>Submit your rating</button>
                </form>
            </center>
        </div>
    )
}

export default StarRating
