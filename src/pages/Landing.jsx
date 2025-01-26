import React from 'react'
import '../styles/Landing.css'
import img1 from "../assets/img-1.jpg"
import img2 from "../assets/img-2.jpg"
import img3 from "../assets/img-3.jpg"
import img4 from "../assets/img-4.jpg"

export default function Landing() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <p>Thynk.<span className="text text-primary">Travel</span></p>
                </div>
                <div className="links">
                    <a href="">Home</a>
                    <a href="#places">Places</a>
                    <a href="">Blogs</a>
                    <a href="">Services</a>
                    <a href="">Contact me</a>
                </div>
                <div className="signup-btn">
                    <button className="btn btn-primary" style={{height:"45px", width:"120px",fontSize:"14px",fontWeight:500}}>Sign In</button>
                </div>
            </nav>

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
                        <p>Discover your next adventure with us! Explore breathtaking destinations, immerse yourself in new <br/>cultures, and create lasting memories. Start your journey today!</p>
                    </div>
                    <div className="register-btn">
                        <button className="btn btn-primary" style={{height:"45px", width:"160px",fontSize:"14px",fontWeight:500}}>Create Account</button>
                    </div>
                </div>
                <div className="right-side">
                    {/* Adding inline css for image frames (easy stylling purpose) */}
                    <div className="img-frame-1">
                        <img style={{width:"300px"}} src={img1} alt="img-1"/>
                        <img style={{width:"300px",height:"170px"}} src={img2} alt="img-2"/>
                    </div>
                    <div className="img-frame-2" style={{marginTop:"8px"}}>
                        <img style={{width:"300px",height:"170px"}} src={img3} alt="img-3"/>
                        <img style={{width:"300px",height:"170px"}} src={img4} alt="img-4"/>
                    </div>
                </div>
            </section>

            <div className="place-search-card">
                <div className="place">
                    <input type="text" className="form-control" placeholder="Where are you going ?"/>
                </div>
                <div className="date">
                    <input type="text" className="form-control" placeholder="Check-in Date ?"/>
                </div>
                <div className="member-count">
                    <input type="text" className="form-control" placeholder="Member Count ?"/>
                </div>
                <div className="search-btn">
                    <button className="btn btn-primary" style={{fontWeight:500,fontSize:"14px",height:"45px",width:"100px"}}>Search</button>
                </div>
            </div>

            <div className="offers">
                <h3>Offers</h3>
                <p>Promotions, deals and special offers for you</p>
                <div className="offer-box">
                    <div className="left">
                        <div className="title">
                            <h4>Save on stays worldwide</h4>
                        </div>
                        <div className="discription">
                            <p>Start your year with a sense of adventure, saving 15% or more with Early 2025 Deals.</p>
                        </div>
                        <div className="get-btn">
                            <button className="btn btn-primary" style={{fontWeight:500,fontSize:"14px",height:"40px",width:"150px"}}>Save 15% Now</button>
                        </div>
                    </div>
                    <div className="right">
                        <img src={img4} alt="offer-image"/>
                    </div>
                </div>
            </div>

            <section id="places">
                <h4>Explore Sri Lanka</h4>
            </section>
        </div>
    )
}
