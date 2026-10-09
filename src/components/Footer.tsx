import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { LEGAL_SERVICES } from '../data/services';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A192F] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1 & 2: Brand Lockup & Purpose */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mt-3">
              Professional legal guidance across immigration, property, family, employment, commercial, and corporate law. Delivering straightforward, pragmatic solutions for individuals, families, and businesses.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>Client-Focused Legal Solutions</span>
              </span>
            </div>
            <div className="pt-2">
              <p className="text-xs text-slate-500">
                UK Common Law Jurisdiction · England &amp; Wales Regulatory Framing
              </p>
            </div>
          </div>

          {/* Col 3: Practice Areas */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] mb-4">
              Practice Areas
            </h4>
            <ul className="space-y-2 text-xs">
              {LEGAL_SERVICES.slice(0, 5).map((srv) => (
                <li key={srv.slug}>
                  <Link
                    to={`/services/${srv.slug}`}
                    className="text-slate-400 hover:text-white transition-colors block py-0.5"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-[#C5A059] hover:underline font-medium inline-flex items-center gap-1 mt-1"
                >
                  <span>All Practice Areas</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Firm & Platform Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors block py-0.5">
                  About Our Firm
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-slate-400 hover:text-white transition-colors block py-0.5">
                  Our Legal Team
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-slate-400 hover:text-white transition-colors block py-0.5">
                  Legal Insights &amp; Updates
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-slate-400 hover:text-white transition-colors block py-0.5">
                  Request a Consultation
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-slate-400 hover:text-white transition-colors block py-0.5">
                  Privacy Policy &amp; Terms
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-[#C5A059] hover:underline transition-colors block py-0.5 font-medium">
                  Admin Publishing Studio
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Direct Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+447368139587" className="text-white hover:text-[#C5A059] font-medium block">
                    +44 7368 139587
                  </a>
                  <a href="tel:+442071234567" className="text-slate-400 hover:text-white text-[11px] block mt-0.5">
                    +44 20 7123 4567 (London)
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <a
                    href="https://wa.me/447368139587"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#25D366] font-medium block"
                  >
                    WhatsApp Chat
                  </a>
                  <span className="text-[11px] text-slate-500">Quick initial enquiry</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <a href="mailto:info@karkonlegal.co.uk" className="text-slate-300 hover:text-white block">
                  info@karkonlegal.co.uk
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  12 Example Street, London WC1A 1AA, United Kingdom
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Disclaimer Notice */}
        <div className="pt-8 pb-4 text-slate-400 text-xs space-y-3">
          <p className="leading-relaxed text-[11px] text-slate-500">
            <strong>Important Legal Notice:</strong> Karkon Legal is a legal services and consultancy brand. The materials and information provided on this website are for general educational and informational guidance only and do not constitute formal legal advice. Viewing this website or submitting an enquiry does not establish a solicitor-client relationship. If you require legal representation, please contact our team to arrange a formal consultation and engagement agreement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800/60 text-slate-500 text-xs">
            <div>
              &copy; 2024–2026 Karkon Legal. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="hover:text-slate-300 transition-colors">
                Contact Office
              </Link>
              <Link to="/admin" className="text-[#C5A059] hover:underline">
                Demonstration Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
