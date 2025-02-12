import React from 'react'
import "../styles/Landing.css"
import img1 from "../assets/book-1.png"
import img2 from "../assets/book-2.png"
import img3 from "../assets/book-3.png"
import {Button} from "@mui/material";

export default function Landing() {
  return (
    <div>
        <nav>
            <div className="logo-name">
                <h4>Literary <span>Haven</span></h4>
            </div>
            <div className="links">
                <a href="#home">Home</a>
                <a href="#books">Books</a>
                <a href="">Offers</a>
                <a href="">Service</a>
                <a href="">Get in Touch</a>
            </div>
            <div className="signin-btn">
                <Button>Sign In</Button>
            </div>


        </nav>

        <section id="home">
            <div className="left-side">
            <p className="title">Discover Your Next Great Read</p>
            <hr />
            <h1>Where Every Book <span>Tells a Story.</span></h1>
            <p className="discription">Explore a world of stories at Literary Haven. From bestsellers to hidden gems, find your <br />
             next favorite book and ignite your imagination today!</p>
                <div className="icons">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-twitter"></i>
                    <i className="bi bi-google"></i>
                </div>
                <div className="signup-btn">
                <Button>Create Account</Button>
             </div>
            </div>
            <div className="right-side">
                <img src={img1} className="img1" alt="" />
                <img src={img2} className="img2" alt="" />
                <img src={img3} className="img3" alt="" />
            </div>
        </section>

        <div className="mesh">
            <div className="mesh-line1">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
            </div>
            <div className="mesh-line2">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
            </div>
        </div>

        <section id="books">
            <h4>Favourite Books</h4>
            <div className="section-body">
               <div className="cards">

               </div>
            </div>
        </section>
    </div>
  )
}
