import React, { useEffect } from 'react';
import './style_ChangePassword.css';
import { NavLink } from 'react-router-dom';

export default function ChangePassword() {
  useEffect(() => {
    function checkPassword(form) {
      const password1 = form.password1.value;
      const password2 = form.password2.value;

      // If password not entered
      if (password1 === '') alert('Please enter Password');
      // If confirm password not entered
      else if (password2 === '') alert('Please enter confirm password');
      else if (password1 !== password2) {
        alert('\nPassword did not match: Please try again...');
        return false;
      }
      // If same return True.
      else {
        alert('Password Changed successfully!');
        window.location.href =
          'C:\\Users\\Nisarga Gondi\\OneDrive\\Desktop\\Web Dev\\Login\\login.html';
        return false;
      }
    }
  }, []);

  return (
    <>
      <div className="login-wrapper">
        <form className="form" onSubmit="return checkPassword(this)">
          <h2>Change Password</h2>

          <div className="input-group">
            <input type="password" name="password1" id="loginPassword" minLength="8" required />
            <label htmlFor="loginPassword" style={{ color: 'black' }}>
              Set a new Password
            </label>
          </div>
          <div className="input-group">
            <input type="password" name="password2" id="confirmPassword" minLength="8" required />
            <label htmlFor="loginPassword" style={{ color: 'black' }}>
              Confirm Password
            </label>
          </div>
          <br />
          <br />

          <NavLink to="/Login">
            <input
              type="submit"
              value="Change Password"
              className="submit-btn text-center"
              style={{ marginLeft: 125 + 'px', color: 'black' }}
            />
          </NavLink>
        </form>
      </div>
    </>
  );
}
