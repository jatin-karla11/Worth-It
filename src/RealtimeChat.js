import React from 'react'
import socketIOClient  from 'socket.io-client';

 
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

    return (
        <div>
            <br></br>
            <br></br>
            <center><h1>Real time notifications!</h1></center>
        <div style={{height:"400px"}}></div>
        </div>
    )
}

export default RealtimeChat
