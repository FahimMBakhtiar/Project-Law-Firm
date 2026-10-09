import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', className = '', size = 'md' }) => {
  const isLight = variant === 'light';

  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  }[size];

  return (
    <Link to="/" className={`inline-flex items-center gap-3 group shrink-0 ${className}`}>
      {/* Geometric 'K' Monogram */}
      <svg
        viewBox="0 0 48 48"
        className={`${sizeClasses} w-auto aspect-square`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left vertical pillar */}
        <path
          d="M10 6H19V42H10V6Z"
          fill={isLight ? '#FFFFFF' : '#0A192F'}
        />
        {/* Top diagonal leg */}
        <path
          d="M19 24L34 8H45L26 27L19 24Z"
          fill={isLight ? '#E2E8F0' : '#1E293B'}
        />
        {/* Bottom diagonal leg in warm gold accent */}
        <path
          d="M23 23L42 42H31L18 28L23 23Z"
          fill="#C5A059"
        />
      </svg>

      {/* Brand Wordmark */}
      <div className="flex flex-col tracking-tight">
        <span
          className={`font-brand font-bold uppercase leading-none tracking-wider transition-colors ${
            isLight ? 'text-white' : 'text-[#0A192F]'
          } ${size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-lg' : 'text-xl'}`}
        >
          Karkon
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <div className="h-[1px] w-2 bg-[#C5A059]" />
          <span className="font-brand text-[10px] tracking-[0.25em] font-semibold uppercase text-[#C5A059]">
            Legal
          </span>
          <div className="h-[1px] w-2 bg-[#C5A059]" />
        </div>
      </div>
    </Link>
  );
};
