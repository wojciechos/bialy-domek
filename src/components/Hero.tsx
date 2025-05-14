import React, { useState } from 'react';
import heroImage from '../images/garden/main.jpg';
import { Calendar, Bike } from 'lucide-react';
import BookingModal from './BookingModal';
import BikeRentalModal from './BikeRentalModal';

export default function Hero() {
  const [isRoomModalOpen, setIsRoomModalOpen] = useState(false);
  const [isBikeModalOpen, setIsBikeModalOpen] = useState(false);

  const scrollToRentals = () => {
    const rentalsElement = document.getElementById('rentals');
    if (rentalsElement) {
      rentalsElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Jeśli nie ma elementu z id "rentals", scrolluj do sekcji rentals przez matchowanie tytułu
      const rentalHeadings = Array.from(document.querySelectorAll('h2')).filter(h => 
        h.textContent?.includes('Wypożyczalnia')
      );
      if (rentalHeadings.length > 0) {
        rentalHeadings[0].scrollIntoView({ behavior: 'smooth' });
      }
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
          Wyjątkowy wypoczynek w 0,5-hektarowym ogrodzie z widokiem na przyrodę. 
          Doskonała lokalizacja - tylko 5 minut samochodem od Starego Miasta.
        </p>
        
        {/* Przyciski rezerwacji */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setIsRoomModalOpen(true)}
            className="animate-pulse bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 shadow-lg transition-all transform hover:scale-105"
          >
            <Calendar className="h-5 w-5" />
            <span>ZAREZERWUJ POBYT</span>
          </button>

          <button
            onClick={() => setIsBikeModalOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium text-base flex items-center gap-2 shadow-lg transition-all transform hover:scale-105"
          >
            <Bike className="h-5 w-5" />
            <span>WYPOŻYCZ ROWER</span>
          </button>
        </div>
      </div>

      {/* Modale */}
      <BookingModal isOpen={isRoomModalOpen} onClose={() => setIsRoomModalOpen(false)} />
      <BikeRentalModal isOpen={isBikeModalOpen} onClose={() => setIsBikeModalOpen(false)} defaultBikeType="electric" />
    </header>
  );
}