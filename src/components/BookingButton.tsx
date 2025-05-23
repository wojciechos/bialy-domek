import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import BookingModal from './BookingModal';

export default function BookingButton() {
  const [visible, setVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Pokazuj przycisk tylko po przewinięciu 500px od góry
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Klasy animacji
  const buttonClasses = visible
    ? 'fixed bottom-6 right-6 z-40 scale-100 opacity-100'
    : 'fixed bottom-6 right-6 z-40 scale-90 opacity-0 pointer-events-none';

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`${buttonClasses} bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg flex items-center transition-all duration-300 transform hover:scale-105`}
        aria-label="Zarezerwuj pobyt"
      >
        <Calendar className="h-5 w-5 mr-2" />
        <span className="font-medium">ZAREZERWUJ</span>
      </button>

      {/* Modal rezerwacji */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
} 