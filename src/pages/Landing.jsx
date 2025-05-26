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
import { useState } from 'react'

export default function Landing() {

  const [activeSection, setActiveSection] = useState('adventure');

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
          <a href="#tours">Tours</a>
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
          <h6>Top Destinations_</h6>
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

      <section id='tours'>
        <div className="title">
          <h6>Discover Tours Made for You_</h6>
        </div>
        <div className="sub-title">
          <h1>Curated Adventures, Unforgettable Memories</h1>
        </div>
        <div className="discription">
          <p>Explore expertly crafted tours that match your style—adventure, culture, or relaxation. Enjoy seamless planning, local insights, and unforgettable moments every step of the way.</p>
        </div>
        <div className="btn-bar">
           <button
          className={activeSection === 'adventure' ? 'active' : ''}
          onClick={() => setActiveSection('adventure')}
        >
          Adventure
        </button>
        <button
          className={activeSection === 'nature' ? 'active' : ''}
          onClick={() => setActiveSection('nature')}
        >
          Nature
        </button>
        <button
          className={activeSection === 'culture' ? 'active' : ''}
          onClick={() => setActiveSection('culture')}
        >
          Culture
        </button>
        <button
          className={activeSection === 'relaxation' ? 'active' : ''}
          onClick={() => setActiveSection('relaxation')}
        >
          Relaxation
        </button>
        <button
          className={activeSection === 'family' ? 'active' : ''}
          onClick={() => setActiveSection('family')}
        >
          Family
        </button>
        <button
          className={activeSection === 'luxury' ? 'active' : ''}
          onClick={() => setActiveSection('luxury')}
        >
          Luxury
        </button>
        </div>
        <div className="cards">
          <div
        className="adventure-section"
        style={{ display: activeSection === 'adventure' ? 'block' : 'none' }}
      >
        <div className="set-1">
          <div className="card-1">
            <h5>Mountain Hiking</h5>
            <p>Experience the thrill of mountain hiking as you trek through breathtaking landscapes. From rugged peaks to serene valleys, explore trails that challenge your limits and reward you with stunning views. Whether you’re a beginner or an expert, mountain hiking connects you with nature and refreshes your spirit. Discover hidden waterfalls, diverse wildlife, and the peacefulness of high altitudes in this unforgettable adventure.</p>
          </div>
          <div className="card-2">
            <h5>Jungle Safari</h5>
            <p>Embark on an exciting jungle safari and witness the wild like never before. Travel deep into lush forests filled with exotic animals and rare birds. Feel the rush as you spot elephants, tigers, and colorful tropical birds in their natural habitat. This immersive adventure offers thrilling encounters with nature and a chance to learn about conservation efforts protecting these beautiful ecosystems.</p>
          </div>
          <div className="card-3">
            <h5>White Water Rafting</h5>
            <p>Get your adrenaline pumping with white water rafting on roaring rivers. Navigate fast-flowing rapids and swirling currents with expert guides, perfect for adventure lovers. This exhilarating activity tests your teamwork and courage while surrounded by stunning scenery. Whether calm or wild, the river offers an unforgettable ride full of excitement, splashes, and laughter.</p>
          </div>
          <div className="card-4">
            <h5>Desert Trekking</h5>
            <p>Explore vast deserts on a trekking adventure across golden dunes and rocky landscapes. Experience the magic of endless sand, clear night skies filled with stars, and the unique desert flora and fauna. Desert trekking challenges your endurance and connects you to ancient cultures and nomadic traditions. It’s a journey of solitude, wonder, and discovery in an otherworldly environment.</p>
          </div>
        </div>
        <div className="set-2">
          <div className="card-1">
            <h5>Rock Climbing</h5>
            <p>Test your strength and agility with rock climbing adventures on natural cliffs or indoor walls. Scale challenging routes and conquer fears as you ascend heights with breathtaking views. Suitable for all skill levels, rock climbing offers physical exercise, mental focus, and a rewarding sense of achievement. Feel the thrill of conquering nature’s obstacles and connecting with the raw earth beneath your hands.</p>
          </div>
          <div className="card-2">
            <h5>Kayaking & Canoeing</h5>
            <p>Paddle through calm lakes, winding rivers, or coastal waters in a kayaking or canoeing adventure. Enjoy peaceful moments surrounded by nature or thrilling rides through white water rapids. This versatile water sport lets you explore remote areas inaccessible by foot, discover hidden coves, and observe wildlife up close. It’s perfect for solo adventurers or groups seeking both relaxation and excitement.</p>
          </div>
          <div className="card-3">
            <h5>Zip Lining</h5>
            <p>Fly through the treetops with an exhilarating zip lining experience. Soar over forests, valleys, and rivers as you speed along cables with stunning views all around. Zip lining is an adrenaline rush that combines fun and nature, perfect for all ages. Feel the wind in your hair and the freedom of flight while safely connected to expert guides and equipment.</p>
          </div>
          <div className="card-4">
            <h5>Scuba Diving & Snorkeling</h5>
            <p>Dive into vibrant underwater worlds filled with coral reefs, colorful fish, and mysterious sea creatures. Scuba diving and snorkeling adventures let you explore marine life up close, from shallow lagoons to deep ocean sites. Discover shipwrecks, underwater caves, and breathtaking biodiversity. These activities offer a peaceful, awe-inspiring connection to nature beneath the waves, perfect for adventure seekers and nature lovers alike.</p>
          </div>
        </div>
      </div>

      <div
        className="nature-section"
        style={{ display: activeSection === 'nature' ? 'block' : 'none' }}
      >
        <h2>Nature Tours</h2>
        <p>Explore the beauty of forests, mountains, and natural landscapes around the world.</p>
      </div>

      <div
        className="culture-section"
        style={{ display: activeSection === 'culture' ? 'block' : 'none' }}
      >
        <h2>Culture Tours</h2>
        <p>Connect with communities, explore traditions, and experience human stories across cultures.</p>
      </div>

      <div
        className="relaxation-section"
        style={{ display: activeSection === 'relaxation' ? 'block' : 'none' }}
      >
        <h2>Relaxation Tours</h2>
        <p>Unwind and recharge with spa visits, beach resorts, and serene environments.</p>
      </div>

      <div
        className="family-section"
        style={{ display: activeSection === 'family' ? 'block' : 'none' }}
      >
        <h2>Family Tours</h2>
        <p>Fun and safe travel experiences designed for families with kids of all ages.</p>
      </div>

      <div
        className="luxury-section"
        style={{ display: activeSection === 'luxury' ? 'block' : 'none' }}
      >
        <h2>Luxury Tours</h2>
        <p>Exclusive and premium travel with top accommodations, private guides, and unique experiences.</p>
      </div>
        </div>
      </section>
    </div>
  )
}



