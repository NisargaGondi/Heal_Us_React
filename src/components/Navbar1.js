import React,{useEffect} from 'react'
import Me from './Me(6).png'
import { NavLink } from 'react-router-dom'
import $ from 'jquery'

export default function Navbar1() {

  useEffect(() => {
    $(document).ready(function() {
      $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >=50) {
          $("#loginHeader").addClass("scrolled");
        } else {
          $("#loginheader").removeClass("scrolled");
        }
      });
    });
  }, []);
  return (
    <>
    <div id="test">
<header id="loginHeader">
    <nav className="navbar navbar-expand-lg header">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
      <hgroup id="sitetitle" className="col-md-12">
        <h1 style={{fontFamily:'permanent marker,cursive',fontWeight:50, color: 'black',fontSize:25 + 'px',
         marginTop:-40 + 'px'}} class="text-center">Heal Us
          <img src={Me} alt="blah" height="75px"/></h1>
        <h2 style={{fontFamily: 'Merienda, cursive', color:'black', fontSize:10+'px',marginTop:-15 + 'px'}}>It's your battle, but you don't need to fight alone</h2>	

      </hgroup></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{'--bs-scroll-height': 5 + 'px'}}>
        <li className="nav-item anchors">
          <NavLink className="fs-1" aria-current="page" to="/" 
          style={{marginLeft:875+'px'}}>Home</NavLink>
        </li>
        <li className="nav-item anchors">
          <NavLink className="fs-1" to="/"
        >Contact Us</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

</header>
    </div>

    </>
  )
}
