import React from 'react'
import '../styles/Landing.css'

export default function Landing() {
    return (
        <div>
            <section id="home">
                <div className="left-side">
                    <div className="title">
                        <p>Your Journey Begins Here</p>
                        <hr/>
                    </div>
                    <div className="sub-title">
                        <p> <span className="text text-primary">Explore the World, <br/></span> One Adventure at a Time</p>
                    </div>
                    <div className="discription">
                        <p>Discover your next adventure with us! Explore breathtaking destinations, immerse yourself in new cultures, and <br/> create lasting memories. Start your journey today!</p>
                    </div>
                    <div className="register-btn">
                        <button className="btn btn-primary" style={{height:"45px", width:"160px",fontSize:"14px",fontWeight:500}}>Create Account</button>
                    </div>
                </div>
                <div className="right-side"></div>
            </section>
        </div>
    )
}
