import React from 'react'
import Me from './Me(6).png'
import { NavLink } from 'react-router-dom'

export default function Navbar1() {


  return (
    <>
    <div id="test">
<header>
    <nav className="navbar navbar-expand-lg header_login">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
      <hgroup id="sitetitle" className="col-md-12">
        <h1 style={{fontFamily:'permanent marker,cursive',fontWeight:50, color: 'black',fontSize:25 + 'px',
         marginTop:-40 + 'px'}} class="text-center">Heal Us
          <img src={Me} alt="blah" height="75px"/></h1>
        <h2 style={{fontFamily: 'Merienda, cursive', color:'black', fontSize:10+'px',marginTop:-15 + 'px'}}>It's your battle, but you don't need to fight alone</h2>	

      </hgroup></NavLink>

    <div>
      <ul>
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
