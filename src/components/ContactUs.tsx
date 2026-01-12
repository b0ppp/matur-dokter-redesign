import { ArrowLeft, Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';

interface ContactUsProps {
  onBack: () => void;
}

export function ContactUs({ onBack }: ContactUsProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telepon',
      value: '(0272) 321-102',
      description: 'Senin - Jumat, 08:00 - 16:00',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Phone,
      title: 'Darurat 119',
      value: '119',
      description: 'Layanan 24 jam',
      color: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'dinkes@klatenkab.go.id',
      description: 'Respon dalam 1x24 jam',
      color: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+62 812-9993-351',
      description: 'Chat langsung dengan admin',
      color: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
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
            Kontak Kami
          </h1>
        </div>
        <p className="text-white/90 text-sm">
          Hubungi kami untuk bantuan dan informasi
        </p>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="mx-5 mb-4 bg-green-50 border-2 border-green-200 rounded-2xl p-4">
          <p className="text-green-800 text-sm text-center">✅ Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.</p>
        </div>
      )}

      <div className="px-5 pb-32">
        {/* Contact Methods */}
        <div className="mb-6">
          <h3 className="text-gray-800 text-lg mb-4 px-1" style={{ fontWeight: 700 }}>
            Hubungi Kami
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`${method.color} rounded-2xl shadow-sm p-4 border-2 border-opacity-50`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <method.icon className={`w-6 h-6 ${method.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-gray-800 text-sm mb-1" style={{ fontWeight: 600 }}>
                      {method.title}
                    </h4>
                    <p className="text-gray-700 text-base mb-1 break-all" style={{ fontWeight: 700 }}>
                      {method.value}
                    </p>
                    <p className="text-gray-600 text-xs">{method.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Address */}
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h4 className="text-gray-800 text-sm mb-2" style={{ fontWeight: 600 }}>
                Alamat Kantor
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Dinas Kesehatan Kabupaten Klaten<br />
                Jl. Pemuda No. 294<br />
                Klaten, Jawa Tengah 57424
              </p>
              <div className="flex items-center gap-2 text-gray-600 text-xs">
                <Clock className="w-4 h-4" />
                <span>Senin - Jumat: 08:00 - 16:00 WIB</span>
              </div>
            </div>
          </div>
          <button className="w-full bg-purple-50 hover:bg-purple-100 text-purple-700 py-3 rounded-xl transition-colors text-sm flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" />
            <span style={{ fontWeight: 600 }}>Buka di Google Maps</span>
          </button>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">
          <h3 className="text-gray-800 text-base mb-4" style={{ fontWeight: 700 }}>
            Kirim Pesan
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-gray-700 text-sm mb-2 block" style={{ fontWeight: 600 }}>
                Nama Lengkap
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
                placeholder="Masukkan nama Anda"
                className="w-full bg-gray-50 rounded-xl px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-[#C41E3A] transition-all"
              />
            </div>

            <div>
              <label className="text-gray-700 text-sm mb-2 block" style={{ fontWeight: 600 }}>
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required
                placeholder="Masukkan email Anda"
                className="w-full bg-gray-50 rounded-xl px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-[#C41E3A] transition-all"
              />
            </div>

            <div>
              <label className="text-gray-700 text-sm mb-2 block" style={{ fontWeight: 600 }}>
                Subjek
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                required
                placeholder="Topik pesan Anda"
                className="w-full bg-gray-50 rounded-xl px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-[#C41E3A] transition-all"
              />
            </div>

            <div>
              <label className="text-gray-700 text-sm mb-2 block" style={{ fontWeight: 600 }}>
                Pesan
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
                required
                placeholder="Tulis pesan Anda di sini..."
                rows={5}
                className="w-full bg-gray-50 rounded-xl px-4 py-3 text-gray-800 outline-none focus:ring-2 focus:ring-[#C41E3A] transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#C41E3A] to-[#A01830] hover:from-[#A01830] hover:to-[#8B1528] text-white py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl text-base flex items-center justify-center gap-2"
              style={{ fontWeight: 700 }}
            >
              <Send className="w-5 h-5" />
              Kirim Pesan
            </button>
          </form>
        </div>

        {/* Info Box */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4">
          <h4 className="text-yellow-800 text-sm mb-2 flex items-center gap-2" style={{ fontWeight: 600 }}>
            <span>💡</span>
            <span>Catatan Penting</span>
          </h4>
          <p className="text-yellow-700 text-xs leading-relaxed">
            Untuk kondisi darurat, hubungi <strong>119</strong> atau gunakan tombol <strong>SOS Darurat</strong> di aplikasi untuk respon cepat.
          </p>
        </div>
      </div>
    </div>
  );
}
