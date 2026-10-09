import React, { useState } from 'react';
import { CheckCircle2, Copy, Check, MessageCircle, Mail, X } from 'lucide-react';
import { ConsultationEnquiry } from '../types';

interface ConsultationSuccessModalProps {
  enquiry: ConsultationEnquiry;
  onClose: () => void;
}

export const ConsultationSuccessModal: React.FC<ConsultationSuccessModalProps> = ({
  enquiry,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  const summaryText = `Karkon Legal Consultation Enquiry
Reference: ${enquiry.referenceNumber}
Client: ${enquiry.fullName}
Email: ${enquiry.email}
Phone: ${enquiry.phone}
Practice Area: ${enquiry.service}
Urgency: ${enquiry.urgency}
Preferred Contact: ${enquiry.preferredContact}
Message: ${enquiry.message}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mailtoSubject = encodeURIComponent(`Consultation Request: ${enquiry.service} [Ref: ${enquiry.referenceNumber}]`);
  const mailtoBody = encodeURIComponent(
    `Dear Karkon Legal Team,\n\nI would like to request a legal consultation.\n\n` +
      `Name: ${enquiry.fullName}\n` +
      `Phone: ${enquiry.phone}\n` +
      `Service: ${enquiry.service}\n` +
      `Urgency: ${enquiry.urgency}\n` +
      `Reference Code: ${enquiry.referenceNumber}\n\n` +
      `Matter Summary:\n${enquiry.message}\n`
  );

  const mailtoHref = `mailto:info@karkonlegal.co.uk?subject=${mailtoSubject}&body=${mailtoBody}`;

  const whatsappMessage = encodeURIComponent(
    `Hello Karkon Legal, my name is ${enquiry.fullName}. I have submitted a consultation request for ${enquiry.service} (Ref: ${enquiry.referenceNumber}).`
  );
  const whatsappHref = `https://wa.me/447368139587?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-[#0A192F] text-white px-6 py-5 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] border border-[#C5A059]/30">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-brand text-lg font-bold">Enquiry Prepared</h3>
              <p className="text-xs text-slate-300">Reference: {enquiry.referenceNumber}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4 text-sm text-slate-700">
          <div className="bg-[#FAF9F6] p-4 rounded-lg border border-slate-200 space-y-2">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-slate-500 block">Client Name</span>
                <span className="font-semibold text-slate-900">{enquiry.fullName}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Service Selected</span>
                <span className="font-semibold text-slate-900">{enquiry.service}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Contact Phone</span>
                <span className="font-semibold text-slate-900">{enquiry.phone}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Urgency</span>
                <span className="font-semibold text-slate-900 capitalize">{enquiry.urgency}</span>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-200/80 text-xs">
              <span className="text-slate-500 block">Summary of Matter:</span>
              <p className="text-slate-800 italic mt-0.5 line-clamp-3">{enquiry.message}</p>
            </div>
          </div>

          {/* Local Demonstration Notice */}
          <div className="p-3 bg-amber-50 rounded-md border border-amber-200 text-xs text-amber-900 leading-relaxed">
            <span className="font-semibold block mb-0.5">Local Demonstration Mode Notice:</span>
            Your consultation request has been validated and recorded locally. In production, this directly notifies the solicitors. You can copy the generated brief or trigger an instant email/WhatsApp enquiry below.
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
            <a
              href={mailtoHref}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0A192F] hover:bg-[#112240] text-white text-xs font-semibold rounded-md transition-colors shadow-xs"
            >
              <Mail className="w-4 h-4 text-[#C5A059]" />
              <span>Open in Email (Mailto)</span>
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-md transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </a>
          </div>

          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-md transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-500" />}
            <span>{copied ? 'Enquiry Brief Copied to Clipboard!' : 'Copy Enquiry Brief to Clipboard'}</span>
          </button>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
