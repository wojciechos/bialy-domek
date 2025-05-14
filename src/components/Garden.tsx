import React, { useState } from 'react';
import { Flower2, TreePine, UtensilsCrossed, Tent, ChevronLeft, ChevronRight, X, Maximize } from 'lucide-react';

// Import zdjęć ogrodu
import gardenImage1 from '../images/garden/40314398.webp';
import gardenImage2 from '../images/garden/40314394.webp';
import gardenImage3 from '../images/garden/40314352.webp';
import gardenImage4 from '../images/garden/40314356.webp';
import gardenImage5 from '../images/garden/40314358.webp';
import gardenImage6 from '../images/garden/40314385.webp';
import gardenImage7 from '../images/garden/main.jpg';
import gardenImage8 from '../images/garden/house.jpg';
import gardenImage9 from '../images/garden/304166987_141260208610971_188001306725473335_n.jpg';
import gardenImage10 from '../images/garden/463461426_9013289865348421_3346816166275955718_n.jpg';

const GardenFeature = ({ icon: Icon, title }: {
  icon: React.ElementType;
  title: string;
}) => (
  <div className="flex items-center gap-2 text-gray-700">
    <Icon size={20} className="text-blue-600" />
    <span>{title}</span>
  </div>
);

const gardenImages = [
  gardenImage1,
  gardenImage2,
  gardenImage3,
  gardenImage4,
  gardenImage5,
  gardenImage6,
  gardenImage7,
  gardenImage8,
  gardenImage9,
  gardenImage10
];

export default function Garden() {
  const features = [
    { icon: Flower2, title: 'Różany trejaż i glorietta' },
    { icon: TreePine, title: 'Brzozowy zagajnik' },
    { icon: UtensilsCrossed, title: 'Altana grillowa' },
    { icon: Tent, title: 'Hamak i huśtawka' }
  ];

  // Stan dla lightboxa
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funkcje obsługi lightboxa
  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? gardenImages.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === gardenImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-4">Nasz Ogród</h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-gray-700 mb-6">
            Nasz 0,5-hektarowy ogród to miejsce, gdzie natura spotyka się z komfortem. Otoczony żywopłotem i pięknie oświetlony wieczorami, stwarza magiczną atmosferę do wypoczynku.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {features.map((feature, index) => (
              <GardenFeature key={index} {...feature} />
            ))}
          </div>
          <p className="text-gray-600 italic mb-6">
            Codziennymi gośćmi ogrodu są bażanty i sarny, a czasem nawet lisy, co dodaje temu miejscu wyjątkowego, naturalnego uroku.
          </p>
          
          <button 
            onClick={() => openLightbox(0)}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
          >
            <Maximize size={18} />
            <span>Zobacz więcej zdjęć ogrodu ({gardenImages.length})</span>
          </button>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <div className="relative">
            <img 
              src={gardenImages[0]}
              alt="Piękny 0.5-hektarowy ogród w Białym Domku Sandomierz" 
              className="w-full h-[400px] object-cover cursor-pointer"
              onClick={() => openLightbox(0)}
              loading="lazy"
            />
            <div className="absolute bottom-3 right-3 bg-black/60 rounded-full p-2 text-white cursor-pointer"
                 onClick={() => openLightbox(0)}>
              <Maximize size={18} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Lightbox */}
      {lightboxOpen && (
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
              src={gardenImages[currentIndex]}
              alt={`Powiększone zdjęcie ogrodu ${currentIndex + 1}`}
              className="max-h-[75vh] max-w-full mx-auto object-contain"
            />
            
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
            
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
              {gardenImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 w-2 rounded-full ${idx === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                />
              ))}
            </div>
            
            {/* Miniatury w modalu */}
            <div className="absolute bottom-4 left-0 right-0 px-4">
              <div className="flex gap-2 overflow-x-auto py-2 px-4 bg-black/20 rounded-lg">
                {gardenImages.map((image, idx) => (
                  <img 
                    key={idx}
                    src={image}
                    alt={`Miniatura ${idx + 1}`}
                    className={`h-14 w-20 object-cover rounded cursor-pointer transition-all ${
                      idx === currentIndex ? 'border-2 border-white' : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}