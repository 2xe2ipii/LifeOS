// src/layouts/AppLayout.tsx
import type { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex justify-center">
      {/* Mobile Container: Max width constrained to look like a phone on desktop */}
      <div className="w-full max-w-md bg-white min-h-screen shadow-2xl relative flex flex-col">
        {children}
      </div>
    </div>
  );
}