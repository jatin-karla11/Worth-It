import React, { useState } from 'react';

const Contact=()=>{
    const [enqs,setEnqs]=useState([]);
    const [data,setData]=useState({
        name:'',
        phone:'',
        email:'',
        message:''
    });
    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value
            };
        });
    };
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`${data.name} the enquiry is sent successfully!`);
        // alert(data.phone)
        fetch('https://worthit-backend.herokuapp.com/setEnquiry',{method: 'POST',
        headers: { 'Content-Type': 'application/json' },body:JSON.stringify({data:data})}).then(response => response.json()).then(data => setEnqs(data));
    };
    return (<>
    <div className="my-5">
        <h1 className="text-center">Join Us</h1>
    </div>
    <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
            <div class="form-group">
    <label for="exampleInput">Full Name</label>
    <input required type="text"
    name="name" value={data.fullname} onChange={InputEvent}
    class="form-control" id="exampleInput" aria-describedby="emailHelp"/>
    </div>
    <div class="form-group">
    <label for="exampleInput">Contact Number</label>
    <input required type="number" maxLength='10' 
    name="phone" value={data.phone} onChange={InputEvent}
    class="form-control" id="exampleInput" aria-describedby="emailHelp"/>
    </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input required type="email" 
    name="email" value={data.email} onChange={InputEvent}
    class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInput">Type of Service/Product</label>
    <textarea rows="3" placeholder="enter your message here.."
    name="message" value={data.mssg} onChange={InputEvent}
    class="form-control" id="exampleInput" aria-describedby="emailHelp"></textarea>
    </div>
    <br></br>
  <button type="submit" class="btn btn-outline-dark" style={{width:"100%"}}>Submit</button>
</form>
            </div>
        </div>
    </div>
    </>);
};

export default Contact;