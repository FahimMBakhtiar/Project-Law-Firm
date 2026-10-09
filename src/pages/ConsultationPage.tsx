import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ConsultationSuccessModal } from '../components/ConsultationSuccessModal';
import { saveConsultationEnquiry } from '../utils/storage';
import { ConsultationEnquiry } from '../types';
import { LEGAL_SERVICES } from '../data/services';
import {
  Shield,
  Clock,
  Phone,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Lock,
  ArrowRight,
  FileCheck,
} from 'lucide-react';

export const ConsultationPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Immigration & Asylum');
  const [urgency, setUrgency] = useState<'routine' | 'urgent' | 'time-sensitive'>('routine');
  const [preferredContact, setPreferredContact] = useState<'phone' | 'email' | 'whatsapp'>('phone');
  const [message, setMessage] = useState('');
  const [consentAgreed, setConsentAgreed] = useState(false);
  const [error, setError] = useState('');
  const [submittedEnquiry, setSubmittedEnquiry] = useState<ConsultationEnquiry | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!fullName.trim()) {
      setError('Please provide your full legal name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!phone.trim() || phone.length < 8) {
      setError('Please provide a contact phone number.');
      return;
    }
    if (!message.trim()) {
      setError('Please give a brief overview of your legal issue.');
      return;
    }
    if (!consentAgreed) {
      setError('Please acknowledge the terms and demonstration privacy notice.');
      return;
    }

    const ref = `KL-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const enquiry: ConsultationEnquiry = {
      id: `enq-${Date.now()}`,
      referenceNumber: ref,
      fullName,
      email,
      phone,
      service,
      urgency,
      preferredContact,
      message,
      consentAgreed: true,
      submittedAt: new Date().toISOString(),
      status: 'pending',
    };

    saveConsultationEnquiry(enquiry);
    setSubmittedEnquiry(enquiry);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-12">
        <Breadcrumbs items={[{ label: 'Request a Consultation' }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              Client Instruction
            </span>
            <div className="h-[1px] w-8 bg-[#C5A059]" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0A192F]">
            Request a Legal Consultation
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Take the initial step toward resolving your legal matter. Complete the form below to outline your requirements and schedule an assessment with our qualified solicitors.
          </p>
        </div>

        {/* 3-Step Process Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#0A192F] text-white flex items-center justify-center text-xs font-bold font-mono">
              01
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-sm">
              1. Submit Your Enquiry
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Provide basic contact details and a concise summary of your case or timeline.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#0A192F] text-white flex items-center justify-center text-xs font-bold font-mono">
              02
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-sm">
              2. Preliminary Review
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our legal practitioners review for potential conflicts of interest and evaluate statutory urgency.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-full bg-[#0A192F] text-white flex items-center justify-center text-xs font-bold font-mono">
              03
            </div>
            <h3 className="font-serif font-bold text-slate-900 text-sm">
              3. Strategic Consultation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Receive structured guidance on merits, evidence requirements, and transparent cost estimates.
            </p>
          </div>
        </div>

        {/* Main Consultation Form Container */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs max-w-3xl mx-auto space-y-6">
          {error && (
            <div className="p-3 bg-red-50 text-red-800 rounded-md border border-red-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-800 block">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Sterling"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-800 block">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="david@example.co.uk"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Phone & Practice Area */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-800 block">
                  Contact Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+44 7..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-800 block">
                  Relevant Practice Area *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                >
                  {LEGAL_SERVICES.map((srv) => (
                    <option key={srv.slug} value={srv.title}>
                      {srv.title}
                    </option>
                  ))}
                  <option value="General Consultation">Other / General Consultation</option>
                </select>
              </div>
            </div>

            {/* Urgency & Preferred Method */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-800 block">
                  Urgency / Timeframe
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['routine', 'time-sensitive', 'urgent'] as const).map((lvl) => (
                    <button
                      type="button"
                      key={lvl}
                      onClick={() => setUrgency(lvl)}
                      className={`py-2 text-[11px] font-medium rounded-md border capitalize transition-colors ${
                        urgency === lvl
                          ? 'bg-[#0A192F] text-white border-[#0A192F]'
                          : 'bg-[#FAF9F6] text-slate-700 border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      {lvl.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-800 block">
                  Preferred Contact Channel
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['phone', 'email', 'whatsapp'] as const).map((method) => (
                    <button
                      type="button"
                      key={method}
                      onClick={() => setPreferredContact(method)}
                      className={`py-2 text-[11px] font-medium rounded-md border capitalize transition-colors ${
                        preferredContact === method
                          ? 'bg-[#0A192F] text-white border-[#0A192F]'
                          : 'bg-[#FAF9F6] text-slate-700 border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Brief Description */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-800 block">
                Brief Overview of Matter *
              </label>
              <textarea
                rows={4}
                required
                placeholder="Describe key dates, tribunal deadlines, visa refusal dates, or dispute circumstances..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all resize-y"
              />
            </div>

            {/* Security and Confidentiality Banner */}
            <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
              <Lock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
              <p>
                <strong>Confidentiality Protection:</strong> Please do not submit original identification documents, biometric data, or sensitive financial statements through this web form. All formal materials are handled via secure client portals following conflict clearance.
              </p>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="consentCheck"
                checked={consentAgreed}
                onChange={(e) => setConsentAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-[#0A192F] focus:ring-[#C5A059]"
              />
              <label htmlFor="consentCheck" className="text-xs text-slate-700 leading-snug">
                I agree to Karkon Legal processing my details for the purpose of scheduling a legal consultation and acknowledge this enquiry does not create a formal solicitor-client retainer.
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#C5A059] hover:bg-[#b58d42] text-[#0A192F] font-bold text-sm rounded-md transition-colors shadow-sm"
              >
                <span>Submit Consultation Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Alternative Urgent Contact Options */}
        <div className="max-w-2xl mx-auto text-center space-y-3 pt-4 border-t border-slate-200">
          <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold block">
            Facing an immediate tribunal or bail deadline?
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a
              href="tel:+447368139587"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-md text-[#0A192F] hover:border-[#C5A059]"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Call Lead Solicitor: +44 7368 139587</span>
            </a>
            <a
              href="https://wa.me/447368139587"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-md"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Emergency Enquiry</span>
            </a>
          </div>
        </div>

        {/* Success Modal */}
        {submittedEnquiry && (
          <ConsultationSuccessModal
            enquiry={submittedEnquiry}
            onClose={() => {
              setSubmittedEnquiry(null);
              setFullName('');
              setEmail('');
              setPhone('');
              setMessage('');
              setConsentAgreed(false);
            }}
          />
        )}
      </div>
    </div>
  );
};
