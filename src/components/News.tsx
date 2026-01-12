import { Clock, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import kemenkesLogo from 'figma:asset/5c18b4926bb89375004ea7d350f97e2f1b4f6157.png';

interface NewsProps {
  onBack?: () => void;
}

export function News({ onBack }: NewsProps) {
  const [selectedNews, setSelectedNews] = useState<string | null>(null);

  const newsItems = [
    {
      id: '1',
      title: 'Pembaruan Jadwal Posyandu Januari 2026',
      category: 'Pelayanan',
      excerpt: 'Jadwal posyandu di wilayah Klaten Utara mengalami perubahan untuk bulan Januari. Silakan cek jadwal terbaru.',
      date: '8 Jan 2026',
      time: '09:00 WIB',
      image: '👶',
      priority: 'high',
      source: 'Dinkes Klaten'
    },
    {
      id: '2',
      title: 'Program Vaksinasi Booster COVID-19',
      category: 'Vaksinasi',
      excerpt: 'Dinas Kesehatan Klaten membuka program vaksinasi booster untuk lansia dan kelompok rentan.',
      date: '7 Jan 2026',
      time: '14:30 WIB',
      image: '💉',
      priority: 'high',
      source: 'Kemenkes RI'
    },
    {
      id: '3',
      title: 'Tips Mencegah DBD di Musim Hujan',
      category: 'Edukasi',
      excerpt: 'Waspadai penyebaran demam berdarah di musim hujan. Lakukan 3M Plus untuk pencegahan.',
      date: '6 Jan 2026',
      time: '10:15 WIB',
      image: '🦟',
      priority: 'medium',
      source: 'Kemenkes RI'
    },
    {
      id: '4',
      title: 'Layanan Konsultasi Gizi Gratis',
      category: 'Pelayanan',
      excerpt: 'RSUD Klaten membuka layanan konsultasi gizi gratis setiap hari Rabu untuk masyarakat.',
      date: '5 Jan 2026',
      time: '08:00 WIB',
      image: '🥗',
      priority: 'low',
      source: 'RSUD Klaten'
    },
    {
      id: '5',
      title: 'Hari Kesehatan Nasional 2026',
      category: 'Event',
      excerpt: 'Peringatan Hari Kesehatan Nasional akan diadakan di Alun-Alun Klaten dengan berbagai kegiatan.',
      date: '4 Jan 2026',
      time: '16:00 WIB',
      image: '🏥',
      priority: 'medium',
      source: 'Kemenkes RI'
    }
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'low':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#C41E3A] to-[#A01830] rounded-b-3xl px-5 pt-6 pb-8 shadow-lg mb-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-10"></div>
        
        <div className="relative z-10">
          <h1 className="text-white text-2xl text-center mb-2" style={{ fontWeight: 700 }}>
            Berita & Pengumuman
          </h1>
          <p className="text-white/90 text-center text-sm">
            Informasi terkini seputar kesehatan
          </p>
        </div>
      </div>

      <div className="px-5 space-y-4">
        {/* Filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button className="px-4 py-2 bg-[#C41E3A] text-white rounded-full text-sm whitespace-nowrap">
            Semua
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm whitespace-nowrap border border-gray-200">
            Pelayanan
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm whitespace-nowrap border border-gray-200">
            Vaksinasi
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm whitespace-nowrap border border-gray-200">
            Edukasi
          </button>
        </div>

        {/* News Items */}
        {newsItems.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedNews(news.id)}
          >
            <div className="p-4">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{news.image}</div>
                  <div>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] border ${getPriorityBadge(news.priority)} mb-1`}>
                      {news.category}
                    </span>
                    <h3 className="text-gray-800 text-sm leading-snug" style={{ fontWeight: 600 }}>
                      {news.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {news.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{news.time}</span>
                  </div>
                  <span>{news.date}</span>
                </div>
                
                {/* Source Badge with Kemenkes Logo */}
                {news.source === 'Kemenkes RI' && (
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-teal-50 to-lime-50 px-2 py-1 rounded-lg border border-teal-200">
                    <img
                      src={kemenkesLogo}
                      alt="Kemenkes RI"
                      className="h-3 w-auto"
                    />
                    <span className="text-[10px] text-teal-700" style={{ fontWeight: 600 }}>
                      Kemenkes RI
                    </span>
                  </div>
                )}
                
                {news.source !== 'Kemenkes RI' && (
                  <span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-1 rounded-lg">
                    {news.source}
                  </span>
                )}
              </div>
            </div>

            {/* Read More */}
            <div className="px-4 pb-3">
              <button className="w-full text-[#C41E3A] text-sm flex items-center justify-center gap-1 hover:gap-2 transition-all">
                <span style={{ fontWeight: 600 }}>Baca Selengkapnya</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Feedback */}
      {selectedNews && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full text-sm shadow-lg animate-fade-in">
          Membuka berita...
        </div>
      )}
    </div>
  );
}