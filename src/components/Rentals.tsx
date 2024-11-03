import React from 'react';
import { Bike, Waves } from 'lucide-react';

const RentalCard = ({ title, description, image, price, icon: Icon }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <Icon className="text-blue-600" size={24} />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-blue-600 font-bold">Od {price} zł/dzień</div>
    </div>
  </div>
);

export default function Rentals() {
  const rentals = [
    {
      title: 'Rowery Elektryczne',
      description: 'Nowoczesne rowery elektryczne idealne do zwiedzania okolicy',
      price: 100,
      image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&q=80&w=2070',
      icon: Bike
    },
    {
      title: 'Rowery Tradycyjne',
      description: 'Wygodne rowery miejskie i górskie dla całej rodziny',
      price: 40,
      image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&q=80&w=2070',
      icon: Bike
    },
    {
      title: 'Spływy Kajakowe',
      description: 'Organizujemy spływy kajakowe malowniczą Wisłą',
      price: 80,
      image: 'https://images.unsplash.com/photo-1472745433479-4556f22e32c2?auto=format&fit=crop&q=80&w=2069',
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
          <RentalCard key={index} {...rental} />
        ))}
      </div>
    </section>
  );
}