import Header from '../Header/Header';
import './Events.css';
import  run from '../../assests/run.jpg';
import finish from '../../assests/finish.jpg';

function Charityrun(){
    return( 
      <div className="Events">
        <Header />
        <h1>Charity run</h1>
        <div class = " row">
        <h1><img src={run} className="imageEvents" /></h1>
        </div>
        <div class="row">
            <div class ="col-sm">
                <br/>
            </div>
            <div class ="col-sm">
                <div class ="row">
                    <p>
                    Nulla non massa id justo tristique semper. Nam mollis efficitur porta. Integer nibh eros, accumsan ut leo id, rhoncus dignissim dui. Aliquam sed varius urna. Aenean tincidunt, lectus et commodo dapibus, nibh nibh iaculis libero, accumsan sollicitudin turpis neque ac magna. Nam ultricies vestibulum fringilla. Phasellus faucibus tortor eget nibh ultricies vestibulum. Phasellus id nunc rhoncus, pretium nisl et, lacinia urna. Nam vulputate diam ut mollis suscipit. Duis nec ligula sagittis purus vulputate rutrum. Cras fringilla ultrices orci. Sed tempus, nisl non iaculis euismod, diam felis tristique lectus, tempor rutrum ex nulla ac odio. Nullam mattis, felis in consectetur egestas, nibh ex rutrum libero, at malesuada lectus ligula vel lectus. Morbi sed interdum dolor. Suspendisse potenti. In hac habitasse platea dictumst.
                    Cras ullamcorper neque at accumsan vehicula. Praesent at ullamcorper enim. Suspendisse blandit mi ipsum, sit amet bibendum libero interdum id. Mauris id mauris nunc. Aliquam felis nulla, elementum eu maximus id, accumsan nec ante. Duis feugiat condimentum luctus. Cras sed nulla quis odio maximus blandit sed semper orci. Duis a leo semper, varius enim non, dapibus dolor. Phasellus ultricies, mi eu consectetur pharetra, eros erat luctus elit, sed pretium neque risus in quam. Sed sed lorem diam. Suspendisse potenti. Curabitur at pulvinar ante. Phasellus mauris lacus, eleifend a est eget, eleifend pharetra metus. Nam pharetra ante sit amet ex consectetur volutpat sed ultrices urna. Maecenas lobortis quam vitae viverra pharetra. Ut consectetur elit nec lorem ullamcorper pretium.
                   Morbi sed facilisis metus. Suspendisse viverra fringilla accumsan. Integer volutpat sollicitudin nibh, ac ullamcorper orci egestas malesuada. Etiam luctus mi ac malesuada vestibulum. Aliquam pellentesque nec risus non egestas. Donec in egestas orci
                    </p>
                    <br/> 
                    <img src={finish} className="imageEvents" />
                    <p>
                    Sed semper malesuada neque, sit amet egestas erat gravida nec. Pellentesque in ligula eu justo vulputate semper. Vivamus gravida consequat varius. Donec volutpat a ante nec feugiat.

In hac habitasse platea dictumst. Vivamus nulla risus, vestibulum eu metus non, venenatis ullamcorper orci. Nam mi nunc, placerat quis leo dignissim, tincidunt feugiat lectus. Aenean dignissim suscipit libero, tristique luctus dui vehicula vel. Vivamus laoreet consequat mauris, sed convallis ex lacinia et. Morbi consectetur cursus sapien, sed sagittis odio vulputate sit amet. Duis nisi mi, accumsan nec magna ac, rutrum tincidunt ipsum. Donec eget porta elit.

Nulla vel ligula rutrum, venenatis massa in, gravida metus. Vivamus congue consequat mauris id luctus. Mauris sagittis quam id risus scelerisque pellentesque. Curabitur a turpis a diam blandit ullamcorper et id lectus. Integer imperdiet arcu orci, non pretium felis suscipit non. Sed interdum pulvinar rutrum. Praesent dapibus mattis feugiat. Aenean lobortis, elit eget suscipit varius, neque mi tincidunt risus, efficitur scelerisque sapien dolor id mi.
                    </p>
                </div>
            </div>
            <div class ="col-sm">
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
export default Charityrun