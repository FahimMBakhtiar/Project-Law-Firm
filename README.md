# Karkon Legal — Multi-Page Law Firm Website & Local Publishing Studio

A complete, self-contained, multi-page legal services web application for **Karkon Legal**, built with React 19, TypeScript, Vite, and Tailwind CSS.

Faithfully recreates the navy-and-gold visual identity, typography, practice areas, lawyer profiles, and UK legal guide posters provided in the firm's reference assets.

---

## 1. Quick Start & Local Setup

The application is completely self-contained. It requires **no external cloud credentials, Google APIs, databases, or remote authentication keys** to run locally.

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation & Launch
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

The application will launch on `http://localhost:3000`.

To build for production:
```bash
npm run build
```

---

## 2. Website Architecture & Routes

| URL Route | Page Name | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Editorial hero with London dusk skyline, 8 practice badges, firm introduction, lawyer preview, featured insights, and consultation booking strip. |
| `/about` | **About Us** | Practice ethos, core values, leadership advocacy narrative, and regulatory transparency notices. |
| `/services` | **Our Services** | Practice area directory hub with interactive search filtering. |
| `/services/:slug` | **Service Detail** | Dedicated page for each of the 8 areas (Immigration, Conveyancing, Family, Employment, Personal Injury, Civil & Commercial, Wills & Probate, Corporate) with FAQs and case notes. |
| `/team` | **Our Team** | Detailed profiles featuring Managing Partner & Solicitor **Md Hanif** alongside practice associates. |
| `/insights` | **Legal Insights** | Category filterable, searchable legal blog containing transcribed UK legal guides. |
| `/insights/:slug` | **Article Detail** | Dedicated reading layout with statutory citations, case quotations, author attribution, and consultation CTAs. |
| `/contact` | **Contact Us** | London office address, telephone numbers, direct WhatsApp links, opening hours, and enquiry form. |
| `/consultation` | **Request a Consultation**| 3-step intake workflow with matter classification, urgency selector, and validation modal. |
| `/privacy` | **Privacy Policy** | UK GDPR and Data Protection Act 2018 template. |
| `/admin` | **Publisher Studio** | Local CMS to create, edit, draft, publish, export, and import articles via browser storage. |

---

## 3. Blog & Publishing Studio (`/admin`)

A dedicated administrative interface is accessible at `/admin`. It allows non-technical representatives to manage the firm's legal publications without code edits:

- **Create New Article**: Add titles, URL slugs, categories, author credits, excerpts, and structured paragraphs.
- **Draft & Publish Lifecycle**: Switch articles between `draft` (hidden from public view) and `published` (instantly live on `/insights`).
- **Real-Time Public Sync**: Saved articles update immediately on the live website using `localStorage`.
- **JSON Backup & Restore**: Export all articles as a downloadable `.json` file and import previous backups with schema validation.
- **Enquiries Log**: Review incoming consultation requests submitted through the web forms during demonstration sessions.

---

## 4. Business Details Requiring Verification Before Production

In accordance with professional legal standards and the client brief, the following details are marked as demonstration placeholders and should be confirmed prior to public launch:

1. **Regulatory Body Registration**: SRA (Solicitors Regulation Authority) firm registration number or Bar Standards Board authorization.
2. **Professional Indemnity Insurance**: Name and territorial coverage of the firm's qualifying indemnity insurer.
3. **Registered Office Address**: Official registered company and office location in London.
4. **Associate Credentials**: Precise qualifications, admission dates, and practicing certificate details for team associates.
5. **Complaints Handling Procedure**: Statutory procedure and contact for the Legal Ombudsman.
6. **ICO Data Protection Registration**: Registration tier and reference number with the Information Commissioner's Office.

---

## 5. Local Demonstration Limitations

- **Enquiry Delivery**: Because this is a static, local-first application without an external mail server, submitted consultation requests are validated, assigned a reference code, and saved to local browser storage. The success dialog provides one-click options to open a pre-filled email via `mailto:` or initiate a WhatsApp chat with Solicitor Md Hanif (`+44 7368 139587`). For production, an API route or transactional email provider (such as Resend or SendGrid) should be configured.
- **Admin Access Control**: The `/admin` route is a client-side management demonstration and does not feature password-protected server-side authentication.
