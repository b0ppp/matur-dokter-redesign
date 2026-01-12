import { Phone, Ambulance, MapPin, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import logo119 from 'figma:asset/a8b7cacabf699cffc64e05cd5d41cc9f516a89fe.png';

export function EmergencyCall() {
  const [callFeedback, setCallFeedback] = useState<string | null>(null);

  const emergencyContacts = [
    { id: '1', name: 'Ambulans Darurat', number: '119', icon: '🚑', description: 'Layanan ambulans 24 jam' },
    { id: '2', name: 'RSUD Klaten', number: '(0272) 321-102', icon: '🏥', description: 'IGD 24 jam' },
    { id: '3', name: 'Puskesmas Klaten Utara', number: '(0272) 321-456', icon: '🩺', description: 'Layanan kesehatan' },
    { id: '4', name: 'PMI Klaten', number: '(0272) 321-789', icon: '🩸', description: 'Palang Merah Indonesia' }
  ];

  const handleCall = (name: string, number: string) => {
    setCallFeedback(`Menghubungi ${name} (${number})...`);
    setTimeout(() => setCallFeedback(null), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-pink-50">
      {/* Header with 119 Logo */}
      <div className="bg-gradient-to-br from-[#C41E3A] to-[#A01830] rounded-b-3xl px-5 pt-6 pb-12 shadow-lg mb-6 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-8"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-8"></div>
        
        <div className="relative z-10">
          {/* 119 Logo */}
          <div className="flex justify-center mb-4">
            <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-3xl p-3 shadow-xl">
              <img
                src={logo119}
                alt="119 Emergency"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <h1 className="text-white text-3xl text-center mb-2" style={{ fontWeight: 700 }}>
            Panggilan Darurat
          </h1>
          <p className="text-white/90 text-center text-sm">
            Hubungi layanan darurat dengan cepat
          </p>
        </div>
      </div>

      <div className="px-5">
        {/* Alert Banner */}
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-4 mb-6 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-red-800 text-sm">
            Untuk kondisi darurat yang mengancam jiwa, segera hubungi layanan darurat. Jangan ragu!
          </p>
        </div>

        {/* Feedback Message */}
        {callFeedback && (
          <div className="mb-6 bg-green-50 border-2 border-green-200 rounded-2xl p-4">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-green-600 animate-pulse" />
              <p className="text-green-800 text-sm">
                {callFeedback}
              </p>
            </div>
          </div>
        )}

        {/* Emergency Service Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {emergencyContacts.map((contact) => (
            <div 
              key={contact.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <div className="p-4 text-center">
                <div className="text-4xl mb-2">{contact.icon}</div>
                <h2 className="text-gray-800 text-base mb-1" style={{ fontWeight: 600 }}>
                  {contact.name}
                </h2>
                <div className="bg-[#C41E3A] text-white px-3 py-1 rounded-lg text-2xl mb-2 inline-block">
                  {contact.number}
                </div>
                <p className="text-gray-500 text-xs mb-3">
                  {contact.description}
                </p>
                <button
                  onClick={() => handleCall(contact.name, contact.number)}
                  className="w-full bg-[#C41E3A] hover:bg-[#A01830] text-white py-2 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">Hubungi</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Important Information */}
        <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">
          <h2 className="text-gray-800 text-lg mb-4" style={{ fontWeight: 700 }}>
            Kapan Menghubungi Layanan Darurat
          </h2>
          <ul className="space-y-3">
            {[
              'Nyeri dada parah atau kesulitan bernapas',
              'Pendarahan hebat atau trauma',
              'Kehilangan kesadaran',
              'Nyeri mendadak yang sangat parah',
              'Tanda-tanda stroke atau serangan jantung'
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600 text-sm">
                <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tips */}
        <div className="grid gap-3 mb-6">
          <div className="bg-blue-50 rounded-2xl p-4 border-2 border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <h3 className="text-gray-800 text-base" style={{ fontWeight: 600 }}>
                Bagikan Lokasi Anda
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Sebutkan alamat lengkap dan patokan terdekat agar layanan darurat dapat segera menemukan Anda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}