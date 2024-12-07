import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const FORMSPREE_URL = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    _replyto: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          email: 'biaydomek@gmail.com',
          message: `
Od: ${formData.name}
Email kontaktowy: ${formData.email}

Wiadomość:
${formData.message}
          `.trim()
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '', _replyto: '' });
      }
    } catch (error) {
      console.error('Error sending form:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-gray-50 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-center mb-12">Kontakt</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div 
            itemScope 
            itemType="http://schema.org/LodgingBusiness"
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <Phone className="text-blue-600" size={24} />
              <div>
                <h3 className="font-semibold">Telefon</h3>
                <p><a href="tel:+48511762947" itemProp="telephone">+48 511 762 947</a></p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" size={24} />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p><a href="mailto:biaydomek@gmail.com" itemProp="email">biaydomek@gmail.com</a></p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600" size={24} />
              <div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                <h3 className="font-semibold">Adres</h3>
                <p>
                  <span itemProp="streetAddress">ul. Ostrówek 74a</span><br />
                  <span itemProp="postalCode">27-600</span> <span itemProp="addressLocality">Sandomierz</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {submitted ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center p-6 bg-green-100 rounded-lg">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Dziękujemy za wiadomość!</h3>
              <p className="text-green-700">Odpowiemy najszybciej jak to możliwe.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Imię i nazwisko
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jan Kowalski"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Twój email kontaktowy
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jan@przykład.pl"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Treść wiadomości
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Napisz do nas..."
                rows={4}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Wyślij wiadomość
            </button>
          </form>
        )}
      </div>
    </section>
  );
}