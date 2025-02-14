import React from 'react'
import "../styles/Register.css"
import logo from "../assets/Literary.png"
import {Link} from "react-router-dom";

export default function Register() {
    return (
        <div>
            <div className="register-card">
                <div className="card-body">
                    <div className="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="title">
                        <h4>Create Account</h4>
                    </div>
                    <div className="discription">
                        <p> Register now to unlock special deals, events, and personalized book recommendations!</p>
                    </div>
                    <div className="register-btn">
                        <button className="btn btn-primary" type="submit">Create Account</button>
                    </div>
                    <div className="or-and-line">
                        <label>Or</label>
                        <hr/>
                    </div>
                    <div className="continue-google-btn">
                        <button className="btn btn-light">Continue with Google <i className="bi bi-google"></i></button>
                    </div>
                    <div className="goto-login">
                        <p>If you already have an account?</p>
                        <Link to="/auth/sign_in">Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
