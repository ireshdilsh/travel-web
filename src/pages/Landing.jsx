import React from 'react'
import '../styles/Landing.css'
import Header from "../components/Header.jsx";
import img1 from "../assets/img-1.jpg"
import img2 from "../assets/img-2.jpg"
import img3 from "../assets/img-3.jpg"
import img4 from "../assets/img-4.jpg"

export default function Landing() {
    return (
        <div>
            {/* adding Header.jsx file */}
            <Header/>

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
        </div>
    )
}
