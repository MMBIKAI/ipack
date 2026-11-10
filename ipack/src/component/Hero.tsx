import '../styles/Hero.css';
import heroImage from '../assets/hero.png'; // Ensure this path is correct
import toast from 'react-hot-toast'; // 1. Import toast

export default function Hero() {
  
  // 2. Create the function to trigger the toast
  const handlePreOrder = () => {
    toast.success('Pre-order initiated! Check your email for confirmation.', {
      icon: '🚀',
    });
  };

  return (
    <section className="hero">
      {/* The full background image */}
      <img src={heroImage} alt="iPack Smart Backpack" className="hero-bg" />
      
      {/* The overlapping button on the right */}
      <div className="hero-overlay">
        {/* 3. Attach the onClick handler to the button */}
        <button onClick={handlePreOrder} className="btn btn-primary hero-btn">
          Pre-Order Now
        </button>
      </div>
    </section>
  );
}