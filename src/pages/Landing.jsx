import React, { useEffect } from 'react'
import "../styles/Landing.css"
import heroVideo from '../assets/hero-video.mp4'
export default function Landing() {

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    let current = 0;

    function animateNextCard() {
      // Remove animation from all cards
      cards.forEach(card => card.classList.remove('card-animate'));

      // Add animation to current card
      cards[current].classList.add('card-animate');

      // Move to next card
      current = (current + 1) % cards.length;

      // Repeat every 5s
      setTimeout(animateNextCard, 5000);
    }

    animateNextCard(); // start animation loop
  }, []);

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
        <div className="left-side">
          <div className="card card-1">
            <h5>Maldives 🏝️</h5>
            <p>Tropical paradise with white-sand beaches and overwater villas. Ideal for relaxing and luxury getaways.</p>
          </div>
          <div className="card card-2">
            <h5>Switzerland 🏔️</h5>
            <p>Breathtaking Alps views, lakes, and charming villages. Perfect for hiking, skiing, and scenic train rides.</p>
          </div>
          <div className="card card-3">
            <h5>Paris 🌇</h5>
            <p>The City of Love with iconic landmarks like the Eiffel Tower, art museums, and romantic cafes.</p>
          </div>
          <div className="card card-4">
            <h5>Bali 🌴</h5>
            <p>An island escape filled with lush forests, temples, and surf-friendly beaches.</p>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}



