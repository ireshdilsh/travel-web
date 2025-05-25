import React from 'react'
import "../styles/Landing.css"
import heroVideo from '../assets/hero-video.mp4'
export default function Landing() {
  return (
    <div>
       <video src={heroVideo} 
       
        autoPlay = "true"
        loop
        muted
        playsInline>
        </video>

        <nav>
          <div className="links">
            <a href="">Home</a>
            <a href="">Places</a>
            <a href="">Images</a>
            <a href=""></a>
            <a href=""></a>
          </div>
        </nav>
    </div>
  )
}
