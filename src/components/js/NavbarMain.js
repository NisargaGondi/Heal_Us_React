import React, {useEffect} from 'react'
import Me from '../img/Me(6).png'
import '../css/style_header_MP.css'
import $ from 'jquery';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';

export default function NavbarMain() {
    useEffect(() => {
        $(document).ready(function() {
          $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
            if (scroll >= 10) {
              $("#masthead").addClass("scrolled");
            } else {
              $("#masthead").removeClass("scrolled");
            }
          });
        });
      }, []);
  return (
    <>
    <header id="masthead">
    <div>
      <nav role='navigation' className="col-md-12 text-end">
        <ul className="anchors">
          <li><a id="a" href="/">Home</a></li>
          <li><a id="a" href="/">ContactUs</a></li>
          <li><a id="a" href="/">Features</a></li>
          <li><Menu></Menu> </li>
        </ul>
      </nav>
      <hgroup id="sitetitle" className="col-md-12">
        <NavLink className="nav-link"to="/"><h1 style={{fontFamily:'permanent marker,cursive',fontWeight:50, color: 'black',fontSize:100 + 'px',
         marginTop:30 + 'px'}} class="text-center">Heal Us
          <img src={Me} alt="blah" height="150px"/></h1></NavLink>
        <h2 className='text-center' style={{fontFamily: 'Merienda, cursive', color:'black'}}>It's your battle, but you don't need to fight alone</h2>	
      </hgroup>
    </div>
  </header>
    </>
  )
}
