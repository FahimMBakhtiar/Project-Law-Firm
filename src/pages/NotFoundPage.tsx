import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ArrowRight, Home } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] bg-[#FAF9F6] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-5 shadow-xs">
        <div className="w-16 h-16 rounded-full bg-[#0A192F]/5 flex items-center justify-center text-[#0A192F] mx-auto">
          <Scale className="w-8 h-8 text-[#C5A059]" />
        </div>

        <div className="space-y-2">
          <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] block">
            Error 404
          </span>
          <h1 className="text-2xl font-serif text-[#0A192F] font-bold">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The requested legal resource or page could not be located. It may have been relocated or updated.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0A192F] text-white text-xs font-semibold rounded-md hover:bg-[#112240] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-slate-300 text-slate-700 text-xs font-semibold rounded-md hover:bg-slate-50 transition-colors"
          >
            <span>Our Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
