import type { ReactNode } from "react";

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8 md:p-12 font-sans">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            LifeOS <span className="text-gray-400 font-normal">/ 2026</span>
          </h1>
          <p className="text-gray-500 mt-2">Drex's Personal ERP</p>
        </header>
        
        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {children}
        </div>
      </div>
    </div>
  );
}