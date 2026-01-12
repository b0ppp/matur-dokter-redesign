import { ArrowLeft, MoreVertical, Paperclip, Send } from 'lucide-react';
import { useState } from 'react';

interface DoctorChatProps {
  doctor: {
    name: string;
    image: string;
    specialty?: string;
  };
  onBack: () => void;
}

export function DoctorChat({ doctor, onBack }: DoctorChatProps) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages([...messages, {
        id: Date.now(),
        text: message,
        isUser: true,
        time: 'Baru saja'
      }]);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF5F5] flex flex-col">
      {/* Header */}
      <div className="bg-[#C41E3A] px-5 py-3 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={onBack} className="text-white">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-white text-base" style={{ fontWeight: 700 }}>
                {doctor.name}
              </h1>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-white/90 text-xs">Online</span>
              </div>
            </div>
          </div>
          <button className="text-white">
            <MoreVertical className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 px-5 py-6 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400 text-sm text-center">
              Belum ada percakapan.<br />
              Mulai chat dengan dokter sekarang.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    msg.isUser
                      ? 'bg-[#C41E3A] text-white rounded-tr-none'
                      : 'bg-gray-200 text-gray-800 rounded-tl-none'
                  }`}
                >
                  <p className="text-sm mb-1">{msg.text}</p>
                  <p className={`text-xs ${msg.isUser ? 'text-white/70' : 'text-gray-500'} text-right`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex-1 bg-gray-100 rounded-full px-5 py-3 flex items-center gap-3">
            <input
              type="text"
              placeholder="Tuliskan keluhan yang anda rasakan."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
            />
            <button className="text-gray-400">
              <Paperclip className="w-5 h-5" />
            </button>
          </div>
          <button
            onClick={handleSend}
            className="bg-yellow-400 hover:bg-yellow-500 p-3 rounded-full transition-colors"
          >
            <Send className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
