import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import socketIOClient  from 'socket.io-client';
import "./OrderHistory.css";
import { useStateValue } from './StateProvider';
 
function RealtimeChat() { 

    var socket=socketIOClient("https://worthit-backend.herokuapp.com/", {
        withCredentials: true,
        extraHeaders: {
          "my-custom-header": "abcd"
        }
      });
    socket.on("messageSent",function(message){
        // $.notify("New Message\n"+message.message+"\n\nFrom: "+message.email)
        alert("New Message\n"+message.message+"\n\nFrom: "+message.email);
    }) 

    const [queries,setQueries]=useState([]);

    useEffect(() => {
        getQueries();
    }, [])
    const [{basket,user1},dispatch]=useStateValue();
    const name=user1?.email

    const getQueries=()=>{
        // alert("getOrderHistory called")
        // alert(name)
        // alert("yo")
        fetch('https://worthit-backend.herokuapp.com/getQuery',{method: 'POST',
        headers: { 'Content-Type': 'application/json' },body:JSON.stringify({email:name})}).then(response => response.json()).then(data => setQueries(data));
            
          
    }

    return (
        <div className="container-fluid">
            <br></br>
            <br></br>
            <center><h1>Real time notifications!</h1></center>
            <br></br>
            {(name==="adminmhu@gmail.com")?<>
            <div id="bgoh">
            {queries.map((query)=>(<>
            <p><strong>{query.date}</strong></p>
            <p><strong>{query.email}</strong></p>
            <p><strong>{query.message}</strong></p>
            <hr></hr>
            </>))}
            </div>
            </>:<><marquee><strong>You are not admin!</strong></marquee></>}
            
        </div>
    )
}

export default RealtimeChat
