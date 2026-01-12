import { ArrowLeft, Megaphone, AlertCircle, Info, CheckCircle, Clock } from 'lucide-react';
import { useState } from 'react';

interface AnnouncementsProps {
  onBack: () => void;
}

export function Announcements({ onBack }: AnnouncementsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const announcements = [
    {
      id: '1',
      category: 'urgent',
      icon: AlertCircle,
      iconColor: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      title: 'Vaksinasi Booster COVID-19',
      description: 'Vaksinasi booster gratis untuk lansia 60+ di seluruh puskesmas Klaten. Bawa KTP dan kartu vaksin sebelumnya.',
      date: '8 Januari 2026',
      time: '09:00 WIB',
      location: 'Seluruh Puskesmas Klaten',
      isNew: true
    },
    {
      id: '2',
      category: 'info',
      icon: Info,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      title: 'Pemeliharaan Sistem',
      description: 'Sistem akan maintenance pada Minggu, 12 Januari 2026 pukul 00:00-04:00 WIB. Layanan tidak dapat diakses sementara.',
      date: '6 Januari 2026',
      time: '14:30 WIB',
      location: 'Online',
      isNew: true
    },
    {
      id: '3',
      category: 'health',
      icon: Megaphone,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      title: 'Donor Darah PMI Klaten',
      description: 'Kebutuhan darah golongan O+ dan AB+ mendesak. PMI Klaten mengadakan donor darah massal di Alun-alun Klaten.',
      date: '5 Januari 2026',
      time: '08:00 WIB',
      location: 'Alun-alun Klaten',
      isNew: false
    },
    {
      id: '4',
      category: 'info',
      icon: Info,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      title: 'Jadwal Operasional Libur Nasional',
      description: 'Puskesmas tutup pada tanggal merah. Layanan darurat tetap tersedia di RSUD Klaten 24 jam.',
      date: '3 Januari 2026',
      time: '10:00 WIB',
      location: 'Seluruh Puskesmas',
      isNew: false
    },
    {
      id: '5',
      category: 'health',
      icon: CheckCircle,
      iconColor: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      title: 'Posyandu Balita Januari 2026',
      description: 'Jadwal posyandu balita bulan Januari sudah tersedia. Cek jadwal di puskesmas terdekat atau hubungi kader posyandu.',
      date: '1 Januari 2026',
      time: '07:00 WIB',
      location: 'Posyandu Seluruh Desa',
      isNew: false
    },
    {
      id: '6',
      category: 'urgent',
      icon: AlertCircle,
      iconColor: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      title: 'Waspada Demam Berdarah',
      description: 'Peningkatan kasus DBD di Klaten. Lakukan 3M Plus: Menguras, Menutup, Mendaur ulang, dan Memantau jentik nyamuk.',
      date: '28 Desember 2025',
      time: '15:00 WIB',
      location: 'Kabupaten Klaten',
      isNew: false
    }
  ];

  const categories = [
    { id: 'all', label: 'Semua', icon: '📋' },
    { id: 'urgent', label: 'Penting', icon: '🚨' },
    { id: 'health', label: 'Kesehatan', icon: '❤️' },
    { id: 'info', label: 'Informasi', icon: 'ℹ️' }
  ];

  const filteredAnnouncements = selectedCategory === 'all'
    ? announcements
    : announcements.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#C41E3A] to-[#A01830] rounded-b-3xl px-5 pt-6 pb-6 shadow-lg mb-6">
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={onBack}
            className="text-white hover:bg-white/20 p-2 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-white text-xl" style={{ fontWeight: 700 }}>
            Pengumuman
          </h1>
        </div>
        <p className="text-white/90 text-sm">
          Informasi dan pengumuman penting untuk Anda
        </p>
      </div>

      <div className="px-5 pb-32">
        {/* Category Filter */}
        <div className="bg-white rounded-2xl shadow-sm p-3 mb-6">
          <div className="grid grid-cols-4 gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`py-3 px-2 rounded-xl transition-all text-xs ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-[#C41E3A] to-[#A01830] text-white shadow-md'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
                style={{ fontWeight: selectedCategory === cat.id ? 700 : 500 }}
              >
                <div className="text-lg mb-1">{cat.icon}</div>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Announcements List */}
        <div className="space-y-4">
          {filteredAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className={`${announcement.bgColor} rounded-2xl shadow-sm p-5 border-2 ${announcement.borderColor} relative overflow-hidden`}
            >
              {announcement.isNew && (
                <div className="absolute top-3 right-3 bg-[#C41E3A] text-white text-[10px] px-2 py-1 rounded-full shadow-sm" style={{ fontWeight: 700 }}>
                  BARU
                </div>
              )}

              <div className="flex items-start gap-3 mb-3">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <announcement.icon className={`w-6 h-6 ${announcement.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-gray-800 text-base mb-2" style={{ fontWeight: 700 }}>
                    {announcement.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    {announcement.description}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-gray-600 text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{announcement.date} • {announcement.time}</span>
                    </div>
                    {announcement.location && (
                      <div className="flex items-center gap-2 text-gray-600 text-xs">
                        <span>📍</span>
                        <span>{announcement.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredAnnouncements.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
            <div className="text-6xl mb-3">📭</div>
            <p className="text-gray-600 text-sm">
              Tidak ada pengumuman untuk kategori ini
            </p>
          </div>
        )}

        {/* Info Box */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 mt-6">
          <h4 className="text-blue-800 text-sm mb-2 flex items-center gap-2" style={{ fontWeight: 600 }}>
            <span>💡</span>
            <span>Tips</span>
          </h4>
          <p className="text-blue-700 text-xs leading-relaxed">
            Aktifkan notifikasi untuk mendapatkan pengumuman penting secara real-time. Anda dapat mengatur preferensi notifikasi di halaman Pengaturan.
          </p>
        </div>
      </div>
    </div>
  );
}
