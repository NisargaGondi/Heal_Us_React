import React, { useEffect } from 'react'
import '../css/style_forgotpassword.css'
import $ from 'jquery'
import { NavLink } from 'react-router-dom';

export default function ForgotPassword() {
    useEffect(() => {

        $('.digit-group').find('input').each(function() {
            $(this).attr('maxlength', 1);
            $(this).on('keyup', function(e) {
                var parent = $($(this).parent());
                
                if(e.keyCode === 8 || e.keyCode === 37) {
                    var prev = parent.find('input#' + $(this).data('previous'));
                    
                    if(prev.length) {
                        $(prev).select();
                    }
                } else if((e.keyCode >= 48 && e.keyCode <= 57)){
                    var next = parent.find('input#' + $(this).data('next'));
                    
                    if(next.length) {
                        $(next).select();
                    } else {
                        if(parent.data('autosubmit')) {
                            parent.submit();
                        }
                    }
                }
            });
        });

    }, []);

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

        <NavLink to="/ChangePassword">
          <input type="submit" value="Change Password" className="submit-btn text-center" style={{marginLeft:125+'px', color: 'black'}}/></NavLink>
    </form>
</div>

   </>
  )
}
