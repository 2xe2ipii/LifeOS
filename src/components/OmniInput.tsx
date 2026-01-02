// src/components/OmniInput.tsx
import { Send, Coffee, Droplets, Dumbbell } from "lucide-react";

export function OmniInput() {
  return (
    <div className="px-4 py-4 border-b border-gray-100 bg-white">
      {/* The Input Field */}
      <div className="relative">
        <input
          type="text"
          placeholder="What's happening? (/movie, /thought...)"
          className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-2xl p-4 pr-12 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
        />
        <button className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-600 p-1">
          <Send size={18} />
        </button>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-2 mt-3 overflow-x-auto pb-1 no-scrollbar">
        <QuickBtn icon={<Droplets size={14} />} label="250ml" color="bg-blue-50 text-blue-600" />
        <QuickBtn icon={<Coffee size={14} />} label="Coffee" color="bg-amber-50 text-amber-700" />
        <QuickBtn icon={<Dumbbell size={14} />} label="Gym" color="bg-orange-50 text-orange-600" />
      </div>
    </div>
  );
}

// Helper for the buttons
function QuickBtn({ icon, label, color }: { icon: any; label: string; color: string }) {
  return (
    <button className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap active:scale-95 transition-transform ${color}`}>
      {icon}
      {label}
    </button>
  );
}