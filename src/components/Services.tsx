import { Page } from '../App';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services = [
    { 
      id: 'emergency',
      label: 'Telepon',
      icon: '📞',
      page: 'emergency' as Page,
      bgColor: 'bg-pink-50'
    },
    { 
      id: 'consultation',
      label: 'Konsultasi Medis',
      icon: '💭',
      page: 'consultation' as Page,
      bgColor: 'bg-pink-50'
    },
    { 
      id: 'health',
      label: 'Informasi Kesehatan',
      icon: '👶',
      page: 'health' as Page,
      bgColor: 'bg-pink-50'
    },
    { 
      id: 'doctors',
      label: 'Dokter',
      icon: '👨‍⚕️',
      page: 'doctors' as Page,
      bgColor: 'bg-pink-50'
    },
    { 
      id: 'news',
      label: 'Berita Sehat',
      icon: '❤️',
      page: 'news' as Page,
      bgColor: 'bg-pink-50'
    },
    { 
      id: 'pharmacy',
      label: 'Apotik',
      icon: '💊',
      page: 'pharmacies' as Page,
      bgColor: 'bg-pink-50'
    },
    { 
      id: 'blood',
      label: 'Stok Darah',
      icon: '🩸',
      page: 'blood' as Page,
      bgColor: 'bg-pink-50'
    },
    { 
      id: 'hospitals',
      label: 'Rumah Sakit',
      icon: '🏥',
      page: 'hospitals' as Page,
      bgColor: 'bg-pink-50'
    },
    { 
      id: 'puskesmas',
      label: 'Puskesmas',
      icon: '🩺',
      page: 'puskesmas' as Page,
      bgColor: 'bg-pink-50'
    },
    { 
      id: 'clinic',
      label: 'Klinik',
      icon: '🏨',
      page: 'clinics' as Page,
      bgColor: 'bg-pink-50'
    },
    { 
      id: 'laboratory',
      label: 'Laboratorium',
      icon: '🧪',
      page: 'laboratory' as Page,
      bgColor: 'bg-pink-50'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDF5F5]">
      {/* Emergency Banner */}
      <div className="bg-[#C41E3A] rounded-b-3xl px-5 pt-6 pb-12 shadow-md mb-6">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h1 className="text-white text-2xl mb-2" style={{ fontWeight: 700 }}>
              Layanan Gawat Darurat 24 Jam
            </h1>
            <p className="text-white/90 text-sm leading-relaxed">
              Ingin berkonsultasi atau memeriksakan kesehatanmu ? Kami siap melayani Anda.
            </p>
          </div>
          <div className="w-24 h-24 flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&h=200&fit=crop"
              alt="Doctor"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="px-5">
        {/* Layanan Kami Section */}
        <div className="mb-6">
          <h2 className="text-gray-800 text-lg mb-1" style={{ fontWeight: 700 }}>
            Layanan Kami
          </h2>
          <p className="text-gray-500 text-sm mb-5">
            Beberapa layanan yang kami sediakan
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-3 gap-3">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => onNavigate(service.page)}
                className={`${service.bgColor} rounded-2xl p-4 flex flex-col items-center justify-center text-center min-h-[110px] shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className="text-4xl mb-2">{service.icon}</div>
                <span className="text-gray-700 text-xs leading-tight" style={{ fontWeight: 500 }}>
                  {service.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}