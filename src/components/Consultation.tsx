import { useState } from 'react';
import { Bell, MoreHorizontal, Search } from 'lucide-react';
import { DoctorChat } from './DoctorChat';

export function Consultation() {
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);

  const onlineDoctors = [
    {
      id: 1,
      name: 'dr. Fitriah Siti Aisyah',
      specialty: 'Dokter Umum',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop',
      isOnline: true
    },
    {
      id: 2,
      name: 'dr. Ahmad Wijaya',
      specialty: 'Spesialis Anak',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop',
      isOnline: true
    },
    {
      id: 3,
      name: 'dr. Siti Nurhaliza',
      specialty: 'Spesialis Kandungan',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop',
      isOnline: true
    },
    {
      id: 4,
      name: 'dr. Budi Santoso',
      specialty: 'Spesialis Penyakit Dalam',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop',
      isOnline: true
    },
    {
      id: 5,
      name: 'dr. Maya Kusuma',
      specialty: 'Spesialis Mata',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
      isOnline: true
    }
  ];

  if (selectedDoctor) {
    return <DoctorChat doctor={selectedDoctor} onBack={() => setSelectedDoctor(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF5F5] to-[#F5E6E8]">
      {/* Header */}
      <div className="bg-[#C41E3A] rounded-b-3xl px-5 pt-6 pb-6 shadow-md mb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 className="text-white text-xl mb-1" style={{ fontWeight: 700 }}>
              Konsultasi Medis
            </h1>
            <p className="text-white/90 text-sm">Matur Dokter Klaten</p>
          </div>
          <button className="text-white">
            <Bell className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="px-5">
        {/* Dokter Online Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-800 text-lg" style={{ fontWeight: 700 }}>
              #Dokter Online
            </h2>
            <button className="text-gray-400">
              <MoreHorizontal className="w-6 h-6" />
            </button>
          </div>

          {/* Horizontal Scroll Doctors */}
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-hide mb-4">
            {onlineDoctors.map((doctor) => (
              <button
                key={doctor.id}
                onClick={() => setSelectedDoctor(doctor)}
                className="flex-shrink-0"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-4 border-[#C41E3A]">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {doctor.isOnline && (
                    <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white/60 rounded-full px-5 py-3 shadow-sm mb-6 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Cari data yang Anda butuhkan ?"
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
          />
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-16 px-8">
          <div className="w-48 h-48 mb-6">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=400&fit=crop"
              alt="Empty consultation"
              className="w-full h-full object-contain opacity-60"
            />
          </div>
          <p className="text-gray-600 text-center" style={{ fontWeight: 600 }}>
            Belum ada data Konsultasi Medis!!!
          </p>
        </div>
      </div>
    </div>
  );
}