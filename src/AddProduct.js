import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './AddProduct.css'

function AddProduct() {
    const history=useHistory();
    const [productImage,setProductImage]=useState(null);
    const fup=(e)=>{
        setProductImage(e.target.files[0])
    }

    const [pname,setPname]=useState("");
    const [price,setPrice]=useState("");

    const called=(e)=>{
        e.preventDefault();
        // alert(pname);
        // alert(price)
        var fd=new FormData();
        fd.append("name",pname)
        fd.append("price",price)
        fd.append("productImage",productImage)

        fetch("http://localhost:1337/insertProduct",{
            method:'POST',
            body:fd
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data);
        })
        alert("product inserted")
        history.replace('/allProducts')
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
<input required type="number" maxLength='10' 
name="phone" value={price} onChange={(e)=>{setPrice(e.target.value)}}
class="form-control" id="exampleInput" aria-describedby="emailHelp"/>
</div>
<br></br>
  <div class="form-group">
    <label for="exampleFormControlFile1">Upload Product Image</label>
    <input required type="file" onChange={fup} class="form-control-file" id="exampleFormControlFile1"/>
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
