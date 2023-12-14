import Header from '../Header/Header';
import './Blog.css';
import drJ from '../../assests/drJ.jpg';
import audience from '../../assests/audience.jpg';

function NewsDj(){
    return( 
      <div className="Blog">
      <Header />
      <h1>Dr Jones visit</h1>
      <div class="row">
      <h1><img src={drJ} className="imageNews" /></h1>
      </div>
      <div class ="row">
        <div class ="col-sm">
          <br/>
        </div>
        <div class ="col-sm">
          <div class ="row">
            <p>
            Praesent pellentesque id libero a rhoncus. Etiam facilisis nisl id varius auctor. Nam hendrerit libero vitae consequat consectetur. Sed euismod tincidunt interdum. Donec quis eros lacinia, imperdiet risus a, sodales arcu. Aenean justo nunc, tincidunt non sodales eget, interdum ut tellus. Sed gravida odio eu metus facilisis auctor. Nam congue commodo dolor, at posuere lacus pretium consectetur. Suspendisse efficitur viverra quam vel maximus. Phasellus blandit tincidunt elit, condimentum rhoncus nibh cursus sed.
            Etiam ut iaculis quam. Vestibulum non bibendum erat. Vestibulum euismod ullamcorper odio at mollis. Aenean eu sapien a ex eleifend faucibus a quis erat. Donec euismod vestibulum nisi, varius molestie magna porta vel. Donec quis nulla imperdiet, rutrum tortor nec, consequat magna. Suspendisse mattis bibendum elementum. Vestibulum non velit et diam rutrum venenatis id a ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur vestibulum, mauris nec tincidunt malesuada, massa diam mollis libero, non faucibus purus ligula sed tortor. Quisque pretium sem id elit condimentum viverra. Morbi ut quam elit. Nunc in rhoncus tortor, in facilisis erat. Nam tristique at est eu accumsan. Vestibulum luctus euismod justo, et feugiat nisl finibus vitae.
            Praesent pretium ipsum sodales pellentesque ornare. Proin sollicitudin auctor augue vitae consectetur.
            </p>
            <br/>
            <img src={audience} className="imageNews" />
          </div>
          <br/>
          <br/>
          <p>
             Nulla vulputate tellus vitae placerat vestibulum. Morbi faucibus lorem nec nisl lacinia tincidunt. Integer eros sem, malesuada eu ante vel, mollis accumsan nisl. Proin lobortis tincidunt lacus, id pharetra ligula porttitor non. Nunc porta mauris mauris, dignissim convallis leo auctor sed. Curabitur ut ante nisl. In sollicitudin congue odio, nec porttitor diam convallis eget. Integer ut maximus nulla. Nunc commodo purus ipsum, a tincidunt orci fermentum nec. Vestibulum eget urna eget diam eleifend elementum. Etiam et iaculis urna, vitae dapibus augue. Donec at ipsum nisl. Praesent dignissim lorem vel mauris vehicula blandit. Donec justo eros, dapibus at quam at, semper facilisis metus.
            Integer urna nisi, consequat ut egestas nec, molestie id est. Aenean congue, elit vitae viverra sodales, lorem dui egestas elit, et ullamcorper sapien dolor quis velit. Fusce at neque ac ligula consectetur dictum. Fusce enim elit, euismod porta neque at, tincidunt dignissim lorem. Aenean venenatis luctus leo eget feugiat. Duis non euismod tortor. Nam sodales dui erat, at porttitor massa suscipit vitae. Etiam nec posuere mauris. Nunc imperdiet est sit amet finibus rutrum. Aenean sed elit sed sem congue elementum. In et tortor sed quam mollis tempor. Quisque quis orci purus. Aenean lacus diam, sagittis a convallis eget, consequat nec purus. Curabitur pharetra, nisi eu bibendum consequat, justo augue molestie magna, ut porta elit eros maximus ligula.
            Morbi luctus nunc non metus lobortis lacinia. Duis consectetur fringilla leo, sit amet dapibus justo ultrices nec. Morbi et pretium nisl, quis vestibulum arcu. Etiam tempor sollicitudin cursus. Duis varius a libero vitae porttitor. Pellentesque id mi lobortis, iaculis ante eget, feugiat nibh. Morbi a eleifend massa. Donec vitae nulla pharetra sem pharetra semper in vel ipsum. Curabitur ut purus turpis. Maecenas id libero tortor. Sed venenatis arcu interdum, suscipit lacus ac, consequat dolor.
            </p>
        </div>
        <div class ="col-sm">
          <br/>
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
export default NewsDj;