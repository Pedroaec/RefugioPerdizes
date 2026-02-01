import { useState } from 'react';
import Header from './components/Header';
import HeroGallery from './components/HeroGallery';
import FloorPlan from './components/FloorPlan';
import PhotoGallery from './components/PhotoGallery';
import Features from './components/Features';
import Neighborhood from './components/Neighborhood';
import Location from './components/Location';
import Financing from './components/Financing';
import Contact from './components/Contact';
// import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleRoomClick = (roomId) => {
    setSelectedRoom(roomId);
  };

  const handleCloseGallery = () => {
    setSelectedRoom(null);
  };

  return (
    <div className="app">
      <Header />
      <HeroGallery onPhotoClick={handleRoomClick} />

      <main className="main-content">
        <FloorPlan onRoomClick={handleRoomClick} />
        <Features />
        <Neighborhood />
        <Location />
        <Financing />
        <Contact />
      </main>

      <footer className="footer">
        <p>&copy; 2025 - Refúgio Perdizes</p>
        <p className="footer-note">Venda direta pelo proprietário</p>
      </footer>

      {selectedRoom && (
        <PhotoGallery roomId={selectedRoom} onClose={handleCloseGallery} />
      )}

      {/* <WhatsAppButton /> */}
    </div>
  );
}

export default App;
