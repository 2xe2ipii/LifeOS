// src/components/Header.tsx
import { Battery, Wifi } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 py-3">
      {/* Fake Phone Status Bar for the aesthetic */}
      <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
        <span>9:41 AM</span>
        <div className="flex gap-1">
          <Wifi size={14} />
          <Battery size={14} />
        </div>
      </div>
      
      {/* Vitals Summary */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-sm font-bold text-gray-900">Saturday, Jan 3</h1>
          <p className="text-xs text-gray-500">Lip City • 🌤️ 28°C</p>
        </div>
        <div className="flex gap-3 text-xs font-medium">
           <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded-full">💧 1.2L</span>
           <span className="text-purple-600 bg-purple-50 px-2 py-1 rounded-full">💤 7h</span>
        </div>
      </div>
    </header>
  );
}