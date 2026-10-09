import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { TEAM_MEMBERS } from '../data/team';
import { IMAGES } from '../assets/images';
import {
  Phone,
  Mail,
  MessageCircle,
  CheckCircle2,
  Scale,
  Award,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export const TeamPage: React.FC = () => {
  const leadSolicitor = TEAM_MEMBERS.find((m) => m.verifiedTitle);
  const associates = TEAM_MEMBERS.filter((m) => !m.verifiedTitle);

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <Breadcrumbs items={[{ label: 'Our Team' }]} />

        {/* Page Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-xs">
          <div className="flex items-center justify-center gap-2">
            <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              Legal Practitioners
            </span>
            <div className="h-[1px] w-8 bg-[#C5A059]" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0A192F]">
            Experienced. Dedicated. Here for You.
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our team of qualified and experienced legal professionals provides strategic guidance and robust advocacy across employment disputes, complex immigration applications, family settlements, and property matters.
          </p>
        </div>

        {/* Lead Solicitor Featured Profile (Md Hanif) */}
        {leadSolicitor && (
          <div className="bg-white rounded-2xl border-2 border-[#C5A059]/40 p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Photo & Badge */}
              <div className="lg:col-span-5">
                <div className="aspect-3/4 rounded-xl overflow-hidden shadow-xl border border-slate-200 relative group">
                  <img
                    src={IMAGES.solicitorPortrait}
                    alt={leadSolicitor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#0A192F] text-white text-xs font-semibold px-3 py-1.5 rounded-sm border border-[#C5A059]/40 shadow-md">
                    Verified Lead Solicitor
                  </div>
                </div>
              </div>

              {/* Bio & Credentials */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] block mb-1">
                    Managing Partner &amp; Lead Solicitor
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#0A192F]">
                    {leadSolicitor.name}
                  </h2>
                  <p className="text-xs font-medium text-slate-500 mt-1">
                    {leadSolicitor.credentials}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {leadSolicitor.bio}
                </p>

                {/* Specialties */}
                <div>
                  <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider block mb-2">
                    Primary Areas of Practice:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {leadSolicitor.specialties.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Contact Bar */}
                <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-4 text-xs">
                  {leadSolicitor.phone && (
                    <a
                      href={`tel:${leadSolicitor.phone}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#0A192F] hover:bg-[#112240] text-white font-medium rounded-md transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{leadSolicitor.phone}</span>
                    </a>
                  )}

                  <a
                    href="https://wa.me/447368139587"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium rounded-md transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>

                  {leadSolicitor.email && (
                    <a
                      href={`mailto:${leadSolicitor.email}`}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-slate-300 hover:border-slate-400 text-slate-700 rounded-md transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-slate-500" />
                      <span>{leadSolicitor.email}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Associates & Supporting Legal Professionals */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] block">
                Practice Associates
              </span>
              <h3 className="text-2xl font-serif text-[#0A192F]">
                Senior Associates &amp; Legal Executives
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {associates.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#0A192F]/5 flex items-center justify-center text-[#0A192F] mb-4">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#0A192F]">
                    {member.name}
                  </h4>
                  <p className="text-xs font-medium text-[#C5A059] mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-[11px] text-slate-400 italic mt-0.5">
                    {member.credentials}
                  </p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block">
                    Specialisms:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {member.specialties.map((spec, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-[#FAF9F6] text-slate-700 px-2 py-0.5 rounded-sm border border-slate-200"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between text-xs">
                    <Link
                      to="/consultation"
                      className="text-[#0A192F] hover:text-[#C5A059] font-medium flex items-center gap-1"
                    >
                      <span>Instruct on a Matter</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Transparency Notice */}
        <div className="p-4 bg-slate-100 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
          <p>
            <strong>Editorial &amp; Verification Note:</strong> In accordance with client instruction, biographical profiles for associate practitioners contain editable demonstration placeholders pending official regulatory confirmation and firm onboarding. Verified credentials for Managing Partner Solicitor Md Hanif are grounded in official promotional and social reference assets.
          </p>
        </div>
      </div>
    </div>
  );
};
