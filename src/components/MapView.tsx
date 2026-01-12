import { MapPin } from 'lucide-react';

interface Location {
  lat: number;
  lng: number;
  name: string;
}

interface MapViewProps {
  locations: Location[];
  center?: { lat: number; lng: number };
  className?: string;
}

export function MapView({ locations, center, className = '' }: MapViewProps) {
  const defaultCenter = center || (locations.length > 0 
    ? { lat: locations[0].lat, lng: locations[0].lng } 
    : { lat: -6.2088, lng: 106.8456 }); // Default to Jakarta

  return (
    <div className={`relative bg-gray-200 rounded-lg overflow-hidden ${className}`}>
      {/* Simplified map representation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100">
        {/* Grid overlay to simulate map */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Location markers */}
        {locations.map((location, index) => (
          <div
            key={index}
            className="absolute transform -translate-x-1/2 -translate-y-full"
            style={{
              left: `${50 + (index % 3 - 1) * 20}%`,
              top: `${50 + (Math.floor(index / 3) % 3 - 1) * 15}%`
            }}
          >
            <div className="relative group">
              <MapPin className="w-8 h-8 text-red-600 drop-shadow-lg animate-bounce" style={{ animationDelay: `${index * 0.1}s` }} />
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-white px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm z-10">
                {location.name}
              </div>
            </div>
          </div>
        ))}

        {/* Center indicator */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg"></div>
        </div>
      </div>

      {/* Map controls */}
      <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-10">
        <button className="bg-white hover:bg-gray-100 p-2 rounded shadow-md transition-colors">
          <span className="text-xl">+</span>
        </button>
        <button className="bg-white hover:bg-gray-100 p-2 rounded shadow-md transition-colors">
          <span className="text-xl">−</span>
        </button>
      </div>

      {/* Info overlay */}
      <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded-lg shadow-md text-sm z-10">
        <span className="text-gray-600">{locations.length} locations found</span>
      </div>
    </div>
  );
}
