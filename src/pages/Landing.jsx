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
// import mapImage from '../assets/map.jpg'
import mapImae from '../assets/map.jpg'

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
          <a href="#plan-your-trip">Plan Your Trip</a>
          <a href="#gallery">Gallery</a>
          <a href="#blog">Blog</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
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
            <button>Book Now</button>
          </div>
          <div className="card-2">
            <h5>Jungle Safari</h5>
            <p>Embark on an exciting jungle safari and witness the wild like never before. Travel deep into lush forests filled with exotic animals and rare birds. Feel the rush as you spot elephants, tigers, and colorful tropical birds in their natural habitat. This immersive adventure offers thrilling encounters with nature and a chance to learn about conservation efforts protecting these beautiful ecosystems.</p>
            <button>Book Now</button>
          </div>
          <div className="card-3">
            <h5>White Water Rafting</h5>
            <p>Get your adrenaline pumping with white water rafting on roaring rivers. Navigate fast-flowing rapids and swirling currents with expert guides, perfect for adventure lovers. This exhilarating activity tests your teamwork and courage while surrounded by stunning scenery. Whether calm or wild, the river offers an unforgettable ride full of excitement, splashes, and laughter.</p>
            <button>Book Now</button>
          </div>
          <div className="card-4">
            <h5>Desert Trekking</h5>
            <p>Explore vast deserts on a trekking adventure across golden dunes and rocky landscapes. Experience the magic of endless sand, clear night skies filled with stars, and the unique desert flora and fauna. Desert trekking challenges your endurance and connects you to ancient cultures and nomadic traditions. It’s a journey of solitude, wonder, and discovery in an otherworldly environment.</p>
            <button>Book Now</button>
          </div>
        </div>
        <div className="set-2">
          <div className="card-1">
            <h5>Rock Climbing</h5>
            <p>Test your strength and agility with rock climbing adventures on natural cliffs or indoor walls. Scale challenging routes and conquer fears as you ascend heights with breathtaking views. Suitable for all skill levels, rock climbing offers physical exercise, mental focus, and a rewarding sense of achievement. Feel the thrill of conquering nature’s obstacles and connecting with the raw earth beneath your hands.</p>
            <button>Book Now</button>
          </div>
          <div className="card-2">
            <h5>Kayaking & Canoeing</h5>
            <p>Paddle through calm lakes, winding rivers, or coastal waters in a kayaking or canoeing adventure. Enjoy peaceful moments surrounded by nature or thrilling rides through white water rapids. This versatile water sport lets you explore remote areas inaccessible by foot, discover hidden coves, and observe wildlife up close. It’s perfect for solo adventurers or groups seeking both relaxation and excitement.</p>
            <button>Book Now</button>
          </div>
          <div className="card-3">
            <h5>Zip Lining</h5>
            <p>Fly through the treetops with an exhilarating zip lining experience. Soar over forests, valleys, and rivers as you speed along cables with stunning views all around. Zip lining is an adrenaline rush that combines fun and nature, perfect for all ages. Feel the wind in your hair and the freedom of flight while safely connected to expert guides and equipment.</p>
            <button>Book Now</button>
          </div>
          <div className="card-4">
            <h5>Scuba Diving & Snorkeling</h5>
            <p>Dive into vibrant underwater worlds filled with coral reefs, colorful fish, and mysterious sea creatures. Scuba diving and snorkeling adventures let you explore marine life up close, from shallow lagoons to deep ocean sites. Discover shipwrecks, underwater caves, and breathtaking biodiversity. These activities offer a peaceful, awe-inspiring connection to nature beneath the waves, perfect for adventure seekers and nature lovers alike.</p>
            <button>Book Now</button>
          </div>
        </div>
      </div>

      <div
        className="nature-section"
        style={{ display: activeSection === 'nature' ? 'block' : 'none' }}
      >
        <div className="set-1">
         <div className="card-1">
          <h5>Emerald Forest Escape</h5>
          <p>Immerse yourself in the peaceful serenity of the Emerald Forest, where towering trees, moss-covered trails, and the sounds of chirping birds create a calming atmosphere. Hike through shaded paths, discover hidden waterfalls, and breathe in the crisp forest air. This destination is perfect for nature lovers seeking solitude, photographers in search of natural beauty, or anyone looking to disconnect from the modern world and reconnect with the earth. A truly rejuvenating and unforgettable forest experience awaits you here.</p>
          <button>Book Now</button>
         </div>
         <div className="card-2">
          <h5>Ocean Breeze Haven</h5>
          <p>Discover the soothing magic of Ocean Breeze Haven, where soft sands meet gentle waves and sea breezes refresh your soul. Spend your days relaxing on the beach, collecting seashells, or watching dolphins play in the distance. Ideal for peaceful getaways, yoga by the sea, or simply basking in the sun, this coastal retreat offers a harmonious blend of natural beauty and relaxation. Unplug from the stress of life and unwind in nature’s tranquil seaside embrace.</p>
          <button>Book Now</button>
         </div>
         <div className="card-3">
          <h5>Whispering Valley Trek</h5>
          <p>Whispering Valley invites you to explore its serene landscapes, where flowing rivers, lush greenery, and birdsong create a harmonious natural escape. Follow scenic hiking trails that wind through flower-filled meadows and gentle hills. This hidden gem is a paradise for hikers, bird watchers, and those seeking quiet moments in nature. Whether you're capturing photographs or enjoying a picnic in the valley breeze, this destination is a peaceful retreat that nurtures the spirit and refreshes the mind.</p>
          <button>Book Now</button>
         </div>
         <div className="card-4">
          <h5>Sunset Ridge Lookout</h5>
          <p>Sunset Ridge Lookout offers breathtaking views from high above, where the sky explodes with colors during the golden hour. Hike to the summit for panoramic vistas of rolling hills and distant lakes. As the sun sets, feel a deep sense of calm wash over you. Ideal for photographers, couples, and anyone craving stillness in nature, this ridge is a must-visit destination. It’s more than a viewpoint—it’s a moment of pure peace and natural beauty.</p>
          <button>Book Now</button>
         </div>
        </div>
        <div className="set-2">
          <div className="card-1">
            <h5>Rainforest Discovery Trail</h5>
            <p>Venture deep into the lush, tropical Rainforest Discovery Trail, where towering canopies, vibrant birds, and hidden waterfalls await. This immersive nature trail is rich with biodiversity and offers an exciting opportunity to witness the beauty of untouched ecosystems. Walk beneath ferns, spot colorful frogs, and listen to the rhythm of the jungle. Perfect for eco-tourists, explorers, and families, this destination provides an unforgettable adventure through one of nature’s most enchanting environments.</p>
            <button>Book Now</button>
          </div>
          <div className="card-2">
            <h5>Blooming Meadow Escape</h5>
            <p>Step into a living painting with the Blooming Meadow Escape, where colorful wildflowers stretch across rolling fields. From spring blossoms to summer greens, this peaceful destination is perfect for nature walks, relaxing picnics, and quiet reading sessions under the sun. Birds flutter overhead and butterflies dance among the petals, creating a dreamlike experience. Whether you're a nature photographer or just someone seeking serenity, this floral wonderland offers a perfect balance of beauty and calm.</p>
            <button>Book Now</button>
          </div>
          <div className="card-3">
            <h5>Crystal Glacier Walk</h5>
            <p>Experience the majesty of nature’s icy wonders on the Crystal Glacier Walk. Traverse ancient frozen landscapes where glistening ice catches the sunlight and silence echoes between towering walls of blue. Guided treks offer safe passage through this surreal terrain, allowing you to witness the raw beauty of nature’s coldest environments. Ideal for thrill-seekers and lovers of rare landscapes, this glacier journey is a breathtaking adventure you won’t forget. Dress warm—nature’s chill has never felt so magical.</p>
            <button>Book Now</button>
          </div>
          <div className="card-4">
            <h5>Sacred Grove Sanctuary</h5>
            <p>Escape to the Sacred Grove Sanctuary, a quiet forest known for its ancient trees and peaceful energy. Soft light filters through the canopy, and every step along the mossy path brings a sense of calm. This tranquil retreat is perfect for meditation, quiet reflection, and forest bathing. Let go of stress and reconnect with yourself in a space where time slows down. A visit here is more than a walk in the woods—it’s a soulful experience.</p>
            <button>Book Now</button>
          </div>
        </div>
      </div>

      <div
        className="culture-section"
        style={{ display: activeSection === 'culture' ? 'block' : 'none' }}
      >
        <div className="set-1">
          <div className="card-1">
            <h5>Heritage City Walk</h5>
            <p>Step into a world of ancient streets, majestic palaces, and timeless traditions. The Heritage City Walk guides you through cobbled alleys lined with historical landmarks, vibrant markets, and centuries-old architecture. Engage with local artisans, taste traditional delicacies, and learn about the cultural roots that shaped this iconic destination. Ideal for history lovers and curious travelers, this walk offers a deep dive into cultural richness and heritage preservation in a truly immersive experience.</p>
            <button>Book Now</button>
          </div>
          <div className="card-2">
            <h5>Living Traditions Festival</h5>
            <p>Celebrate the heartbeat of a culture through the Living Traditions Festival, where music, dance, and storytelling come alive. Experience folk performances, traditional attire, and authentic cuisine in an atmosphere of color and joy. From ancient rituals to modern cultural expressions, this festival is a vibrant tribute to heritage. Perfect for families and cultural enthusiasts, it’s an unforgettable way to witness traditions passed down through generations and kept alive in a festive, community-driven celebration.</p>
            <button>Book Now</button>
          </div>
          <div className="card-3">
            <h5>Sacred Sites Journey</h5>
            <p>Discover spiritual wonders on the Sacred Sites Journey, where ancient temples, mosques, and monasteries share the stories of devotion and faith. Learn about unique customs, architectural marvels, and sacred rituals practiced for centuries. This peaceful and educational trip connects you with local beliefs and religious history while offering breathtaking views of sacred spaces. Ideal for those seeking meaning and insight into a region’s spiritual soul, this journey is a blend of history, culture, and contemplation.</p>
            <button>Book Now</button>
          </div>
          <div className="card-4">
            <h5>Crafts & Culture Village</h5>
            <p>Visit a charming village where age-old craftsmanship is alive and thriving. Watch skilled artisans weave, sculpt, and paint using traditional methods passed down through generations. Participate in workshops, shop handmade souvenirs, and interact with locals who keep cultural heritage alive through their art. From pottery to textiles, every piece tells a story. This experience is perfect for travelers seeking hands-on learning and appreciation for the beauty of traditional craftsmanship and its role in cultural identity.</p>
            <button>Book Now</button>
          </div>
        </div>
        <div className="set-2">
          <div className="card-1">
            <h5>Cultural Cuisine Trail</h5>
            <p>Take your taste buds on a journey through history and tradition with the Cultural Cuisine Trail. Sample dishes made from ancestral recipes, visit local markets, and dine with families who cook using age-old techniques. From spices to stories, every meal reveals the soul of the culture. Ideal for food lovers and cultural explorers, this flavorful journey celebrates culinary heritage while offering insight into the community’s values, celebrations, and everyday life.</p>
            <button>Book Now</button>
          </div>
          <div className="card-2">
            <h5>Legends & Lore Tour</h5>
            <p>Embark on the Legends & Lore Tour to uncover myths, folk tales, and ancient beliefs that shape a community's identity. Visit storytelling spots, historical ruins, and cultural centers where guides narrate gripping tales from the past. This unique experience brings history to life through imagination and tradition, ideal for curious minds and lovers of local legends. Each tale reveals lessons, values, and mysteries handed down through generations, adding depth to your cultural exploration.</p>
            <button>Book Now</button>
          </div>
          <div className="card-3">
            <h5>Cultural Art Street</h5>
            <p>Explore an open-air gallery filled with murals, sculptures, and street performances that reflect the community’s spirit and creativity. Cultural Art Street is a vibrant destination where traditional and modern art forms meet. Meet local artists, enjoy live music, and witness cultural expression in its most visual and interactive forms. Ideal for creative travelers, this immersive experience highlights how art preserves identity, celebrates heritage, and sparks social dialogue in a colorful and engaging way.</p>
            <button>Book Now</button>
          </div>
          <div className="card-4">
            <h5>Traditional Dress Experience</h5>
            <p>Immerse yourself in culture by wearing traditional garments that reflect the identity, history, and pride of a community. Visit cultural centers where locals dress you in authentic attire, explain the meaning behind each element, and share the stories behind the fabrics and designs. Participate in a cultural parade or capture the moment with photos in a historical setting. This is a meaningful and memorable way to connect with local traditions and experience cultural pride firsthand.</p>
            <button>Book Now</button>
          </div>
        </div>
      </div>

      <div
        className="relaxation-section"
        style={{ display: activeSection === 'relaxation' ? 'block' : 'none' }}
      >
       <div className="set-1">
        <div className="card-1">
          <h5>Tranquil Zen Retreat</h5>
          <p>Escape the chaos of everyday life at the Tranquil Zen Retreat. Nestled in serene surroundings, this peaceful haven offers yoga sessions, guided meditation, and silent gardens for complete relaxation. Breathe in fresh air, listen to soothing sounds of nature, and reconnect with your inner calm. Ideal for those seeking mental clarity, emotional balance, or simply a restful getaway, this retreat provides a rejuvenating experience where mind, body, and spirit are gently restored.</p>
          <button>Book Now</button>
        </div>
        <div className="card-2">
          <h5>Serenity Beach Hideaway</h5>
          <p>Sink your toes into warm, golden sand and let gentle waves lull you into a state of peace at Serenity Beach Hideaway. This secluded coastal escape is perfect for unwinding, sunbathing, or reading by the shore. Enjoy ocean breezes, hammocks under palm trees, and unforgettable sunsets. Whether you're napping by the sea or enjoying a quiet walk, this destination is a soothing paradise where you can truly relax and let your worries drift away.</p>
          <button>Book Now</button>
        </div>
        <div className="card-3">
          <h5>Luxury Spa Escape</h5>
          <p>Indulge in pampering and peace at the Luxury Spa Escape. Featuring massage therapy, hot stone treatments, aromatherapy, and mineral baths, this destination is designed to melt your stress away. Surrounded by calming music, natural scents, and peaceful scenery, every moment here nourishes your soul. Ideal for couples, solo travelers, or anyone seeking ultimate relaxation, this spa offers more than treatments—it offers complete rejuvenation in a setting of luxury and care.</p>
          <button>Book Now</button>
        </div>
        <div className="card-4">
          <h5>Sunset Hammock Haven</h5>
          <p>Let time slow down at Sunset Hammock Haven, where you can unwind in cozy hammocks beneath colorful skies. As the sun dips below the horizon, feel the cool breeze, hear the soft rustle of leaves, and watch the sky turn gold and violet. This peaceful spot is perfect for gentle reflection, lazy afternoons, and connecting with nature. Whether you're daydreaming or stargazing, this simple yet beautiful retreat invites you to fully relax and enjoy the moment.</p>
          <button>Book Now</button>
        </div>
       </div>
       <div className="set-2">
        <div className="card-1">
          <h5>Lakeside Peace Camp</h5>
          <p>Find your calm by the water at Lakeside Peace Camp, where clear lakes reflect the sky and pine trees sway in the breeze. Enjoy canoeing at sunrise, peaceful picnics, or simply sitting by the shore with your thoughts. With minimal distractions and maximum natural beauty, this peaceful campsite is ideal for reconnecting with yourself and the world around you. Unplug from technology, breathe deeply, and let nature’s rhythm soothe your soul.</p>
          <button>Book Now</button>
        </div>
        <div className="card-2">
          <h5>Botanical Bliss Garden</h5>
          <p>Wander through beautifully curated gardens filled with blooming flowers, gentle fountains, and winding paths at Botanical Bliss Garden. Every step brings the scent of fresh blossoms and the calming hum of bees and birds. Sit under a shady tree, journal beside a lily pond, or simply admire nature’s artistry. This quiet and colorful sanctuary is perfect for peaceful walks and meditative moments, making it a must-visit for those seeking relaxation through natural beauty.</p>
          <button>Book Now</button>
        </div>
        <div className="card-3">
          <h5>Hot Spring Haven</h5>
          <p>Relax your body and mind in warm, mineral-rich waters at Hot Spring Haven. Surrounded by nature, these natural pools offer therapeutic benefits while providing a tranquil setting for reflection and rest. Whether you soak beneath the stars or enjoy a daytime dip with mountain views, this experience is deeply soothing. Ideal for stress relief and gentle rejuvenation, the hot springs invite you to pause, heal, and immerse yourself in the calming power of the earth.</p>
          <button>Book Now</button>
        </div>
        <div className="card-4">
          <h5>Mindful Tea Escape</h5>
          <p>Experience calm through the ritual of tea at the Mindful Tea Escape. Sip herbal blends while overlooking peaceful gardens or sitting in serene tea rooms designed for quiet reflection. Learn the art of traditional tea-making and let the moment slow to a peaceful pace. With each cup, feel grounded and restored. Ideal for solo travelers or mindful seekers, this destination offers simplicity, stillness, and a gentle journey into the healing world of tea and presence.</p>
          <button>Book Now</button>
        </div>
       </div>
       </div>

      <div
        className="family-section"
        style={{ display: activeSection === 'family' ? 'block' : 'none' }}
      >
       <div className="set-1">
        <div className="card-1">
          <h5>Interactive Museum Quest</h5>
          <p>Turn learning into fun with the Interactive Museum Quest! Explore science exhibits, art activities, and hands-on games that engage every member of the family. Whether it’s building robots, exploring fossils, or experimenting with sound and light, there’s something to spark every child’s imagination. Parents can join in or relax at café areas while kids discover and explore. This educational adventure brings families closer through discovery, curiosity, and hours of exciting, brain-boosting fun.</p>
          <button>Book Now</button>
        </div>
        <div className="card-2">
          <h5>Creative Family Workshop</h5>
          <p>Unleash your family's creativity at the Creative Family Workshop, where parents and kids can paint, sculpt, and craft together. Guided by friendly instructors, this artistic space encourages imagination, teamwork, and fun. Whether you're making pottery, designing t-shirts, or building colorful collages, every activity is a chance to bond and express yourselves. Perfect for rainy days or relaxing afternoons, this destination celebrates family unity through shared artistic experiences and the joy of creating something together.</p>
          <button>Book Now</button>
        </div>
        <div className="card-3">
          <h5>Countryside Cycling Trail</h5>
          <p>Pedal through scenic trails, past meadows, farms, and quiet streams on the Countryside Cycling Trail. Designed with families in mind, the route includes rest stops, picnic areas, and gentle slopes suitable for all ages. Rent bikes with child seats or tandem options, and enjoy quality time outdoors. Breathe in fresh air, spot animals along the way, and enjoy the peaceful rhythm of nature. It’s a healthy, fun, and family-focused activity that creates wonderful memories on wheels.</p>
          <button>Book Now</button>
        </div>
        <div className="card-4">
          <h5>Aquatic Discovery Day</h5>
          <p>Dive into a world of wonder at Aquatic Discovery Day! Visit a large aquarium where kids can see sharks, rays, sea turtles, and colorful fish up close. Interactive exhibits, touch tanks, and educational shows keep the whole family engaged. Learn about marine life, conservation, and ocean ecosystems in a fun, hands-on environment. It’s a magical experience that combines learning with excitement, making it a perfect day out for families who love the wonders of the sea.</p>
          <button>Book Now</button>
        </div>
       </div>
       <div className="set-2">
        <div className="card-1">
          <h5>Adventure Park Getaway</h5>
          <p>Create unforgettable memories with the whole family at Adventure Park Getaway! From thrilling roller coasters to gentle rides for little ones, there’s excitement for every age. Enjoy games, tasty snacks, and live entertainment all in one vibrant place. With safety and fun at the core, parents can relax while kids have the time of their lives. This destination blends laughter, bonding, and thrills into the perfect family outing packed with joy and adventure.</p>
          <button>Book Now</button>
        </div>
        <div className="card-2">
          <h5>Seaside Family Escape</h5>
          <p>Build sandcastles, splash in gentle waves, and enjoy beachside picnics at Seaside Family Escape. This family-friendly destination offers calm waters, shaded lounges, and activities for all ages—beach volleyball, paddle boating, and sunset walks. Kids can explore tide pools while parents relax to the sound of the ocean. Whether you stay for a day or a week, this beach paradise promises quality time, laughter, and lasting memories for the entire family in a safe, joyful environment.</p>
          <button>Book Now</button>
        </div>
        <div className="card-3">
          <h5>Wildlife Safari Adventure</h5>
          <p>Embark on a thrilling journey through the wild with your loved ones on the Wildlife Safari Adventure. Spot elephants, zebras, and exotic birds from the comfort of a guided safari jeep. Educational and exciting, this trip sparks curiosity in kids and offers stunning photo opportunities for parents. With safe accommodations, interactive learning, and nature walks, it's a fun-filled way to bond over shared discoveries in a breathtaking natural habitat that inspires all ages.</p>
          <button>Book Now</button>
        </div>
        <div className="card-4">
          <h5>Mountain Cabin Retreat</h5>
          <p>Unplug and reconnect with your family at Mountain Cabin Retreat. Cozy cabins, campfires, and nature trails set the stage for togetherness and outdoor fun. Go hiking, toast marshmallows, or simply sit under starry skies sharing stories. With no screens and no stress, this retreat focuses on bonding, play, and nature appreciation. It’s the perfect destination for families looking to slow down, laugh more, and enjoy each other’s company in a peaceful mountain setting.</p>
          <button>Book Now</button>
        </div>
       </div>
      </div>

      <div
        className="luxury-section"
        style={{ display: activeSection === 'luxury' ? 'block' : 'none' }}
      >
        <div className="set-1">
          <div className="card-1">
            <h5>Five-Star City Escape</h5>
            <p>Indulge in the glamour of urban luxury with the Five-Star City Escape. Stay in exclusive hotels featuring rooftop pools, fine dining, and personalized concierge service. Shop designer brands, enjoy private city tours, and unwind in world-class spas. Whether for a romantic getaway or a sophisticated solo retreat, this experience offers the finest in comfort and style. Discover the pulse of the city wrapped in luxury, where every detail is curated to exceed your expectations.</p>
            <button>Book Now</button>
          </div>
          <div className="card-2">
            <h5>Private Yacht Voyage</h5>
            <p>Sail into elegance aboard your own Private Yacht Voyage. Cruise crystal-clear waters, dine under the stars, and sunbathe on a sleek deck with panoramic views. A private crew caters to your every need, while gourmet meals and tailored excursions make your journey unforgettable. Whether island hopping or anchored in solitude, this sea-bound escape redefines luxury travel with unmatched exclusivity and peace. Experience the open ocean like never before—with privacy, comfort, and absolute freedom.</p>
            <button>Book Now</button>
          </div>
          <div className="card-3">
            <h5>Island Villa Paradise</h5>
            <p>Discover serenity in a secluded Island Villa Paradise, where white sands meet designer interiors. Enjoy private pools, ocean views, and personal butler service as you unwind in your tropical oasis. From champagne breakfasts to sunset dinners, every detail is luxuriously curated. Perfect for honeymoons, anniversaries, or luxury-seekers, this retreat promises exclusivity and tranquility at its best. It's not just a vacation—it’s an experience of island living redefined through elegance, comfort, and complete privacy.</p>
            <button>Book Now</button>
          </div>
          <div className="card-4">
            <h5>Helicopter Skyline Tour</h5>
            <p>Experience the world from above with a Helicopter Skyline Tour—an elite adventure combining thrill with luxury. Glide past iconic landmarks, majestic mountains, or coastal wonders in a private chopper with panoramic windows. Capture unforgettable views and enjoy champagne service mid-flight. Ideal for special celebrations or once-in-a-lifetime moments, this breathtaking journey offers high-altitude glamour and style. Step into the sky and elevate your travel to new heights—literally and luxuriously.</p>
            <button>Book Now</button>
          </div>
        </div>
        <div className="set-2">
          <div className="card-1">
            <h5>Royal Heritage Stay</h5>
            <p>Live like royalty with a Royal Heritage Stay in a beautifully restored palace or historic mansion. Walk through grand halls, dine in opulent courtyards, and sleep in suites once reserved for kings and queens. Each moment is steeped in culture, elegance, and personalized service. Perfect for cultural enthusiasts and luxury lovers alike, this destination offers timeless charm, exquisite comfort, and a journey into regal traditions. Make history your home in this majestic travel experience.</p>
            <button>Book Now</button>
          </div>
          <div className="card-2">
            <h5>First-Class Air Experience</h5>
            <p>Your luxury journey begins in the sky with the First-Class Air Experience. From private airport lounges to gourmet meals and lie-flat beds, every moment of your flight is curated for comfort and class. Enjoy personalized service, spacious suites, and onboard entertainment tailored to your preferences. Ideal for both business and leisure travelers, this experience redefines flying—not as a necessity, but as a premium pleasure. Arrive relaxed, refreshed, and fully indulged in world-class air travel.</p>
            <button>Book Now</button>
          </div>
          <div className="card-3">
            <h5>Gourmet Vineyard Escape</h5>
            <p>Sip and savor the finest wines at the Gourmet Vineyard Escape, a luxurious retreat set among rolling hills and sunlit vines. Stay in elegant estate lodgings, tour cellars with master sommeliers, and dine on gourmet cuisine paired with world-class vintages. Whether you’re toasting a celebration or simply seeking refined relaxation, this escape offers an intoxicating blend of flavor, elegance, and serenity. It’s more than a tasting—it’s a fully immersive luxury experience in wine country.</p>
            <button>Book Now</button>
          </div>
          <div className="card-4">
            <h5>Elite Wellness Sanctuary</h5>
            <p>Rebalance mind, body, and soul at the Elite Wellness Sanctuary. This exclusive spa retreat offers bespoke treatments, personal wellness plans, gourmet health cuisine, and serene natural surroundings. From thermal baths to holistic healing rituals, every experience is designed for deep rejuvenation. Perfect for solo getaways, couple’s retreats, or health-focused holidays, this sanctuary redefines self-care through luxury. Leave stress behind and step into a world of peace, elegance, and elevated well-being.</p>
            <button>Book Now</button>
          </div>
        </div>
      </div>
        </div>
      </section>

      <section id="plan-your-trip">
        <div className="title">
          <h6>Plan Your Trip_</h6>
        </div>
        <div className="sub-title">
          <h1>Make your travel easy and fun.</h1>
        </div>
        <div className="discription">
          <p>Easily plan your trip in just a few steps. Choose your destination, add activities you love, and create your travel schedule. Whether it's a relaxing beach holiday or an exciting city tour, you can organize everything in one place. Start planning now and enjoy a stress-free journey!</p>
        </div>
        <div className="planned-body">
          <img src={mapImae} alt="" />
          <div className="form">
            
          </div>
        </div>
      </section>

      <section id="gallery">
        <div className="title">
          <h6>Travel Gallery_</h6>
        </div>
        <div className="sub-title">
          <h1>See the world through our lens</h1>
        </div>
        <div className="discription">
          <p>Explore beautiful photos from different places around the world. Our gallery shows stunning views, happy travelers, and unforgettable moments. From mountains and beaches to cities and cultures—discover what makes each trip special. Get inspired and start dreaming of your next adventure!</p>
        </div>
      </section>

      <section id="blog">
         <div className="title">
          <h6>Travel Blog_</h6>
        </div>
        <div className="sub-title">
          <h1>Tips, stories, and inspiration from around the world</h1>
        </div>
        <div className="discription">
          <p>Read travel stories, tips, and guides from amazing destinations. Our blog shares helpful advice, fun experiences, and ideas to make your trips better. Whether you’re planning your first journey or your next big adventure, find inspiration and learn something new with every post!</p>
        </div>
      </section>
      <section id="about">
         <div className="title">
          <h6>About Us_</h6>
        </div>
        <div className="sub-title">
          <h1>Your journey starts here</h1>
        </div>
        <div className="discription">
          <p>We are passionate about helping people explore the world. Our goal is to make travel easy, fun, and unforgettable. Whether you love adventure, nature, culture, or relaxation, we help you plan the perfect trip. Join us and start your journey today—with confidence and excitement!</p>
        </div>
      </section>
      <section id="contact">
         <div className="title">
          <h6>Contact Us_</h6>
        </div>
        <div className="sub-title">
          <h1>We’re here to help you plan your journey</h1>
        </div>
        <div className="discription">
          <p>Have questions or need help planning your trip? Reach out to us anytime! Whether it’s about destinations, bookings, or suggestions—we’re happy to assist. Fill out the form below or send us an email. Let’s make your travel experience smooth and enjoyable!</p>
        </div>
      </section>

      <footer>
        <p></p>
      </footer>

      <div className="copy-right">
        <p>© 2025 WanderWorld Travel. All rights reserved.</p>
      </div>

    </div>
  )
}



