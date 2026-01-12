import { User, MapPin, Phone, Mail, Calendar, Settings, LogOut, ChevronRight, Shield, Bell, HelpCircle, FileText } from 'lucide-react';
import { useState } from 'react';
import kemenkesLogo from 'figma:asset/5c18b4926bb89375004ea7d350f97e2f1b4f6157.png';
import logoMaturDokter from 'figma:asset/76db9b87e86f270b20d460ccf67f9df8aacf73a6.png';

interface ProfileProps {
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function Profile({ onNavigate, onLogout }: ProfileProps) {
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);

  const handleAction = (action: string) => {
    setActionFeedback(action);
    setTimeout(() => setActionFeedback(null), 2000);
  };

  const handleLogout = () => {
    if (confirm('Apakah Anda yakin ingin keluar?')) {
      onLogout();
    }
  };

  const quickActions = [
    { icon: '❤️', label: 'Kesehatan', color: 'bg-pink-100', page: 'health-records' },
    { icon: '💬', label: 'Konsultasi', color: 'bg-pink-100', page: 'consultation' },
    { icon: '📢', label: 'Pengumuman', color: 'bg-pink-100', page: 'announcements' }
  ];

  const settingsMenu = [
    { icon: '👤', label: 'Ubah Profil', color: 'bg-blue-100', page: 'edit-profile' },
    { icon: '🔒', label: 'Ubah Password', color: 'bg-yellow-100', page: 'change-password' },
    { icon: '🚪', label: 'Keluar', color: 'bg-red-100', action: 'logout' }
  ];

  const appMenu = [
    { icon: 'ℹ️', label: 'Tentang Kami', color: 'bg-blue-100', page: 'about-us' },
    { icon: '📞', label: 'Kontak Kami', color: 'bg-orange-100', page: 'contact-us' },
    { icon: '🔒', label: 'Kebijakan Privasi', color: 'bg-green-100', page: 'privacy-policy' },
    { icon: '❓', label: 'FAQ', color: 'bg-pink-100', page: 'faq' }
  ];

  return (
    <div className="min-h-screen bg-[#FDF5F5]">
      {/* Header */}
      <div className="bg-[#C41E3A] rounded-b-3xl px-5 pt-6 pb-16 shadow-md mb-6 relative">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-white text-xl" style={{ fontWeight: 700 }}>Profil</h1>
          <button className="text-white">
            <Bell className="w-6 h-6" />
          </button>
        </div>
        <p className="text-white/90 text-sm">Matur Dokter Klaten</p>
      </div>

      <div className="px-5">
        {/* Feedback Message */}
        {actionFeedback && (
          <div className="mb-4 bg-blue-50 border-2 border-blue-200 rounded-2xl p-3">
            <p className="text-blue-800 text-sm">{actionFeedback}</p>
          </div>
        )}

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-md p-5 mb-6 -mt-12">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=100&h=100&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-gray-800 text-lg mb-1" style={{ fontWeight: 700 }}>
                08129993351
              </h2>
              <p className="text-gray-600 text-sm break-all">
                kalladararaja84@gmail.com
              </p>
            </div>
          </div>

          {/* Konsultasi Medis Counter */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-4 mb-6">
            <p className="text-gray-600 text-sm mb-1">Konsultasi Medis</p>
            <div className="flex items-center gap-2">
              <span className="text-3xl">💬</span>
              <span className="text-[#C41E3A] text-4xl" style={{ fontWeight: 700 }}>1</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => {
                  handleAction(`Membuka ${action.label}...`);
                  onNavigate(action.page);
                }}
                className={`${action.color} rounded-2xl p-4 flex flex-col items-center justify-center min-h-[90px] hover:shadow-md transition-shadow`}
              >
                <div className="text-3xl mb-2">{action.icon}</div>
                <span className="text-gray-700 text-xs text-center" style={{ fontWeight: 500 }}>
                  {action.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Pengaturan Section */}
        <div className="mb-6">
          <h3 className="text-[#C41E3A] text-lg mb-3 px-1" style={{ fontWeight: 700 }}>
            Pengaturan
          </h3>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {settingsMenu.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  handleAction(`${item.label}...`);
                  if (item.action === 'logout') {
                    handleLogout();
                  } else {
                    onNavigate(item.page);
                  }
                }}
                className={`w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors ${
                  index !== settingsMenu.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-xl`}>
                  {item.icon}
                </div>
                <span className="flex-1 text-left text-gray-700 text-sm" style={{ fontWeight: 500 }}>
                  {item.label}
                </span>
                <ChevronRight className="w-5 h-5 text-[#C41E3A]" />
              </button>
            ))}
          </div>
        </div>

        {/* Matur Dokter Section */}
        <div className="mb-6">
          <h3 className="text-[#C41E3A] text-lg mb-3 px-1" style={{ fontWeight: 700 }}>
            Matur Dokter
          </h3>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            {appMenu.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  handleAction(`Membuka ${item.label}...`);
                  onNavigate(item.page);
                }}
                className={`w-full flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors ${
                  index !== appMenu.length - 1 ? 'border-b border-gray-100' : ''
                }`}
              >
                <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center text-xl`}>
                  {item.icon}
                </div>
                <span className="flex-1 text-left text-gray-700 text-sm" style={{ fontWeight: 500 }}>
                  {item.label}
                </span>
                <ChevronRight className="w-5 h-5 text-[#C41E3A]" />
              </button>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="px-5 mb-24">
          <h3 className="text-gray-800 text-sm mb-3" style={{ fontWeight: 600 }}>Tentang Aplikasi</h3>
          <div className="bg-white rounded-2xl shadow-sm p-5">
            {/* App Info */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={logoMaturDokter}
                alt="Matur Dokter"
                className="w-16 h-16"
              />
              <div>
                <h4 className="text-gray-800 text-base mb-1" style={{ fontWeight: 600 }}>
                  Matur Dokter
                </h4>
                <p className="text-gray-600 text-sm">Versi 1.0.0</p>
              </div>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Aplikasi layanan kesehatan terpadu Kabupaten Klaten untuk memudahkan akses masyarakat terhadap informasi dan layanan kesehatan.
            </p>

            {/* Partnership */}
            <div className="pt-4 border-t border-gray-100">
              <p className="text-gray-500 text-xs mb-3">Bekerja sama dengan:</p>
              <div className="flex items-center gap-3 bg-gradient-to-r from-teal-50 to-lime-50 rounded-xl p-3 border border-teal-100">
                <img
                  src={kemenkesLogo}
                  alt="Kementerian Kesehatan RI"
                  className="h-12 w-auto"
                />
                <div>
                  <p className="text-gray-800 text-sm" style={{ fontWeight: 600 }}>
                    Kementerian Kesehatan
                  </p>
                  <p className="text-gray-600 text-xs">Republik Indonesia</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-4 border-t border-gray-100 text-center">
              <p className="text-gray-500 text-xs">
                © 2026 Dinas Kesehatan Kabupaten Klaten
              </p>
              <p className="text-gray-400 text-[10px] mt-1">
                Semua hak dilindungi undang-undang
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}