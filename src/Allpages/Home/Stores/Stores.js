import React from 'react';
import './Stores.css';
import s1 from '../../../images/s1.jpg';
import s2 from '../../../images/s2.jpg';
import s3 from '../../../images/s.jpg'

const Stores = () => {
    return (
        <div className='mt-5 customers-section container'> <h3>Explore Our Stores</h3>
                       
<div class="card-deck store-section-container ">
<div class="card-group">
  <div class="card mx-2 store-container">
    <img class="card-img-top" src={s1} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Our First Branch</h5>
      <p class="card-text">4th Floor,Sanmar Ocean city,GEC Mor,Chittagong.</p>
     
    </div>
  </div>
  <div class="card mx-2 store-container">
    <img class="card-img-top" src={s2} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Our Second Branch</h5>
      <p class="card-text">3rd Floor,Finlay Square,2no Gate,Chittagong.</p>
    
    </div>
  </div>
  <div class="card mx-2 store-container">
    <img class="card-img-top" src={s3} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Our Third Branch</h5>
      <p class="card-text">5th Floor,Bali Arcade,Andarkilla,Chittagong.</p>
      
    </div>
  </div>
</div>
  
</div>

</div>
    );
};

export default Stores;