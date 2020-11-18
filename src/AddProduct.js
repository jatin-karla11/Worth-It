import React, { useState } from 'react'
import './AddProduct.css'

function AddProduct() {

    const [pname,setPname]=useState("");
    const [price,setPrice]=useState("");

    const called=(e)=>{
        e.preventDefault();
        // alert(pname);
        // alert(price)
    };

    return (<><div className="my-5">
    <h1 className="text-center">Fill product details!</h1>
</div>
<div className="container contact_div">
    <div className="row">
        <div className="col-md-6 col-10 mx-auto">
        <form onSubmit={called}>
        <div class="form-group">
<label for="exampleInput">Product Name</label>
<input required type="text"
name="fullname" value={pname} onChange={(e)=>{setPname(e.target.value)}}
class="form-control" id="exampleInput" aria-describedby="emailHelp"/>
</div>
<br></br>
<div class="form-group">
<label for="exampleInput">Product Price</label>
<input required type="text" maxLength='10' 
name="phone" value={price} onChange={(e)=>{setPrice(e.target.value)}}
class="form-control" id="exampleInput" aria-describedby="emailHelp"/>
</div>
<br></br>
  <div class="form-group">
    <label for="exampleFormControlFile1">Upload Product Image</label>
    <input required type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>

<br></br>
<button type="submit" class="btn btn-outline-dark">Submit</button>
</form>
        </div>
    </div>
</div>
    </>)
}

export default AddProduct
