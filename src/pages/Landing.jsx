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
                <a href="#offers">Offers</a>
                <a href="#service">Service</a>
                <a href="#contact">Get in Touch</a>
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
            <p>Explore our Popular Books section for the latest bestsellers and must-reads across all genres!</p>
            <div className="section-body">
               <div className="cards">
                   <div className="card-1">
                       <img src={img1} alt=""/>
                       <div className="title">
                        <h5>Young Wizard</h5>
                       </div>
                       <div className="price-and-button">

                       </div>
                   </div>
                   <div className="card-2">
                       <img src={img2} alt=""/>
                       <div className="title">
                           <h5>Conquest of Flames</h5>
                       </div>
                       <div className="price-and-button">

                       </div>
                   </div>
                   <div className="card-3">
                       <img src={img3} alt=""/>
                       <div className="title">
                           <h5>Cybernetic Stargazer</h5>
                       </div>
                       <div className="price-and-button">

                       </div>
                   </div>
                   <div className="card-4">
                       <img src={img1} alt=""/>
                       <div className="title">
                           <h5>Young Wizard</h5>
                       </div>
                       <div className="price-and-button">

                       </div>
                   </div>
               </div>
            </div>
        </section>

        <section id="offers">
            <h4>Hot Offers</h4>
        </section>

        <section id="service">
            <h4>Our Services</h4>
        </section>

        <section id="contact">
            <h4>Get In Touch</h4>
        </section>

        <footer>
            <div className="footer-body">
                <div className="left"></div>
                <div className="middle"></div>
                <div className="right"></div>
            </div>
            <p>© 2023 Literary Haven. All rights reserved. Connect with Us!</p>
        </footer>
    </div>
  )
}
