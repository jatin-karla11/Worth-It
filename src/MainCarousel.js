import React from 'react'
import worth from './images/worth.jpg';
import worth1 from './images/worth1.jpg';
import worth2 from './images/worth2.jpg';

function MainCarousel() { 
    return (
      <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={worth} class="d-block w-100" alt=""/>
        </div>
        <div class="carousel-item">
          <img src={worth1} class="d-block w-100" alt=""/>
        </div>
        <div class="carousel-item">
          <img src={worth2} class="d-block w-100" alt=""/>
        </div>
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
