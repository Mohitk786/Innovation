import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Gallery from './components/Gallery';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer';
import PathTracker from './components/PathTracker';
import { metaData } from './components/data/data';

function App() {
  const { pathname } = useLocation();
  const [showWhatsApp] = useState(true);

  const handleWhatsAppClick = () => {
   window.open(metaData.WHATSAPP_CHAT);
  };

  return (
    <div className="relative overflow-x-hidden flex flex-col gap-5 h-auto">
      <Navbar />
      {pathname !== '/' && <PathTracker pathname={pathname} />}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/projects/:imageId" element={<ProjectDetails />} />
      </Routes>
      <Footer />
      
      {/* Floating WhatsApp icon */}
      {showWhatsApp && (
        <div
          className="fixed bottom-8 left-3 md:left-5 md:bottom-12"
          onClick={handleWhatsAppClick}
          
         
        >
          <img src="/whatsapp-icon.png" alt="WhatsApp" width={"50px"} />
        </div>
      )}
    </div>
  );
}

export default App;
