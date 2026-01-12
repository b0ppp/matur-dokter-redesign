import { BookOpen, Heart, Brain, Activity, Apple, Shield } from 'lucide-react';
import { useState } from 'react';
import kemenkesLogo from 'figma:asset/5c18b4926bb89375004ea7d350f97e2f1b4f6157.png';

interface HealthInfoProps {
  onBack?: () => void;
}

export function HealthInfo({ onBack }: HealthInfoProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [feedback, setFeedback] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'Semua', icon: BookOpen },
    { id: 'heart', name: 'Jantung', icon: Heart },
    { id: 'mental', name: 'Mental', icon: Brain },
    { id: 'nutrition', name: 'Nutrisi', icon: Apple },
    { id: 'prevention', name: 'Pencegahan', icon: Shield }
  ];

  const articles = [
    {
      id: '1',
      title: 'Tips Menjaga Kesehatan Jantung',
      category: 'heart',
      excerpt: 'Pelajari cara-cara sederhana untuk menjaga kesehatan jantung Anda dengan pola hidup sehat.',
      readTime: '5 menit',
      date: '5 Jan 2026',
      image: '❤️'
    },
    {
      id: '2',
      title: 'Pentingnya Kesehatan Mental',
      category: 'mental',
      excerpt: 'Kesehatan mental sama pentingnya dengan kesehatan fisik. Kenali tanda-tanda dan cara mengatasinya.',
      readTime: '7 menit',
      date: '4 Jan 2026',
      image: '🧠'
    },
    {
      id: '3',
      title: 'Gizi Seimbang untuk Keluarga',
      category: 'nutrition',
      excerpt: 'Panduan lengkap nutrisi seimbang untuk seluruh anggota keluarga.',
      readTime: '6 menit',
      date: '3 Jan 2026',
      image: '🥗'
    },
    {
      id: '4',
      title: 'Pencegahan Penyakit Musiman',
      category: 'prevention',
      excerpt: 'Langkah-langkah pencegahan penyakit yang sering muncul saat pergantian musim.',
      readTime: '4 menit',
      date: '2 Jan 2026',
      image: '🛡️'
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const handleReadArticle = (title: string) => {
    setFeedback(`Membuka artikel: ${title}`);
    setTimeout(() => setFeedback(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Header with Kemenkes Logo */}
      <div className="bg-gradient-to-br from-[#C41E3A] to-[#A01830] rounded-b-3xl px-5 pt-6 pb-10 shadow-lg mb-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-10"></div>
        
        <div className="relative z-10">
          {/* Kemenkes Logo */}
          <div className="flex justify-center mb-4">
            <div className="bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
              <img
                src={kemenkesLogo}
                alt="Kementerian Kesehatan RI"
                className="h-10 w-auto"
              />
              <div className="text-left border-l-2 border-gray-200 pl-3">
                <p className="text-gray-800 text-xs" style={{ fontWeight: 600 }}>Kementerian Kesehatan</p>
                <p className="text-gray-600 text-[10px]">Republik Indonesia</p>
              </div>
            </div>
          </div>

          <h1 className="text-white text-2xl text-center mb-2" style={{ fontWeight: 700 }}>
            Informasi Kesehatan
          </h1>
          <p className="text-white/90 text-center text-sm">
            Artikel dan tips kesehatan terpercaya
          </p>
        </div>
      </div>

      {/* Category Selector */}
      <div className="px-5 mb-6">
        <div className="flex items-center justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === cat.id ? 'bg-[#C41E3A] text-white' : 'bg-gray-100 text-gray-500'
              }`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <cat.icon className="w-5 h-5" />
              <span className="ml-2 text-sm">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Articles List */}
      <div className="px-5">
        <div className="space-y-4">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4"
              onClick={() => handleReadArticle(article.title)}
            >
              <div className="text-4xl text-gray-500">{article.image}</div>
              <div className="flex-1">
                <h2 className="text-gray-800 text-lg" style={{ fontWeight: 700 }}>{article.title}</h2>
                <p className="text-gray-500 text-sm">{article.excerpt}</p>
                <div className="mt-2 flex items-center text-gray-500 text-sm">
                  <Activity className="w-4 h-4 mr-1" />
                  {article.readTime}
                  <span className="mx-2">•</span>
                  {article.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feedback Area */}
      {feedback && (
        <div className="fixed bottom-5 left-5 right-5 bg-gray-800 text-white p-4 rounded-full shadow-lg text-center">
          {feedback}
        </div>
      )}
    </div>
  );
}