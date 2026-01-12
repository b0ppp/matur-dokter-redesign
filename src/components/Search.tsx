import { Search as SearchIcon, Clock } from 'lucide-react';
import { useState } from 'react';
import { Page } from '../App';

interface SearchProps {
  onNavigate: (page: Page) => void;
}

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  page: Page;
  icon: string;
}

export function Search({ onNavigate }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const allResults: SearchResult[] = [
    {
      id: '1',
      title: 'RSUD Klaten',
      subtitle: 'Jl. Pemuda No. 1, Klaten • 1.2 km',
      page: 'hospitals',
      icon: '🏥'
    },
    {
      id: '2',
      title: 'Apotek Kimia Farma',
      subtitle: 'Jl. Pemuda No. 34 • Buka 24 Jam',
      page: 'pharmacies',
      icon: '💊'
    },
    {
      id: '3',
      title: 'Klinik Pratama Sehat',
      subtitle: 'Poli Umum, Anak, Gigi • 0.8 km',
      page: 'clinics',
      icon: '🏨'
    },
    {
      id: '4',
      title: 'Golongan Darah O+ Tersedia',
      subtitle: 'PMI Kabupaten Klaten • 52 kantong',
      page: 'blood',
      icon: '🩸'
    },
    {
      id: '5',
      title: 'Puskesmas Klaten Tengah',
      subtitle: 'Jl. Pemuda No. 123 • Buka',
      page: 'puskesmas',
      icon: '🩺'
    }
  ];

  const popularSearches = [
    'Rumah sakit darurat',
    'Apotek 24 jam',
    'Klinik gigi',
    'Golongan darah A+',
    'Puskesmas terdekat'
  ];

  const quickCategories = [
    { label: 'Rumah Sakit', page: 'hospitals' as Page, icon: '🏥' },
    { label: 'Apotek', page: 'pharmacies' as Page, icon: '💊' },
    { label: 'Klinik', page: 'clinics' as Page, icon: '🏨' },
    { label: 'Stok Darah', page: 'blood' as Page, icon: '🩸' },
    { label: 'Puskesmas', page: 'puskesmas' as Page, icon: '🩺' },
    { label: 'Dokter', page: 'doctors' as Page, icon: '👨‍⚕️' }
  ];

  const filteredResults = searchQuery.trim() === ''
    ? []
    : allResults.filter(result =>
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-[#FDF5F5]">
      {/* Header */}
      <div className="bg-[#C41E3A] rounded-b-3xl px-5 pt-6 pb-8 shadow-md mb-6">
        <h1 className="text-white text-2xl mb-2" style={{ fontWeight: 700 }}>Pencarian</h1>
        <p className="text-white/90 text-sm">Temukan layanan kesehatan</p>
      </div>

      <div className="px-5">
        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari layanan kesehatan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl outline-none focus:border-[#C41E3A]"
              autoFocus
            />
          </div>
        </div>

        {/* Search Results */}
        {searchQuery && (
          <div className="mb-6">
            <h2 className="text-gray-800 text-lg mb-3" style={{ fontWeight: 700 }}>
              {filteredResults.length > 0
                ? `${filteredResults.length} Hasil Ditemukan`
                : 'Tidak Ada Hasil'}
            </h2>
            {filteredResults.length > 0 ? (
              <div className="space-y-3">
                {filteredResults.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => onNavigate(result.page)}
                    className="w-full bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-4 text-left"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{result.icon}</div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-gray-800 text-base mb-1" style={{ fontWeight: 600 }}>
                          {result.title}
                        </h3>
                        <p className="text-gray-600 text-xs truncate">
                          {result.subtitle}
                        </p>
                      </div>
                      <span className="text-gray-400 text-sm">→</span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
                <p className="text-gray-600 text-sm mb-2">
                  Tidak menemukan hasil untuk "{searchQuery}"
                </p>
                <p className="text-gray-500 text-xs">
                  Coba kata kunci lain atau jelajahi kategori di bawah
                </p>
              </div>
            )}
          </div>
        )}

        {/* Quick Links */}
        {!searchQuery && (
          <>
            <div className="mb-6">
              <h2 className="text-gray-800 text-lg mb-3" style={{ fontWeight: 700 }}>
                Akses Cepat
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {quickCategories.map((link) => (
                  <button
                    key={link.page}
                    onClick={() => onNavigate(link.page)}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-4 text-center"
                  >
                    <div className="text-3xl mb-2">{link.icon}</div>
                    <span className="text-gray-800 text-xs leading-tight" style={{ fontWeight: 500 }}>
                      {link.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Searches */}
            <div className="mb-6">
              <h2 className="text-gray-800 text-lg mb-3" style={{ fontWeight: 700 }}>
                Pencarian Populer
              </h2>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(search)}
                    className="px-3 py-2 bg-white text-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow text-xs"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Searches */}
            <div className="bg-white rounded-2xl shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-gray-800 text-lg" style={{ fontWeight: 700 }}>
                  Pencarian Terakhir
                </h2>
                <button className="text-[#C41E3A] text-xs">
                  Hapus
                </button>
              </div>
              <div className="space-y-2">
                {['RSUD Klaten', 'Apotek Kimia Farma', 'Klinik gigi'].map((recent, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(recent)}
                    className="w-full flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-colors text-left"
                  >
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700 text-sm">{recent}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}