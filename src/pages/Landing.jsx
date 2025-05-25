import React from 'react'
import "../styles/Landing.css"
import heroVideo from '../assets/hero-video.mp4'
export default function Landing() {
  return (
    <div>
      <section id='home'>
          <video src={heroVideo}

        autoPlay="true"
        loop
        muted
        playsInline>
      </video>

      <nav>
        <div className="links">
          <a href="">Home</a>
          <a href="">Destinations</a>
          <a href="">Tours</a>
          <a href="">Plan Your Trip</a>
          <a href="">Gallery</a>
          <a href="">Blog</a>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
        </div>
      </nav>

      <div className="white-glass"></div>
      <div className="hero-body">
        <div className="right-side">
          <div className="title">
            <h6>Your Journey, Your Way_</h6>
          </div>
          <div className="sub-title">
            <p>Explore the World <br />with Confidence</p>
          </div>
          <div className="discription">
            <p>From sun-soaked beaches to mountain escapes, we offer personalized travel experiences, expert planning, and unforgettable memories. <br /> Discover new cultures, taste local cuisine, and travel stress-free with our trusted guidance.</p>
          </div>
          <div className="btns">
            <div className="login-btn">
            <button className='btn btn-dark'>Sign in Here</button>
          </div>
           <div className="register-btn">
            <button>Sign up Here</button>
          </div>
          </div>
        </div>
        <div className="left-side"></div>
      </div>
      </section>
    </div>
  )
}



