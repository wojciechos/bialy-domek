import React, { useState } from 'react';
import { Bike, Waves, LucideIcon, Calendar } from 'lucide-react';
import bikeImage from '../images/bikes/438082702_122136055460111546_8912092679081181539_n.jpg';
import kayakImage from '../images/kayaks/301386209_592888582537275_9157478655882280594_n.jpg';
import bikeStandardImage from '../images/bikes/464069416_8143858899073081_348231560503831970_n.jpg';
import BikeRentalModal from './BikeRentalModal';

interface RentalCardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  icon: LucideIcon;
  bikeType?: string;
  onBookClick?: (bikeType: string) => void;
  showBookButton?: boolean;
}

const RentalCard = ({ 
  title, 
  description, 
  image, 
  price, 
  icon: Icon, 
  bikeType,
  onBookClick,
  showBookButton = false
}: RentalCardProps) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
    <img 
      src={image} 
      alt={`${title} - Wypożyczalnia w Białym Domku Sandomierz`} 
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    <div className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="text-blue-600" size={24} />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <div className="text-blue-600 font-bold">Od {price} zł/dzień</div>
        {showBookButton && (
          <button 
            onClick={() => bikeType && onBookClick && onBookClick(bikeType)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Calendar size={16} />
            Zarezerwuj
          </button>
        )}
      </div>
    </div>
  </div>
);

export default function Rentals() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBikeType, setSelectedBikeType] = useState('electric');

  const handleBookClick = (bikeType: string) => {
    setSelectedBikeType(bikeType);
    setIsModalOpen(true);
  };

  const rentals = [
    {
      title: 'Rowery Elektryczne',
      description: 'Nowoczesne rowery elektryczne idealne do zwiedzania okolicy',
      price: 100,
      image: bikeImage,
      icon: Bike,
      bikeType: 'electric',
      showBookButton: true
    },
    {
      title: 'Rowery Tradycyjne',
      description: 'Rowery dla całej rodziny',
      price: 40,
      image: bikeStandardImage,
      icon: Bike,
      bikeType: 'standard',
      showBookButton: true
    },
    {
      title: 'Spływy Kajakowe',
      description: 'Organizujemy spływy kajakowe malowniczą Wisłą',
      price: 80,
      image: kayakImage,
      icon: Waves
    }
  ];

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-4">Wypożyczalnia i Atrakcje</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Odkryj piękno Sandomierza i okolic dzięki naszej wypożyczalni rowerów i organizowanym spływom kajakowym
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rentals.map((rental, index) => (
          <RentalCard 
            key={index} 
            {...rental} 
            onBookClick={handleBookClick} 
          />
        ))}
      </div>

      {/* Modal rezerwacji rowerów */}
      <BikeRentalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultBikeType={selectedBikeType} 
      />
    </section>
  );
}