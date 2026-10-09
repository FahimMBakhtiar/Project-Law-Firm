import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
  return (
    <nav aria-label="Breadcrumb" className={`text-xs text-slate-500 font-medium ${className}`}>
      <ol className="flex items-center flex-wrap gap-1.5">
        <li>
          <Link to="/" className="text-slate-600 hover:text-[#0A192F] transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
              {item.href && !isLast ? (
                <Link to={item.href} className="text-slate-600 hover:text-[#0A192F] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-[#0A192F] font-semibold truncate max-w-[240px] sm:max-w-md">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
