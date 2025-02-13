import "../styles/Landing.css"
import img1 from "../assets/book-1.png"
import img2 from "../assets/book-2.png"
import img3 from "../assets/book-3.png"
import logo from "../assets/Literary.png"
import { Button } from "@mui/material";

export default function Landing() {

    return (
        <div>


            {/* Modal Start */}

                                

            {/* Modal End */}

            <nav>
                <div className="logo">
                   <img src={logo} alt="" />
                </div>
                <div className="links">
                    <a href="#home">Home</a>
                    <a href="#books">Books</a>
                    <a href="#offers">Offers</a>
                    <a href="#service">Service</a>
                    <a href="#contact">Get in Touch</a>
                </div>
                <div className="signin-btn">
                    <button className="btn btn-primary">Sign In</button>
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
                        <button className="btn btn-primary">Create Account</button>
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
                            <img src={img1} alt="" />
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
                            <img src={img2} alt="" />
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
                            <img src={img3} alt="" />
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
                            <img src={img1} alt="" />
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
                            <button className="btn btn-primary">Shop Now</button>
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
                            <button className="btn btn-primary">Shop Now</button>
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
                            <button className="btn btn-primary">Shop Now</button>
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
                            <button className="btn btn-primary">Shop Now</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="service">
                <h4>Our Services</h4>
                <p>We offer a wide range of services, including personalized book recommendations, gift wrapping, and fast shipping to enhance your shopping experience.</p>

                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseOne" aria-expanded="false"
                                aria-controls="flush-collapseOne">
                                Personalized Book Recommendations #
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Discover your next favorite read with our personalized book recommendation service. Our knowledgeable staff will take the time to understand your reading preferences and suggest titles tailored just for you. Whether you love fiction, non-fiction, or niche genres, we’re here to help you find the perfect book!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                aria-controls="flush-collapseTwo">
                                Book Club Support #
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Join our vibrant community of book lovers! We offer support for book clubs, including curated reading lists, discussion guides, and exclusive discounts for bulk purchases. Whether you’re starting a new club or looking to enhance your existing one, we’re here to help make your reading experience more enjoyable.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseThree" aria-expanded="false"
                                aria-controls="flush-collapseThree">
                                Author Events and Signings #
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Meet your favorite authors at our exclusive events! We host regular book signings, readings, and Q&A sessions with both local and renowned authors. Stay updated on our event calendar and join us for an unforgettable experience that brings readers and writers together.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFour" aria-expanded="false"
                                aria-controls="flush-collapseFour">
                                Gift Wrapping and Personalization #
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Make your gift extra special with our complimentary gift wrapping service! Choose from a selection of beautiful wrapping papers and add a personalized message to your gift. Perfect for birthdays, holidays, or any occasion, we ensure your gift is beautifully presented and ready to delight.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseFive" aria-expanded="false"
                                aria-controls="flush-collapseFive">
                                Online Ordering and Home Delivery #
                            </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Enjoy the convenience of shopping from home with our online ordering service. Browse our extensive collection of books, place your order, and have it delivered right to your doorstep. We offer fast and reliable shipping options, so you can dive into your next read without delay!
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseSix" aria-expanded="false"
                                aria-controls="flush-collapseSix">
                                Reading Workshops and Classes #
                            </button>
                        </h2>
                        <div id="flush-collapseSix" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Enhance your reading and writing skills with our engaging workshops and classes! Led by experienced instructors, our sessions cover a variety of topics, from creative writing to literary analysis. Whether you’re a budding author or simply looking to deepen your appreciation for literature, our workshops provide a supportive environment for learning and growth.
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingSeven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#flush-collapseSeven" aria-expanded="false"
                                aria-controls="flush-collapseSeven">
                                Book Trade-In Program #
                            </button>
                        </h2>
                        <div id="flush-collapseSeven" className="accordion-collapse collapse"
                            aria-labelledby="flush-headingSeven" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                Give your old books a new life with our Book Trade-In Program! Bring in your gently used books and receive store credit to use towards your next purchase. It’s a great way to refresh your bookshelf while making room for new titles. Join us in promoting sustainability and sharing the joy of reading with others!
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section id="contact">
                <h4>Get In Touch</h4>
                <p>Have questions or need assistance? Reach out to us anytime through our contact form, email, or phone.
                    We're here to help!</p>
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
