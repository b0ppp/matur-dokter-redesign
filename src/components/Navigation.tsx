import { Home, Search, Briefcase, User, Phone } from 'lucide-react';
import { Page } from '../App';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 safe-area-bottom">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-5 items-end relative px-2 pt-2 pb-3">
          {/* Home */}
          <button
            onClick={() => onNavigate('home')}
            className={`flex flex-col items-center justify-center gap-1.5 py-2 transition-all ${
              currentPage === 'home' ? 'text-[#C41E3A]' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Home className="w-6 h-6" strokeWidth={currentPage === 'home' ? 2.5 : 2} />
            <span className="text-[10px]" style={{ fontWeight: currentPage === 'home' ? 600 : 500 }}>
              Beranda
            </span>
          </button>

          {/* Search */}
          <button
            onClick={() => onNavigate('search')}
            className={`flex flex-col items-center justify-center gap-1.5 py-2 transition-all ${
              currentPage === 'search' ? 'text-[#C41E3A]' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Search className="w-6 h-6" strokeWidth={currentPage === 'search' ? 2.5 : 2} />
            <span className="text-[10px]" style={{ fontWeight: currentPage === 'search' ? 600 : 500 }}>
              Cari
            </span>
          </button>

          {/* Emergency SOS Button - Center with proper spacing */}
          <div className="flex flex-col items-center justify-end -mt-8">
            <button
              onClick={() => onNavigate('emergency')}
              className="bg-gradient-to-br from-[#C41E3A] to-[#A01830] hover:from-[#A01830] hover:to-[#8B1429] text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 border-4 border-white mb-1"
            >
              <span className="text-xl" style={{ fontWeight: 700 }}>SOS</span>
            </button>
            <span className="text-[10px] text-[#C41E3A]" style={{ fontWeight: 600 }}>
              Darurat
            </span>
          </div>

          {/* Services */}
          <button
            onClick={() => onNavigate('services')}
            className={`flex flex-col items-center justify-center gap-1.5 py-2 transition-all ${
              currentPage === 'services' ? 'text-[#C41E3A]' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Briefcase className="w-6 h-6" strokeWidth={currentPage === 'services' ? 2.5 : 2} />
            <span className="text-[10px]" style={{ fontWeight: currentPage === 'services' ? 600 : 500 }}>
              Layanan
            </span>
          </button>

          {/* Profile */}
          <button
            onClick={() => onNavigate('profile')}
            className={`flex flex-col items-center justify-center gap-1.5 py-2 transition-all ${
              currentPage === 'profile' ? 'text-[#C41E3A]' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <User className="w-6 h-6" strokeWidth={currentPage === 'profile' ? 2.5 : 2} />
            <span className="text-[10px]" style={{ fontWeight: currentPage === 'profile' ? 600 : 500 }}>
              Profil
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}