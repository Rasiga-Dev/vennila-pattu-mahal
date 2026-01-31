import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Collections from './pages/Collections';
import Offers from './pages/Offers';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';

function App() {
  const [currentPage, setCurrentPage] = useState('Collections');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home onNavigate={handleNavigate} />;
      case 'About Us':
        return <AboutUs />;
      case 'Collections':
        return <Collections />;
      // case 'Offers':
      //   return <Offers />;
      case 'Gallery':
        return <Gallery />;
      case 'Testimonials':
        return <Testimonials />;
      case 'Contact Us':
        return <ContactUs />;
      case 'Cart':
        return <Cart />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
