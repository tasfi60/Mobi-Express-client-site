import React from 'react';
import './MidSection.css';
import c1 from '../../../images/c1.jpg';
import c2 from '../../../images/c2.jpg';
import c3 from '../../../images/c3.jpg';

const MidSection = () => {
    return (

        <div className='mt-5 customers-section'> <h3>What Our Valuable Customers Say...</h3>
        <section className='container mt-5 customers-section-container'>
            <div className='review-container mx-2 mb-3'>
          <div className='row g-0'>
            <div className='col-md-4 rounded-circle shadow-1-strong d-flex align-items-center justify-content-center  mx-auto my-3'>
                      <img className='rounded-circle' src={c1} alt="" />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title ms-1 mt-3 mb-4'><small>Vishal Ahmed(CEO,BRACIT)</small></h5>
                <p className='card-text me-1 pe-1'>Want to sell old phone? Or looking just to check the price?, get the best solution for your mobile phone needs here at Mobi Express.Highly Recommended!</p>
                
              </div>
            </div>
          </div>
            
        </div>
            <div className=' review-container1 mx-2 mb-3'>
          <div className='row g-0'>
            <div className='col-md-4 rounded-circle shadow-1-strong d-flex align-items-center justify-content-center  mx-auto my-3'>
                      <img className='rounded-circle' src={c2} alt="" />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title ms-1 mt-3 mb-4'><small>Md. Jamal(VP & MD, Xiaomi Bangladesh)</small></h5>
                <p className='card-text me-1 pe-1'>Mobi Express has been a fantastic startup that has brought so much value to the Bangladeshi customer.</p>
                
              </div>
            </div>
          </div>
            
        </div>
            <div className='review-container mx-2 mb-3 pb-5'>
          <div className='row g-0'>
            <div className='col-md-4 rounded-circle shadow-1-strong d-flex align-items-center justify-content-center  mx-auto my-3'>
                      <img className='rounded-circle' src={c3} alt="" />
            </div>
            <div className='col-md-8'>
              <div className='card-body'>
                <h5 className='card-title ms-1 mt-3 mb-4'><small>Sharmaji Technical(Technology Journalist)</small></h5>
                <p className='card-text me-1 pe-1'>Upgraded to the OnePlus 7 Pro: Awesome Device. Sold my old OnePlus 6 on Mobi Express: Even More Awesome Experience</p>
                
              </div>
            </div>
          </div>
            
        </div>

        </section>
        </div>
    );
};

export default MidSection;