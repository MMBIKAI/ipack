import './App.css'
import Description from './component/Description'
import Footer from './component/Footer'
import Hero from './component/Hero'
import Interactive from './component/Interactive'
import ProductCard from './component/ProductCard'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      {/* This renders the toasts at the bottom center of the screen */}
<Toaster 
        position="bottom-center" 
        toastOptions={{
          // Default options for all toasts
          style: {
            background: 'rgba(15, 23, 42, 0.95)', // Navy dark with slight transparency
            color: '#fff',
            border: '1px solid rgba(212, 175, 55, 0.4)', // Semi-transparent Gold border
            borderRadius: '12px',
            padding: '16px 24px',
            fontSize: '15px',
            fontWeight: 500,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 175, 55, 0.15)', // Deep shadow + Gold glow
            backdropFilter: 'blur(10px)', // Glass effect
          },
          // Specific styling for success toasts
          success: {
            iconTheme: {
              primary: '#D4AF37', // Gold checkmark
              secondary: '#0F172A', // Navy background behind the checkmark
            },
          },
          // Specific styling for error toasts (just in case)
          error: {
            iconTheme: {
              primary: '#ef4444', // Red
              secondary: '#0F172A', 
            },
          },
        }}
      />
      
      <Hero />
      <Description />
      <ProductCard />
      <Interactive />
      <Footer />
    </div>
  );
}

export default App;
