import React, { useEffect } from 'react'
import "../styles/Landing.css"
import heroVideo from '../assets/hero-video.mp4'
import japan from '../assets/japan.jpg'
import paris from '../assets/paris.jpg'
import bali from '../assets/bali.jpg'
import swittezerland from '../assets/swittzerland.jpg'
import dubai from '../assets/dubai.jpg'
import hawai from '../assets/hawai.jpg'
import maldives from '../assets/maldive.jpg'
import itali from '../assets/italy.jpg'

export default function Landing() {

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    let current = 0;

    function animateNextCard() {
      // Remove animation from all cards
      cards.forEach(card => card.classList.remove('card-animate'));

      // Add animation to current card
      cards[current].classList.add('card-animate');

      // Move to next card
      current = (current + 1) % cards.length;

      // Repeat every 5s
      setTimeout(animateNextCard, 5000);
    }

    animateNextCard(); // start animation loop
  }, []);

  return (
    <div>
      <section id='home'>
          <video src={heroVideo}
        autoPlay="true"
        loop
        muted
        playsInline>
      </video>

      <nav>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#destination">Destinations</a>
          <a href="">Tours</a>
          <a href="">Plan Your Trip</a>
          <a href="">Gallery</a>
          <a href="">Blog</a>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
        </div>
      </nav>

      <div className="white-glass"></div>
      <div className="hero-body">
        <div className="right-side">
          <div className="title">
            <h6>Your Journey, Your Way_</h6>
          </div>
          <div className="sub-title">
            <p>Explore the World <br />with Confidence</p>
          </div>
          <div className="discription">
            <p>From sun-soaked beaches to mountain escapes, we offer personalized travel experiences, expert planning, and unforgettable memories. <br /> Discover new cultures, taste local cuisine, and travel stress-free with our trusted guidance.</p>
          </div>
          <div className="btns">
            <div className="login-btn">
            <button className='btn btn-dark'>Sign in Here</button>
          </div>
           <div className="register-btn">
            <button>Sign up Here</button>
          </div>
          </div>
        </div>
        <div className="left-side">
          <div className="card card-1">
            <h5>Maldives 🏝️</h5>
            <p>Tropical paradise with white-sand beaches and overwater villas. Ideal for relaxing and luxury getaways.</p>
          </div>
          <div className="card card-2">
            <h5>Switzerland 🏔️</h5>
            <p>Breathtaking Alps views, lakes, and charming villages. Perfect for hiking, skiing, and scenic train rides.</p>
          </div>
          <div className="card card-3">
            <h5>Paris 🌇</h5>
            <p>The City of Love with iconic landmarks like the Eiffel Tower, art museums, and romantic cafes.</p>
          </div>
          <div className="card card-4">
            <h5>Bali 🌴</h5>
            <p>An island escape filled with lush forests, temples, and surf-friendly beaches.</p>
          </div>
        </div>
      </div>
      </section>

      <section id='destination'>
        <div className="sub-title">
          <h6>Top Destinations</h6>
        </div>
        <div className="title">
          <h1>100+ of the World’s Most Loved Places</h1>
        </div>
        <div className="discription">
          <p>Discover breathtaking destinations across the globe, from iconic landmarks to hidden gems. Whether you're craving a tropical beach, a cultural escape, or a mountain adventure, our curated list of destinations offers something for every traveler. Start your journey here and let your wanderlust lead the way.</p>
        </div>
        <div className="cards">
          <div className="set-1">
            <div className="card-1">
              <img src={maldives} alt="" />
              <h5>Tropical Paradise - Maldives</h5>
              <p>The Maldives offers pure serenity with its turquoise waters, luxurious overwater villas, and palm-lined islands. Ideal for honeymooners or anyone craving an escape, it’s a destination of barefoot luxury, incredible marine life, and stunning sunsets. Whether snorkeling vibrant reefs or relaxing in a hammock over the ocean, every moment is magical.</p>
            </div>
            <div className="card-2">
               <img src={swittezerland} alt="" />
              <h5>Alpine Escape - Switzerland</h5>
              <p>Switzerland enchants with snow-covered Alps, serene lakes, and storybook villages. Perfect for skiing, hiking, and scenic train journeys, it blends natural beauty with rich culture. Stroll through Lucerne, ride the Glacier Express, or enjoy fondue in a cozy chalet. It’s a peaceful yet adventurous escape for all seasons.</p>
            </div>
            <div className="card-3">
               <img src={paris} alt="" />
              <h5>Romantic City - Paris</h5>
              <p>Paris is a timeless city of romance, where art, history, and elegance meet. From the Eiffel Tower to the Louvre, every corner whispers beauty. Wander cobbled streets, sip espresso at sidewalk cafés, and cruise the Seine by night. It’s a dream destination for lovers, artists, and dreamers alike.</p>
            </div>
            <div className="card-4">
               <img src={bali} alt="" />
              <h5>Island Bliss - Bali</h5>
              <p>Bali is a soulful island full of contrasts—lush jungles, volcanic hills, serene temples, and lively beaches. Whether you seek yoga retreats, surfing waves, or traditional Balinese culture, it welcomes all with warm hospitality. Enjoy local cuisine, tropical beauty, and spiritual peace in this enchanting Indonesian paradise.</p>
            </div>
          </div>
          <div className="set-2">
            <div className="card-1">
               <img src={dubai} alt="" />
              <h5>Modern Marvel - Dubai</h5>
              <p>Dubai dazzles with innovation and luxury. Skyscrapers like the Burj Khalifa pierce the sky, while ancient souks and desert safaris reveal its heritage. Experience world-class shopping, indoor skiing, and artificial islands in one incredible city. It’s a futuristic oasis blending tradition with bold ambition and unforgettable sights.</p>
            </div>
            <div className="card-2">
               <img src={japan} alt="" />
              <h5>Cultural Harmony - Japan</h5>
              <p>Japan blends ancient tradition with modern marvels. Visit peaceful temples, neon-lit cities, and cherry blossom parks in one journey. From sushi bars to bullet trains, every detail is precise and beautiful. Whether in Kyoto’s gardens or Tokyo’s tech hubs, Japan is a rich cultural experience for any traveler.</p>
            </div>
            <div className="card-3">
               <img src={hawai} alt="" />
              <h5>Aloha Spirit - Hawai</h5>
              <p>Hawaii is where volcanic landscapes, lush rainforests, and golden beaches unite in perfect harmony. Swim with turtles, hike waterfalls, or relax with a luau. Each island has a unique vibe—from Maui’s luxury to Kauai’s wild beauty. Let the Aloha spirit soothe your soul and ignite your sense of wonder.</p>
            </div>
            <div className="card-4">
               <img src={itali} alt="" />
              <h5>Historic Journey - Italy</h5>
              <p>taly invites you to walk through history and flavor. Explore Rome’s ruins, Venice’s canals, Florence’s art, and the rolling hills of Tuscany. Taste world-renowned cuisine, sip fine wines, and enjoy la dolce vita. It’s a destination of timeless charm, cultural depth, and unforgettable moments.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



