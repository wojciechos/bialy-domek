import React, { useState } from 'react';
import { Users, Maximize, ChevronLeft, ChevronRight, X, Calendar } from 'lucide-react';
import BookingModal from './BookingModal';
import orangeRoom from '../images/rooms/orange/40364544_main.webp';
import orangeRoom2 from '../images/rooms/orange/40314397.webp';
import orangeRoom3 from '../images/rooms/orange/40364543.webp';
import orangeBathroom1 from '../images/rooms/orange/ŁAZIENKA POK. POMARAŃCZOWEGO (podświetlane ledami lustro).jpg';
import orangeBathroom2 from '../images/rooms/orange/ŁAZIENKA POK. POMARAŃCZOWEGO (duży prysznic z niskim brodzikiem).jpg';
import orangeBathroom3 from '../images/rooms/orange/ŁAZIENKA POK POMARAŃCZOWEGO (przesuwne drzwi wypełnione szkłem matowym).jpg';
import blueRoom from '../images/rooms/blue/40364547_blue.webp';
import blueRoom2 from '../images/rooms/blue/40314391.webp';
import blueRoom3 from '../images/rooms/blue/POKÓJ NIEBIESKI (drzwi tarasowe-wyjście na taras i do ogrodu 0,5ha..jpg';
import blueRoom4 from '../images/rooms/blue/POKOJ NIEBIESKI (15m2), grafika Janusza Barana-sandomierskiego artysty.jpg';
import blueBathroom1 from '../images/rooms/blue/ŁAZIENKA POK. NIEBIESKIEGO (prysznic, podwieszany sedes z deską wolnoopadającą).jpg';
import blueBathroom2 from '../images/rooms/blue/ŁAZIENKA POK. NIEBIESKIEGO (7m2) z wanną i prysznicem.jpg';
import purpleRoom from '../images/rooms/purple/14371444_main.webp';
import purpleRoom2 from '../images/rooms/purple/40364545.webp';
import purpleBathroom1 from '../images/rooms/purple/ŁAZIENKA POK. FIOLETOWEGO (podświetlane ledami WC z deską wolnoopadającą.jpg';
import purpleBathroom2 from '../images/rooms/purple/ŁAZIENKA POK. FIOLET. (podwieszany sedes z deską wolnoopadającą).jpg';

const InfoBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
    {children}
  </span>
);

const rooms = [
  {
    id: 'pomaranczowe',
    name: 'Studio Pomarańczowe',
    size: '35 m²',
    capacity: '2 osoby (+1 dziecko)',
    price: '200',
    features: ['Osobne wejście', 'prywatna łazienka', 'Wyjście na taras', 'Wiata garażowa'],
    images: [orangeRoom, orangeRoom2, orangeRoom3, orangeBathroom1, orangeBathroom2, orangeBathroom3],
  },
  {
    id: 'niebieski',
    name: 'Pokój Niebieski',
    size: '15 m²',
    capacity: '2 osoby',
    price: '180',
    features: ['Wyjście na taras', 'prywatna łazienka', 'Widok na ogród'],
    images: [blueRoom, blueRoom2, blueRoom3, blueRoom4, blueBathroom1, blueBathroom2],
  },
  {
    id: 'fioletowy',
    name: 'Pokój Fioletowy',
    size: '12 m²',
    capacity: '2 osoby',
    price: '160',
    features: ['Wyjście na taras', 'prywatna łazienka', 'Przytulna przestrzeń'],
    images: [purpleRoom, purpleRoom2, purpleBathroom1, purpleBathroom2],
  },
];

export default function Rooms() {
  // Stan dla jednego wspólnego lightboxa
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Stan dla modala rezerwacji
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string>('');
  
  // Funkcja otwierająca modal rezerwacji dla konkretnego pokoju
  const openBookingModal = (roomId: string) => {
    setSelectedRoomId(roomId);
    setBookingModalOpen(true);
  };
  
  // Funkcja otwierająca lightbox dla konkretnego pokoju
  const openLightbox = (images: string[], startIndex: number = 0) => {
    setCurrentImages(images);
    setCurrentIndex(startIndex);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  // Funkcja zamykająca lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };
  
  // Nawigacja w lightboxie
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
  };
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === currentImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-4">Nasze Pokoje</h2>
      <div className="text-center space-y-4 mb-12">
        <p className="text-gray-600 max-w-2xl mx-auto">
          Każdy pokój posiada południową ekspozycję i bezpośrednie wyjście na przestronny taras (55 m²)
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <InfoBadge>Płatność gotówką</InfoBadge>
          <InfoBadge>Zameldowanie: 14:00</InfoBadge>
          <InfoBadge>Wymeldowanie: 11:00</InfoBadge>
          <InfoBadge>Bezpłatny parking</InfoBadge>
        </div>
      </div>

      {/* Karty pokoi */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room, roomIndex) => (
          <div key={roomIndex} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            {/* Miniaturka ze strzałkami */}
            <div className="relative">
              <img 
                src={room.images[0]} 
                alt={`Zdjęcie pokoju ${room.name}`} 
                className="w-full h-64 object-cover cursor-pointer" 
                onClick={() => openLightbox(room.images, 0)}
              />
              
              {room.images.length > 1 && (
                <div className="absolute bottom-2 right-2 bg-black/60 rounded-full p-1.5 text-white cursor-pointer"
                     onClick={() => openLightbox(room.images, 0)}>
                  <Maximize size={16} />
                </div>
              )}
            </div>
            
            {/* Informacje o pokoju */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <Maximize size={18} className="text-gray-500" />
                  <span className="text-gray-600">{room.size}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-gray-500" />
                  <span className="text-gray-600">{room.capacity}</span>
                </div>
              </div>
              <ul className="text-sm text-gray-600 mb-4">
                {room.features.map((feature, i) => (
                  <li key={i} className="mb-1">• {feature}</li>
                ))}
              </ul>
              <div className="text-blue-600 font-bold text-lg flex items-baseline gap-1 mb-4">
                <span className="text-2xl">{room.price} zł</span>
                <span className="text-sm text-gray-600">za dobę</span>
              </div>
              
              {/* Przycisk rezerwacji */}
              <button
                onClick={() => openBookingModal(room.id)}
                className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-4"
              >
                <Calendar size={18} />
                REZERWUJ TEN POKÓJ
              </button>
              
              {/* Miniatury zdjęć pokoju */}
              {room.images.length > 1 && (
                <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                  {room.images.map((img, imgIndex) => (
                    <img 
                      key={imgIndex}
                      src={img}
                      alt={`Zdjęcie ${imgIndex+1} pokoju ${room.name}`}
                      className="h-16 w-24 object-cover rounded cursor-pointer"
                      onClick={() => openLightbox(room.images, imgIndex)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Wspólny lightbox dla wszystkich pokoi */}
      {lightboxOpen && currentImages.length > 0 && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] p-4" 
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full z-10"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>
            
            <img
              src={currentImages[currentIndex]}
              alt={`Powiększone zdjęcie ${currentIndex + 1}`}
              className="max-h-[80vh] max-w-full mx-auto object-contain"
            />
            
            {currentImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full"
                >
                  <ChevronLeft size={30} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full"
                >
                  <ChevronRight size={30} />
                </button>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {currentImages.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 w-2 rounded-full ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Modal rezerwacji pokoju */}
      <BookingModal 
        isOpen={bookingModalOpen} 
        onClose={() => setBookingModalOpen(false)} 
        defaultRoom={selectedRoomId}
      />

      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Ważne informacje:</h3>
        <ul className="space-y-2 text-gray-600">
          <li>• Akceptujemy tylko płatność gotówką</li>
          <li>• Nie oferujemy wyżywienia - każdy pokój wyposażony jest w lodówkę, mikrofalówkę, czajnik oraz komplet sztućców i naczyń</li>
          <li>• Na powitanie serwujemy kawę dla naszych gości</li>
        </ul>
      </div>
    </section>
  );
}