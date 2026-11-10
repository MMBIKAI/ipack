import { useState } from 'react';
import '../styles/Interactivve.css'; 
import { Navigation, MapPin, Battery, Wifi, Search } from 'lucide-react';

export default function Interactive() {
  const [isTracking, setIsTracking] = useState(false);

  return (
    <section id="tech" className="interactive-section">
      <div className="interactive-content">
        <div className="tagline">SMART TECHNOLOGY</div>
        <h2>Never Lose Your Bag Again.</h2>
        <p>Our proposed app connects to the iPack tracker. Test the live location demo to see how it works.</p>
        
        <button 
          className={`btn ${isTracking ? 'btn-outline' : 'btn-primary'}`} 
          onClick={() => setIsTracking(!isTracking)}
        >
          {isTracking ? (
            <><Search size={20} /> Stop Tracking</>
          ) : (
            <><Navigation size={20} /> Find My Bag</>
          )}
        </button>
      </div>
      
      {/* Mock Phone Screen */}
      <div className="mock-phone">
        <div className="phone-notch"></div>
        <div className="screen">
          
          {/* App Header */}
          <div className="app-header">
            <span>9:41</span>
            <div className="app-icons">
              <Wifi size={14} />
              <Battery size={16} />
            </div>
          </div>

          {/* Map Area */}
          <div className="map-area">
            {/* Map Grid Background */}
            <div className="map-grid"></div>
            
            {!isTracking ? (
              <div className="searching-state">
                <div className="searching-icon">📡</div>
                <p>Connecting to iPack...</p>
              </div>
            ) : (
              <div className="radar-container">
                {/* Radar Pings */}
                <div className="radar-ping"></div>
                <div className="radar-ping delay-1"></div>
                <div className="radar-ping delay-2"></div>
                
                {/* Location Pin */}
                <div className="location-pin">
                  <MapPin size={40} color="#D4AF37" fill="#0F172A" />
                </div>
              </div>
            )}
          </div>

          {/* Bottom Info Card */}
          <div className={`info-card ${isTracking ? 'visible' : ''}`}>
            <div className="card-icon">🎒</div>
            <div className="card-text">
              <h4>iPack Located</h4>
              <p>Distance: 5 meters away</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}