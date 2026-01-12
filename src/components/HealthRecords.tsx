import { ArrowLeft, Heart, Activity, Droplet, Scale, Ruler, Calendar, TrendingUp, FileText, Download } from 'lucide-react';
import { useState } from 'react';

interface HealthRecordsProps {
  onBack: () => void;
}

export function HealthRecords({ onBack }: HealthRecordsProps) {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'history'>('overview');

  const vitalSigns = [
    {
      icon: Activity,
      label: 'Tekanan Darah',
      value: '120/80',
      unit: 'mmHg',
      status: 'normal',
      color: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200'
    },
    {
      icon: Heart,
      label: 'Detak Jantung',
      value: '72',
      unit: 'bpm',
      status: 'normal',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      icon: Scale,
      label: 'Berat Badan',
      value: '68',
      unit: 'kg',
      status: 'normal',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      icon: Ruler,
      label: 'Tinggi Badan',
      value: '170',
      unit: 'cm',
      status: 'normal',
      color: 'bg-orange-50',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-200'
    }
  ];

  const medicalHistory = [
    {
      date: '5 Januari 2026',
      type: 'Konsultasi',
      facility: 'RSUD Klaten',
      doctor: 'dr. Sarah Wijaya, Sp.PD',
      diagnosis: 'Pemeriksaan rutin - Kondisi sehat',
      notes: 'Tekanan darah normal, tidak ada keluhan'
    },
    {
      date: '15 Desember 2025',
      type: 'Vaksinasi',
      facility: 'Puskesmas Klaten Utara',
      doctor: 'Petugas Vaksinasi',
      diagnosis: 'Vaksin Booster COVID-19',
      notes: 'Dosis ke-3 Sinovac, tidak ada efek samping'
    },
    {
      date: '20 November 2025',
      type: 'Pemeriksaan Lab',
      facility: 'Laboratorium Klinik Klaten',
      doctor: 'Analis Laboratorium',
      diagnosis: 'Pemeriksaan Gula Darah',
      notes: 'Hasil normal: 95 mg/dL (puasa)'
    }
  ];

  const healthProfile = {
    bloodType: 'O+',
    allergies: ['Penisilin', 'Kacang'],
    chronicDiseases: 'Tidak ada',
    vaccinations: ['COVID-19 (Booster)', 'Influenza 2025']
  };

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
            Data Kesehatan
          </h1>
        </div>
        <p className="text-white/90 text-sm">
          Rekam medis dan data kesehatan Anda
        </p>
      </div>

      <div className="px-5 pb-32">
        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm p-2 mb-6 grid grid-cols-2 gap-2">
          <button
            onClick={() => setSelectedTab('overview')}
            className={`py-3 px-4 rounded-xl transition-all text-sm ${
              selectedTab === 'overview'
                ? 'bg-gradient-to-r from-[#C41E3A] to-[#A01830] text-white shadow-md'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
            style={{ fontWeight: selectedTab === 'overview' ? 700 : 500 }}
          >
            📊 Ringkasan
          </button>
          <button
            onClick={() => setSelectedTab('history')}
            className={`py-3 px-4 rounded-xl transition-all text-sm ${
              selectedTab === 'history'
                ? 'bg-gradient-to-r from-[#C41E3A] to-[#A01830] text-white shadow-md'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
            style={{ fontWeight: selectedTab === 'history' ? 700 : 500 }}
          >
            📋 Riwayat
          </button>
        </div>

        {/* Overview Tab */}
        {selectedTab === 'overview' && (
          <>
            {/* Health Profile */}
            <div className="bg-white rounded-2xl shadow-sm p-5 mb-6">
              <h3 className="text-gray-800 text-base mb-4 flex items-center gap-2" style={{ fontWeight: 700 }}>
                <FileText className="w-5 h-5 text-[#C41E3A]" />
                Profil Kesehatan
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Golongan Darah</span>
                  <span className="text-gray-800 text-sm" style={{ fontWeight: 600 }}>
                    {healthProfile.bloodType}
                  </span>
                </div>
                <div className="flex items-start justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Alergi</span>
                  <div className="text-right">
                    {healthProfile.allergies.map((allergy, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-red-50 text-red-700 text-xs px-2 py-1 rounded-lg ml-1 mb-1"
                      >
                        {allergy}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Penyakit Kronis</span>
                  <span className="text-gray-800 text-sm" style={{ fontWeight: 600 }}>
                    {healthProfile.chronicDiseases}
                  </span>
                </div>
                <div className="flex items-start justify-between py-2">
                  <span className="text-gray-600 text-sm">Vaksinasi</span>
                  <div className="text-right">
                    {healthProfile.vaccinations.map((vaccine, idx) => (
                      <div key={idx} className="text-gray-800 text-xs mb-1">
                        ✅ {vaccine}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Vital Signs */}
            <div className="mb-6">
              <h3 className="text-gray-800 text-base mb-4 px-1 flex items-center gap-2" style={{ fontWeight: 700 }}>
                <Activity className="w-5 h-5 text-[#C41E3A]" />
                Tanda Vital Terakhir
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {vitalSigns.map((vital, index) => (
                  <div
                    key={index}
                    className={`${vital.color} rounded-2xl shadow-sm p-4 border-2 ${vital.borderColor}`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                        <vital.icon className={`w-5 h-5 ${vital.iconColor}`} />
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs mb-1">{vital.label}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-gray-800 text-2xl" style={{ fontWeight: 700 }}>
                        {vital.value}
                      </span>
                      <span className="text-gray-600 text-xs">{vital.unit}</span>
                    </div>
                    <div className="mt-2">
                      <span className="inline-block bg-white text-green-600 text-[10px] px-2 py-1 rounded-full" style={{ fontWeight: 600 }}>
                        ✓ Normal
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-center">
                <p className="text-gray-500 text-xs">
                  Terakhir diperbarui: 5 Januari 2026
                </p>
              </div>
            </div>

            {/* BMI Calculator */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl shadow-sm p-5 border-2 border-purple-100">
              <h3 className="text-gray-800 text-base mb-3 flex items-center gap-2" style={{ fontWeight: 700 }}>
                <TrendingUp className="w-5 h-5 text-purple-600" />
                Indeks Massa Tubuh (BMI)
              </h3>
              <div className="bg-white rounded-xl p-4 text-center">
                <div className="text-5xl font-bold text-purple-600 mb-2">23.5</div>
                <p className="text-gray-600 text-sm mb-3">Berat Badan Normal</p>
                <div className="bg-green-50 text-green-700 text-xs px-3 py-2 rounded-lg inline-block">
                  ✓ Pertahankan pola hidup sehat
                </div>
              </div>
            </div>
          </>
        )}

        {/* History Tab */}
        {selectedTab === 'history' && (
          <>
            <div className="space-y-4">
              {medicalHistory.map((record, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-sm p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-gray-800 text-sm" style={{ fontWeight: 600 }}>
                          {record.type}
                        </p>
                        <p className="text-gray-500 text-xs">{record.date}</p>
                      </div>
                    </div>
                    <button className="text-[#C41E3A] hover:bg-red-50 p-2 rounded-lg transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-gray-500 min-w-[80px]">Fasilitas:</span>
                      <span className="text-gray-800">{record.facility}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-gray-500 min-w-[80px]">Dokter:</span>
                      <span className="text-gray-800">{record.doctor}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-gray-500 min-w-[80px]">Diagnosis:</span>
                      <span className="text-gray-800">{record.diagnosis}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-gray-500 min-w-[80px]">Catatan:</span>
                      <span className="text-gray-600 text-xs">{record.notes}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 mt-6">
              <h4 className="text-blue-800 text-sm mb-2 flex items-center gap-2" style={{ fontWeight: 600 }}>
                <span>💡</span>
                <span>Informasi</span>
              </h4>
              <p className="text-blue-700 text-xs leading-relaxed">
                Riwayat medis diperbarui otomatis setelah setiap kunjungan ke fasilitas kesehatan mitra. Data Anda aman dan terenkripsi.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
