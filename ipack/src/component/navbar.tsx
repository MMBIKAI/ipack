import '../styles/Navbar.css';
import toast from 'react-hot-toast'; // Import toast
import Image from '../assets/logo.png';

export default function Navbar() {
  
  const handlePreOrder = () => {
    toast.success('Pre-order successful!', {
      icon: '🎒',
    });
  };

  return (
    <nav className="navbar">
      <div className="logo">
        {/* Lucide Icon with Gold Color */}
        
        <img src={Image} alt="iPack Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#product">Product</a></li>
        <li><a href="#tech">The Tech</a></li>
      </ul>
      <button onClick={handlePreOrder} className="btn btn-primary">
        Pre-Order Now
      </button>
    </nav>
  );
}