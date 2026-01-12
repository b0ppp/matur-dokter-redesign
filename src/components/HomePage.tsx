import { Bell } from 'lucide-react';
import { Page } from '../App';
import { ForYou } from './ForYou';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const quickServices = [
    { 
      id: 'emergency',
      label: 'Telepon',
      icon: '📞',
      page: 'emergency' as Page,
      bgColor: 'bg-pink-50'
    },
    { 
      id: 'consultation',
      label: 'Konsultasi Medis',
      icon: '💭',
      page: 'consultation' as Page,
      bgColor: 'bg-pink-50'
    },
    { 
      id: 'health',
      label: 'Informasi Kesehatan',
      icon: '👶',
      page: 'health' as Page,
      bgColor: 'bg-pink-50'
    },
    { 
      id: 'doctors',
      label: 'Dokter',
      icon: '👨‍⚕️',
      page: 'doctors' as Page,
      bgColor: 'bg-pink-50'
    },
    { 
      id: 'news',
      label: 'Berita Sehat',
      icon: '❤️',
      page: 'news' as Page,
      bgColor: 'bg-pink-50'
    },
    { 
      id: 'more',
      label: 'Lihat Lainnya',
      icon: '•••',
      page: 'services' as Page,
      bgColor: 'bg-pink-50'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF5F5]">
      {/* Header */}
      <div className="bg-[#C41E3A] rounded-b-3xl px-5 pt-4 pb-6 shadow-md">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-white text-xl" style={{ fontWeight: 700 }}>Beranda</h1>
              <p className="text-white/90 text-sm">Matur Dokter Klaten</p>
            </div>
            <button className="bg-white/20 p-2 rounded-full">
              <Bell className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Container with Max Width */}
      <div className="max-w-7xl mx-auto">
        <div className="px-5 -mt-3">
          {/* Greeting Card */}
          <div className="bg-white rounded-2xl px-5 py-4 shadow-sm mb-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Selamat siang,</p>
                <h2 className="text-gray-800 text-2xl" style={{ fontWeight: 700 }}>raja</h2>
              </div>
              <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=100&h=100&fit=crop"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <button
            onClick={() => onNavigate('search')}
            className="w-full bg-white rounded-2xl px-5 py-4 shadow-sm mb-6 flex items-center gap-3 text-left"
          >
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-gray-400">Apa yang Anda butuhkan ?</span>
          </button>

          {/* Quick Services Grid - Responsive */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-8">
            {quickServices.map((service) => (
              <button
                key={service.id}
                onClick={() => onNavigate(service.page)}
                className={`${service.bgColor} rounded-2xl p-4 flex flex-col items-center justify-center text-center min-h-[110px] shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="text-4xl mb-2">{service.icon}</div>
                <span className="text-gray-700 text-xs leading-tight" style={{ fontWeight: 500 }}>
                  {service.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Untuk Anda Section - Using ForYou Component */}
        <ForYou onNavigate={onNavigate} />

        <div className="px-5">
          {/* Berita Terkini Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-gray-800 text-lg" style={{ fontWeight: 700 }}>Berita Terkini</h3>
              <button 
                onClick={() => onNavigate('news')}
                className="text-[#C41E3A] text-sm"
              >
                Lihat semua →
              </button>
            </div>

            {/* News Grid - 1 column mobile, 2 columns desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=100&h=100&fit=crop',
                  title: 'Tips Menjaga Kesehatan di Musim Hujan',
                  date: '2 jam yang lalu'
                },
                {
                  image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=100&h=100&fit=crop',
                  title: 'Pentingnya Medical Check-up Rutin',
                  date: '5 jam yang lalu'
                }
              ].map((news, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-3 shadow-sm flex gap-3"
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-gray-800 text-sm mb-1 line-clamp-2" style={{ fontWeight: 600 }}>
                      {news.title}
                    </h4>
                    <p className="text-gray-400 text-xs">{news.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Banner */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-5 mb-6 shadow-md">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop"
                  alt="Doctor"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-white text-lg mb-2" style={{ fontWeight: 700 }}>
                  #DirumahAja Masih Bisa Konsultasi
                </h3>
                <p className="text-white/90 text-xs mb-3">
                  Tanyakan keluhan Anda dengan para Dokter yang berkompeten dan berlisensi.
                </p>
              </div>
            </div>
          </div>

          {/* Rumah Sakit Section */}
          <div className="mb-6">
            <h3 className="text-gray-800 text-lg mb-1" style={{ fontWeight: 700 }}>Rumah Sakit</h3>
            <p className="text-gray-500 text-sm mb-4">Informasi Rumah Sakit di Klaten</p>
            
            {/* Placeholder for hospital list */}
            <button 
              onClick={() => onNavigate('hospitals')}
              className="w-full bg-white rounded-2xl p-6 shadow-sm text-center"
            >
              <div className="text-4xl mb-2">🏥</div>
              <p className="text-gray-600 text-sm">Lihat Daftar Rumah Sakit</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}