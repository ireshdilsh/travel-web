import React from 'react'
import "../styles/Landing.css"
import heroImage from "../assets/hero-image.png"
import gif1 from "../assets/Learning.gif"

export default function Landing() {
  return (
    <div>

      <nav>
        <div className="logo-and-name">
            <h3>LearnSphere</h3>
        </div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="">About Us</a>
          <a href="">Instructors</a>
          <a href="">Blogs</a>
          <a href="">Resources </a>
          <a href="">FAQS</a>
          <a href="">Contact Us</a>
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

      <section id='courses'>
        <div className="left-side">
           <img src={gif1} alt="" />
        </div>
        <div className="right-side">
        <h1>Explore Our Courses</h1>
        <p>Browse through our extensive catalog of courses across various subjects. Whether you're looking to enhance your skills, pursue a new hobby, or advance your career, we have the right course for you. Join our community of learners and start learning today!</p>
         <div className="explore-btn">
         <a href="">Explore Courses</a>
         </div>
        </div>
      </section>
    </div>
  )
}
