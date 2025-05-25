import React from 'react'
import "../styles/Landing.css"
import heroVideo from '../assets/hero-video.mp4'
export default function Landing() {
  return (
    <div>
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
    </div>
  )
}



