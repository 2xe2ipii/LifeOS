import type { ReactNode } from "react";
import { clsx } from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  action?: ReactNode; // Optional top-right button/link
}

export function Card({ children, className, title, action }: CardProps) {
  return (
    <div className={clsx(
      "bg-white border border-gray-200 rounded-2xl p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow duration-200", 
      className
    )}>
      {(title || action) && (
        <div className="flex justify-between items-end mb-6">
          {title && (
            <h3 className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              {title}
            </h3>
          )}
          {action && <div>{action}</div>}
        </div>
      )}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}