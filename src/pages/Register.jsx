import React, {useState} from 'react'
import "../styles/Register.css"
import logo from "../assets/Literary.png"
import {Link, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

export default function Register() {

    const navigate = useNavigate();

    const sweetAlertSuccess = () => {
        Swal.fire({
            title: "Account Created",
            text: "Welcome to Literary Haven E-Store !",
            icon: "success"
        });
    }

    const sweetAlertError = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!"
        });
    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const gotoDashboard = async (e) => {
        try {
             e.preventDefault();
             // customer save logic has complete this space
             sweetAlertSuccess();
             navigate("/literay_haven/user/dashboard");
        }catch (e) {
            sweetAlertError();
            console.log(e);
        }
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
                        <input type="email" onChange={handleEmail} className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Create Password</label>
                        <input type="password" onChange={handlePassword} className="form-control" id="exampleInputPassword1"/>
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
