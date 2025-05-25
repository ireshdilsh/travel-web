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
    </div>
  )
}
