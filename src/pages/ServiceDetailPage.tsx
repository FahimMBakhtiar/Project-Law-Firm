import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LEGAL_SERVICES } from '../data/services';
import { getPublishedArticles } from '../utils/storage';
import {
  Globe,
  Home as HomeIcon,
  Users,
  Briefcase,
  Car,
  Scale,
  FileText,
  Building2,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Shield,
  HelpCircle,
  Calendar,
  Clock,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { IMAGES } from '../assets/images';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const service = LEGAL_SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const allArticles = getPublishedArticles();
  const relatedArticles = allArticles.filter(
    (art) => service.relatedArticleSlugs.includes(art.slug) || art.relatedServiceSlug === service.slug
  );

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Globe': return <Globe className="w-8 h-8 text-[#C5A059]" />;
      case 'Home': return <HomeIcon className="w-8 h-8 text-[#C5A059]" />;
      case 'Users': return <Users className="w-8 h-8 text-[#C5A059]" />;
      case 'Briefcase': return <Briefcase className="w-8 h-8 text-[#C5A059]" />;
      case 'Car': return <Car className="w-8 h-8 text-[#C5A059]" />;
      case 'Scale': return <Scale className="w-8 h-8 text-[#C5A059]" />;
      case 'FileText': return <FileText className="w-8 h-8 text-[#C5A059]" />;
      case 'Building2': return <Building2 className="w-8 h-8 text-[#C5A059]" />;
      default: return <Scale className="w-8 h-8 text-[#C5A059]" />;
    }
  };

  const getHeroImage = () => {
    if (service.slug === 'immigration-asylum') return IMAGES.immigrationDocs;
    if (service.slug === 'property-conveyancing') return IMAGES.propertyHomes;
    if (service.slug === 'employment-disputes') return IMAGES.solicitorPortrait;
    return IMAGES.lawBooksScales;
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <Breadcrumbs
          items={[
            { label: 'Our Services', href: '/services' },
            { label: service.title },
          ]}
        />

        {/* Hero Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#0A192F] flex items-center justify-center shrink-0">
                  {getServiceIcon(service.iconName)}
                </div>
                <div>
                  <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] block">
                    Legal Practice Area
                  </span>
                  <span className="text-xs text-slate-500">{service.targetAudience}</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0A192F] leading-tight">
                {service.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl">
                {service.fullOverview}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/consultation"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A192F] hover:bg-[#112240] text-white text-xs font-semibold rounded-md transition-colors shadow-sm"
                >
                  <span>Request a Consultation for {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </Link>

                <a
                  href="https://wa.me/447368139587"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-md transition-colors shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="aspect-4/3 rounded-xl overflow-hidden shadow-md border border-slate-200">
                <img
                  src={getHeroImage()}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Scope Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Common Situations */}
          <div className="bg-white p-7 sm:p-8 rounded-xl border border-slate-200 space-y-4">
            <h2 className="font-serif text-xl font-bold text-[#0A192F] flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#C5A059]" />
              <span>When This Service Applies</span>
            </h2>
            <p className="text-xs text-slate-600">
              Clients routinely instruct us in the following factual and procedural scenarios:
            </p>
            <ul className="space-y-3 pt-2">
              {service.commonSituations.map((sit, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{sit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How We Support You */}
          <div className="bg-white p-7 sm:p-8 rounded-xl border border-slate-200 space-y-4">
            <h2 className="font-serif text-xl font-bold text-[#0A192F] flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#C5A059]" />
              <span>How Karkon Legal Supports You</span>
            </h2>
            <p className="text-xs text-slate-600">
              Our structured approach combines procedural diligence with client advocacy:
            </p>
            <ul className="space-y-3 pt-2">
              {service.firmSupportServices.map((sup, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#0A192F] shrink-0 mt-0.5" />
                  <span>{sup}</span>
                </li>
              ))}
            </ul>

            {service.statutoryBases && (
              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                  Governing Statutory Foundations:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {service.statutoryBases.map((statute, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#FAF9F6] text-slate-700 px-2.5 py-1 rounded-sm border border-slate-200"
                    >
                      {statute}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Frequently Asked Questions Accordion */}
        {service.faqs.length > 0 && (
          <div className="bg-white p-8 rounded-xl border border-slate-200 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <HelpCircle className="w-4 h-4 text-[#C5A059]" />
                <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                  Practical Guidance
                </span>
              </div>
              <h2 className="text-2xl font-serif text-[#0A192F]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="divide-y divide-slate-200">
              {service.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className="py-4">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between text-left text-sm font-semibold text-[#0A192F] hover:text-[#C5A059] transition-colors py-1"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform ${
                          isOpen ? 'rotate-180 text-[#C5A059]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pr-8">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Related Insights Articles */}
        {relatedArticles.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] block">
                  Legal Commentary
                </span>
                <h3 className="text-2xl font-serif text-[#0A192F]">
                  Related Articles &amp; Case Notes
                </h3>
              </div>
              <Link
                to="/insights"
                className="text-xs font-semibold text-[#0A192F] hover:text-[#C5A059] flex items-center gap-1"
              >
                <span>All Insights</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((art) => (
                <Link
                  key={art.slug}
                  to={`/insights/${art.slug}`}
                  className="bg-white p-5 rounded-xl border border-slate-200 hover:border-[#C5A059] transition-all flex flex-col justify-between shadow-xs hover:shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500">
                      <span>{art.publishedDate}</span>
                      <span>·</span>
                      <span>{art.readTime}</span>
                    </div>
                    <h4 className="font-serif text-sm font-bold text-[#0A192F] hover:text-[#C5A059] transition-colors line-clamp-2">
                      {art.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2">{art.excerpt}</p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0A192F]">
                    <span>Read Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Consultation Prompt */}
        <div className="bg-[#0A192F] text-white rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-serif">
              Require specific counsel on {service.title}?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Arrange a confidential case evaluation with our legal professionals to review your circumstances, merits, and statutory deadlines.
            </p>
          </div>

          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C5A059] hover:bg-[#b58d42] text-[#0A192F] font-semibold text-xs sm:text-sm rounded-md transition-colors whitespace-nowrap shadow-md shrink-0"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4 text-[#0A192F]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
