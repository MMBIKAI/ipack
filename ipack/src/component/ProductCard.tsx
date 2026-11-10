import '../styles/ProductCard.css';
import Image from '../assets/interactive.png';
import { ShoppingCart } from 'lucide-react'; // Import icon
import toast from 'react-hot-toast'; // Import toast

export default function ProductCard() {

  const handleAddToCart = () => {
    toast.success('Added iPack to your cart!', {
      duration: 3000,
    });
  };

  return (
    <section id="product" className="product-section">
      <h2 className="section-title">The iPack Backpack</h2>
      <div className="card">
        <div className="card-image">
            <img src={Image} alt="iPack Backpack" />
        </div>
        <div className="card-content">
          <h3>Premium Smart Backpack</h3>
          <p className="price">SAR 399</p>
          <ul className="features-list">
            <li>✓ USB Charging Port</li>
            <li>✓ GPS Tracker Ready</li>
            <li>✓ Water-Resistant</li>
            <li>✓ Padded Laptop Sleeve</li>
          </ul>
          
          {/* Updated Button with Icon and Toast */}
          <button 
            onClick={handleAddToCart} 
            className="btn btn-primary" 
            style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
          
        </div>
      </div>
    </section>
  );
}