import { ArrowLeft, Target, Eye, Award, Users } from 'lucide-react';
import logoMaturDokter from 'figma:asset/76db9b87e86f270b20d460ccf67f9df8aacf73a6.png';
import kemenkesLogo from 'figma:asset/5c18b4926bb89375004ea7d350f97e2f1b4f6157.png';
import logo119 from 'figma:asset/a8b7cacabf699cffc64e05cd5d41cc9f516a89fe.png';
import pmiLogo from 'figma:asset/d7c0d0dae055c35539a5561e5766919f902edb78.png';

interface AboutUsProps {
  onBack: () => void;
}

export function AboutUs({ onBack }: AboutUsProps) {
  const features = [
    {
      icon: '🚨',
      title: 'Layanan Darurat 24/7',
      description: 'Akses cepat ke nomor darurat dan ambulans'
    },
    {
      icon: '🏥',
      title: 'Informasi Faskes',
      description: 'Database lengkap rumah sakit, klinik, dan apotek'
    },
    {
      icon: '💉',
      title: 'Stok Darah PMI',
      description: 'Informasi real-time ketersediaan darah'
    },
    {
      icon: '💬',
      title: 'Konsultasi Medis',
      description: 'Chat langsung dengan tenaga kesehatan'
    }
  ];

  const partners = [
    {
      name: 'Kementerian Kesehatan RI',
      logo: kemenkesLogo,
      description: 'Mitra strategis nasional'
    },
    {
      name: 'Call Center 119',
      logo: logo119,
      description: 'Layanan darurat kesehatan'
    },
    {
      name: 'PMI Klaten',
      logo: pmiLogo,
      description: 'Palang Merah Indonesia'
    }
  ];

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
            Tentang Kami
          </h1>
        </div>
        <p className="text-white/90 text-sm">
          Mengenal lebih dekat Matur Dokter
        </p>
      </div>

      <div className="px-5 pb-32">
        {/* Logo & Intro */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 text-center">
          <div className="w-24 h-24 mx-auto mb-4">
            <img
              src={logoMaturDokter}
              alt="Matur Dokter"
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-gray-800 text-2xl mb-2" style={{ fontWeight: 700 }}>
            Matur Dokter
          </h2>
          <p className="text-[#C41E3A] text-sm mb-4" style={{ fontWeight: 600 }}>
            Kabupaten Klaten
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Aplikasi layanan kesehatan terpadu yang memudahkan akses masyarakat Kabupaten Klaten terhadap informasi dan layanan kesehatan berkualitas.
          </p>
        </div>

        {/* Visi */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl shadow-sm p-5 mb-4 border-2 border-blue-100">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-blue-900 text-base mb-2" style={{ fontWeight: 700 }}>
                Visi
              </h3>
              <p className="text-blue-700 text-sm leading-relaxed">
                Menjadi platform kesehatan digital terdepan yang memberikan akses mudah, cepat, dan terpercaya untuk seluruh masyarakat Kabupaten Klaten.
              </p>
            </div>
          </div>
        </div>

        {/* Misi */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl shadow-sm p-5 mb-6 border-2 border-green-100">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-green-900 text-base mb-2" style={{ fontWeight: 700 }}>
                Misi
              </h3>
              <ul className="text-green-700 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span>Menyediakan informasi kesehatan yang akurat dan terpercaya</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span>Memfasilitasi akses layanan darurat 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span>Meningkatkan kualitas pelayanan kesehatan masyarakat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span>Membangun ekosistem kesehatan digital yang terintegrasi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Fitur Unggulan */}
        <div className="mb-6">
          <h3 className="text-gray-800 text-lg mb-4 px-1" style={{ fontWeight: 700 }}>
            Fitur Unggulan
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm p-4 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h4 className="text-gray-800 text-sm mb-1" style={{ fontWeight: 600 }}>
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mitra Kerja Sama */}
        <div className="mb-6">
          <h3 className="text-gray-800 text-lg mb-4 px-1" style={{ fontWeight: 700 }}>
            Mitra Kerja Sama
          </h3>
          <div className="space-y-3">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm p-4 flex items-center gap-4"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-xl p-2 flex items-center justify-center flex-shrink-0">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-gray-800 text-sm mb-1" style={{ fontWeight: 600 }}>
                    {partner.name}
                  </h4>
                  <p className="text-gray-600 text-xs">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-br from-[#C41E3A] to-[#A01830] rounded-2xl shadow-lg p-5 text-white">
          <h3 className="text-lg mb-3" style={{ fontWeight: 700 }}>
            Dinas Kesehatan Kabupaten Klaten
          </h3>
          <div className="space-y-2 text-sm">
            <p className="flex items-start gap-2">
              <span>📍</span>
              <span>Jl. Pemuda No. 294, Klaten, Jawa Tengah 57424</span>
            </p>
            <p className="flex items-center gap-2">
              <span>📞</span>
              <span>(0272) 321-102</span>
            </p>
            <p className="flex items-center gap-2">
              <span>✉️</span>
              <span>dinkes@klatenkab.go.id</span>
            </p>
          </div>
        </div>

        {/* Version Info */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm mb-1">Versi 1.0.0</p>
          <p className="text-gray-400 text-xs">
            © 2026 Dinas Kesehatan Kabupaten Klaten
          </p>
          <p className="text-gray-400 text-xs">
            Semua hak dilindungi undang-undang
          </p>
        </div>
      </div>
    </div>
  );
}
