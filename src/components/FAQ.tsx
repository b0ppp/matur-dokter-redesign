import { ChevronDown, Search, HelpCircle, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs: FAQItem[] = [
    {
      id: '1',
      question: 'Bagaimana cara menemukan rumah sakit terdekat?',
      answer: 'Gunakan menu Rumah Sakit dari halaman utama. Aplikasi akan menampilkan peta dengan semua rumah sakit terdekat, informasi kontak, dan petunjuk arah.',
      category: 'Umum'
    },
    {
      id: '2',
      question: 'Apa yang harus dilakukan dalam keadaan darurat medis?',
      answer: 'Klik tombol SOS Darurat berwarna merah di bagian bawah layar. Ini akan menampilkan nomor kontak darurat termasuk ambulans (119), darurat medis (118), polisi (110), dan pemadam kebakaran (113).',
      category: 'Darurat'
    },
    {
      id: '3',
      question: 'Bagaimana cara mengecek ketersediaan darah?',
      answer: 'Buka menu Stok Darah untuk melihat ketersediaan real-time berbagai golongan darah di PMI terdekat. Anda bisa filter berdasarkan golongan darah dan menghubungi PMI langsung.',
      category: 'Darah'
    },
    {
      id: '4',
      question: 'Apakah jam buka apotek selalu update?',
      answer: 'Ya, informasi apotek termasuk jam buka diperbarui secara berkala. Namun, kami menyarankan untuk menelepon apotek terlebih dahulu terutama saat hari libur.',
      category: 'Apotek'
    },
    {
      id: '5',
      question: 'Bisakah saya membuat janji temu melalui aplikasi?',
      answer: 'Saat ini, aplikasi menyediakan informasi kontak fasilitas kesehatan. Silakan hubungi fasilitas langsung untuk membuat janji. Kami sedang mengembangkan fitur booking online.',
      category: 'Umum'
    },
    {
      id: '6',
      question: 'Seberapa akurat informasi lokasi?',
      answer: 'Kami berusaha menjaga semua data lokasi tetap akurat dan up-to-date. Lokasi diverifikasi secara berkala, namun jika Anda menemukan kesalahan, silakan hubungi tim dukungan kami.',
      category: 'Umum'
    },
    {
      id: '7',
      question: 'Apa persyaratan untuk donor darah?',
      answer: 'Anda harus berusia 18-65 tahun, berat minimal 45kg, dalam kondisi sehat, dan belum donor dalam 3 bulan terakhir. Bawa KTP saat berkunjung ke PMI.',
      category: 'Darah'
    },
    {
      id: '8',
      question: 'Apakah semua nomor darurat tersedia 24/7?',
      answer: 'Ya, semua nomor darurat (119, 118, 110, 113) tersedia 24 jam sehari, 7 hari seminggu untuk bantuan segera.',
      category: 'Darurat'
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#FDF5F5]">
      {/* Header */}
      <div className="bg-[#C41E3A] rounded-b-3xl px-5 pt-6 pb-8 shadow-md mb-6">
        <div className="flex justify-center mb-3">
          <div className="p-3 bg-white/20 rounded-full">
            <HelpCircle className="w-8 h-8 text-white" />
          </div>
        </div>
        <h1 className="text-white text-2xl mb-2 text-center" style={{ fontWeight: 700 }}>FAQ</h1>
        <p className="text-white/90 text-sm text-center">Pertanyaan yang Sering Diajukan</p>
      </div>

      <div className="px-5">
        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari pertanyaan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl outline-none focus:border-[#C41E3A] text-sm"
            />
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-3 mb-6">
          {filteredFAQs.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
              <p className="text-gray-600 text-sm">Tidak ada pertanyaan yang sesuai dengan pencarian Anda.</p>
            </div>
          ) : (
            filteredFAQs.map((faq) => {
              const isExpanded = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleExpanded(faq.id)}
                    className="w-full p-4 text-left flex items-start justify-between gap-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs mb-2">
                        {faq.category}
                      </span>
                      <h3 className="text-gray-800 text-sm" style={{ fontWeight: 600 }}>
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                        isExpanded ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <div className="px-4 pb-4">
                      <div className="pt-3 border-t border-gray-100">
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Contact Support */}
        <div className="bg-white rounded-2xl shadow-sm p-5">
          <h2 className="text-gray-800 text-lg mb-2" style={{ fontWeight: 700 }}>
            Masih ada pertanyaan?
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Tidak menemukan jawaban yang Anda cari? Hubungi tim dukungan kami.
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-pink-50 rounded-xl">
              <Phone className="w-5 h-5 text-[#C41E3A] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-gray-800 text-sm mb-1" style={{ fontWeight: 600 }}>Telepon Kami</h4>
                <p className="text-gray-600 text-xs">Dukungan: (0272) 555-0000</p>
                <p className="text-gray-500 text-xs mt-1">Sen-Jum: 09.00 - 17.00</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-pink-50 rounded-xl">
              <Mail className="w-5 h-5 text-[#C41E3A] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-gray-800 text-sm mb-1" style={{ fontWeight: 600 }}>Email Kami</h4>
                <p className="text-gray-600 text-xs">support@maturdokter.id</p>
                <p className="text-gray-500 text-xs mt-1">Balasan dalam 24 jam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}