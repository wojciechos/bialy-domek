import React, { useState } from 'react';
import { Calendar, Users, Send, Bike } from 'lucide-react';

const FORMSPREE_URL = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`;

// Informacje o rowerach
const BIKES = [
  { id: 'electric', name: 'Rower Elektryczny', price: 100 },
  { id: 'standard', name: 'Rower Tradycyjny', price: 40 }
];

interface BikeRentalFormProps {
  isModal?: boolean;
  onClose?: () => void;
  defaultBikeType?: string;
}

export default function BikeRentalForm({ isModal = false, onClose, defaultBikeType = 'electric' }: BikeRentalFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rentalDate: '',
    returnDate: '',
    bikeCount: 1,
    bikeType: defaultBikeType,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Znajdź wybrany typ roweru, aby dodać jego nazwę do wiadomości
    const selectedBike = BIKES.find(bike => bike.id === formData.bikeType);
    
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
          subject: 'Rezerwacja roweru - Biały Domek Sandomierz',
          message: `
REZERWACJA ROWERU

Od: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone}

Typ roweru: ${selectedBike?.name} (${selectedBike?.price} PLN/dobę)
Data wypożyczenia: ${formData.rentalDate}
Data zwrotu: ${formData.returnDate}
Liczba rowerów: ${formData.bikeCount}

Dodatkowe informacje:
${formData.message}

---
Wiadomość wysłana przez formularz na stronie Biały Domek Sandomierz
Nasz oficjalny adres email: bialydomeksandomierz@gmail.com
          `.trim()
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          rentalDate: '',
          returnDate: '',
          bikeCount: 1,
          bikeType: defaultBikeType,
          message: '',
        });
      }
    } catch (error) {
      console.error('Error sending form:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Calculate minimum date (today)
  const today = new Date().toISOString().split('T')[0];
  
  // Calculate minimum date for return (day after rental)
  const minReturnDate = formData.rentalDate 
    ? new Date(new Date(formData.rentalDate).getTime() + 86400000).toISOString().split('T')[0]
    : today;

  // Znajdź wybrany typ roweru
  const selectedBike = BIKES.find(bike => bike.id === formData.bikeType);

  return (
    <div className={`
      bg-white rounded-xl shadow-lg 
      ${isModal ? 'p-6' : 'p-8'} 
      ${isModal ? 'max-w-lg w-full' : ''}
    `}>
      {!isModal && (
        <h2 className="text-3xl font-bold text-center mb-8">
          Zarezerwuj Rower
        </h2>
      )}
      
      {submitted ? (
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Dziękujemy za rezerwację!</h3>
          <p className="text-gray-600 mb-4">
            Potwierdzimy dostępność i skontaktujemy się z Tobą najszybciej jak to możliwe.
          </p>
          {isModal && (
            <button
              onClick={onClose}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Zamknij
            </button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Imię i nazwisko*
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email*
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Telefon*
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="bikeType" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
              <Bike size={16} className="text-blue-600" />
              Wybierz typ roweru*
            </label>
            <select
              id="bikeType"
              name="bikeType"
              value={formData.bikeType}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            >
              {BIKES.map(bike => (
                <option key={bike.id} value={bike.id}>
                  {bike.name} - {bike.price} PLN/dobę
                </option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="rentalDate" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                <Calendar size={16} className="text-blue-600" />
                Data wypożyczenia*
              </label>
              <input
                id="rentalDate"
                type="date"
                name="rentalDate"
                value={formData.rentalDate}
                min={today}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
                <Calendar size={16} className="text-blue-600" />
                Data zwrotu*
              </label>
              <input
                id="returnDate"
                type="date"
                name="returnDate"
                value={formData.returnDate}
                min={minReturnDate}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="bikeCount" className="block text-sm font-medium text-gray-700 flex items-center gap-2">
              <Users size={16} className="text-blue-600" />
              Liczba rowerów*
            </label>
            <select
              id="bikeCount"
              name="bikeCount"
              value={formData.bikeCount}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              required
            >
              {[1, 2, 3, 4, 5].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Dodatkowe informacje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              placeholder="Specjalne prośby, pytania, itp."
            ></textarea>
          </div>

          {selectedBike && (
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
              <p className="text-gray-700 font-medium">
                Wybrany rower: <span className="text-blue-700">{selectedBike.name}</span>
              </p>
              <p className="text-gray-700">
                Cena: <span className="text-blue-700 font-semibold">{selectedBike.price} PLN za dobę</span>
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`
              w-full flex justify-center items-center gap-2 
              bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold 
              hover:bg-blue-700 transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}
            `}
          >
            {loading ? 'Wysyłanie...' : (
              <>
                <Send size={18} />
                Zarezerwuj teraz
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
} 