import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import AboutPage from './pages/AboutPage';
import ProcessPage from './pages/ProcessPage';
import ContactUs from './pages/ContactUs';
import CategoryProductsPage from './pages/CategoryProductsPage';
import Footer from './components/Footer';
import './App.css';
// import ScrollToTop from './components/ScrollToTop';

function App() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919413172337'; // Your WhatsApp number
    const message = 'Hello! I would like to know more about your products.'; // Default message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category/:id" element={<ProductDetail />} />
          <Route path="/products/:categoryId" element={<CategoryProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
        {/* WhatsApp Floating Button */}
        <div 
          onClick={handleWhatsAppClick}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '60px',
            height: '60px',
            backgroundColor: '#25D366',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            zIndex: 1000,
            transition: 'transform 0.2s ease-in-out'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          title="Chat with us on WhatsApp"
        >
          <i className="fab fa-whatsapp" style={{ color: 'white', fontSize: '30px' }}></i>
        </div>
      </div>
    </Router>
  );
}

export default App;
