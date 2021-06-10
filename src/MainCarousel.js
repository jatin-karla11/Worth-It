import React from 'react'
// import worth from './images/worth.jpg';
import customer from './images/customer1.png';
import worth2 from './images/homeworth2.jpg'; 

function MainCarousel() { 
    return (
      <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={worth2} class="d-block w-100" alt=""/>
        </div>
        <div class="carousel-item">
          <img style={{border : "4px solid teal"}} src={customer} class="d-block w-100" alt=""/>
        </div>
        {/* <div class="carousel-item">
          <img src={worth2} class="d-block w-100" alt=""/>
        </div> */}
      </div>
      <a class="carousel-control-prev" href="#carousel" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carousel" data-slide="next">
        <span class="carousel-control-next-icon"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    )
}

export default MainCarousel
