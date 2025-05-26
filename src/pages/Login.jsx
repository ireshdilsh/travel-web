import React, { useState } from 'react';
import "../styles/Login.css";

export default function Login() {
  const [activeSection, setActiveSection] = useState('adventure');

  return (
    <div className="tour-container">
      <div className="toggle-buttons">
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

      <div
        className="adventure-section"
        style={{ display: activeSection === 'adventure' ? 'block' : 'none' }}
      >
        <h2>Adventure Tours</h2>
        <p>Thrilling experiences with hiking, trekking, and outdoor exploration to excite your senses.</p>
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
  );
}
