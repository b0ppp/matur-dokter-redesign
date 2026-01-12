import { useState } from 'react';
import { MapPin, Phone, Navigation } from 'lucide-react';

export function Clinics() {
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);

  const clinics = [
    {
      id: '1',
      name: 'Klinik Pratama Sehat',
      address: 'Jl. Pemuda No. 56, Klaten',
      phone: '(0272) 323-111',
      distance: '0.8 km',
      isOpen: true,
      openHours: '08.00 - 20.00',
      services: ['Poli Umum', 'Anak', 'Gigi']
    },
    {
      id: '2',
      name: 'Klinik Mitra Medika',
      address: 'Jl. Solo No. 89, Klaten',
      phone: '(0272) 323-222',
      distance: '1.5 km',
      isOpen: true,
      openHours: '24 Jam',
      services: ['Poli Umum', 'Imunisasi', 'Laboratorium']
    },
    {
      id: '3',
      name: 'Klinik Husada Bunda',
      address: 'Jl. Ahmad Yani No. 34, Klaten',
      phone: '(0272) 323-333',
      distance: '2.0 km',
      isOpen: true,
      openHours: '07.00 - 21.00',
      services: ['Poli Umum', 'KIA', 'KB']
    },
    {
      id: '4',
      name: 'Klinik Dental Care',
      address: 'Jl. Veteran No. 67, Klaten',
      phone: '(0272) 323-444',
      distance: '2.7 km',
      isOpen: false,
      openHours: '09.00 - 18.00',
      services: ['Gigi', 'Orthodonti', 'Scaling']
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
        <h1 className="text-white text-2xl mb-2" style={{ fontWeight: 700 }}>Klinik</h1>
        <p className="text-white/90 text-sm">Klinik kesehatan terdekat</p>
      </div>

      <div className="px-5">
        {/* Feedback Message */}
        {actionFeedback && (
          <div className="mb-4 bg-blue-50 border-2 border-blue-200 rounded-2xl p-3">
            <p className="text-blue-800 text-sm">{actionFeedback}</p>
          </div>
        )}

        {/* Map Placeholder */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-6 h-48 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🏨</div>
              <p className="text-gray-500 text-sm">Peta Lokasi Klinik</p>
              <p className="text-gray-400 text-xs mt-1">{clinics.length} klinik ditemukan</p>
            </div>
          </div>
        </div>

        {/* Clinic List */}
        <div className="space-y-3">
          {clinics.map((clinic) => (
            <div key={clinic.id} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-gray-800 text-base mb-2" style={{ fontWeight: 600 }}>
                    {clinic.name}
                  </h3>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    clinic.isOpen 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {clinic.isOpen ? 'Buka' : 'Tutup'}
                  </span>
                  <span className="text-gray-500 text-xs">{clinic.distance}</span>
                </div>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-start gap-2 text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{clinic.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{clinic.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{clinic.openHours}</span>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex flex-wrap gap-2">
                  {clinic.services.map((service, index) => (
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
                  onClick={() => handleAction(`Menghubungi ${clinic.name}...`)}
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