import React from 'react'
import "../styles/Landing.css"
export default function Landing() {
  return (
    <div>
        <nav>
            <div className="logo-name">
                <h4>Literary <span>Haven</span></h4>
            </div>
            <div className="links">
                <a href="">Home</a>
                <a href="">Books</a>
                <a href="">Offers</a>
                <a href="">Service</a>
                <a href="">Get in Touch</a>
            </div>
            <div className="signup-btn">
                <button className='btn btn-primary'>Sign Up</button>
            </div>
        </nav>
    </div>
  )
}
