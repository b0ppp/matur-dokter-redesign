import { useState } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export function Pharmacies() {
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);

  const pharmacies = [
    {
      id: '1',
      name: 'Apotek Kimia Farma',
      address: 'Jl. Pemuda No. 34, Klaten',
      phone: '(0272) 322-111',
      distance: '0.5 km',
      isOpen: true,
      openHours: '24 Jam',
      services: ['Resep', 'Obat Bebas', 'Konsultasi']
    },
    {
      id: '2',
      name: 'Apotek K-24',
      address: 'Jl. Solo No. 67, Klaten',
      phone: '(0272) 322-222',
      distance: '1.2 km',
      isOpen: true,
      openHours: '24 Jam',
      services: ['Resep', 'Obat Bebas', 'Delivery']
    },
    {
      id: '3',
      name: 'Apotek Guardian',
      address: 'Jl. Ahmad Yani No. 89, Klaten',
      phone: '(0272) 322-333',
      distance: '1.8 km',
      isOpen: true,
      openHours: '08.00 - 22.00',
      services: ['Resep', 'Obat Bebas', 'Produk Kesehatan']
    },
    {
      id: '4',
      name: 'Apotek Sehat Farma',
      address: 'Jl. Veteran No. 12, Klaten',
      phone: '(0272) 322-444',
      distance: '2.3 km',
      isOpen: false,
      openHours: '08.00 - 20.00',
      services: ['Resep', 'Obat Bebas']
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
        <h1 className="text-white text-2xl mb-2" style={{ fontWeight: 700 }}>Apotik</h1>
        <p className="text-white/90 text-sm">Apotek terdekat di Klaten</p>
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
              <div className="text-4xl mb-2">💊</div>
              <p className="text-gray-500 text-sm">Peta Lokasi Apotek</p>
              <p className="text-gray-400 text-xs mt-1">{pharmacies.length} apotek ditemukan</p>
            </div>
          </div>
        </div>

        {/* Pharmacy List */}
        <div className="space-y-3">
          {pharmacies.map((pharmacy) => (
            <div key={pharmacy.id} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-gray-800 text-base mb-1" style={{ fontWeight: 600 }}>
                    {pharmacy.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600 text-xs">{pharmacy.openHours}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    pharmacy.isOpen 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {pharmacy.isOpen ? 'Buka' : 'Tutup'}
                  </span>
                  <span className="text-gray-500 text-xs">{pharmacy.distance}</span>
                </div>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-start gap-2 text-gray-600 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{pharmacy.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>{pharmacy.phone}</span>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex flex-wrap gap-2">
                  {pharmacy.services.map((service, index) => (
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
                  onClick={() => handleAction(`Menghubungi ${pharmacy.name}...`)}
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