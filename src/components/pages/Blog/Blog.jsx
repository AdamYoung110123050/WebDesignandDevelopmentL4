import Header from '../Header/Header';
import welcome from '../../assests/welcome.jpg';
import drJ from '../../assests/drJ.jpg';
import news from '../../assests/news.jpg';
import donation from'../../assests/donation.png';
import christmas from'../../assests/christmas.jpg';
import './Blog.css';


function Blog(){
  return( 
    <div className="Blog">
    <Header />
    <div class="container">
      <div class="row">
        <h1>Events</h1>
        <div class="col-lg"/>
        <h1><img src={news} className="event" /></h1>
        </div>
        <div class="col-sm">
           </div>
      </div>
      <br/>
      <br/>
      <div class="row">
      <h2>Recent News</h2>
        <div class ="col-sm">
        <h1><img src={welcome} className="img" /></h1>
       <h2> Recent addition to our team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
        <button className='button-btn'> <a href='/Blog' className='button-text'>Find out more</a></button>
        </div>
        <div class="col-md"><h1><img src={drJ} className="img" /></h1>
       <h2> Dr Jones visit</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
        <button className='button-btn'> <a href='/NewsDj' className='button-text'>Find out more</a></button>
        </div>
        <div class="col-md"><h1><img src={donation} className="img" /></h1>
       <h2>Donation target for October</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
        <button className='button-btn'> <a href='/Blog' className='button-text'>Find out more</a></button>
        </div>
        <div class="col-md"><h1><img src={christmas} className="img" /></h1>
       <h2>Christmas news</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
        <button className='button-btn'> <a href='/NewsXmas' className='button-text'>Find out more</a></button>
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

export default Blog;