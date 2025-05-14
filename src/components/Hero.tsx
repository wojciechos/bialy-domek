import React, { useState } from 'react';
import heroImage from '../images/garden/main.jpg';
import { Calendar } from 'lucide-react';
import BookingModal from './BookingModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToBooking = () => {
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative h-[70vh]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
        role="img"
        aria-label="Biały Domek w Sandomierzu z ogrodem"
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="block">Biały Domek Sandomierz</span>
          <span className="sr-only">- Pokoje Gościnne z Ogrodem</span>
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl mb-8">
          Wyjątkowy wypoczynek w sercu natury, zaledwie 2,4 km od Starego Miasta
        </p>
        
        {/* Przycisk rezerwacji */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="animate-pulse bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 shadow-lg transition-all transform hover:scale-105"
        >
          <Calendar className="h-5 w-5" />
          <span>ZAREZERWUJ POBYT</span>
        </button>
      </div>

      {/* Modal rezerwacji */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
}