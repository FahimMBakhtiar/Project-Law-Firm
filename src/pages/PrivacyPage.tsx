import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, HelpCircle, FileText, Lock } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F6] py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
        <Breadcrumbs items={[{ label: 'Privacy Policy & Terms' }]} />

        {/* Regulatory Disclosure Banner */}
        <div className="p-4 bg-amber-50 rounded-xl border border-amber-300 text-xs text-amber-900 flex items-start gap-3">
          <HelpCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block mb-0.5">Template Notice for Karkon Legal:</span>
            This Privacy Policy contains standardized provisions compliant with the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018. Specific Data Protection Officer (DPO) registration details, ICO registration numbers, and third-party processor lists must be formally reviewed and finalized prior to commercial deployment.
          </div>
        </div>

        {/* Document Body */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-xs space-y-8 text-slate-800">
          <div className="space-y-2 border-b border-slate-100 pb-6">
            <span className="font-brand text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] block">
              Legal Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif text-[#0A192F] font-bold">
              Privacy Policy &amp; Data Protection Notice
            </h1>
            <p className="text-xs text-slate-500">
              Last Updated: 1 October 2024 · Effective for Karkon Legal Services
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#0A192F]">
              1. Data Controller Information
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Karkon Legal (referred to as “we”, “us”, or “our”) acts as the Data Controller responsible for personal data processed through this website and initial client onboarding communications.
            </p>
            <div className="bg-[#FAF9F6] p-4 rounded-lg border border-slate-200 text-xs text-slate-700 space-y-1">
              <div><strong>Registered Address:</strong> [Placeholder: 12 Example Street, London WC1A 1AA, United Kingdom]</div>
              <div><strong>Data Protection Enquiries:</strong> privacy@karkonlegal.co.uk</div>
              <div><strong>Supervisory Authority:</strong> UK Information Commissioner's Office (ICO)</div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#0A192F]">
              2. Information We Collect
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When prospective clients submit consultation requests or general enquiries, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li>Contact Details: Full legal name, email address, telephone number.</li>
              <li>Matter Background: High-level overview of the legal service sought, procedural urgency, and relevant dates.</li>
              <li>Technical Log Data: Standard browser user agent, IP address for security rate-limiting, and session cookies.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#0A192F]">
              3. Lawful Basis for Processing
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Under UK GDPR Article 6, we process your personal data on the following bases:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700">
              <li><strong>Pre-Contractual Steps:</strong> Taking steps at your request prior to entering into a legal engagement agreement (e.g. assessing case suitability and conducting conflict checks).</li>
              <li><strong>Legitimate Interests:</strong> Operating a secure web service and responding to inbound business enquiries.</li>
              <li><strong>Legal Obligation:</strong> Retaining records where mandated by regulatory oversight or anti-money laundering (AML) legislation.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#0A192F]">
              4. Data Retention and Security
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Initial consultation enquiries that do not result in a formal solicitor retainer are securely archived and deleted within six months unless required for conflict checks. Client files instructed under formal retainer are retained for seven years in compliance with professional regulatory requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif font-bold text-[#0A192F]">
              5. Your Statutory Rights
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Under the Data Protection Act 2018, you maintain the right to request access to your personal information, rectification of inaccuracies, erasure, or restriction of processing. To exercise these rights, contact us at <a href="mailto:privacy@karkonlegal.co.uk" className="text-[#C5A059] underline">privacy@karkonlegal.co.uk</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
