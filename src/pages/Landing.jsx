import React from 'react'
import "../styles/Landing.css"
import heroVideo from '../assets/hero.mp4'
export default function Landing() {
  return (
    <div>
       <video src={heroVideo} 
        loop
        playsInline>
        </video>
        <h1>Hello World</h1>
    </div>
  )
}
