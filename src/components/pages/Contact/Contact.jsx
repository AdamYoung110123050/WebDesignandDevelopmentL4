import Header from '../Header/Header';
import './Contact.css';

function Contact(){
  return( 
  <div className="Contact">
    <Header />
    <div class="container">
        <div class="row">
          <h1>Contact Us</h1>
          <div class="col-md">
          <h3>Follow us on social media</h3>
          </div>
          <div class="col-md">
            <h3> Telephone: 01733085432:</h3>
            <br/>
            <h3>Email: thyroid.fighter@gmail.org</h3>
            <br/>
            <h3> Address: </h3>
            <p>123 Street Road, </p>
            <p>Orton Goldhay</p>
            <p>Peterborough</p>
            <p> PE2 5NW</p>
          </div>
          <div class="col-md">
          <iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ortongate%20Shopping%20Centre+(Thyroid%20Fighter)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">Population calculator map</iframe>
          </div>
          </div>
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

export default Contact;