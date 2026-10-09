import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { IMAGES } from '../assets/images';
import {
  ShieldCheck,
  Scale,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Building,
  HelpCircle,
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/team';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        {/* Hero Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                  About Karkon Legal
                </span>
                <div className="h-[1px] w-10 bg-[#C5A059]" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0A192F] leading-tight">
                Pragmatic Legal Guidance with Absolute Integrity.
              </h1>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded to deliver straightforward, high-calibre legal assistance, Karkon Legal provides counsel across immigration, property, family, employment, and commercial law. We combine rigorous legal analysis with empathetic client care to make finding suitable legal support clear, structured, and less stressful.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  to="/consultation"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#0A192F] hover:bg-[#112240] text-white text-xs font-semibold rounded-md transition-colors"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-slate-300 hover:border-[#0A192F] text-slate-700 hover:text-[#0A192F] text-xs font-semibold rounded-md transition-colors"
                >
                  <span>Explore Practice Areas</span>
                </Link>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg border border-slate-200">
              <img
                src={IMAGES.lawBooksScales}
                alt="Law books and scales of justice"
                className="w-full h-80 sm:h-96 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white space-y-1">
                  <span className="text-xs font-brand text-[#C5A059] uppercase tracking-wider block">
                    Our Philosophy
                  </span>
                  <p className="text-sm font-serif">
                    “Making legal support accessible, clear, and focused on genuine client outcomes.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-xl border border-slate-200 space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#0A192F] flex items-center justify-center text-[#C5A059]">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0A192F]">
              Direct Legal Specialism
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every matter is overseen by dedicated solicitors and legal specialists with deep procedural grounding in employment tribunals, Home Office nationality claims, and property conveyancing.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl border border-slate-200 space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#0A192F] flex items-center justify-center text-[#C5A059]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0A192F]">
              Transparent Client Care
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We cut through convoluted jargon to explain the commercial and legal realities of your case, providing predictable fee structures, risk assessments, and realistic timeframes.
            </p>
          </div>

          <div className="bg-white p-7 rounded-xl border border-slate-200 space-y-3">
            <div className="w-12 h-12 rounded-lg bg-[#0A192F] flex items-center justify-center text-[#C5A059]">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#0A192F]">
              Personalized Attention
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We understand the personal stakes behind immigration visas, workplace disputes, and family settlements. We treat every client as an individual, not a reference file.
            </p>
          </div>
        </div>

        {/* Regulatory & Information Notice as required by brief */}
        <div className="p-5 bg-amber-50/80 rounded-xl border border-amber-200/90 text-xs text-amber-900 space-y-2">
          <div className="flex items-center gap-2 font-semibold">
            <HelpCircle className="w-4 h-4 text-amber-700" />
            <span>Firm Regulatory Status &amp; Transparency Notice:</span>
          </div>
          <p className="leading-relaxed text-amber-800">
            Karkon Legal operates under England and Wales legal practice conventions. Specific regulatory authorization numbers, professional indemnity insurance carriers, and statutory registration records will be populated upon final production onboarding. Content on this site is for general informational awareness and does not replace bespoke legal instruction.
          </p>
        </div>

        {/* Leadership Profile */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="aspect-3/4 rounded-xl overflow-hidden shadow-md border border-slate-200 relative">
                <img
                  src={IMAGES.solicitorPortrait}
                  alt="Md Hanif, Solicitor"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-[#0A192F]/90 backdrop-blur-xs text-white p-2.5 rounded-sm text-center">
                  <span className="font-brand text-xs font-semibold text-[#C5A059] block">
                    Md Hanif, Solicitor
                  </span>
                  <span className="text-[10px] text-slate-300">
                    Managing Partner · Employment &amp; Immigration Specialist
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
                Practice Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0A192F]">
                Commitment to Client Advocacy
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                “When someone faces an employment tribunal deadline, an immigration bail condition, or a complex family dispute, they need more than generic statutory quotes—they need a tactical, experienced advocate who will listen closely and act decisively. At Karkon Legal, our priority is giving clients clarity, confidence, and rigorous representation.”
              </p>
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Advocacy before UK Employment Tribunals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>British Nationality Act Section 4C Specialist</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Immigration Bail 201 Condition Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  <span>Commercial &amp; Contract Dispute Settlement</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/team"
                  className="text-xs font-semibold text-[#0A192F] hover:text-[#C5A059] inline-flex items-center gap-1.5"
                >
                  <span>Meet all team members</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
