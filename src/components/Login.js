import React from 'react'
import Navbar1 from './Navbar1'
import './style_login.css'
import './sign_in.css'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    <>
<div>     
<Navbar1/>
<div className='justify-content-xl-center'>
<br/><br/><br/><br/>
</div>
<div className="login-wrapper d-flex justify-content-center">
    <form action="" className="form" >
    <h2>Login</h2>
    <br/><br/>
    <div className="input-group">
        <input type="text" name="userInput input-text"  id="userInput" pattern="1BM\d{2}[a-zA-Z]{2}\d{3}" onfocus="showPlaceholder();" onblur="hidePlaceholder();" data-placeholder="1BM12AB012" maxlength="10"  required />
    <label for="input-text" style={{color: 'black'}}>USN (University Student Number)</label>
    
    </div>

    <script>
      
      </script>

    <div className="input-group">
    
    <input type="password" name="loginPassword" id="Password" minlength="8" required/>
    <label for="loginPassword"style={{color: 'black'}}>Password</label>

    
    
    </div>
    <br/><br/>
    <table>
      <tr><td><a href="C:\Users\Nisarga Gondi\OneDrive\Desktop\Web Dev\Forgot password\ForgotPassword.html"><h5>Forgot password?</h5></a></td>
    <td><NavLink to="/Main">
      <input type="submit" value="Login" style={{marginLeft:115+'px', color:'white'}} className="submit-btn text-center" /></NavLink></td>
  </tr>
  <tr>
   
    <td><br/><h6 className="fs-2" style={{color:'darkslategrey' ,marginLeft:200+'px'}}> OR </h6></td>
  </tr>
  </table>




    </form>
  <br/><br/><br/><br/><br/><br/>
  <div className="login-wrapper justify-content-center d-flex justify-content-xl-center"  >
  <span className="form_reg" style={{marginTop:680+'px', marginLeft:-500+'px'}}>  

  
  <svg className="svg--source" aria-hidden="true">

  
    <symbol id="svg--google" viewbox="-13 -13 72 72" >
      <path d="M48,22h-5v-5h-4v5h-5v4h5v5h4v-5h5 M16,21v6.24h8.72c-0.67,3.76-3.93,6.5-8.72,6.5c-5.28,0-9.57-4.47-9.57-9.75
  s4.29-9.74,9.57-9.74c2.38,0,4.51,0.82,6.19,2.42v0.01l4.51-4.51C23.93,9.59,20.32,8,16,8C7.16,8,0,15.16,0,24s7.16,16,16,16
  c9.24,0,15.36-6.5,15.36-15.64c0-1.17-0.11-2.29-0.31-3.36C31.05,21,16,21,16,21z" />
    </symbol>
  
    <symbol id="svg--facebook" viewbox="0 -7 16 30">
      <path d="M12 3.303h-2.285c-0.27 0-0.572 0.355-0.572 0.831v1.65h2.857v2.352h-2.857v7.064h-2.698v-7.063h-2.446v-2.353h2.446v-1.384c0-1.985 1.378-3.6 3.269-3.6h2.286v2.503z" />
    </symbol>
  
    <symbol id="svg--github" viewbox="-30 -30 150 150">
      <path d="M61.896,52.548c-3.59,0-6.502,4.026-6.502,8.996c0,4.971,2.912,8.999,6.502,8.999
      c3.588,0,6.498-4.028,6.498-8.999C68.395,56.574,65.484,52.548,61.896,52.548z M84.527,29.132c0.74-1.826,0.777-12.201-3.17-22.132
      c0,0-9.057,0.993-22.76,10.396c-2.872-0.793-7.736-1.19-12.597-1.19s-9.723,0.396-12.598,1.189C19.699,7.993,10.645,7,10.645,7
      c-3.948,9.931-3.913,20.306-3.172,22.132C2.834,34.169,0,40.218,0,48.483c0,35.932,29.809,36.508,37.334,36.508
      c1.703,0,5.088,0.004,8.666,0.009c3.578-0.005,6.965-0.009,8.666-0.009C62.191,84.991,92,84.415,92,48.483
      C92,40.218,89.166,34.169,84.527,29.132z M46.141,80.574H45.86c-18.859,0-33.545-2.252-33.545-20.58
      c0-4.389,1.549-8.465,5.229-11.847c6.141-5.636,16.527-2.651,28.316-2.651c0.045,0,0.093-0.001,0.141-0.003
      c0.049,0.002,0.096,0.003,0.141,0.003c11.789,0,22.178-2.984,28.316,2.651c3.68,3.382,5.229,7.458,5.229,11.847
      C79.686,78.322,65,80.574,46.141,80.574z M30.104,52.548c-3.588,0-6.498,4.026-6.498,8.996c0,4.971,2.91,8.999,6.498,8.999
      c3.592,0,6.502-4.028,6.502-8.999C36.605,56.574,33.695,52.548,30.104,52.548z" />
    </symbol>
  
  
  </svg>
  
  <div className="wrapper " style={{marginLeft:90+'px',marginTop:-20+'px'}}>
  <div className="connect">
  
  
    <a href="/" rel="author" className="share google">
      <svg role="presentation" className="svg--icon">
        <use href="#svg--google" />
        <span className="clip"> GOOGLE + </span>
      </svg>
    </a>
  
    <a href="/" rel="author" className="share facebook">
      <svg role="presentation" className="svg--icon">
        <use href="#svg--facebook" />
        <span className="clip"> FACEBOOK </span>
      </svg>
    </a>
  hi
    <a href="/" className="share github">
      <svg role="presentation" className="svg--icon">
        <use href="#svg--github" />
        <span className="clip">GITHUB</span>
      </svg>
    </a>
  </div>
  </div>
    
  <NavLink to="/Register" style={{color:'white'}}> 
     <button type="submit" value="Register" className="reg-btn" style={{marginLeft:165+'px'}}>Register</button></NavLink>

  </span>
</div>
</div>

    </div>
    </>
  )
}
