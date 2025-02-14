import React from 'react'
import "../styles/Login.css"
import logo from "../assets/Literary.png"
import {Link} from "react-router-dom";

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
                        <p>Enter your credintails for sign in your account!</p>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="signin-btn">
                        <button className="btn btn-primary" type="submit">Sign In</button>
                    </div>
                    <div className="line-and-or">
                        <hr />
                        <label>Or</label>
                    </div>
                    <div className="continue-google">
                        <button className="btn btn-light">Continue with Google <i class="bi bi-google"></i></button>
                    </div>
                    <div className="link-and-text">
                        <p>If you haven't an account ?</p>
                        <Link href = "/create%account">Create Account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
