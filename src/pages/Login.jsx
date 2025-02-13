import React from 'react'
import "../styles/Login.css"
import logo from "../assets/Literary.png"

export default function Login() {
  return (
    <div>
     <div className="login-card">
        <div className="card-body">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="title">
                <h4>Sign your Account</h4>
            </div>
            <div className="discription">
                <p>Enter your credintails for sing in your account!</p>
            </div>
            <div className="email-field">
                <label> Email Address</label>
                <input type="text" required/>
            </div>
            <div className="password-field">
                <label>Password</label>
                <input type="text" required/>
            </div>
            <div className="signin-btn">
                <button className="btn btn-primary" type="submit">Sign In</button>
            </div>
        </div>
     </div>
    </div>
  )
}
