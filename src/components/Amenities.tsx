import React from 'react';
import { Wifi, ParkingCircle, TreeDeciduous, UtensilsCrossed, Tv, Snowflake } from 'lucide-react';

const Feature = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="flex gap-4 p-6 bg-white rounded-lg shadow-md">
    <Icon className="text-blue-600 flex-shrink-0" size={24} />
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function Amenities() {
  const features = [
    {
      icon: TreeDeciduous,
      title: 'Ogród 0,5 ha',
      description: 'Przestronny ogród z różanym trejażem, glorietą i altaną grillową w brzozowym zagajniku'
    },
    {
      icon: ParkingCircle,
      title: 'Parking',
      description: '5 miejsc parkingowych, w tym 2 zadaszone, dostępne bezpłatnie'
    },
    {
      icon: UtensilsCrossed,
      title: 'Strefa Grillowa',
      description: 'Trzy rodzaje grilli: elektryczny, na węgiel drzewny i na szczapy dębowe/brzozowe'
    },
    {
      icon: Tv,
      title: 'Wyposażenie',
      description: 'TV LCD 32″, lodówka, mikrofalówka, czajnik, komplet naczyń w każdym pokoju'
    },
    {
      icon: Snowflake,
      title: 'Komfort',
      description: 'Podgrzewane podłogi w łazienkach, kabiny prysznicowe, suszarki do włosów'
    },
    {
      icon: Wifi,
      title: 'Udogodnienia',
      description: 'Bezpłatne Wi-Fi, bezpośrednie wyjście na taras z każdego pokoju'
    }
  ];

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-4">Nasz Obiekt</h2>
      <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
        Nowoczesny obiekt z elewacją z białego wapienia, otoczony malowniczym ogrodem, gdzie codziennymi gośćmi są bażanty i sarny. Oferujemy komfortowy wypoczynek w spokojnej okolicy.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}