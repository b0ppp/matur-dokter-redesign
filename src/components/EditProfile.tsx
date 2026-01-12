import { useState } from 'react';
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, Camera } from 'lucide-react';

interface EditProfileProps {
  onBack: () => void;
}

export function EditProfile({ onBack }: EditProfileProps) {
  const [formData, setFormData] = useState({
    name: 'Kallada Raja',
    email: 'kalladararaja84@gmail.com',
    phone: '08129993351',
    birthDate: '1984-05-15',
    address: 'Jl. Veteran No. 123, Klaten',
    gender: 'Laki-laki',
    bloodType: 'O+'
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onBack();
    }, 1500);
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
            Ubah Profil
          </h1>
        </div>
        <p className="text-white/90 text-sm">
          Perbarui informasi profil Anda
        </p>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="mx-5 mb-4 bg-green-50 border-2 border-green-200 rounded-2xl p-4">
          <p className="text-green-800 text-sm text-center">✅ Profil berhasil diperbarui!</p>
        </div>
      )}

      {/* Form */}
      <div className="px-5 pb-32">
        {/* Profile Photo */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=200&h=200&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 bg-[#C41E3A] text-white p-2 rounded-full shadow-lg hover:bg-[#A01830] transition-colors">
              <Camera className="w-4 h-4" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nama Lengkap */}
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <label className="text-gray-700 text-sm mb-2 block" style={{ fontWeight: 600 }}>
              Nama Lengkap
            </label>
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="flex-1 text-gray-800 outline-none"
                placeholder="Masukkan nama lengkap"
              />
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <label className="text-gray-700 text-sm mb-2 block" style={{ fontWeight: 600 }}>
              Email
            </label>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="flex-1 text-gray-800 outline-none"
                placeholder="Masukkan email"
              />
            </div>
          </div>

          {/* Nomor HP */}
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <label className="text-gray-700 text-sm mb-2 block" style={{ fontWeight: 600 }}>
              Nomor HP
            </label>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="flex-1 text-gray-800 outline-none"
                placeholder="08xxxxxxxxxx"
              />
            </div>
          </div>

          {/* Tanggal Lahir */}
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <label className="text-gray-700 text-sm mb-2 block" style={{ fontWeight: 600 }}>
              Tanggal Lahir
            </label>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <input
                type="date"
                value={formData.birthDate}
                onChange={(e) => handleChange('birthDate', e.target.value)}
                className="flex-1 text-gray-800 outline-none"
              />
            </div>
          </div>

          {/* Jenis Kelamin */}
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <label className="text-gray-700 text-sm mb-2 block" style={{ fontWeight: 600 }}>
              Jenis Kelamin
            </label>
            <select
              value={formData.gender}
              onChange={(e) => handleChange('gender', e.target.value)}
              className="w-full text-gray-800 outline-none bg-transparent"
            >
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>

          {/* Golongan Darah */}
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <label className="text-gray-700 text-sm mb-2 block" style={{ fontWeight: 600 }}>
              Golongan Darah
            </label>
            <select
              value={formData.bloodType}
              onChange={(e) => handleChange('bloodType', e.target.value)}
              className="w-full text-gray-800 outline-none bg-transparent"
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          {/* Alamat */}
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <label className="text-gray-700 text-sm mb-2 block" style={{ fontWeight: 600 }}>
              Alamat
            </label>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-gray-400 mt-1" />
              <textarea
                value={formData.address}
                onChange={(e) => handleChange('address', e.target.value)}
                className="flex-1 text-gray-800 outline-none resize-none"
                rows={3}
                placeholder="Masukkan alamat lengkap"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#C41E3A] to-[#A01830] hover:from-[#A01830] hover:to-[#8B1528] text-white py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl text-base"
            style={{ fontWeight: 700 }}
          >
            Simpan Perubahan
          </button>

          <button
            type="button"
            onClick={onBack}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-4 rounded-2xl transition-all text-base"
            style={{ fontWeight: 600 }}
          >
            Batal
          </button>
        </form>
      </div>
    </div>
  );
}
