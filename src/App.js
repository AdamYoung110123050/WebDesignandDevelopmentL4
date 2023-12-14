import './App.css'
import orton from './components/assests/orton.png'
import Header from './components/pages/Header/Header';
import CakeSale from'./components/assests/CakeSale.png';
import drJ from './components/assests/DrJ.png';
import money from'./components/assests/money.png';
import mj from './components/assests/mg.jpg'

function App(){

  return( 
  <div className="App">
    <Header />
    <div class="container">
      <div class="row">
        <h1>Home</h1>
        <div class="col-sm">
         <h1><img src={CakeSale} className="img" /></h1>
         <h2> Our recent cake sale</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </p>
          <button className='button-btn'> <a href='/Events' className='button-text'>Find out more</a></button>
        </div>
        <div class="col-sm">
          <h1><img src={drJ} className="img" /> </h1>
          <h2>Visit from Dr Jones</h2>
          <p> Our Blog team got a surpirse visit from world renown Dr Jones</p>
          <button  className='button-btn button-text'> <a href='/Blog' className='button-text'>Find out more</a></button>
        </div>
        <div class="col-sm">
          <h1><img src={money} className="img" /></h1>
          <h2>Christmas donations needed</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing consectetur adipisicing elit, sed do</p>
          <button className='button-btn'> <a href='/Donate' className='button-text'>Find out more</a></button>
        </div>
      </div>
      <br/>
      <br/>
      <div class="row">
      <h2>My story- Mike Grey</h2>
        <div class ="col-sm">
          <br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sem molestie, dignissim justo sed, auctor ex. Pellentesque porta odio eget quam mollis tristique. Nam lobortis tortor sed quam euismod, vel pretium nibh rutrum. Fusce rhoncus, lectus in pharetra porta, nisl orci mollis orci, eu auctor risus augue ac metus. Sed fringilla enim sit amet nibh laoreet volutpat. Praesent a pretium felis. Pellentesque tristique ut ligula sit amet tincidunt. Integer euismod ex ligula, vitae consequat velit ultrices eu. Pellentesque id nisi sit amet elit hendrerit porttitor ac ut erat. Donec tristique id enim vitae lobortis. Nam rhoncus faucibus magna. In at eleifend massa, sed mollis velit. Nunc ut neque fermentum, euismod elit ac, pharetra tortor. Fusce vel velit non ipsum posuere finibus. Donec eget arcu at mi fringilla convallis sed in magna.</p>
        </div>
        <div class="col-md">
       <p> <img src={mj} className="profile" /> </p>
        </div>
        <div class ="col-sm">
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <h4>Sed ut lectus rhoncus, hendrerit nulla eu, consequat massa. Nullam molestie, nisl eu volutpat faucibus, lectus quam bibendum quam, sed</h4>
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
  </div>
  )
}

export default App;
