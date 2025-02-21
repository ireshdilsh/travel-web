import React from 'react'
import "../styles/Landing.css"
import heroImage from "../assets/hero-image.png"

export default function Landing() {
  return (
    <div>

      <nav>
        <div className="logo-and-name">

        </div>
        <div className="links">
          <a href="#home"></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </div>
        <div className="sign-btn">
            <a href="">Sign In</a>
        </div>
      </nav>

      <section id='home'>
        <div className="left-side">
            <p className='title'>Unlock Your Potential <span>Learn <br />Anytime,</span> Anywhere.</p>
            <p>Join our online learning platform to access diverse courses, expert instructors, and flexible schedules. <br />Start your journey today!</p>
            <div className="btns">
                <a href="">Create Account</a>
            </div>
        </div>
        <div className="right-side">
          <div className="image">
            <img src={heroImage} alt="" />
          </div>
            <div className="circle"></div>
            <div className="smaill-circle-1"></div>
            <div className="smaill-circle-2"></div>
        </div>
      </section>
    </div>
  )
}
