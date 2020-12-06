import React from 'react'
import socketIOClient  from 'socket.io-client';
 
function RealtimeChat() {

    // var socket=socketIOClient("http://192.168.1.2:1337");
    // socket.on("messageSent",function(message){
    //     console.log(message)
    // })

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
