import React from 'react'
import "../styles/Header.css"
export default function Header() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <p>Thynk.<span className="text text-primary">Travel</span></p>
                </div>
                <div className="links">
                    <a href="">Home</a>
                    <a href="">About us</a>
                    <a href="">Places</a>
                    <a href="">Blogs</a>
                    <a href="">Services</a>
                    <a href="">Contact me</a>
                </div>
                <div className="signup-btn">
                    <button className="btn btn-primary" style={{height:"45px", width:"120px",fontSize:"14px",fontWeight:500}}>Sign In</button>
                </div>
            </nav>
        </div>
    )
}
