import React from 'react';
import { Flower2, TreePine, UtensilsCrossed, Tent } from 'lucide-react';

const GardenFeature = ({ icon: Icon, title }: {
  icon: React.ElementType;
  title: string;
}) => (
  <div className="flex items-center gap-2 text-gray-700">
    <Icon size={20} className="text-blue-600" />
    <span>{title}</span>
  </div>
);

export default function Garden() {
  const features = [
    { icon: Flower2, title: 'Różany trejaż i glorietta' },
    { icon: TreePine, title: 'Brzozowy zagajnik' },
    { icon: UtensilsCrossed, title: 'Altana grillowa' },
    { icon: Tent, title: 'Hamak i huśtawka' }
  ];

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
          <p className="text-gray-600 italic">
            Codziennymi gośćmi ogrodu są bażanty i sarny, a czasem nawet lisy, co dodaje temu miejscu wyjątkowego, naturalnego uroku.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=2069" 
            alt="Ogród" 
            className="w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}