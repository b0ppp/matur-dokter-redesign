import { ArrowLeft, Shield, Lock, Eye, FileText, UserCheck, AlertCircle } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  const sections = [
    {
      icon: FileText,
      title: 'Informasi yang Kami Kumpulkan',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
      content: [
        'Data pribadi (nama, email, nomor telepon)',
        'Informasi kesehatan (riwayat konsultasi, golongan darah)',
        'Data lokasi (untuk menemukan fasilitas kesehatan terdekat)',
        'Riwayat penggunaan aplikasi'
      ]
    },
    {
      icon: Lock,
      title: 'Bagaimana Kami Menggunakan Data',
      color: 'bg-green-50',
      iconColor: 'text-green-600',
      content: [
        'Menyediakan layanan kesehatan yang dipersonalisasi',
        'Menghubungkan dengan fasilitas kesehatan terdekat',
        'Mengirim notifikasi penting terkait kesehatan',
        'Meningkatkan kualitas layanan aplikasi'
      ]
    },
    {
      icon: Shield,
      title: 'Keamanan Data',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
      content: [
        'Enkripsi data end-to-end',
        'Server tersertifikasi ISO 27001',
        'Akses terbatas hanya untuk personel berwenang',
        'Backup rutin dan disaster recovery plan'
      ]
    },
    {
      icon: UserCheck,
      title: 'Hak Pengguna',
      color: 'bg-orange-50',
      iconColor: 'text-orange-600',
      content: [
        'Mengakses dan mengunduh data pribadi',
        'Memperbarui atau menghapus informasi',
        'Menarik persetujuan penggunaan data',
        'Mengajukan keluhan terkait privasi'
      ]
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
            Kebijakan Privasi
          </h1>
        </div>
        <p className="text-white/90 text-sm">
          Komitmen kami dalam melindungi data Anda
        </p>
      </div>

      <div className="px-5 pb-32">
        {/* Intro */}
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-[#C41E3A]" />
            </div>
            <div>
              <h2 className="text-gray-800 text-base mb-2" style={{ fontWeight: 700 }}>
                Perlindungan Data Pribadi
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Matur Dokter berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda sesuai dengan UU No. 27 Tahun 2022 tentang Perlindungan Data Pribadi.
              </p>
            </div>
          </div>
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-3 mt-4">
            <p className="text-yellow-800 text-xs">
              <strong>Terakhir diperbarui:</strong> 8 Januari 2026
            </p>
          </div>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <div key={index} className={`${section.color} rounded-2xl shadow-sm p-5 mb-4 border-2 border-opacity-50`}>
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <section.icon className={`w-6 h-6 ${section.iconColor}`} />
              </div>
              <h3 className="text-gray-800 text-base mt-2" style={{ fontWeight: 700 }}>
                {section.title}
              </h3>
            </div>
            <ul className="space-y-2 ml-1">
              {section.content.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className={`${section.iconColor} mt-1`}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Data Sharing */}
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">
          <h3 className="text-gray-800 text-base mb-3 flex items-center gap-2" style={{ fontWeight: 700 }}>
            <Eye className="w-5 h-5 text-gray-600" />
            Berbagi Data dengan Pihak Ketiga
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Kami <strong>tidak menjual</strong> data pribadi Anda. Data hanya dibagikan dengan:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-gray-700 text-sm">
              <span className="text-[#C41E3A] mt-1">•</span>
              <span><strong>Fasilitas kesehatan mitra</strong> - untuk keperluan pelayanan medis</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700 text-sm">
              <span className="text-[#C41E3A] mt-1">•</span>
              <span><strong>Dinas Kesehatan</strong> - untuk analisis kesehatan masyarakat</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700 text-sm">
              <span className="text-[#C41E3A] mt-1">•</span>
              <span><strong>Pihak berwenang</strong> - jika diwajibkan oleh hukum</span>
            </li>
          </ul>
        </div>

        {/* Cookies */}
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl shadow-sm p-5 mb-6 border-2 border-pink-100">
          <h3 className="text-gray-800 text-base mb-3" style={{ fontWeight: 700 }}>
            🍪 Penggunaan Cookies
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Kami menggunakan cookies untuk meningkatkan pengalaman pengguna, mengingat preferensi Anda, dan menganalisis penggunaan aplikasi. Anda dapat mengelola pengaturan cookies di browser Anda.
          </p>
        </div>

        {/* Data Retention */}
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">
          <h3 className="text-gray-800 text-base mb-3" style={{ fontWeight: 700 }}>
            ⏱️ Penyimpanan Data
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            Data pribadi Anda akan disimpan selama:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-gray-700 text-sm">
              <span className="text-[#C41E3A] mt-1">•</span>
              <span>Akun aktif: Selama Anda menggunakan aplikasi</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700 text-sm">
              <span className="text-[#C41E3A] mt-1">•</span>
              <span>Riwayat medis: 5 tahun sesuai regulasi</span>
            </li>
            <li className="flex items-start gap-2 text-gray-700 text-sm">
              <span className="text-[#C41E3A] mt-1">•</span>
              <span>Akun tidak aktif: 2 tahun, kemudian dihapus</span>
            </li>
          </ul>
        </div>

        {/* Contact for Privacy */}
        <div className="bg-gradient-to-br from-[#C41E3A] to-[#A01830] rounded-2xl shadow-lg p-5 text-white mb-6">
          <h3 className="text-lg mb-2" style={{ fontWeight: 700 }}>
            Pertanyaan tentang Privasi?
          </h3>
          <p className="text-white/90 text-sm mb-3">
            Hubungi Data Protection Officer kami:
          </p>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <span>✉️</span>
              <span>privacy@klatenkab.go.id</span>
            </p>
            <p className="flex items-center gap-2">
              <span>📞</span>
              <span>(0272) 321-102 ext. 105</span>
            </p>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-red-800 text-sm mb-2" style={{ fontWeight: 600 }}>
                Pemberitahuan Penting
              </h4>
              <p className="text-red-700 text-xs leading-relaxed">
                Dengan menggunakan aplikasi Matur Dokter, Anda menyetujui kebijakan privasi ini. Kami dapat memperbarui kebijakan ini sewaktu-waktu dan akan memberitahu Anda melalui notifikasi aplikasi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
