import Header from '../Header/Header';
import './Events.css';
import partyField from '../../assests/partyField.jpg';
import CakeSale from'../../assests/CakeSale.png';
import run from '../../assests/run.jpg';
import tombola from '../../assests/tombola.jpg';
import gaming from '../../assests/gaming.jpg';

function Events(){
  return( 
    <div className="Events">
      <Header />
      <div class="container">
      <h1>Events</h1>
      
        <div class="row">          
          <div class="col-lg"/>
          <h1><img src={partyField} className="event" /></h1>
          </div>
          <div class="col-sm">
             </div>
        </div>
        <br/>
        <br/>
        <div class="row">
        <h2>Recent Events</h2>
          <div class ="col-sm">
          <h1><img src={CakeSale} className="img" /></h1>
         <h2> Our recent cake sale</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </p>
          <button className='button-btn'> <a href='/Events' className='button-text'>Find out more</a></button>
          </div>
          <div class="col-md"><h1><img src={run} className="img" /></h1>
         <h2> Charity run</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </p>
          <button className='button-btn'> <a href='/Charityrun' className='button-text'>Find out more</a></button>
          </div>
          <div class="col-md"><h1><img src={tombola} className="img" /></h1>
         <h2> Winter Tombola</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </p>
          <button className='button-btn'> <a href='/Events' className='button-text'>Find out more</a></button>
          </div>
          <div class="col-md"><h1><img src={gaming} className="img" /></h1>
         <h2> Monthly gaming sessions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </p>
          <button className='button-btn'> <a href='/Gaming' className='button-text'>Find out more</a></button>
          </div>
        </div>
        <br/>
        <br/>
        <div class="row">
          <div class="col-sm">
            <h5> Contact us</h5>
            <br/>
            <p> Telephone: 01733 085432</p>
            <br/>
            <p> Address: </p>
            <br/>
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

export default Events;