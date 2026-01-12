import { useState } from 'react';
import { MapPin, Phone, Star, Navigation } from 'lucide-react';

export function Hospitals() {
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);

  const hospitals = [
    {
      id: '1',
      name: 'RSUD Klaten',
      address: 'Jl. Pemuda No. 1, Klaten',
      phone: '(0272) 321-234',
      distance: '1.2 km',
      isOpen: true,
      openHours: '24 Jam',
      rating: 4.5,
      services: ['IGD', 'ICU', 'Bedah', 'Anak']
    },
    {
      id: '2',
      name: 'RS Mitra Sehat Klaten',
      address: 'Jl. Solo No. 45, Klaten',
      phone: '(0272) 321-567',
      distance: '2.5 km',
      isOpen: true,
      openHours: '24 Jam',
      rating: 4.7,
      services: ['IGD', 'Jantung', 'Saraf', 'Onkologi']
    },
    {
      id: '3',
      name: 'RS Bhakti Husada',
      address: 'Jl. Raya Prambanan No. 78, Klaten',
      phone: '(0272) 321-890',
      distance: '3.8 km',
      isOpen: true,
      openHours: '24 Jam',
      rating: 4.3,
      services: ['IGD', 'Bersalin', 'Bedah']
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
        <h1 className="text-white text-2xl mb-2" style={{ fontWeight: 700 }}>Rumah Sakit</h1>
        <p className="text-white/90 text-sm">Rumah sakit terdekat di Klaten</p>
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
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">Peta Lokasi Rumah Sakit</p>
              <p className="text-gray-400 text-xs mt-1">{hospitals.length} rumah sakit ditemukan</p>
            </div>
          </div>
        </div>

        {/* Hospital List */}
        <div className="space-y-3">
          {hospitals.map((hospital) => (
            <div key={hospital.id} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-gray-800 text-base mb-1" style={{ fontWeight: 600 }}>
                    {hospital.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(hospital.rating)
                              ? 'text-yellow-400 fill-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">{hospital.rating}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    hospital.isOpen 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {hospital.isOpen ? 'Buka' : 'Tutup'}
                  </span>
                  <span className="text-gray-500 text-xs">{hospital.distance}</span>
                </div>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-start gap-2 text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{hospital.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{hospital.phone}</span>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex flex-wrap gap-2">
                  {hospital.services.map((service, index) => (
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
                  onClick={() => handleAction(`Menghubungi ${hospital.name}...`)}
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