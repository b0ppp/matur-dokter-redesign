import { MapPin, Phone, Clock, Star, Navigation } from 'lucide-react';
import { useState } from 'react';

export interface Facility {
  id: string;
  name: string;
  address: string;
  phone: string;
  distance: string;
  isOpen: boolean;
  openHours: string;
  rating: number;
  services?: string[];
  lat: number;
  lng: number;
}

interface FacilityCardProps {
  facility: Facility;
}

export function FacilityCard({ facility }: FacilityCardProps) {
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);

  const handleAction = (action: string) => {
    setActionFeedback(action);
    setTimeout(() => setActionFeedback(null), 2000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6">
      {/* Feedback Toast */}
      {actionFeedback && (
        <div className="mb-3 bg-blue-50 border-l-4 border-blue-500 p-3 rounded text-sm">
          <p className="text-blue-800">{actionFeedback}</p>
        </div>
      )}

      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl text-gray-800 mb-1">
            {facility.name}
          </h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(facility.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">{facility.rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span
            className={`px-3 py-1 rounded-full text-xs ${
              facility.isOpen
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {facility.isOpen ? 'Open' : 'Closed'}
          </span>
          <span className="text-sm text-gray-600">{facility.distance}</span>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-start gap-2 text-gray-600 text-sm">
          <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{facility.address}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span>{facility.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Clock className="w-4 h-4 flex-shrink-0" />
          <span>{facility.openHours}</span>
        </div>
      </div>

      {facility.services && facility.services.length > 0 && (
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {facility.services.map((service, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-2 sm:gap-3">
        <button
          onClick={() => handleAction('Opening directions...')}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 sm:px-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
        >
          <Navigation className="w-4 h-4" />
          <span>Directions</span>
        </button>
        <button
          onClick={() => handleAction(`Calling ${facility.name}...`)}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 sm:px-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm sm:text-base"
        >
          <Phone className="w-4 h-4" />
          <span>Call</span>
        </button>
      </div>
    </div>
  );
}
