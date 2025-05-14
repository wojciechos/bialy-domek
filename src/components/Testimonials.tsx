import React from 'react';
import { Star, Quote } from 'lucide-react';

// Typ dla pojedynczej opinii
interface Testimonial {
  name: string;
  source: string;
  rating: number;
  type: string;
  content: string;
}

// Dane opinii
const testimonials: Testimonial[] = [
  {
    name: "Laura Jarek",
    source: "Google",
    rating: 5,
    type: "Urlop",
    content: "Bardzo dziękujemy za gościnę. Mieliśmy pokój niebieski z dużą łazienką z prysznicem i wanną. W pokoju były przybory kuchenne jak i lodówka oraz mikrofalówka. To świetne bo zawsze można zrobić szybki obiad. W pokoju oczywiście duża szafa, fotele i stolik. Jest kilka miejsc parkingowych, piękny duży ogród i bezpośrednie wyjście na taras. Pan gospodarz pięknie gra na pianinie i uraczył nas 4 utworami! Tu muszę przeprosić gdyż wymęczeni po zwiedzaniu Sandomierza, zapomnieliśmy o lekcji tańca!! Mamy nadzieję, że następnym razem się uda. (Do miasta jest 5 minut samochodem, pieszo myślę, że jakieś pół godzinki). Gorąco polecamy i pozdrawiamy!"
  },
  {
    name: "Blanka",
    source: "Google",
    rating: 5,
    type: "Dla par",
    content: "W Białym Domku zatrzymywaliśmy się dwukrotnie. Za każdym razem w pomarańczowym pokoju. Miejsce jest ciche i z klimatem. Właściciel sympatyczny i chętny do pomocy. Pokoje czyste i wyposażone we wszystko, co niezbędne."
  },
  {
    name: "Elżbieta Jagielska",
    source: "Google",
    rating: 5,
    type: "Urlop",
    content: "Dziękujemy za wspaniały pobyt. Warunki wspaniałe, gospodarz niezwykły. Miłośnik tańca, muzyki. Częstował zdrowotnymi nalewkami. Polecamy osobom chcącym odpocząć od hałasu i pośpiechu. Zadowolona Ela, Ula i Antoni."
  }
];

// Komponent do wyświetlania gwiazdek oceny
const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};

// Komponent dla pojedynczej opinii
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  // Skracanie długich opinii
  const maxLength = 180;
  const isLong = testimonial.content.length > maxLength;
  const [expanded, setExpanded] = React.useState(false);
  
  const displayContent = expanded || !isLong
    ? testimonial.content
    : `${testimonial.content.substring(0, maxLength)}...`;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
          <p className="text-gray-500 text-sm">
            Opinia na {testimonial.source}
          </p>
        </div>
        <div className="flex flex-col items-end">
          <RatingStars rating={testimonial.rating} />
          <span className="text-sm font-medium text-blue-600 mt-1">{testimonial.type}</span>
        </div>
      </div>
      
      <div className="flex-1">
        <div className="relative">
          <Quote size={36} className="text-blue-100 absolute -top-2 -left-2 opacity-50" />
          <p className="text-gray-700 relative z-10 pl-4">
            {displayContent}
          </p>
        </div>
        
        {isLong && (
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="text-blue-600 hover:text-blue-800 mt-2 text-sm font-medium"
          >
            {expanded ? 'Pokaż mniej' : 'Czytaj więcej'}
          </button>
        )}
      </div>
    </div>
  );
};

export default function Testimonials() {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-4">Opinie naszych gości</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Poznaj doświadczenia osób, które już nas odwiedziły i przekonaj się, dlaczego warto zarezerwować pobyt w Białym Domku
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <a 
          href="https://www.google.com/search?q=bia%C5%82y+domek+sandomierz&oq=bia%C5%82y+domek+sand&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIGCAYQRRg8MgYIBxBFGDzSAQgzNjYxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x4722b563250353b5:0xec5de3548d28af49,1,,,," 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Zobacz więcej opinii na Google
        </a>
      </div>
    </section>
  );
} 