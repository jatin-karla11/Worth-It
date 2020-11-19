import React, { useState } from 'react';

const Contact=()=>{
    const [data,setData]=useState({
        fullname:'',
        phone:'',
        email:'',
        mssg:''
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
        // alert(`${data.fullname}`);
    };
    return (<>
    <div className="my-5">
        <h1 className="text-center">Join Us</h1>
    </div>
    <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
            <form action="mailto:worthwrhfy@gmail.com?Subject=Hey%20Worth-It">
            <div class="form-group">
    <label for="exampleInput">Full Name</label>
    <input required type="text"
    name="fullname" value={data.fullname} onChange={InputEvent}
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
    <label for="exampleInput">Message</label>
    <textarea rows="3" 
    name="mssg" value={data.mssg} onChange={InputEvent}
    class="form-control" id="exampleInput" aria-describedby="emailHelp"></textarea>
    </div>
  <button type="submit" class="btn btn-outline-info">Submit</button>
</form>
            </div>
        </div>
    </div>
    </>);
};

export default Contact;