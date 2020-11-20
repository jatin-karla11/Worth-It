import React,{useState,useEffect} from 'react'
import "./OrderHistory.css";

function Queries() {

    const [queries,setQueries]=useState([]);

    useEffect(() => {
        getQueries();
    }, [])

    const getQueries=()=>{
        // alert("getOrderHistory called")
        // alert(name)
        // alert("yo")
        fetch('https://worthit-backend.herokuapp.com/getEnquiry',{method: 'POST',
        headers: { 'Content-Type': 'application/json' },body:JSON.stringify()}).then(response => response.json()).then(data => setQueries(data));
            
          
    }

    return (
        <div className="container-fluid">
            <br></br>
            <br></br>
            <center><strong><h2>User queries!</h2></strong></center>
            <br></br>
            <div id="bgoh">
            {queries.map((query)=>(<>
            <p><strong>{query.date}</strong></p>
            <p><strong>{query.info.name}</strong></p>
            <p><strong>{query.info.phone}</strong></p>
            <p><strong>{query.info.email}</strong></p>
            <p><strong>{query.info.message}</strong></p>
            <hr></hr>
            </>))}
            </div>
        </div>
    )
}

export default Queries
