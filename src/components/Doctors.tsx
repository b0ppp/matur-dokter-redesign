export function Doctors() {
  const doctors = [
    {
      name: 'Dr. Budi Santoso, Sp.PD',
      specialty: 'Spesialis Penyakit Dalam',
      hospital: 'RS Umum Klaten',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop',
      available: true
    },
    {
      name: 'Dr. Siti Aminah, Sp.A',
      specialty: 'Spesialis Anak',
      hospital: 'RS Mitra Sehat',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop',
      available: true
    },
    {
      name: 'Dr. Ahmad Wijaya, Sp.OG',
      specialty: 'Spesialis Kandungan',
      hospital: 'RS Bhakti Husada',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop',
      available: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF5F5]">
      {/* Header */}
      <div className="bg-[#C41E3A] rounded-b-3xl px-5 pt-6 pb-8 shadow-md mb-6">
        <h1 className="text-white text-2xl mb-2" style={{ fontWeight: 700 }}>Dokter</h1>
        <p className="text-white/90 text-sm">Temukan dokter spesialis terbaik</p>
      </div>

      <div className="px-5">
        {/* Search Bar */}
        <div className="bg-white rounded-2xl px-5 py-4 shadow-sm mb-6 flex items-center gap-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Cari dokter atau spesialisasi..."
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Doctors List */}
        <div className="space-y-3">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex gap-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-gray-800 text-base mb-1" style={{ fontWeight: 600 }}>
                    {doctor.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">{doctor.specialty}</p>
                  <p className="text-gray-500 text-xs mb-2">{doctor.hospital}</p>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${doctor.available ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <span className={`text-xs ${doctor.available ? 'text-green-600' : 'text-gray-400'}`}>
                      {doctor.available ? 'Tersedia' : 'Tidak Tersedia'}
                    </span>
                  </div>
                </div>
              </div>
              {doctor.available && (
                <button className="w-full mt-3 bg-[#C41E3A] hover:bg-[#A01830] text-white py-2 rounded-xl text-sm transition-colors">
                  Buat Janji
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
