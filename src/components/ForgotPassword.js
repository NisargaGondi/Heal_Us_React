import React from 'react'
import './style_forgotpassword.css'

export default function ForgotPassword() {
  return (
   <>
   <div className="login-wrapper">
    <form className="form"  method="get"  data-group-name="digits" data-autosubmit="false" autocomplete="off">
    <h2>Forgot Password</h2>
    <div className="input-group">
        <input type="text" name="loginUser" id="loginUser" maxlength="10" required />
    <label for="loginUser" style={{color: 'black'}}>Enter your USN(UniversityStudentNumber)</label>
  </div>

    <div className="input-group">
    
      <input type="email" name="personame" id="firstname" required/>
      <label for="name"style={{color: 'black'}}>Enter your registered mail</label>
      
      </div>

      <div className="digit-group">

        
      <label for="name"style={{color: 'black'}}>Enter OTP received</label>
      <br/>
        <input type="text" id="digit-1" name="digit-1" data-next="digit-2" required />
	<input type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" required/>
	<input type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" required/>
	<input type="text" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" required/>
	<input type="text" id="digit-5" name="digit-5" data-next="digit-6" data-previous="digit-4" required/>
	<input type="text" id="digit-6" name="digit-6" data-previous="digit-5" required/>
        
        </div>
        <br/><br/>

        <a href="C:\Users\Nisarga Gondi\OneDrive\Desktop\Web Dev\Change Password\ChangePassword.html">
          <input type="submit" value="Change Password" className="submit-btn text-center" style={{marginLeft:125+'px', color: 'black'}}/></a>
    </form>
</div>

   </>
  )
}
