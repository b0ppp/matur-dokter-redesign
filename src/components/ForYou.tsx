import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Page } from '../App';

interface ForYouProps {
  onNavigate?: (page: Page) => void;
}

export function ForYou({ onNavigate }: ForYouProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const forYouItems = [
    {
      id: '1',
      title: 'DI DALAM APLIKASI MEMANG SUDAH TERINTEGRASI DENGAN KANAL TELEPON MAUPUN CHAT YANG...',
      description: 'Di dalam aplikasi memang sudah terintegrasi dengan kanal telepon maupun chat yang...',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop',
      category: 'Optimalisasi'
    },
    {
      id: '2',
      title: 'JADI UNTUK WARGA KLATEN BISA LANGSUNG AKSES MELALUI APLIKASI MATUR DOKTER',
      description: 'Jadi untuk warga Klaten bisa langsung akses melalui aplikasi Matur Dokter...',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop',
      category: 'Akses Mudah'
    },
    {
      id: '3',
      title: 'LAYANAN KESEHATAN DIGITAL UNTUK SELURUH MASYARAKAT KLATEN',
      description: 'Layanan kesehatan digital yang memudahkan akses kesehatan untuk seluruh masyarakat...',
      image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=400&fit=crop',
      category: 'Inovasi'
    },
    {
      id: '4',
      title: 'KONSULTASI MEDIS GRATIS MELALUI APLIKASI MATUR DOKTER',
      description: 'Konsultasi dengan dokter profesional kapan saja, di mana saja melalui aplikasi...',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=400&fit=crop',
      category: 'Konsultasi'
    }
  ];

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth;
      container.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setCurrentSlide(index);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = container.offsetWidth;
      const scrollPosition = container.scrollLeft;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setCurrentSlide(newIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="mb-6">
      {/* Header */}
      <div className="px-5 mb-4">
        <h2 className="text-gray-800 text-xl mb-1" style={{ fontWeight: 700 }}>
          Untuk Anda
        </h2>
        <p className="text-gray-600 text-sm">
          Informasi terkini dari Matur Dokter
        </p>
      </div>

      {/* Carousel - Mobile: 1 card, Desktop: 3 cards */}
      <div className="relative">
        {/* Mobile View - Horizontal Scroll */}
        <div className="md:hidden">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide px-5 gap-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {forYouItems.map((item, index) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-[calc(100%-40px)] snap-center"
              >
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#C41E3A] text-white text-xs px-3 py-1.5 rounded-full shadow-lg" style={{ fontWeight: 600 }}>
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white text-base mb-2 line-clamp-2" style={{ fontWeight: 700 }}>
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Pagination - Mobile */}
          <div className="flex justify-center gap-2 mt-4 px-5">
            {forYouItems.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index
                    ? 'w-8 bg-[#C41E3A]'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop View - Grid of 3 Cards */}
        <div className="hidden md:block px-5">
          <div className="grid grid-cols-3 gap-4">
            {forYouItems.slice(0, 3).map((item) => (
              <div key={item.id} className="relative h-64 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                {/* Background Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#C41E3A] text-white text-xs px-3 py-1.5 rounded-full shadow-lg" style={{ fontWeight: 600 }}>
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white text-base mb-2 line-clamp-2" style={{ fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS untuk menyembunyikan scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}