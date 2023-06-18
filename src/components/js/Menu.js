import React,{useEffect} from 'react'
import $ from 'jquery'
import '../css/menu.css'
import img from '../img/Me(6).png'

export default function Menu() {
    useEffect(() => {
        $("#menu-toggle").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
          });
          
    }, []);

  return (
    <>
<h1 className="btn btn-outline-dark" style={{fontSize:30+'px',marginTop:-15+"px",width:"40px"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">≡</h1>

<div className="offcanvas offcanvas-start" style={{borderTopRightRadius:"15%",borderBottomRightRadius:"15%"}} data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
<div id="wrapper_menu">

        {/* <!-- Sidebar --> */}
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <a href="/">
                    <h1 style={{fontFamily:'permanent marker,cursive',fontWeight:50, color: 'black'}}>Heal Us <img src={img} height="50px" alt="blah"/>
      </h1>
                    </a>
                </li>
                <li>
                    <a href="/">Dashboard</a>
                </li>
                <li>
                    <a href="/">Story Space</a>
                </li>
                <li>
                    <a href="/">Mindfulness</a>
                </li>
                <li>
                    <a href="/">Communion</a>
                </li>
                <li>
                    <a href="/">Self Heal</a>
                </li>
                <li>
                    <a href="/">Daily Tasks</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
                <li>
                    <a href="/">Log Out</a>
                </li>

            </ul>
        </div>
        </div>
</div>
</>
  )
}
