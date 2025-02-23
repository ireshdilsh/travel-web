import React from 'react'
import "../styles/Landing.css"
import img1 from "../assets/hero.jpg"

export default function Landing() {
  return (
    <div>
      <section id='home'>
        <div className="left">
          <p className='title'>Unlock the Door to <span>Your <br /> Dream</span> Home</p>
          <p className='discription'>Discover a wide range of properties tailored to your needs, with expert guidance to help you every step of the way.</p>
          <div className="btns">
            <a href="">Find My Property</a>
          </div>
        </div>
        <div className="right">
         <img src={img1} alt="" />
        </div>
      </section>

      <svg style={{zIndex:'-1',position:'absolute',right:'-350',top:'-350',height:'1100px',width:'900px'}} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#6365f165" d="M18.9,-32.1C29.5,-26.7,46.5,-31.7,51.1,-28.1C55.7,-24.5,47.8,-12.2,50.7,1.6C53.5,15.5,67,31,63.4,36.3C59.7,41.5,39,36.6,25.6,44.6C12.2,52.6,6.1,73.5,1.4,71C-3.2,68.5,-6.4,42.5,-17.8,33.4C-29.2,24.2,-48.9,31.9,-56.7,29.2C-64.5,26.4,-60.3,13.2,-52.7,4.4C-45,-4.4,-33.9,-8.7,-25.7,-10.8C-17.5,-12.9,-12.3,-12.6,-8.5,-22C-4.8,-31.3,-2.4,-50.2,0.9,-51.8C4.2,-53.3,8.3,-37.5,18.9,-32.1Z" transform="translate(100 100)" />
          </svg>
    </div>
  )
}
