import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:biaydomek@gmail.com?subject=Wiadomość od ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`
Imię i nazwisko: ${formData.name}
Email: ${formData.email}

Wiadomość:
${formData.message}
    `)}`;
    
    window.location.href = mailtoLink;
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
          <div className="flex items-center gap-4">
            <Phone className="text-blue-600" size={24} />
            <div>
              <h3 className="font-semibold">Telefon</h3>
              <p>+48 511 762 947</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-blue-600" size={24} />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>biaydomek@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-blue-600" size={24} />
            <div>
              <h3 className="font-semibold">Adres</h3>
              <p>ul. Ostrówek 74a<br />27-600 Sandomierz</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Imię i nazwisko"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Wiadomość"
            rows={4}
            className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Wyślij wiadomość
          </button>
        </form>
      </div>
    </section>
  );
}