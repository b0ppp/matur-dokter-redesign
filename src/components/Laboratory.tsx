import { useState } from 'react';
import { MapPin, Phone, Navigation } from 'lucide-react';

export function Laboratory() {
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);

  const laboratories = [
    {
      id: '1',
      name: 'LABKESDA',
      address: 'Jl. Pemuda No. 313, Klaten',
      phone: '(0272) 325-111',
      distance: '1.2 km',
      isOpen: true,
      openHours: '08.00 - 16.00',
      services: ['Tes Darah', 'Tes Urine', 'Radiologi']
    },
    {
      id: '2',
      name: 'PRODIA',
      address: 'Jl. Pramuka, Klaten',
      phone: '(0272) 325-222',
      distance: '1.8 km',
      isOpen: true,
      openHours: '07.00 - 20.00',
      services: ['Medical Check Up', 'Tes COVID-19', 'Tes Darah Lengkap']
    },
    {
      id: '3',
      name: 'PILAR',
      address: 'Jl. Ki Ageng Gribig, Klaten',
      phone: '(0272) 325-333',
      distance: '2.5 km',
      isOpen: true,
      openHours: '08.00 - 17.00',
      services: ['Tes Laboratorium', 'Radiologi', 'USG']
    },
    {
      id: '4',
      name: 'LAB KLINIK PRIMA DIAGNOSA',
      address: 'Jl. Merbabu No. 34, Klaten',
      phone: '(0272) 325-444',
      distance: '3.1 km',
      isOpen: false,
      openHours: 'Sen-Sab: 08.00 - 15.00',
      services: ['Tes Darah', 'Tes Urine', 'Tes Kimia Darah']
    }
  ];

  const handleAction = (action: string) => {
    setActionFeedback(action);
    setTimeout(() => setActionFeedback(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FDF5F5]">
      {/* Header */}
      <div className="bg-[#C41E3A] rounded-b-3xl px-5 pt-6 pb-8 shadow-md mb-6">
        <h1 className="text-white text-2xl mb-2" style={{ fontWeight: 700 }}>Laboratorium</h1>
        <p className="text-white/90 text-sm">Laboratorium kesehatan di Klaten</p>
      </div>

      <div className="px-5">
        {/* Feedback Message */}
        {actionFeedback && (
          <div className="mb-4 bg-blue-50 border-2 border-blue-200 rounded-2xl p-3">
            <p className="text-blue-800 text-sm">{actionFeedback}</p>
          </div>
        )}

        {/* Search Bar */}
        <div className="bg-white rounded-2xl px-5 py-4 shadow-sm mb-6 flex items-center gap-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Cari data yang Anda butuhkan ?"
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
          />
        </div>

        {/* Map Placeholder */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-6 h-48 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🧪</div>
              <p className="text-gray-500 text-sm">Peta Lokasi Laboratorium</p>
              <p className="text-gray-400 text-xs mt-1">{laboratories.length} laboratorium ditemukan</p>
            </div>
          </div>
        </div>

        {/* Laboratory List */}
        <div className="space-y-3">
          {laboratories.map((lab) => (
            <div key={lab.id} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-[#C41E3A] text-base mb-2" style={{ fontWeight: 700 }}>
                    {lab.name}
                  </h3>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    lab.isOpen 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {lab.isOpen ? 'Buka' : 'Tutup'}
                  </span>
                  <span className="text-gray-500 text-xs">{lab.distance}</span>
                </div>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-start gap-2 text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{lab.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{lab.openHours}</span>
                </div>
              </div>

              {/* Telepon Section */}
              <div className="mb-3 bg-gray-50 rounded-xl p-3">
                <p className="text-gray-800 text-sm mb-1" style={{ fontWeight: 600 }}>Telepon</p>
                <p className="text-gray-600 text-sm">{lab.phone}</p>
              </div>

              <div className="mb-3">
                <p className="text-gray-600 text-xs mb-2">Layanan:</p>
                <div className="flex flex-wrap gap-2">
                  {lab.services.map((service, index) => (
                    <span
                      key={index}
                      className="bg-pink-50 text-gray-700 px-2 py-1 rounded-lg text-xs"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleAction('Membuka petunjuk arah...')}
                  className="flex-1 bg-[#C41E3A] hover:bg-[#A01830] text-white py-2 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Petunjuk Arah</span>
                </button>
                <button
                  onClick={() => handleAction(`Menghubungi ${lab.name}...`)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Hubungi</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
