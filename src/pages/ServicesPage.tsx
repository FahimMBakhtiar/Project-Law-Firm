import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LEGAL_SERVICES } from '../data/services';
import {
  Globe,
  Home as HomeIcon,
  Users,
  Briefcase,
  Car,
  Scale,
  FileText,
  Building2,
  ArrowRight,
  Search,
  CheckCircle,
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-6 h-6 text-white" />;
      case 'Home': return <HomeIcon className="w-6 h-6 text-white" />;
      case 'Users': return <Users className="w-6 h-6 text-white" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-white" />;
      case 'Car': return <Car className="w-6 h-6 text-white" />;
      case 'Scale': return <Scale className="w-6 h-6 text-white" />;
      case 'FileText': return <FileText className="w-6 h-6 text-white" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-white" />;
      default: return <Scale className="w-6 h-6 text-white" />;
    }
  };

  const filteredServices = LEGAL_SERVICES.filter((srv) => {
    const query = searchQuery.toLowerCase();
    return (
      srv.title.toLowerCase().includes(query) ||
      srv.shortDesc.toLowerCase().includes(query) ||
      srv.commonSituations.some((s) => s.toLowerCase().includes(query))
    );
  });

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <Breadcrumbs items={[{ label: 'Our Services' }]} />

        {/* Page Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              Legal Practice Directory
            </span>
            <div className="h-[1px] w-8 bg-[#C5A059]" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0A192F]">
            Comprehensive Legal Services
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Explore our specialized practice areas across immigration, employment, family, property, corporate, and civil litigation. Every area is supported by dedicated legal practitioners focused on clear guidance and practical results.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by practice area, statute, or issue..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#FAF9F6] border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((srv) => (
            <div
              key={srv.slug}
              className="bg-white rounded-xl border border-slate-200 p-7 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-13 h-13 rounded-full bg-[#0A192F] flex items-center justify-center shrink-0 shadow-sm">
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <span className="text-[11px] font-medium text-[#C5A059] bg-[#FAF9F6] border border-slate-200 px-2.5 py-1 rounded-sm">
                    {srv.turnaroundEstimate || 'Available for instructions'}
                  </span>
                </div>

                <h2 className="font-serif text-xl font-bold text-[#0A192F] mb-2">
                  <Link to={`/services/${srv.slug}`} className="hover:text-[#C5A059] transition-colors">
                    {srv.title}
                  </Link>
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {srv.fullOverview}
                </p>

                {/* Common Scenarios Highlights */}
                <div className="space-y-1.5 pt-2 mb-6">
                  <span className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider block">
                    Common Matters Addressed:
                  </span>
                  {srv.commonSituations.slice(0, 3).map((situation, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{situation}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to={`/services/${srv.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A192F] hover:text-[#C5A059] transition-colors"
                >
                  <span>Learn More &amp; FAQs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/consultation"
                  className="inline-flex items-center gap-1 px-3.5 py-1.5 bg-[#FAF9F6] hover:bg-[#0A192F] hover:text-white text-[#0A192F] text-xs font-medium rounded-md border border-slate-200 transition-colors"
                >
                  <span>Enquire</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
            <p className="text-slate-600 text-sm">No legal practice area matches your search criteria.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 px-4 py-2 bg-[#0A192F] text-white text-xs font-medium rounded-md"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
