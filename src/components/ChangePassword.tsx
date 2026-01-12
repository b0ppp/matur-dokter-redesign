import { useState } from 'react';
import { ArrowLeft, Lock, Eye, EyeOff } from 'lucide-react';

interface ChangePasswordProps {
  onBack: () => void;
}

export function ChangePassword({ onBack }: ChangePasswordProps) {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });

  const [errors, setErrors] = useState<any>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors: any = {};

    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Password lama harus diisi';
    }

    if (!formData.newPassword) {
      newErrors.newPassword = 'Password baru harus diisi';
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = 'Password minimal 6 karakter';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Konfirmasi password harus diisi';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password tidak cocok';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onBack();
      }, 1500);
    }
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
            Ubah Password
          </h1>
        </div>
        <p className="text-white/90 text-sm">
          Perbarui password untuk keamanan akun Anda
        </p>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="mx-5 mb-4 bg-green-50 border-2 border-green-200 rounded-2xl p-4">
          <p className="text-green-800 text-sm text-center">✅ Password berhasil diubah!</p>
        </div>
      )}

      {/* Info Box */}
      <div className="mx-5 mb-6 bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
        <h3 className="text-blue-800 text-sm mb-2" style={{ fontWeight: 600 }}>
          💡 Tips Password Aman:
        </h3>
        <ul className="text-blue-700 text-xs space-y-1">
          <li>• Minimal 6 karakter</li>
          <li>• Kombinasi huruf dan angka</li>
          <li>• Jangan gunakan tanggal lahir atau nama</li>
          <li>• Gunakan karakter khusus (!@#$%)</li>
        </ul>
      </div>

      {/* Form */}
      <div className="px-5 pb-32">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Password Lama */}
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <label className="text-gray-700 text-sm mb-3 block" style={{ fontWeight: 600 }}>
              Password Lama
            </label>
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                type={showPasswords.current ? 'text' : 'password'}
                value={formData.currentPassword}
                onChange={(e) => handleChange('currentPassword', e.target.value)}
                className="flex-1 text-gray-800 outline-none"
                placeholder="Masukkan password lama"
              />
              <button
                type="button"
                onClick={() => setShowPasswords({ ...showPasswords, current: !showPasswords.current })}
                className="text-gray-400 hover:text-gray-600"
              >
                {showPasswords.current ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.currentPassword && (
              <p className="text-red-500 text-xs mt-2">⚠️ {errors.currentPassword}</p>
            )}
          </div>

          {/* Password Baru */}
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <label className="text-gray-700 text-sm mb-3 block" style={{ fontWeight: 600 }}>
              Password Baru
            </label>
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                type={showPasswords.new ? 'text' : 'password'}
                value={formData.newPassword}
                onChange={(e) => handleChange('newPassword', e.target.value)}
                className="flex-1 text-gray-800 outline-none"
                placeholder="Masukkan password baru"
              />
              <button
                type="button"
                onClick={() => setShowPasswords({ ...showPasswords, new: !showPasswords.new })}
                className="text-gray-400 hover:text-gray-600"
              >
                {showPasswords.new ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.newPassword && (
              <p className="text-red-500 text-xs mt-2">⚠️ {errors.newPassword}</p>
            )}
          </div>

          {/* Konfirmasi Password Baru */}
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <label className="text-gray-700 text-sm mb-3 block" style={{ fontWeight: 600 }}>
              Konfirmasi Password Baru
            </label>
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-gray-400" />
              <input
                type={showPasswords.confirm ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                className="flex-1 text-gray-800 outline-none"
                placeholder="Ulangi password baru"
              />
              <button
                type="button"
                onClick={() => setShowPasswords({ ...showPasswords, confirm: !showPasswords.confirm })}
                className="text-gray-400 hover:text-gray-600"
              >
                {showPasswords.confirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-2">⚠️ {errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#C41E3A] to-[#A01830] hover:from-[#A01830] hover:to-[#8B1528] text-white py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl text-base"
            style={{ fontWeight: 700 }}
          >
            Ubah Password
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
