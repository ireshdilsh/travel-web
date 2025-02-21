import React from 'react'
import "../styles/Landing.css"
import heroImage from "../assets/hero-image.png"
import gif1 from "../assets/Learning.gif"
import gif2 from "../assets/aboutus.gif"
import gif3 from "../assets/Webinar.gif"
import gif4 from "../assets/Blogging.gif"
import gif5 from "../assets/resources.gif"
import gif6 from "../assets/faq.gif"
import gif7 from "../assets/contact.gif"

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
          <a href="#aboutus">About Us</a>
          <a href="#instructors">Instructors</a>
          <a href="#blogs">Blogs</a>
          <a href="#resources">Resources </a>
          <a href="#faqs">FAQS</a>
          <a href="#contact">Contact Us</a>
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

      <section id='aboutus'>
        <div className="left-side">
          <h1>About LearnSphere</h1>
          <p>At LearnSphere, we believe in the power of education to transform lives. Our mission is to provide accessible, high-quality learning experiences for everyone. Learn more about our vision, values, and the team dedicated to your success.</p>
          <div className="icons">
            <div className="facebook"><i class="bi bi-facebook"></i></div>
            <div className="instagram"><i class="bi bi-instagram"></i></div>
            <div className="linkedid"><i class="bi bi-linkedin"></i></div>
            <div className="twitter"><i class="bi bi-twitter"></i></div>
          </div>
        </div>
        <div className="right-side">
          <img src={gif2} alt="" />
        </div>
      </section>

      <section id='instructors'>
        <div className="left-side">
          <img src={gif3} alt="" />
        </div>
        <div className="right-side">
          <h1>Meet Our Instructors</h1>
          <p>Our instructors are industry experts and passionate educators committed to providing you with the best learning experience. Get to know our team of professionals who bring their knowledge and expertise to the classroom, guiding you on your educational journey.</p>
        </div>
      </section>
      <section id='blogs'>
        <div className="left-side">
          <h1>Insights & Resources</h1>
          <p>Stay updated with the latest trends in education, tips for effective learning, and inspiring stories from our community. Our blog features articles, guides, and resources to help you make the most of your learning experience.</p>
        </div>
        <div className="right-side">
          <img src={gif4} alt="" />
        </div>
      </section>

      <section id='resources'>
        <div className="left-side">
          <img src={gif5} alt="" />
        </div>
        <div className="right-side">
          <h1>Learning Resources</h1>
          <p>Access a wealth of additional materials, guides, and tools to enhance your learning experience. From study tips to downloadable resources, our collection is designed to support you in achieving your educational goals.</p>
          <div className="explore-resources-btn">
            <a href="">Explore Resouces</a>
          </div>
        </div>
      </section>

      <section id='faqs'>
      <div className="left-side">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our platform, courses, and policies. Our FAQ section is designed to provide you with the information you need to navigate your learning journey with confidence.</p>
      </div>
      <div className="right-side">
        <img src={gif6} alt="" />
      </div>
      </section>
      
      <section id='contact'>
      <div className="left-side">
        <img src={gif7} alt="" />
      </div>
      <div className="right-side">
        <h1>Get in Touch</h1>
        <p>Find answers to common questions about our platform, courses, and policies. Our FAQ section is designed to provide you with the information you need to navigate your learning journey with confidence.</p>
        <div className="contact-details">
            <div className="email">
              <h5>Email Address</h5>
              <p>ireshsample@gmail.com</p>
            </div>
            <div className="mobile">
              <h5>Mobile No</h5>
              <p>+94 77 123 4567</p>
            </div>
        </div>
      </div>
      </section>

    </div>
  )
}
