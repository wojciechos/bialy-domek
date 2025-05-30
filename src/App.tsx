import React from 'react';
import Hero from './components/Hero';
import Amenities from './components/Amenities';
import Garden from './components/Garden';
import Rooms from './components/Rooms';
import Rentals from './components/Rentals';
import Testimonials from './components/Testimonials';
import Map from './components/Map';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import BookingButton from './components/BookingButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <main className="max-w-7xl mx-auto px-4 py-16">
        <Amenities />
        <Garden />
        <Rooms />
        <Rentals />
        <Testimonials />
        <Map />
        <ContactInfo />
      </main>
      <Footer />
      <BookingButton />
    </div>
  );
}

export default App;