import Header from '../Header/Header';
import  './About.css';
import person1 from'../../assests/person1.jpg';
import person2 from '../../assests/person2.jpg';
import person3 from '../../assests/person3.jpg';
import person4 from '../../assests/person4.jpg';


function About(){
  return( 
  <div className="About">
    <Header />
    <h1>About</h1>
    <div class="row">
      <div class= "col-sm">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/cDGmsR2ZILE?si=yQa8Wm87iNnCRxYj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div class="col-lg">
        <h2 className='Title'>About us</h2>
        <p className='Text'>
        Aliquam erat volutpat. Aliquam at mauris lacinia magna dapibus placerat. Sed vel lorem posuere, fermentum libero et, pulvinar felis. Donec viverra rhoncus erat, et lobortis dolor tristique at. Duis et imperdiet odio. Suspendisse sit amet molestie metus. Vestibulum ligula est, dapibus quis libero eu, porttitor lacinia nisl. Fusce a tempus tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut finibus urna ipsum, in aliquam arcu convallis et.
Aliquam vel lacus non erat viverra porttitor tristique vitae nunc. Mauris placerat ante risus, ut luctus ligula facilisis non. Sed enim dui, pellentesque nec urna rhoncus, bibendum dignissim ex. Donec porta imperdiet eros, non faucibus elit scelerisque eget. Duis ac tincidunt justo. Quisque pharetra consequat congue. Aliquam tincidunt, orci vitae euismod elementum, leo augue consectetur lacus, nec ultrices ipsum quam a magna.
        </p>
      </div>
    </div>
    <br/>
    <br/>
    <div class="row">
    <div class ="col-sm">
          <h1><img src={person1} className="img" /></h1>
         <h2>Fleix Kranken</h2>
        </div>
          <div class="col-md">
          <h1><img src={person2} className="img" /></h1>
         <h2> Amy Gillian</h2>
          </div>
          <div class="col-md"><h1><img src={person3} className="img" /></h1>
         <h2> Abu Walton</h2>
           </div>
          <div class="col-md"><h1><img src={person4} className="img" /></h1>
         <h2>Jack Letterbridge</h2>
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
        <div ><iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ortongate%20Shopping%20Centre+(Thyroid%20Fighter)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">Population calculator map</iframe></div>
        <br/>
        </div>
        <div class="col-sm">
          <h5>Learn what a thyroid is </h5>
          <button className='button-btn'><a href='/WhatIs' className='button-text'> What is a thyroid?</a></button>
         <br/>
         <br/>
          <h5>For more advice on thyroid issues choose from the bottom</h5>
          <br/>
          < button className='button-btn'><a href= 'https://www.nhs.uk/conditions/underactive-thyroid-hypothyroidism/' className='button-text' >Hypothyroidism</a></button>
          <br/>
          <button className='button-btn'><a href='https://www.nhs.uk/conditions/overactive-thyroid-hyperthyroidism/' className='button-text'>Hyperthyroidism</a></button>
        </div>
      </div>
    </div>
  )
}

export default About;