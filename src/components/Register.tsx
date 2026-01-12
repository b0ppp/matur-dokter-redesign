import { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Phone } from 'lucide-react';
import backgroundImage from 'figma:asset/1e2d23fa55ff40c8e86c2e2d6a0710c571e451ac.png';
import logoImage from 'figma:asset/76db9b87e86f270b20d460ccf67f9df8aacf73a6.png';
import logo119 from 'figma:asset/a8b7cacabf699cffc64e05cd5d41cc9f516a89fe.png';
import kemenkesLogo from 'figma:asset/5c18b4926bb89375004ea7d350f97e2f1b4f6157.png';
import pmiLogo from 'figma:asset/d7c0d0dae055c35539a5561e5766919f902edb78.png';

interface RegisterProps {
  onRegister: () => void;
  onSwitchToLogin: () => void;
}

export function Register({ onRegister, onSwitchToLogin }: RegisterProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);

  const validateField = (field: string, value: string) => {
    const newErrors = { ...errors };

    switch (field) {
      case 'name':
        if (!value) newErrors.name = 'Nama tidak boleh kosong';
        else if (value.length < 3) newErrors.name = 'Nama minimal 3 karakter';
        else delete newErrors.name;
        break;
      case 'email':
        if (!value) newErrors.email = 'Email tidak boleh kosong';
        else if (!/\S+@\S+\.\S+/.test(value)) newErrors.email = 'Format email tidak valid';
        else delete newErrors.email;
        break;
      case 'phone':
        if (!value) newErrors.phone = 'Nomor HP tidak boleh kosong';
        else if (!/^[0-9]{10,13}$/.test(value)) newErrors.phone = 'Nomor HP tidak valid (10-13 digit)';
        else delete newErrors.phone;
        break;
      case 'password':
        if (!value) newErrors.password = 'Password tidak boleh kosong';
        else if (value.length < 6) newErrors.password = 'Password minimal 6 karakter';
        else delete newErrors.password;
        break;
      case 'confirmPassword':
        if (!value) newErrors.confirmPassword = 'Konfirmasi password tidak boleh kosong';
        else if (value !== formData.password) newErrors.confirmPassword = 'Password tidak sama';
        else delete newErrors.confirmPassword;
        break;
    }

    setErrors(newErrors);
  };

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) validateField(field, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    Object.keys(formData).forEach((field) => {
      validateField(field, formData[field as keyof typeof formData]);
    });

    const hasErrors = Object.keys(errors).length > 0;
    
    if (!hasErrors && recaptchaChecked) {
      onRegister();
    } else if (!recaptchaChecked) {
      alert('Silakan verifikasi reCAPTCHA terlebih dahulu');
    }
  };

  const handleGoogleSignUp = () => {
    // Mock Google Sign-up
    onRegister();
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Gradient Overlay - LIGHTER */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/55" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col px-6 py-6">
        {/* Logo Section - SAME AS LOGIN */}
        <div className="text-center mb-6">
          {/* Main Logo - Matur Dokter */}
          <div className="w-28 h-28 mx-auto mb-3 drop-shadow-2xl">
            <img
              src={logoImage}
              alt="Matur Dokter"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Partner Logos Row - 119, Kemenkes, PMI - No Background */}
          <div className="flex items-center justify-center gap-2 mb-5">
            {/* Logo 119 */}
            <div className="w-8 h-8 drop-shadow-lg">
              <img
                src={logo119}
                alt="119"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Logo Kemenkes */}
            <div className="w-8 h-8 drop-shadow-lg">
              <img
                src={kemenkesLogo}
                alt="Kemenkes"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Logo PMI */}
            <div className="w-8 h-8 drop-shadow-lg">
              <img
                src={pmiLogo}
                alt="PMI"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Welcome Text */}
          <p className="text-white/90 text-sm mb-1 drop-shadow-md">
            Selamat Datang di,
          </p>
          <h1 className="text-white text-2xl mb-1 drop-shadow-lg" style={{ fontWeight: 700 }}>
            MATUR DOKTER
          </h1>
          <p className="text-white/80 text-xs drop-shadow-md">
            Silakan lengkapi data diri Anda
          </p>
        </div>

        {/* Register Form */}
        <div className="flex-1 flex flex-col max-w-md mx-auto w-full pb-4">
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name Input */}
            <div>
              <label className="block text-white text-sm mb-2" style={{ fontWeight: 600 }}>
                Nama Lengkap
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onBlur={(e) => validateField('name', e.target.value)}
                  placeholder="Masukkan nama lengkap"
                  className={`w-full bg-white/95 backdrop-blur-sm rounded-2xl px-12 py-3.5 text-gray-700 placeholder-gray-400 outline-none transition-all ${
                    errors.name ? 'border-2 border-red-500' : 'border-2 border-transparent focus:border-[#C41E3A]'
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-red-400 text-xs mt-1 ml-1 bg-red-900/30 px-3 py-1 rounded-lg inline-block">
                  ⚠️ {errors.name}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-white text-sm mb-2" style={{ fontWeight: 600 }}>
                Email
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onBlur={(e) => validateField('email', e.target.value)}
                  placeholder="Masukkan email"
                  className={`w-full bg-white/95 backdrop-blur-sm rounded-2xl px-12 py-3.5 text-gray-700 placeholder-gray-400 outline-none transition-all ${
                    errors.email ? 'border-2 border-red-500' : 'border-2 border-transparent focus:border-[#C41E3A]'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-red-400 text-xs mt-1 ml-1 bg-red-900/30 px-3 py-1 rounded-lg inline-block">
                  ⚠️ {errors.email}
                </p>
              )}
            </div>

            {/* Phone Input */}
            <div>
              <label className="block text-white text-sm mb-2" style={{ fontWeight: 600 }}>
                Nomor HP
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Phone className="w-5 h-5" />
                </div>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  onBlur={(e) => validateField('phone', e.target.value)}
                  placeholder="08xxxxxxxxxx"
                  className={`w-full bg-white/95 backdrop-blur-sm rounded-2xl px-12 py-3.5 text-gray-700 placeholder-gray-400 outline-none transition-all ${
                    errors.phone ? 'border-2 border-red-500' : 'border-2 border-transparent focus:border-[#C41E3A]'
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="text-red-400 text-xs mt-1 ml-1 bg-red-900/30 px-3 py-1 rounded-lg inline-block">
                  ⚠️ {errors.phone}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-white text-sm mb-2" style={{ fontWeight: 600 }}>
                Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  onBlur={(e) => validateField('password', e.target.value)}
                  placeholder="Minimal 6 karakter"
                  className={`w-full bg-white/95 backdrop-blur-sm rounded-2xl px-12 py-3.5 text-gray-700 placeholder-gray-400 outline-none transition-all ${
                    errors.password ? 'border-2 border-red-500' : 'border-2 border-transparent focus:border-[#C41E3A]'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-xs mt-1 ml-1 bg-red-900/30 px-3 py-1 rounded-lg inline-block">
                  ⚠️ {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-white text-sm mb-2" style={{ fontWeight: 600 }}>
                Konfirmasi Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange('confirmPassword', e.target.value)}
                  onBlur={(e) => validateField('confirmPassword', e.target.value)}
                  placeholder="Ulangi password"
                  className={`w-full bg-white/95 backdrop-blur-sm rounded-2xl px-12 py-3.5 text-gray-700 placeholder-gray-400 outline-none transition-all ${
                    errors.confirmPassword ? 'border-2 border-red-500' : 'border-2 border-transparent focus:border-[#C41E3A]'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-400 text-xs mt-1 ml-1 bg-red-900/30 px-3 py-1 rounded-lg inline-block">
                  ⚠️ {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* ReCAPTCHA */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 flex items-center gap-3 mt-4">
              <input
                type="checkbox"
                id="recaptcha"
                checked={recaptchaChecked}
                onChange={(e) => setRecaptchaChecked(e.target.checked)}
                className="w-5 h-5 cursor-pointer accent-[#C41E3A]"
              />
              <label htmlFor="recaptcha" className="text-gray-700 text-sm cursor-pointer flex-1">
                Saya bukan robot
              </label>
              <div className="text-xl">🤖</div>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-[#C41E3A] hover:bg-[#A01830] text-white py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl text-base"
              style={{ fontWeight: 700 }}
            >
              Daftar Sekarang
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-white/30"></div>
              <span className="text-white/80 text-sm">atau</span>
              <div className="flex-1 h-px bg-white/30"></div>
            </div>

            {/* Google Sign-up */}
            <button
              type="button"
              onClick={handleGoogleSignUp}
              className="w-full bg-white/95 backdrop-blur-sm hover:bg-white text-gray-700 py-4 rounded-2xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-base"
              style={{ fontWeight: 600 }}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Daftar dengan Google
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-3">
            <p className="text-white/90 text-sm drop-shadow-md">
              Sudah punya akun?{' '}
              <button
                onClick={onSwitchToLogin}
                className="text-white hover:text-yellow-300 transition-colors"
                style={{ fontWeight: 700 }}
              >
                Masuk Sekarang
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}