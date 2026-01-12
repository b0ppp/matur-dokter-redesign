import { useEffect } from 'react';
import logoImage from 'figma:asset/76db9b87e86f270b20d460ccf67f9df8aacf73a6.png';
import kemenkesLogo from 'figma:asset/5c18b4926bb89375004ea7d350f97e2f1b4f6157.png';

interface SplashProps {
  onEnter: () => void;
}

export function Splash({ onEnter }: SplashProps) {
  useEffect(() => {
    const timer = setTimeout(onEnter, 2500);
    return () => clearTimeout(timer);
  }, [onEnter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#C41E3A] via-[#D32F2F] to-[#C41E3A] flex flex-col items-center justify-between py-12 px-8 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse" />
      <div className="absolute bottom-32 right-12 w-40 h-40 bg-white/10 rounded-full animate-pulse delay-300" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-500" />

      {/* Spacer */}
      <div></div>

      {/* Logo Container */}
      <div className="text-center z-10">
        {/* Logo Image */}
        <div className="mb-8 animate-fade-in">
          <img
            src={logoImage}
            alt="Matur Dokter"
            className="w-48 h-48 mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Tagline */}
        <p className="text-white/90 text-lg mb-8 animate-fade-in-delay drop-shadow-lg" style={{ fontWeight: 500 }}>
          Layanan Kesehatan Kabupaten Klaten
        </p>

        {/* Loading Indicator */}
        <div className="flex justify-center gap-2 animate-fade-in-delay-2">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      </div>

      {/* Footer - Kemenkes Logo */}
      <div className="z-10 animate-fade-in-delay-2">
        <p className="text-white/70 text-xs text-center mb-3">Bekerja sama dengan</p>
        <div className="flex items-center justify-center gap-3">
          <img
            src={kemenkesLogo}
            alt="Kementerian Kesehatan RI"
            className="h-12 w-auto drop-shadow-lg"
          />
          <div className="text-left">
            <p className="text-white text-xs" style={{ fontWeight: 600 }}>Kementerian Kesehatan</p>
            <p className="text-white/80 text-[10px]">Republik Indonesia</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 0.8s ease-out 0.3s both;
        }
        .animate-fade-in-delay-2 {
          animation: fade-in 0.8s ease-out 0.6s both;
        }
      `}</style>
    </div>
  );
}