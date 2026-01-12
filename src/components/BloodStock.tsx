import { useState } from 'react';
import pmiLogo from 'figma:asset/d7c0d0dae055c35539a5561e5766919f902edb78.png';

export function BloodStock() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const bloodTypes = [
    { type: 'A+', stock: 25, unit: 'kantong', status: 'available' },
    { type: 'A-', stock: 8, unit: 'kantong', status: 'low' },
    { type: 'B+', stock: 32, unit: 'kantong', status: 'available' },
    { type: 'B-', stock: 5, unit: 'kantong', status: 'critical' },
    { type: 'AB+', stock: 15, unit: 'kantong', status: 'available' },
    { type: 'AB-', stock: 3, unit: 'kantong', status: 'critical' },
    { type: 'O+', stock: 45, unit: 'kantong', status: 'available' },
    { type: 'O-', stock: 12, unit: 'kantong', status: 'low' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-700 border-green-300';
      case 'low':
        return 'bg-yellow-100 text-yellow-700 border-yellow-300';
      case 'critical':
        return 'bg-red-100 text-red-700 border-red-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Tersedia';
      case 'low':
        return 'Terbatas';
      case 'critical':
        return 'Mendesak';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-pink-50">
      {/* Header with PMI Logo */}
      <div className="bg-gradient-to-br from-[#C41E3A] to-[#A01830] rounded-b-3xl px-5 pt-6 pb-10 shadow-lg mb-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-10"></div>
        
        <div className="relative z-10">
          {/* PMI Logo - Using actual image */}
          <div className="flex justify-center mb-4">
            <div className="w-28 h-28 bg-white rounded-3xl p-4 shadow-xl">
              <img
                src={pmiLogo}
                alt="PMI"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <h1 className="text-white text-2xl text-center mb-2" style={{ fontWeight: 700 }}>
            Stok Darah PMI Klaten
          </h1>
          <p className="text-white/90 text-center text-sm">
            Informasi ketersediaan golongan darah
          </p>
        </div>
      </div>

      <div className="px-5">
        {/* Blood Type Filter */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
          <h3 className="text-gray-800 text-sm mb-3" style={{ fontWeight: 600 }}>Filter Golongan Darah</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedType(null)}
              className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
                selectedType === null
                  ? 'bg-[#C41E3A] text-white'
                  : 'bg-pink-50 text-gray-700'
              }`}
            >
              Semua
            </button>
            {bloodTypes.map((type) => (
              <button
                key={type.type}
                onClick={() => setSelectedType(type.type)}
                className={`px-3 py-1.5 rounded-lg text-xs transition-colors ${
                  selectedType === type.type
                    ? 'bg-[#C41E3A] text-white'
                    : 'bg-pink-50 text-gray-700'
                }`}
              >
                {type.type}
              </button>
            ))}
          </div>
        </div>

        {/* Status Legend */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
          <h3 className="text-gray-800 text-sm mb-3" style={{ fontWeight: 600 }}>Status Ketersediaan</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span className="text-xs text-gray-700">Tersedia</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded"></div>
              <span className="text-xs text-gray-700">Terbatas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span className="text-xs text-gray-700">Mendesak</span>
            </div>
          </div>
        </div>

        {/* Blood Types */}
        <div className="space-y-4">
          {bloodTypes.map((type) => (
            <div key={type.type} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-gray-800 text-base mb-1" style={{ fontWeight: 600 }}>
                      {type.type}
                    </h2>
                    <div className="space-y-1 text-gray-600 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{type.stock} {type.unit}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{getStatusText(type.status)}</span>
                </div>
              </div>

              <div className="p-4">
                <div className="grid grid-cols-4 gap-2">
                  <div
                    key={type.type}
                    className={`p-3 rounded-xl border-2 ${getStatusColor(type.status)}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-lg" style={{ fontWeight: 600 }}>{type.type}</span>
                      <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    </div>
                    <div className="text-xs">
                      <span className="block mb-0.5" style={{ fontWeight: 600 }}>{type.stock}</span>
                      <span className="capitalize text-[10px]">{getStatusText(type.status)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <button className="w-full bg-[#C41E3A] hover:bg-[#A01830] text-white px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors text-sm">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span>Hubungi PMI</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Donation Info */}
        <div className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-red-500 rounded-full"></div>
            <div>
              <h3 className="text-gray-800 text-base mb-2" style={{ fontWeight: 600 }}>
                Donor Darah, Selamatkan Nyawa
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Donor darah adalah tindakan sederhana yang bisa menyelamatkan nyawa. Orang dewasa sehat berusia 18-65 tahun dapat mendonor setiap 3 bulan.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition-colors text-sm">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}