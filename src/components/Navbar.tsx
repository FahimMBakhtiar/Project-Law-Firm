import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X, ArrowRight, ShieldAlert } from 'lucide-react';
import { Logo } from './Logo';
import { LEGAL_SERVICES } from '../data/services';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200">
      {/* Top Utility Notice Bar */}
      <div className="bg-[#07111e] text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3 h-3 text-[#C5A059]" />
              <span>Direct Enquiries:</span>
              <a href="tel:+447368139587" className="text-white hover:text-[#C5A059] font-medium transition-colors">
                +44 7368 139587
              </a>
              <span className="hidden sm:inline text-slate-500">|</span>
              <a href="tel:+442071234567" className="hidden sm:inline text-slate-300 hover:text-white transition-colors">
                +44 20 7123 4567
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="hidden md:inline">London Office: Mon–Fri 9am–6pm</span>
            <Link
              to="/admin"
              className="text-[#C5A059] hover:underline flex items-center gap-1 text-[11px] font-medium"
              title="Local Content Studio"
            >
              <span>Publisher Studio</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-white/95 backdrop-blur-md border-b transition-all duration-200 ${
          isScrolled ? 'border-slate-200 shadow-sm py-3' : 'border-slate-200 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Monogram */}
          <Logo variant="dark" />

          {/* Zone 2: Navigation Links (Single-Line, Whitespace-Nowrap) */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <Link
              to="/"
              className={`whitespace-nowrap transition-colors hover:text-[#0A192F] relative py-1 ${
                isActive('/') ? 'text-[#0A192F] font-semibold' : ''
              }`}
            >
              Home
              {isActive('/') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C5A059]" />}
            </Link>

            <Link
              to="/about"
              className={`whitespace-nowrap transition-colors hover:text-[#0A192F] relative py-1 ${
                isActive('/about') ? 'text-[#0A192F] font-semibold' : ''
              }`}
            >
              About Us
              {isActive('/about') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C5A059]" />}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`flex items-center gap-1 whitespace-nowrap transition-colors hover:text-[#0A192F] relative py-1 ${
                  isActive('/services') ? 'text-[#0A192F] font-semibold' : ''
                }`}
              >
                <span>Our Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180 text-[#C5A059]' : ''}`} />
                {isActive('/services') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C5A059]" />}
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 pt-2 z-50">
                  <div className="bg-white rounded-lg shadow-xl border border-slate-200 py-2">
                    <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Practice Areas
                      </span>
                      <Link to="/services" className="text-xs text-[#C5A059] hover:underline font-medium">
                        View All
                      </Link>
                    </div>
                    <div className="py-1">
                      {LEGAL_SERVICES.map((srv) => (
                        <Link
                          key={srv.slug}
                          to={`/services/${srv.slug}`}
                          className="block px-4 py-2 text-xs text-slate-700 hover:bg-[#FAF9F6] hover:text-[#0A192F] transition-colors"
                        >
                          <span className="font-medium text-slate-900 block">{srv.title}</span>
                          <span className="text-[11px] text-slate-500 truncate block">{srv.shortDesc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/team"
              className={`whitespace-nowrap transition-colors hover:text-[#0A192F] relative py-1 ${
                isActive('/team') ? 'text-[#0A192F] font-semibold' : ''
              }`}
            >
              Our Team
              {isActive('/team') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C5A059]" />}
            </Link>

            <Link
              to="/insights"
              className={`whitespace-nowrap transition-colors hover:text-[#0A192F] relative py-1 ${
                isActive('/insights') ? 'text-[#0A192F] font-semibold' : ''
              }`}
            >
              Insights
              {isActive('/insights') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C5A059]" />}
            </Link>

            <Link
              to="/contact"
              className={`whitespace-nowrap transition-colors hover:text-[#0A192F] relative py-1 ${
                isActive('/contact') ? 'text-[#0A192F] font-semibold' : ''
              }`}
            >
              Contact
              {isActive('/contact') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C5A059]" />}
            </Link>
          </div>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#0A192F] hover:bg-[#112240] rounded-md transition-colors whitespace-nowrap border border-[#0A192F] hover:border-[#C5A059]/50 shadow-sm"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-50"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-50"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-50"
              >
                Our Services
              </Link>
              <div className="pl-6 space-y-1 border-l-2 border-[#C5A059]/40 my-1">
                {LEGAL_SERVICES.map((srv) => (
                  <Link
                    key={srv.slug}
                    to={`/services/${srv.slug}`}
                    className="block py-1 text-xs text-slate-600 hover:text-[#0A192F]"
                  >
                    {srv.title}
                  </Link>
                ))}
              </div>
              <Link
                to="/team"
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-50"
              >
                Our Team
              </Link>
              <Link
                to="/insights"
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-50"
              >
                Legal Insights
              </Link>
              <Link
                to="/contact"
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-50"
              >
                Contact
              </Link>
              <Link
                to="/admin"
                className="px-3 py-2 rounded-md text-xs font-semibold text-[#C5A059] bg-[#0A192F]/5"
              >
                Publisher Studio (Admin)
              </Link>
            </div>

            <div className="pt-2">
              <Link
                to="/consultation"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-[#0A192F] rounded-md shadow"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#C5A059]" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
