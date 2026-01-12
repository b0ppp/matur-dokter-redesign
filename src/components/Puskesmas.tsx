export function Puskesmas() {
  const puskesmasList = [
    {
      name: 'Puskesmas Klaten Tengah',
      address: 'Jl. Pemuda No. 123, Klaten',
      phone: '(0272) 321-456',
      distance: '1.2 km',
      isOpen: true,
      services: ['Poli Umum', 'KIA', 'Gigi', 'Laboratorium']
    },
    {
      name: 'Puskesmas Delanggu',
      address: 'Jl. Raya Delanggu No. 45, Klaten',
      phone: '(0272) 321-789',
      distance: '3.5 km',
      isOpen: true,
      services: ['Poli Umum', 'Imunisasi', 'KB']
    },
    {
      name: 'Puskesmas Karangnongko',
      address: 'Jl. Solo No. 78, Klaten',
      phone: '(0272) 321-234',
      distance: '5.1 km',
      isOpen: false,
      services: ['Poli Umum', 'Gizi', 'Sanitasi']
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF5F5]">
      {/* Header */}
      <div className="bg-[#C41E3A] rounded-b-3xl px-5 pt-6 pb-8 shadow-md mb-6">
        <h1 className="text-white text-2xl mb-2" style={{ fontWeight: 700 }}>Puskesmas</h1>
        <p className="text-white/90 text-sm">Pusat Kesehatan Masyarakat terdekat</p>
      </div>

      <div className="px-5">
        {/* Map Placeholder */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-6 h-48 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-gray-500 text-sm">Peta Lokasi Puskesmas</p>
            </div>
          </div>
        </div>

        {/* Puskesmas List */}
        <div className="space-y-3">
          {puskesmasList.map((puskesmas, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-gray-800 text-base mb-1" style={{ fontWeight: 600 }}>
                    {puskesmas.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      puskesmas.isOpen 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {puskesmas.isOpen ? 'Buka' : 'Tutup'}
                    </span>
                    <span className="text-gray-500 text-xs">{puskesmas.distance}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-start gap-2 text-gray-600 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>{puskesmas.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{puskesmas.phone}</span>
                </div>
              </div>

              <div className="mb-3">
                <p className="text-gray-500 text-xs mb-2">Layanan:</p>
                <div className="flex flex-wrap gap-2">
                  {puskesmas.services.map((service, idx) => (
                    <span key={idx} className="bg-pink-50 text-gray-700 px-2 py-1 rounded-lg text-xs">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 bg-[#C41E3A] hover:bg-[#A01830] text-white py-2 rounded-xl text-sm transition-colors">
                  Petunjuk Arah
                </button>
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl text-sm transition-colors">
                  Hubungi
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
