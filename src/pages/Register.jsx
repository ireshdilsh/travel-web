import React from 'react'
import "../styles/Register.css"
import logo from "../assets/Literary.png"
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

export default function Register() {

    const sweetAlertSuccess = () => {
        Swal.fire({
            title: "Account Created",
            text: "Welcome to Literary Haven E-Store !",
            icon: "success"
        });
    }

    const gotoDashboard = () => {
        sweetAlertSuccess();
    }
    
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

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Create Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">agree our Terms and Conditions.</label>
                    </div>

                    <div className="register-btn">
                        <button className="btn btn-primary" onClick={gotoDashboard} type="submit">Create Account</button>
                    </div>
                    <div className="or-and-line">
                        <hr/>
                        <label>Or</label>
                    </div>
                    <div className="continue-google-btn">
                        <button className="btn btn-light">Continue with Google <i className="bi bi-google"></i></button>
                    </div>
                    <div className="goto-login">
                        <p>If you already have an account?</p>
                        <Link to="/auth/sign_in">Goto Login</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
