import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Globe,
  Home as HomeIcon,
  Users,
  Briefcase,
  Car,
  Scale,
  FileText,
  Building2,
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
} from 'lucide-react';
import { IMAGES } from '../assets/images';
import { LEGAL_SERVICES } from '../data/services';
import { getPublishedArticles } from '../utils/storage';
import { TEAM_MEMBERS } from '../data/team';

export const HomePage: React.FC = () => {
  const publishedArticles = getPublishedArticles().slice(0, 3);

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

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION (London Skyline at Dusk) */}
      <section className="relative min-h-[580px] lg:min-h-[660px] flex items-center bg-[#07111e] overflow-hidden">
        {/* Background Skyline Image with Deep Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroSkyline}
            alt="London City Skyline at Dusk featuring Tower Bridge and The Shard"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Gradients ensuring WCAG contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111e] via-[#07111e]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111e] via-transparent to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-2xl space-y-6">
            {/* Eyebrow Kicker */}
            <div className="flex items-center gap-3">
              <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                Karkon Legal
              </span>
              <div className="h-[1px] w-12 bg-[#C5A059]" />
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.15] tracking-tight">
              Professional Legal Support{' '}
              <span className="text-[#C5A059] block mt-1">When You Need It.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-xl">
              Experienced legal guidance across immigration, property, family, employment, commercial and other areas of law.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/consultation"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#C5A059] hover:bg-[#b58d42] text-[#0A192F] font-semibold text-sm rounded-md transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#0A192F]" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-medium text-sm rounded-md border border-white/20 transition-all backdrop-blur-xs"
              >
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR AREAS OF PRACTICE (8 Cards matching reference) */}
      <section className="py-20 bg-[#FAF9F6] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="flex items-center justify-center gap-2">
              <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                Our Areas of Practice
              </span>
              <div className="h-[1px] w-8 bg-[#C5A059]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#0A192F] tracking-tight">
              Comprehensive Legal Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We provide tailored legal solutions for individuals, families and businesses, with a focus on clear advice and practical support.
            </p>
          </div>

          {/* 8 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEGAL_SERVICES.map((srv) => (
              <Link
                key={srv.slug}
                to={`/services/${srv.slug}`}
                className="group bg-white p-6 rounded-xl border border-slate-200/90 hover:border-[#C5A059]/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Circular Navy Badge with Crisp Icon */}
                  <div className="w-13 h-13 rounded-full bg-[#0A192F] group-hover:bg-[#112240] flex items-center justify-center mb-5 transition-colors shadow-sm">
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#0A192F] group-hover:text-[#C5A059] transition-colors mb-2">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {srv.shortDesc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0A192F] group-hover:text-[#C5A059] transition-colors">
                  <span>Explore Practice</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT KARKON LEGAL (Scales of Justice & Law Books) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual Anchor: Scales of Justice on Antique Law Desk */}
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-slate-200/80 group">
              <img
                src={IMAGES.lawBooksScales}
                alt="Brass Scales of Justice and English Law Books"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="font-brand text-xs uppercase tracking-widest text-[#C5A059] block">
                  Authoritative Representation
                </span>
                <p className="text-sm font-medium text-slate-200 mt-1">
                  Built on rigorous legal integrity, strategic insight, and clear communication.
                </p>
              </div>
            </div>

            {/* Narrative Copy */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                  About Karkon Legal
                </span>
                <div className="h-[1px] w-10 bg-[#C5A059]" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-[#0A192F] tracking-tight leading-snug">
                Your Goals. Our Commitment.
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                Karkon Legal is a client-focused legal practice, providing practical, professional and reliable legal support. We understand that legal matters can be complex and stressful, which is why we are committed to making the process as straightforward and clear as possible.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Pragmatic, Jargon-Free Guidance:</strong> We demystify statutes and court processes so you make fully informed decisions.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Dedicated Specialist Advocates:</strong> Focused experience in immigration, tribunal employment disputes, and property law.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                  <span><strong>Transparent Communication:</strong> Predictable turnaround times and continuous updates on your matter.</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0A192F] hover:bg-[#112240] text-white text-sm font-semibold rounded-md transition-colors shadow-sm"
                >
                  <span>About Our Firm</span>
                  <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR TEAM (Lawyer Cards with Md Hanif and Associates) */}
      <section className="py-20 bg-[#FAF9F6] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                  Our Team
                </span>
                <div className="h-[1px] w-8 bg-[#C5A059]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#0A192F] tracking-tight">
                Experienced. Dedicated. Here for You.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Our team of qualified and experienced legal professionals are committed to achieving the best possible outcomes for our clients.
              </p>
            </div>

            <Link
              to="/team"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#0A192F] border border-[#0A192F] hover:bg-[#0A192F] hover:text-white rounded-md transition-colors whitespace-nowrap self-start md:self-auto"
            >
              <span>Meet Our Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4 Team Cards Grid matching mockup */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col"
              >
                {/* Photo slot */}
                <div className="aspect-3/4 bg-slate-100 overflow-hidden relative">
                  {member.imageKey === 'solicitorPortrait' ? (
                    <img
                      src={IMAGES.solicitorPortrait}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover object-top hover:scale-103 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-slate-100 to-slate-200">
                      <div className="w-16 h-16 rounded-full bg-[#0A192F]/10 flex items-center justify-center mb-3">
                        <Scale className="w-8 h-8 text-[#0A192F]" />
                      </div>
                      <span className="text-xs font-semibold text-slate-700">{member.name}</span>
                      <span className="text-[11px] text-slate-500 mt-1">{member.role}</span>
                    </div>
                  )}

                  {member.verifiedTitle && (
                    <div className="absolute top-3 left-3 bg-[#0A192F]/90 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-sm border border-[#C5A059]/40">
                      Lead Solicitor
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#0A192F]">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-[#C5A059] mt-0.5">
                      {member.role}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-2 line-clamp-2">
                      {member.specialties.join(' · ')}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <Link
                      to="/team"
                      className="text-[#0A192F] hover:text-[#C5A059] font-medium flex items-center gap-1"
                    >
                      <span>View Profile</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LEGAL INSIGHTS (Dusk London Banner matching mockup) */}
      <section className="py-20 bg-[#0A192F] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                  Legal Insights
                </span>
                <div className="h-[1px] w-8 bg-[#C5A059]" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
                Latest Updates &amp; Legal Insights
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Stay informed with the latest legal updates, news and practical advice.
              </p>
            </div>

            <Link
              to="/insights"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white border border-white/20 hover:border-[#C5A059] hover:text-[#C5A059] rounded-md transition-colors whitespace-nowrap self-start md:self-auto"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 3 Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {publishedArticles.map((article) => {
              const getImageSrc = () => {
                if (article.imageKey === 'immigrationDocs') return IMAGES.immigrationDocs;
                if (article.imageKey === 'propertyHomes') return IMAGES.propertyHomes;
                if (article.imageKey === 'lawBooksScales') return IMAGES.lawBooksScales;
                if (article.imageKey === 'solicitorPortrait') return IMAGES.solicitorPortrait;
                return IMAGES.heroSkyline;
              };

              return (
                <Link
                  key={article.slug}
                  to={`/insights/${article.slug}`}
                  className="group bg-white rounded-xl overflow-hidden text-slate-900 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-200"
                >
                  <div>
                    <div className="aspect-16/9 overflow-hidden relative">
                      <img
                        src={getImageSrc()}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#0A192F]/85 backdrop-blur-xs text-[#C5A059] text-[10px] font-semibold px-2 py-0.5 rounded-sm">
                        {article.category}
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <div className="flex items-center gap-2 text-[11px] text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-400" />
                          <span>{article.publishedDate}</span>
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          <span>{article.readTime}</span>
                        </span>
                      </div>

                      <h3 className="font-serif text-base font-bold text-[#0A192F] group-hover:text-[#C5A059] transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2 flex items-center justify-between text-xs font-semibold text-[#0A192F] group-hover:text-[#C5A059] transition-colors border-t border-slate-100">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. BOOK A CONSULTATION STRIP (Matching reference bottom strip) */}
      <section className="py-14 bg-[#FAF9F6] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-1.5 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                  Get In Touch
                </span>
                <div className="h-[1px] w-8 bg-[#C5A059]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#0A192F]">
                Book a Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Take the first step towards the right legal support.
              </p>
            </div>

            {/* Contact badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-700">
              <div className="flex items-center gap-2.5 bg-[#FAF9F6] px-4 py-3 rounded-lg border border-slate-200">
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <div>
                  <span className="font-semibold block text-[#0A192F]">+44 7368 139587</span>
                  <span className="text-[11px] text-slate-500">Mon–Fri, 9am–6pm</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-[#FAF9F6] px-4 py-3 rounded-lg border border-slate-200">
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <div>
                  <span className="font-semibold block text-[#0A192F]">WhatsApp</span>
                  <span className="text-[11px] text-slate-500">Chat with us</span>
                </div>
              </div>

              <div className="hidden xl:flex items-center gap-2.5 bg-[#FAF9F6] px-4 py-3 rounded-lg border border-slate-200">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <div>
                  <span className="font-semibold block text-[#0A192F]">12 Example Street</span>
                  <span className="text-[11px] text-slate-500">London WC1A 1AA</span>
                </div>
              </div>
            </div>

            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C5A059] hover:bg-[#b58d42] text-[#0A192F] font-semibold text-xs sm:text-sm rounded-md transition-colors whitespace-nowrap shadow-sm shrink-0"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#0A192F]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
