import React from 'react'
import Navbar1 from './Navbar1'
import './style_Register.css'
import { NavLink } from 'react-router-dom'

export default function Register() {
  return (
    <>
    <div>
      <Navbar1/>
      <br/><br/><br/><br/><br/>
    <div className="register-wrapper">
    <form className="form" onSubmit = "return checkPassword(this)" action="C:\Users\Nisarga Gondi\OneDrive\Desktop\Web Dev\Login\login.html">
    <h2>Register</h2>
    <div className="input-group">
        <input type="text" name="loginUser" id="loginUser" pattern="1BM\d{2}[a-zA-Z]{2}\d{3}" maxlength="10" required />
    <label for="loginUser" style={{color: 'black'}}>USN (University Student Number)</label>
  </div>
    <div className="input-group">
      <input type="text" name="personname" id="firstname" pattern="[a-zA-Z]+" required/>
      <label for="name"style={{color: 'black'}}>First Name</label>
      </div>
      <div className="input-group">
        <input type="text" name="personame" id="Lastname" pattern="[a-zA-Z]+" required/>
        <label for="name"style={{color: 'black'}}>Last Name</label>
        </div>
        <h4><label for="name"style={{color: 'black'}}>Gender</label></h4>
        <div>
        </div>
        <div style={{minWidth:400+'px'}} >
         <h5 > <label for="name"style={{color: 'black'}}>Male</label>
          <input type="radio" name="Gender" id="Gender" required/>
          
        <label for="name"style={{color: 'black'}}>Female</label>
          <input type="radio" name="Gender" id="Gender" required/>
    
         <label for="name"style={{color: 'black'}}>Others</label>
          <input type="radio" name="Gender" id="Gender" required/></h5>
          </div>
         <br/><br/>
        <div className="input-group">
          <input type="number" min="0" max="200" name="Age" id="Age" required/>
          <label for="Age"style={{color: 'black'}}>Age</label>       
          </div>
        <div className="input-group">
          <input type="text" name="College" id="College" pattern="[a-zA-Z ]+" required/>
          <label for="COllegename" style={{color: 'black'}}>College Name</label>
          </div>
    <div className="input-group">
      <input type="text" name="text" id="mail" pattern="/^[a-zA-Z][a-z-A-Z]{2}+[0-9]{2}+@[bB][mM][sS][cC][eE]\.[aA][cC]\.[iI][nN]$/" required/>
      <label for="mail" style={{color: 'black'}}>Email-id</label>
      </div>  
      <div className="input-group">
        <input type="tel" pattern="[1-9]{1}[0-9]{9}]" maxlength="10" name="phoneno" id="number"  required/>
        <label for="number"style={{color: 'black'}}>Mobile Number</label>
        </div>
    <div className="input-group">
    <input type="password" name='password1' id="loginPassword" minlength="8" required/>
    <label for="loginPassword"style={{color: 'black'}}>Set Password</label>
    </div>
    <div className="input-group">
      <input type="password" name='password2' id="confirmPassword" minlength="8" required/>
      <label for="loginPassword"style={{color: 'black'}}>Confirm Password</label> 
    </div>
 <div className="input-group-checkbox">
      <h5 >
        <input type="checkbox" name="Gender" id="Gender" required/>
        <label for="name"style={{color: 'black'}}>I accept the Privacy Policy Terms & Conditions</label>
      </h5>
    </div>
   <NavLink to="/Login" style={{color: 'aliceblue'}}>
   <input type="submit" value="Register" className="submit-btn text-center"/></NavLink> 
</form>
</div>
   </div>

    </>
  )
}
