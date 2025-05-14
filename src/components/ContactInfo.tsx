import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section id="contact" className="bg-gray-50 rounded-xl p-8 my-12">
      <h2 className="text-3xl font-bold text-center mb-8">Kontakt</h2>
      <div className="max-w-xl mx-auto">
        <div 
          itemScope 
          itemType="http://schema.org/LodgingBusiness"
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Phone className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Telefon</h3>
              <p className="text-gray-700"><a href="tel:+48511762947" itemProp="telephone" className="hover:text-blue-600 transition-colors">+48 511 762 947</a></p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <Mail className="text-blue-600" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-700"><a href="mailto:bialydomeksandomierz@gmail.com" itemProp="email" className="hover:text-blue-600 transition-colors">bialydomeksandomierz@gmail.com</a></p>
              <p className="text-sm text-gray-500 mt-1">W celu rezerwacji prosimy użyć formularza powyżej</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <MapPin className="text-blue-600" size={24} />
            </div>
            <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
              <h3 className="font-semibold text-lg">Adres</h3>
              <p className="text-gray-700">
                <span itemProp="streetAddress">ul. Ostrówek 74a</span><br />
                <span itemProp="postalCode">27-600</span> <span itemProp="addressLocality">Sandomierz</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            Skorzystaj z formularza rezerwacji powyżej, aby zarezerwować pobyt w Białym Domku. 
            Na wszystkie zapytania odpowiadamy najszybciej jak to możliwe.
          </p>
        </div>
      </div>
    </section>
  );
} 