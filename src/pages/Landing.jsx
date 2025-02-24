import React from 'react'
import "../styles/Landing.css"
import heroImg from "../assets/heroImg.png"
import {useNavigate} from "react-router-dom";

export default function Landing() {
    
    const navigate = useNavigate();
    
  return (
    <div>
       <section id='home'>
        <div className="left">
          <h5>30 Days Moneback Guarantee</h5>
          <div className="title">
            <p>Your Gateway to</p>
            <p><span>Knowledge</span> and Growth</p>
          </div>
          <div className="discrption">
            <p>Access a world of courses designed to inspire and empower your growth. Start your learning journey today!</p>
          </div>
          <button>Create Account</button>
        </div>
        <div className="right">
          <div className="hero-image">
            <img src={heroImg} alt="hero-image"/>
          </div>
          <div className="circle-1"></div>
          <div className="circle-2"></div>
         <div className="icons">
          <div className="icon-1">
          <img className='chatgpt' src="https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png&color=000000" alt="" />
          </div>
          <div className="icon-2">
          <img className='photoshop' src="https://img.icons8.com/?size=100&id=13677&format=png&color=000000" alt=""/>
          </div>
          <div className="icon-3">
          <img className='adobeilst' src="https://img.icons8.com/?size=100&id=13631&format=png&color=000000" alt="" />
          </div>
          <div className="icon-4">
          <img className='html' src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="" />
          </div>
          <div className="icon-5">
          <img className='java' src="https://img.icons8.com/?size=100&id=13679&format=png&color=000000" alt="" />
          </div>
          <div className="icon-6">
          <img className='python' src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" alt="" />
          </div>
         </div>
        </div>
       </section>

       <section id='logos'>
        <h2>Trusted by <span><h2>over 1000</h2></span> companies.</h2>
        <div className="company-logos">
          <div className="logo-set-1">
            <img src="https://img.icons8.com/?size=100&id=Z5pgoU6ueRre&format=png&color=000000" alt="google-company-logo" />
            <img src="https://img.icons8.com/?size=100&id=PvvcWRWxRKSR&format=png&color=000000" alt="meta-company-logo" />
            <img src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000" alt="apple-company-logo" />
            <img src="https://img.icons8.com/?size=100&id=17836&format=png&color=000000" alt="android-company-logo" />
              
          </div>
          <div className="logo-set-2">
              <img src="https://img.icons8.com/?size=100&id=45080&format=png&color=000000" alt="ali-company-logo"/>
              <img src="https://img.icons8.com/?size=100&id=gav46YArUSy1&format=png&color=000000" alt="adobe-logo"/>
              <img src="https://img.icons8.com/?size=100&id=39913&format=png&color=000000" alt="oracle-logo"/>
              <img src="https://img.icons8.com/?size=100&id=22989&format=png&color=000000" alt="microsoft-logo"/>
          </div>

            <div className="logo-set-3">
                <img src="https://img.icons8.com/?size=100&id=pj15SuHu3Vlt&format=png&color=000000" alt="jetbrains-company-logo"/>
                <img src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" alt="github-logo"/>
                <img src="https://img.icons8.com/?size=100&id=0Igl1ihGxnaQ&format=png&color=000000" alt="tesla-logo"/>
            </div>
        </div>
       </section>
    </div>
  )
}
