import welcomeImage from 'figma:asset/e951368bf43bdee88c2558fa7ddb7933845a5986.png';

interface WelcomeProps {
  onEnter: () => void;
}

export function Welcome({ onEnter }: WelcomeProps) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white flex flex-col">
      {/* Doctor Team Photo with Gradient Fade */}
      <div className="relative h-[50vh] md:h-[65vh] overflow-hidden">
        {/* Photo */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${welcomeImage})`,
            backgroundPosition: 'center 20%'
          }}
        />
        
        {/* Gradient Overlay - Fade to Pink */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white" />
      </div>

      {/* Bottom Content Section */}
      <div className="flex-1 bg-gradient-to-b from-white via-pink-50 to-pink-100 px-8 pt-12 pb-12 flex flex-col items-center justify-center">
        {/* Content Container - Max Width for Desktop */}
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
          {/* Logo & Tagline */}
          <div className="text-center mb-16">
            <h1 
              className="text-[#E63946] text-5xl md:text-6xl lg:text-7xl mb-6"
              style={{ 
                fontWeight: 900,
                letterSpacing: '-0.02em',
                textShadow: '0 2px 10px rgba(230, 57, 70, 0.15)'
              }}
            >
              MATUR DOKTER
            </h1>
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-sm md:max-w-xl mx-auto px-4">
              Akses Layanan Kesehatan Terpadu Kabupaten Klaten dalam Satu Genggaman.
            </p>
          </div>

          {/* Enter Button */}
          <button
            onClick={onEnter}
            className="w-full max-w-sm md:max-w-md bg-[#C41E3A] hover:bg-[#A01830] text-white py-4 md:py-5 rounded-full transition-all shadow-lg hover:shadow-xl text-base md:text-lg"
            style={{ fontWeight: 600 }}
          >
            Masuk Aplikasi
          </button>
        </div>
      </div>
    </div>
  );
}