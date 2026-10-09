import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ConsultationSuccessModal } from '../components/ConsultationSuccessModal';
import { saveConsultationEnquiry } from '../utils/storage';
import { ConsultationEnquiry } from '../types';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  Send,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Immigration & Asylum',
    subject: '',
    message: '',
    preferredContact: 'phone' as 'phone' | 'email' | 'whatsapp',
  });

  const [submittedEnquiry, setSubmittedEnquiry] = useState<ConsultationEnquiry | null>(null);
  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (!formData.fullName.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setValidationError('Please provide a valid email address.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setValidationError('Please provide a valid telephone or mobile number.');
      return;
    }
    if (!formData.message.trim()) {
      setValidationError('Please describe your enquiry or situation.');
      return;
    }

    const refNum = `KL-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newEnquiry: ConsultationEnquiry = {
      id: `enq-${Date.now()}`,
      referenceNumber: refNum,
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      urgency: 'routine',
      preferredContact: formData.preferredContact,
      message: `${formData.subject ? `[Subject: ${formData.subject}] ` : ''}${formData.message}`,
      consentAgreed: true,
      submittedAt: new Date().toISOString(),
      status: 'pending',
    };

    saveConsultationEnquiry(newEnquiry);
    setSubmittedEnquiry(newEnquiry);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        {/* Page Header */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-xs">
          <div className="flex items-center justify-center gap-2">
            <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059]">
              Direct Legal Enquiries
            </span>
            <div className="h-[1px] w-8 bg-[#C5A059]" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0A192F]">
            Contact Karkon Legal
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Reach out to discuss your legal matter. Whether you require immediate assistance with an employment tribunal claim, UK immigration bail, or conveyancing advice, our team is ready to assist.
          </p>
        </div>

        {/* Contact Information & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
              <h2 className="font-serif text-2xl font-bold text-[#0A192F]">
                London Office Details
              </h2>

              <ul className="space-y-4 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0A192F] flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Lead Solicitor Direct Line</span>
                    <a href="tel:+447368139587" className="font-bold text-[#0A192F] hover:text-[#C5A059] text-base">
                      +44 7368 139587
                    </a>
                    <a href="tel:+442071234567" className="block text-slate-500 hover:text-slate-800 text-xs mt-0.5">
                      +44 20 7123 4567 (Central Switchboard)
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center text-white shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Instant Messaging</span>
                    <a
                      href="https://wa.me/447368139587"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-slate-900 hover:text-[#25D366] block"
                    >
                      Chat on WhatsApp (+44 7368 139587)
                    </a>
                    <span className="text-[11px] text-slate-500">Fast response for initial guidance</span>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0A192F] flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Written Communications</span>
                    <a href="mailto:info@karkonlegal.co.uk" className="font-semibold text-[#0A192F] hover:text-[#C5A059]">
                      info@karkonlegal.co.uk
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0A192F] flex items-center justify-center text-[#C5A059] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block">Registered Practice Address</span>
                    <p className="font-medium text-slate-800 leading-snug">
                      12 Example Street, London WC1A 1AA<br />
                      United Kingdom
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <span className="font-semibold text-slate-800 block">Office Consultation Hours</span>
                    <span className="text-slate-600 block">Monday – Friday: 9:00 AM – 6:00 PM</span>
                    <span className="text-slate-500 block">Saturday &amp; Out of Hours: By prior appointment</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Functionality Limitation Notice (Critical requirement of prompt) */}
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-1.5 leading-relaxed">
              <div className="flex items-center gap-1.5 font-semibold text-amber-950">
                <HelpCircle className="w-4 h-4 text-amber-700" />
                <span>Local Demonstration Notice</span>
              </div>
              <p>
                In this local demonstration environment, forms validate and securely record client enquiries in browser storage. Submitting opens a summary card with direct one-click mailto or WhatsApp routing to the solicitors. A production deployment requires connecting a dedicated SMTP or CRM endpoint.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
              <div>
                <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] block mb-1">
                  Enquiry Form
                </span>
                <h2 className="text-2xl font-serif text-[#0A192F]">
                  Send a Message or Consultation Request
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Please do not submit highly confidential or time-critical documents through this form.
                </p>
              </div>

              {validationError && (
                <div className="p-3 bg-red-50 text-red-800 rounded-md border border-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{validationError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+44 7..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700 block">
                      Relevant Legal Area
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                    >
                      <option value="Immigration & Asylum">Immigration &amp; Asylum</option>
                      <option value="Employment Disputes">Employment Disputes</option>
                      <option value="Property & Conveyancing">Property &amp; Conveyancing</option>
                      <option value="Family & Divorce">Family &amp; Divorce</option>
                      <option value="Personal Injury Claims">Personal Injury Claims</option>
                      <option value="Civil & Commercial Disputes">Civil &amp; Commercial Disputes</option>
                      <option value="Wills, Probate & Estate">Wills, Probate &amp; Estate</option>
                      <option value="Business & Corporate">Business &amp; Corporate</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['phone', 'email', 'whatsapp'] as const).map((method) => (
                      <button
                        type="button"
                        key={method}
                        onClick={() => setFormData({ ...formData, preferredContact: method })}
                        className={`py-2 text-xs font-medium rounded-md border text-center capitalize transition-colors ${
                          formData.preferredContact === method
                            ? 'bg-[#0A192F] text-white border-[#0A192F]'
                            : 'bg-[#FAF9F6] text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Unfair Dismissal limitation advice"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700 block">
                    Message / Matter Summary *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your situation, key dates, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF9F6] border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all resize-y"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0A192F] hover:bg-[#112240] text-white font-semibold text-xs sm:text-sm rounded-md transition-colors shadow-sm"
                  >
                    <span>Submit Legal Enquiry</span>
                    <Send className="w-4 h-4 text-[#C5A059]" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Modal feedback */}
        {submittedEnquiry && (
          <ConsultationSuccessModal
            enquiry={submittedEnquiry}
            onClose={() => setSubmittedEnquiry(null)}
          />
        )}
      </div>
    </div>
  );
};
