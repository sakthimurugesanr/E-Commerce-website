import React from 'react'
import './Css/Loginsignup.css'

const Loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Signup</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Enter your name'/>
          <input type='email' placeholder='Enter your Email'/>
          <input type='password' placeholder='Enter your Password'/>
        </div>
        <button>Continue</button>
      <p className="loginsignup-login">Already have an Account <span>Login here</span></p>
      <div className="loginsignup-agree">
        <input type='checkbox' name='' id=''/>
        <p>By continuing,i agree to the terms of use & privacy policy.</p>
      </div>
      </div>
    </div>
  )
}

export default Loginsignup