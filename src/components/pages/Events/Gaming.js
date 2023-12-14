import Header from '../Header/Header';
import './Events.css';
import gaming from '../../assests/gaming.jpg';
import loading from '../../assests/loading.jpg';

function Gaming(){
    return( 
      <div className="Events">
        <Header />
        <h1>December gaming event </h1>
        <div class= "row">
        <h1><img src={gaming} className="imageEvents" /></h1>
        </div>
        <div class="row">
            <div class="col-sm">
                <br/>
            </div>
            <div class="col-sm">
                <div class="row">
                    <p>
                    Morbi maximus, neque non bibendum ultricies, leo augue suscipit neque, ac sodales turpis nunc at odio. Cras ut tellus in est elementum pulvinar a quis nisl. Ut odio augue, eleifend vitae iaculis at, molestie eu lacus. Donec rhoncus a diam eget vestibulum. Vestibulum sollicitudin nibh a scelerisque tincidunt. Etiam vehicula egestas risus vitae suscipit. Suspendisse non dui vitae ex tempus gravida at sit amet sapien.
                    Maecenas eget nunc ac est vehicula interdum. Aenean non bibendum orci, quis suscipit nisl. Suspendisse id elit non dui placerat convallis. Nunc venenatis mauris quis risus lobortis, at sodales lacus mollis. Integer varius gravida lacus ac ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas at turpis odio. Morbi pulvinar nibh et fringilla ultrices. Praesent et leo iaculis mi feugiat ultricies at ac metus. Morbi vitae placerat nisl, vel cursus felis. Praesent lacinia dictum ex, eget pharetra ipsum ultricies ac. Vestibulum rutrum, ex sed hendrerit auctor, odio lacus congue magna, vel semper eros ligula non est. Mauris rhoncus mollis libero a posuere.
                    </p>
                    <br/>
                    <img src={loading} className="imageEvents" />
                </div>
            </div>
            <div class="col-sm">
                <br/>
                <br/>
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
export default Gaming