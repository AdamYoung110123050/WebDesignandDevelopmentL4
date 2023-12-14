import Header from '../Header/Header';
import './WhatIs.css';

function WhatIs(){
  return( 
  <div className="WhatIs">
    <Header />
    <div class="container">
    <h1>What is a Thyroid?</h1>
        <div class="row">
          <div class="col-md">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/S1kdYd4JGbg?si=mpUwfJHZ8EWdAEzt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
         </div>
         <div class="col-md"> 
         <h2 className='Title'>What is a Thyroid?</h2>
         <p className='Text'>The thyroid gland is a small butterfly-shaped gland in the neck, just in front of the windpipe (trachea).

One of its main functions is to produce hormones that help regulate the body's metabolism (the process that turns food into energy). These hormones are called triiodothyronine (T3) and thyroxine (T4).

Many of the body's functions slow down when the thyroid does not produce enough of these hormones.</p>
         </div>
         <div class="row">
          <div class="col-md">
          <h2 className='Title2'>What is Hypothyroidism?</h2>
          <p className='Text2'>An underactive thyroid gland (hypothyroidism) is where your thyroid gland does not produce enough hormones.

Common signs of an underactive thyroid are tiredness, weight gain and feeling depressed.

An underactive thyroid can often be successfully treated by taking daily hormone tablets to replace the hormones your thyroid is not making.

There's no way of preventing an underactive thyroid. Most cases are caused either by the immune system attacking the thyroid gland and damaging it, or by damage to the thyroid that occurs during some treatments for an overactive thyroid or thyroid cancer.</p>
          </div>
          <div class="col-md">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/i92OaZKFphk?si=v_eqtublCV3klv7n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        
         </div>
         <div class="row">
          <div class="col-md"><iframe width="560" height="315" src="https://www.youtube.com/embed/ojZ9335rg7A?si=vRISsUnda_a2hTsV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
          <div class="col-md">
          <h2 className='Title'>What is a Hyperthyroidism?</h2>
          <p className='Text'>An overactive thyroid, also known as hyperthyroidism or thyrotoxicosis, is where the thyroid gland produces too much of the thyroid hormones.

The thyroid is a small butterfly-shaped gland in the neck, just in front of the windpipe (trachea). It produces hormones that affect things such as your heart rate and body temperature.

Having too much of these hormones can cause unpleasant and potentially serious problems that may need treatment.

An overactive thyroid can affect anyone, but it's about 10 times more common in women than men, and typically happens between 20 and 40 years of age.</p>
          </div>
         </div>
          </div>
        </div>
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

export default WhatIs;