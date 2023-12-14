import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route 
} from 'react-router-dom';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Blog from './components/pages/Blog/Blog';
import Contact from './components/pages/Contact/Contact';
import Donate from './components/pages/Donate/Donate';
import Events from './components/pages/Events/Events';
import WhatIs from './components/pages/WhatIs/WhatIs';
import NewsDj from './components/pages/Blog/NewsDj';
import NewsXmas from './components/pages/Blog/NewsXmas';
import Charityrun from './components/pages/Events/Charityrun';
import Gaming from './components/pages/Events/Gaming';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path ="/" element =  {<App/>} ></Route>
                <Route path='/Home' element = {<Home/>}></Route>
                <Route path='/About' element = {<About/>}></Route>
                <Route path='/Blog' element ={<Blog/>}></Route>
                <Route path='/Contact' element = {<Contact/>}></Route>
                <Route path ='/Donate' element = {<Donate/>}></Route>
                <Route path='/Events' element ={<Events/>}></Route>
                <Route path='/WhatIs' element={<WhatIs/>}></Route>
                <Route path='/NewsDj' element={<NewsDj/>}></Route>
                <Route path='/NewsXmas' element={<NewsXmas/>}></Route>
                <Route path='/Charityrun' element={<Charityrun/>}></Route>
                <Route path='/Gaming' element={<Gaming/>}></Route>
        </Routes>
    </BrowserRouter>
)