import React from 'react'
import '../css/footer.css'
import logo from '../img/Me(5).png'

export default function footerDown() {
  return (
    <>
    <div>
    
    <footer className="footer_down">
<div className="container bottom_border">
<div className="row">
<div className=" col-sm-4 col-md col-sm-4  col-12 col">
<h5 className="headin5_amrc col_white_amrc pt2 fs-1">Find us</h5>

<p className="mb10"></p>
<p><i className="fa fa-location-arrow fs-2"></i> HealUs headquarters, UB city, Bangalore - 560001 </p>
<p><i className="fa fa-phone"></i>  Haaid : 6969696969  </p>
<p><i className="fa fa-phone"></i>  Gauri : 4204204200  </p>
<p><i className="fa fa fa-envelope"></i> @healus.com  </p>


</div>


<div className=" col-sm-4 col-md  col-6 col">
<h5 className="headin5_amrc col_white_amrc pt2 fs-1">Quick links</h5>

<ul className="footer_ul_amrc">
<li className='fs-2'><a href="/">Image Rectoucing</a></li>
<li className='fs-2'><a href="/">Clipping Path</a></li>
<li className='fs-2'><a href="/">Hollow Man Montage</a></li>
<li className='fs-2'><a href="/">Ebay & Amazon</a></li>
<li className='fs-2'><a href="/">Hair Masking/Clipping</a></li>
<li className='fs-2'><a href="/">Image Cropping</a></li>
</ul>
</div>


<div className=" col-sm-4 col-md  col-6 col ">
<h5 className="headin5_amrc col_white_amrc pt2 fs-1">Quick links</h5>
<ul className="footer_ul_amrc">
<li><a href="/">Remove Background</a></li>
<li><a href="/">Shadows & Mirror Reflection</a></li>
<li><a href="/">Logo Design</a></li>
<li><a href="/">Vectorization</a></li>
<li><a href="/">Hair Masking/Clipping</a></li>
<li><a href="/">Image Cropping</a></li>
</ul>

</div>


</div>
</div>


<div className="container">
<ul className="foote_bottom_ul_amrc">
<li><a href="/">Home</a></li>
<li><a href="/">About</a></li>
<li><a href="/">Services</a></li>
<li><a href="/">Pricing</a></li>
<li><a href="/">Blog</a></li>
<li><a href="/">Contact</a></li>
</ul>

<p className="text-center">Copyright @2023 | Designed to  <a style={{fontFamily:'permanent marker,cursive',fontWeight:50, color: 'darkslategray'}} href="/"> Heal Us<img src={logo} alt="blah" style={{height:50+'px'}} /></a></p>

<ul className="social_footer_ul">
<li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
<li><a href="/"><i className="fab fa-twitter"></i></a></li>
<li><a href="/"><i className="fab fa-linkedin"></i></a></li>
<li><a href="/"><i className="fab fa-instagram"></i></a></li>
</ul>

</div>

</footer>


    </div>
    </>
  )
}
