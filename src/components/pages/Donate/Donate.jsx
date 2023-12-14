import Header from '../Header/Header';
import DonateForm from './DonateForm';
import './Donate.css';
import React from 'react';

function Donate(){
  return( 
  <div className="Donate">
    <Header />
    <h1>Donate</h1>
   <div class= "row">
    <DonateForm/>
   </div>

   <div class="row">
        <div class="col-sm">
          <h5> Contact us</h5>
          <br/>
          <p> Telephone: 01733 085432</p>
          <br/>
          <p> Address: </p>
          <p>123 Street Road, </p>
          <p>Orton Goldhay</p>
          <p>Peterborough</p>
          <p> PE2 5NW</p>
        </div>
        <div class="col-sm">
        <br/>
        <div ><iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ortongate%20Shopping%20Centre+(Thyroid%20Fighter)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">Population calculator map</iframe></div>
        </div>
        <div class="col-sm">
          <h5>Learn what a thyroid is </h5>
          <button className='button-btn'><a href='/WhatIs' className='button-text'> What is a thyroid?</a></button>
         <br/>
         <br/>
          <h5>For more advice on thyroid issues</h5>
          <br/>
          < button className='button-btn'><a href= 'https://www.nhs.uk/conditions/underactive-thyroid-hypothyroidism/' className='button-text' >Hypothyroidism</a></button>
          <br/>
          <button className='button-btn'><a href='https://www.nhs.uk/conditions/overactive-thyroid-hyperthyroidism/' className='button-text'>Hyperthyroidism</a></button>
        </div>
      </div>
  </div>
  )
}

export default Donate
;