import React from 'react'
import "../styles/Landing.css"
import heroImg from "../assets/heroImg.png"
import { useNavigate } from "react-router-dom";

export default function Landing() {

    // create navigate variable for navigation
    const navigate = useNavigate();

    return (
        <div>
            <section id='home'>
                <div className="left">
                    <h5>30 Days Moneyback Guarantee</h5>
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
                        <img src={heroImg} alt="hero-image" />
                    </div>
                    <div className="circle-1"></div>
                    <div className="circle-2"></div>
                    <div className="icons">
                        <div className="icon-1">
                            <img className='chatgpt' src="https://img.icons8.com/?size=100&id=FBO05Dys9QCg&format=png&color=000000" alt="" />
                        </div>
                        <div className="icon-2">
                            <img className='photoshop' src="https://img.icons8.com/?size=100&id=13677&format=png&color=000000" alt="" />
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
                <h2>Trusted by <span><h2>over 1000</h2></span> companies</h2>
                <div className="company-logos">
                    <div className="logo-set-1">
                        <img src="https://img.icons8.com/?size=100&id=Z5pgoU6ueRre&format=png&color=000000" alt="google-company-logo" />
                        <img src="https://img.icons8.com/?size=100&id=PvvcWRWxRKSR&format=png&color=000000" alt="meta-company-logo" />
                        <img src="https://img.icons8.com/?size=100&id=30840&format=png&color=000000" alt="apple-company-logo" />
                        <img src="https://img.icons8.com/?size=100&id=17836&format=png&color=000000" alt="android-company-logo" />

                    </div>
                    <div className="logo-set-2">
                        <img src="https://img.icons8.com/?size=100&id=45080&format=png&color=000000" alt="ali-company-logo" />
                        <img src="https://img.icons8.com/?size=100&id=gav46YArUSy1&format=png&color=000000" alt="adobe-logo" />
                        <img src="https://img.icons8.com/?size=100&id=39913&format=png&color=000000" alt="oracle-logo" />
                        <img src="https://img.icons8.com/?size=100&id=22989&format=png&color=000000" alt="microsoft-logo" />
                    </div>

                    <div className="logo-set-3">
                        <img src="https://img.icons8.com/?size=100&id=pj15SuHu3Vlt&format=png&color=000000" alt="jetbrains-company-logo" />
                        <img src="https://img.icons8.com/?size=100&id=AZOZNnY73haj&format=png&color=000000" alt="github-logo" />
                        <img src="https://img.icons8.com/?size=100&id=0Igl1ihGxnaQ&format=png&color=000000" alt="tesla-logo" />
                    </div>
                </div>
            </section>

            <section id='course'>
                <div className="title">
                    <h2>Your Learning Journey Starts Here : Course Offerings</h2>
                </div>
                <div className="discription">
                    <p>Start your learning journey today! Explore our diverse courses designed to empower you and unlock new skills. Your adventure awaits!</p>
                </div>
                <div className="course-cards">
                    <div className="set-1">
                        <div className="card-1">
                            <div className="color-bar"></div>
                            <h4>Mastering Digital Marketing</h4>
                            <p>
                                Discover effective digital marketing strategies, including SEO, social media, and content creation, to enhance your brand's online presence and drive engagement.
                            </p>
                            <button type="button">Enroll Now  99.99$</button>
                            <p className='riview'>4.9 riview <img src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" /></p>
                            <p className='sold-out'>2000+ sold out</p>
                            <div className="box">
                                <p>Best Choice</p>
                            </div>
                        </div>
                        <div className="card-2">
                            <div className="color-bar"></div>
                            <h4>Data Science Essentials</h4>
                            <p>
                                Learn the fundamentals of data science, including data analysis, machine learning, and visualization techniques, through hands-on projects and real-world applications.
                            </p>
                            <button type="button">Enroll Now  99.99$</button>
                            <p className='riview'>4.3 riview <img src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" /></p>
                            <p className='sold-out'>2000+ sold out</p>
                            <div className="box">
                                <p>Best Choice</p>
                            </div>
                        </div>
                        <div className="card-3">
                            <div className="color-bar"></div>
                            <h4>Creative Writing Workshop</h4>
                            <p>
                                Unleash your creativity in this workshop designed to help you develop compelling stories and characters through guided exercises and constructive feedback.
                            </p>
                            <button type="button">Enroll Now  99.99$</button>
                            <p className='riview'>4.9 riview <img src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" /></p>
                            <p className='sold-out'>5000+ sold out</p>
                            <div className="box">
                                <p>Best Choice</p>
                            </div>
                        </div>
                    </div>

                    <div className="set-2">
                        <div className="card-1">
                            <div className="color-bar"></div>
                            <h4> Web Development</h4>
                            <p>
                                Build your first website from scratch using HTML, CSS, and JavaScript in this beginner-friendly course that emphasizes practical skills and real-world applications.
                            </p>
                            <button type="button">Enroll Now  49.99$</button>
                            <p className='riview'>4.5 riview <img src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" /></p>
                            <p className='sold-out'>200,000+ sold out</p>
                            <div className="box">
                                <p>Best Choice</p>
                            </div>
                        </div>
                        <div className="card-2">
                            <div className="color-bar"></div>
                            <h4>Personal Finance 101</h4>
                            <p>
                                Master essential personal finance skills, including budgeting, saving, and investing, to achieve financial stability and secure your future.
                            </p>
                            <button type="button">Enroll Now  49.99$</button>
                            <p className='riview'>4.3 riview <img src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" /></p>
                            <p className='sold-out'>2000+ sold out</p>
                            <div className="box">
                                <p>Best Choice</p>
                            </div>
                        </div>
                        <div className="card-3">
                            <div className="color-bar"></div>
                            <h4>Graphic Design Fundamentals</h4>
                            <p>
                                Explore the principles of graphic design and learn to use industry-standard software to create visually appealing graphics and layouts.
                            </p>
                            <button type="button">Enroll Now  49.99$</button>
                            <p className='riview'>4.0 riview <img src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" /></p>
                            <p className='sold-out'>8000+ sold out</p>
                            <div className="box">
                                <p>Best Choice</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='goals'>
                <h2>Learning focused on your goals</h2>
                <p>Check out the hottest courses that are currently trending! Join your peers and boost your skills today!</p>
                <div className="goals-body">
                    <div className="left">
                            <div className="cards">
                                <div className="hand-skills">
                                    <div className="color-bar"></div>
                                    <img src="https://img.icons8.com/?size=100&id=eRycnOx8ELSA&format=png&color=000000" alt="" />
                                   <div className="texts">
                                   <h5>Hands-on training.</h5>
                                   <p>An interactive online learning platform offering hands-on training to develop practical skills and expertise.</p>
                                   </div>
                                </div>

                                <div className="certifaction-prep">
                                <div className="color-bar"></div>
                                    <img src="https://img.icons8.com/?size=100&id=kgo9UyqwyPNo&format=png&color=000000" alt="" />
                                    <div className="texts">
                                    <h5>Certification prep</h5>
                                    <p>An online platform providing hands-on training and resources for effective certification exam preparation.</p>
                                    </div>
                                </div>

                                <div className="analytics">
                                <div className="color-bar"></div>
                                    <img src="https://img.icons8.com/?size=100&id=123466&format=png&color=000000" alt="" />
                                  <div className="texts">
                                  <h5>Insights and analytics</h5>
                                  <p>An online platform delivering hands-on training with insights and analytics for data-driven decision-making.</p>
                                  </div>
                                </div>

                                <div className="customizable">
                                <div className="color-bar"></div>
                                    <img src="https://img.icons8.com/?size=100&id=B5lIx4QRTxU3&format=png&color=000000" alt="" />
                                    <div className="texts">
                                    <h5>Customizable Content</h5>
                                    <p>An online learning platform offering hands-on training with customizable content tailored to individual learning needs.</p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="right">
                            <h2>Right</h2>
                    </div>  
                </div>
            </section>

        </div>
    )
}
