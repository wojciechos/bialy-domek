import React from 'react';
import { Users, Maximize } from 'lucide-react';
import orangeRoom from '../images/rooms/orange/40364544_main.webp';
import purpleRoom from '../images/rooms/purple/14371444_main.webp';
import blueRoom from '../images/rooms/blue/40364547_blue.webp';

const rooms = [
  {
    name: 'Studio Pomarańczowe',
    size: '35 m²',
    capacity: '2-4 osoby',
    price: '180 zł',
    features: ['Osobne wejście', 'prywatna łazienka', 'Wyjście na taras', 'Wiata garażowa'],
    image: orangeRoom,
  },
  {
    name: 'Pokój Niebieski',
    size: '15 m²',
    capacity: '2-3 osoby',
    price: '150 zł',
    features: ['Wyjście na taras', 'prywatna łazienka', 'Widok na ogród'],
    image: blueRoom,
  },
  {
    name: 'Pokój Fioletowy',
    size: '12 m²',
    capacity: '2 osoby',
    price: '140 zł',
    features: ['Wyjście na taras', 'prywatna łazienka', 'Przytulna przestrzeń'],
    image: purpleRoom,
  },
];

export default function Rooms() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-4">Nasze Pokoje</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Każdy pokój posiada południową ekspozycję i bezpośrednie wyjście na przestronny taras (55 m²)
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
            <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
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
              <div className="text-blue-600 font-bold">Od {room.price}/noc</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center text-gray-600">
        <p>Doba pobytowa: 14:00 - 11:00</p>
      </div>
    </section>
  );
}