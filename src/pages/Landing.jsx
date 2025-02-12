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
                       <div className="author">
                           <h6>Aaron Loeb</h6>
                       </div>
                       <div className="price">
                           <p>49.99$</p>
                       </div>
                   </div>
                   <div className="card-2">
                       <img src={img2} alt=""/>
                       <div className="title">
                           <h5>Conquest of Flames</h5>
                       </div>
                       <div className="author">
                           <h6>Shawn Garcia</h6>
                       </div>
                       <div className="price">
                           <p>49.99$</p>
                       </div>
                   </div>
                   <div className="card-3">
                       <img src={img3} alt=""/>
                       <div className="title">
                           <h5>Cybernetic Stargazer</h5>
                       </div>
                       <div className="author">
                           <h6>Shawn Garcia</h6>
                       </div>
                       <div className="price">
                            <p>49.99$</p>
                       </div>
                   </div>
                   <div className="card-4">
                       <img src={img1} alt=""/>
                       <div className="title">
                           <h5>Young Wizard</h5>
                       </div>
                       <div className="author">
                           <h6>Aaron Loeb</h6>
                       </div>
                       <div className="price">
                           <p>49.99$</p>
                       </div>
                   </div>
               </div>
            </div>
        </section>

        <section id="offers">
            <h4>Hot Offers</h4>
            <p>Don't miss our Hot Offers section! Grab amazing discounts on bestselling books and exclusive deals for a limited time!</p>
            <div className="cards">
                <div className="card-1">
                    <div className="title">
                        <h5>Bestseller Discount</h5>
                    </div>
                    <div className="discription">
                        <h6>20% Off Bestsellers</h6>
                        <p>Enjoy 20% off our top-selling books! Limited time only.</p>
                    </div>
                    <div className="button">
                        <Button>Shop Now</Button>
                    </div>
                </div>
                <div className="card-2">
                    <div className="title">
                        <h5>Buy One, Get One Free</h5>
                    </div>
                    <div className="discription">
                        <h6>Buy One, Get One Free</h6>
                        <p>Buy any book and get another of equal or lesser value for free!</p>
                    </div>
                    <div className="button">
                        <Button>Shop Now</Button>
                    </div>
                </div>
                <div className="card-3">
                    <div className="title">
                        <h5>Seasonal Sale</h5>
                    </div>
                    <div className="discription">
                        <h6>Seasonal Sale: Up to 50% Off</h6>
                        <p>Save up to 50% on select titles this season. Don’t miss out!</p>
                    </div>
                    <div className="button">
                        <Button>Shop Now</Button>
                    </div>
                </div>
                <div className="card-4">
                    <div className="title">
                        <h5>Membership Perks</h5>
                    </div>
                    <div className="discription">
                        <h6>Join Our Book Club</h6>
                        <p>Sign up for our membership and enjoy exclusive discounts and early access to new releases!</p>
                    </div>
                    <div className="button">
                        <Button>Shop Now</Button>
                    </div>
                </div>
            </div>
        </section>

        <section id="service">
            <h4>Our Services</h4>
            <p>We offer a wide range of services, including personalized book recommendations, gift wrapping, and fast shipping to enhance your shopping experience.</p>
        </section>

        <section id="contact">
            <h4>Get In Touch</h4>
            <p>Have questions or need assistance? Reach out to us anytime through our contact form, email, or phone. We're here to help!</p>
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
