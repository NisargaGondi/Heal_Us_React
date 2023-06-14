import React, {useEffect} from 'react'
import Me from './Me(6).png'
import './style_header_MP.css'
import $ from 'jquery';


export default function Navbar() {

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
    <div>
 
 
  <header id="masthead">
    <div className="container">
      <nav role='navigation' className="col-md-12 text-right">
        <ul className="anchors">
          <li><a id="a" href="/">Home</a></li>
          <li><a id="a" href="/">Contact Us</a></li>
          <li><a id="a" href="/">Features</a></li>
        </ul>
      </nav>
      <hgroup id="sitetitle" className="col-md-12">
        <h1 style={{fontFamily:'permanent marker,cursive',fontWeight:50, color: 'black',fontSize:100 + 'px',
         marginTop:30 + 'px'}} class="text-center">Heal Us
          <img src={Me} alt="blah" height="150px"/></h1>
        <h2 style={{fontFamily: 'Merienda, cursive', color:'black'}}>It's your battle, but you don't need to fight alone</h2>	

      </hgroup>
      <span className='log'>
      <a  href="/"><button style={{marginTop:20+'px', color:'black'}} class="button4 btn btn-outline-light fs-3">LOG IN</button></a>
      </span>
    </div>
  </header>
  
    </div>

    </>
  )
}
