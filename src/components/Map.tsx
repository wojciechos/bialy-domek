import React from 'react';

export default function Map() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-4">Lokalizacja</h2>
      <div className="space-y-6">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2518.441041055791!2d21.775582077256648!3d50.67057297177854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722b563250353b5%3A0xec5de3548d28af49!2sBia%C5%82y%20Domek!5e0!3m2!1spl!2spl!4v1710874869744!5m2!1spl!2spl"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokalizacja Biały Domek Sandomierz"
          ></iframe>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">W pobliżu:</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Starówka Sandomierza - 2.4 km</li>
              <li>• Brama Opatowska - 2.7 km</li>
              <li>• Zamek Królewski - 2.5 km</li>
              <li>• Rynek - 2.4 km</li>
              <li>• Wąwóz Królowej Jadwigi - 3.2 km</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Jak dojechać:</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Z drogi krajowej 77 - 5 min</li>
              <li>• Z dworca PKS - 7 min</li>
              <li>• Ze stacji PKP - 10 min</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 