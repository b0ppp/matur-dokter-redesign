import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import ambulanceImg from 'figma:asset/b8a1e7ce29f925fd44999b7afe55b1230a74ff44.png';
import locationImg from 'figma:asset/c876d4da861152913eca2be35f36516387c26130.png';
import checklistImg from 'figma:asset/213f6db51a5471b365cde0c05127be4cc0ed8caf.png';
import hospitalImg from 'figma:asset/7c1703231bc201fbe1bdf5d0daa9caa1258fbf8e.png';

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'LAYANAN GAWAT DARURAT',
      description: 'Dapatkan pertolongan medis segera di Kabupaten Klaten. Aplikasi Matur Dokter menghubungkan Anda langsung dengan tim gawat darurat secara cepat dan tepat.',
      image: ambulanceImg
    },
    {
      title: 'AKSES MUDAH FASILITAS KESEHATAN',
      description: 'Layanan kesehatan kini lebih dekat dengan Anda. Temui Kader Matur Dokter yang tersebar di setiap Desa dan Kelurahan untuk konsultasi kesehatan dasar tanpa ribet.',
      image: locationImg
    },
    {
      title: 'PANTAU KESEHATAN ANDA',
      description: 'Jangan bingung soal kesehatan. Dapatkan informasi lengkap melalui layanan Chat, Telepon, atau tatap muka dengan Kader kami. Kami siap menjawab kebutuhan Anda.',
      image: checklistImg
    },
    {
      title: 'FASILITAS KESEHATAN LENGKAP',
      description: 'Temukan Rumah Sakit dan Fasilitas Kesehatan terdekat di seluruh Klaten dengan mudah. Tersedia juga layanan Pemesanan Ambulans yang siap siaga saat kondisi mendesak.',
      image: hospitalImg
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="min-h-screen bg-[#FDF5F5] flex flex-col">
      {/* Main Container with Max Width for Desktop */}
      <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col">
        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
          {/* Illustration */}
          <div className="w-full max-w-sm mb-8 md:mb-12">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-[#C41E3A] text-2xl md:text-3xl text-center mb-4 md:mb-6 px-4" style={{ fontWeight: 700 }}>
            {slides[currentSlide].title}
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-center text-sm md:text-base leading-relaxed max-w-md px-4">
            {currentSlide === 3 ? (
              <>
                Temukan Rumah Sakit dan Fasilitas Kesehatan terdekat di seluruh Klaten dengan mudah. Tersedia juga layanan <span className="text-[#C41E3A]" style={{ fontWeight: 600 }}>Pemesanan Ambulans</span> yang siap siaga saat kondisi mendesak.
              </>
            ) : (
              slides[currentSlide].description
            )}
          </p>
        </div>

        {/* Bottom Section */}
        <div className="px-8 pb-8 md:pb-12">
          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mb-8">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-[#C41E3A]'
                    : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={handleSkip}
              className="text-gray-500 text-sm md:text-base hover:text-gray-700 transition-colors"
            >
              Lewati
            </button>

            <button
              onClick={handleNext}
              className="bg-[#C41E3A] hover:bg-[#A01830] text-white px-8 py-3 md:px-10 md:py-4 rounded-full flex items-center gap-2 shadow-lg transition-all"
              style={{ fontWeight: 600 }}
            >
              <span className="text-sm md:text-base">{currentSlide === slides.length - 1 ? 'Mulai Sekarang' : 'Selanjutnya'}</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}