import React from 'react';
import heroImage from '../images/garden/main.jpg';

export default function Hero() {
  return (
    <header className="relative h-[70vh]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Biały Domek Sandomierz</h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl">Wyjątkowy wypoczynek w sercu natury, zaledwie 2,4 km od Starego Miasta</p>
      </div>
    </header>
  );
}