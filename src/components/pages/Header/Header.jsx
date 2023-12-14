import React from 'react';
import Logo  from '../../assests/Logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

 const Header = () => {
	return( 
		<header className='Header  w-100 flex'>
			<div className='container w-100'>
				<div className='header-content'>
						<ul className='header-item'>
						<h1><img src={Logo} className="Header-Logo" /></h1>
						<Link to = "/" className='Header-item'>Home</Link>
						<Link to ="/About" className='Header-item'>About</Link>
						<Link to ="/Blog" className='Header-item'>News</Link>
						<Link to ="/Contact" className='Header-item'>Contact</Link>
						<Link to ="/Donate" className='Header-item'>Donate</Link>
						<Link to ="/Events" className='Header-item'>Events</Link>
						<Link to= "/WhatIs" className='Header-item'>What is a Thyroid</Link>
						</ul>
					
				</div>
			</div>
		</header>
	)
 }
export default Header
