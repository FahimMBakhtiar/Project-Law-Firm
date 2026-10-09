# Karkon Legal — Complete Multi-Page Legal Services Platform

A comprehensive, self-contained, multi-page website and local publishing platform for **Karkon Legal**, faithfully realizing the navy-and-gold visual identity, practice areas, and editorial content demonstrated in the client's reference assets.

***

### User Review & Critical Decisions

> [!IMPORTANT]
> Based on the provided design reference mockup and Facebook promotional material, the application will be architected with UK and England & Wales common law framing (incorporating the real legal guides authored by Solicitor Md Hanif: Carmichael case, Contract of Service vs Services, British Nationality Act 1981 Section 4C, Direct and Indirect Workplace Discrimination, and Immigration Bail 201). All external cloud services, Google APIs, and remote dependencies are excluded to ensure 100% local self-containment.

*   **Jurisdiction & Framing**: UK / England & Wales common law framing matching the reference assets, with clear disclaimer markings regarding unverified firm regulatory details.
*   **Asset Alignment**: Recreate the exact visual structure from `C6D26D8F-7628-4F91-B265-996631B8D214.png` (London skyline hero with Tower Bridge, gold-accented typography, circular practice area badges, lawyer cards, and dusk insight cards).
*   **Local Publishing & Lead Flow**: Full client-side publishing engine at `/admin` using `localStorage` with JSON export/import and demo status banners; consultation forms validate client-side and generate structured confirmation summaries with optional mailto/WhatsApp routing.

***

## 1. Overview & Core Concept

*   **What It Does**: Provides a polished, multi-page web platform for Karkon Legal that introduces the firm, details 8 distinct legal practice areas with dedicated URLs, showcases the legal team, publishes searchable and categorized legal articles, captures consultation enquiries, and offers an administrative CMS dashboard to draft, edit, publish, export, and import articles locally.
*   **Target Audience**: Prospective clients seeking legal assistance across immigration, employment, family, property, corporate, and civil matters in the UK, as well as firm representatives managing article releases without code edits.
*   **Key Value**: Bridges the gap between social media awareness (such as Facebook legal graphics) and high-credibility client conversion through structured legal education, transparent service breakdowns, and clear enquiry paths.

***

## 2. User Experience & Visual Design

### Page Architecture & Routes

1.  **Homepage (`/`)**:
    *   3-zone header with custom SVG geometric "K" logo, single-line navigation links, and "Request a Consultation" CTA.
    *   Hero section styled after reference image `C6D26D8F`: "Professional Legal Support When You Need It." with warm gold accent, London skyline backdrop, dual CTAs ("Request a Consultation" and "Learn More").
    *   "Our Areas of Practice" section: 8 distinct practice cards with circular navy badges, crisp icons, and direct detail links.
    *   "About Karkon Legal" section: Scales of justice & law book imagery alongside "Your Goals. Our Commitment." narrative.
    *   "Our Team" preview: Lawyer profiles featuring Managing Partner Md Hanif and team associates.
    *   "Latest Updates & Legal Insights" showcase: Dusk aesthetic cards displaying recent UK legal guides.
    *   "Book a Consultation" contact strip with phone, WhatsApp, and London office placeholder.
    *   Comprehensive footer with navigation mirror and legal disclaimers.
2.  **About Us (`/about`)**:
    *   Firm mission, approach to client care, transparent regulatory placeholders, and core principles.
3.  **Services Hub (`/services`)**:
    *   Search and filterable directory of all 8 core practice areas with scope overviews and situation guides.
4.  **8 Individual Service Detail Pages (`/services/:slug`)**:
    *   `/services/immigration-asylum` (Visas, settlement, asylum, bail)
    *   `/services/property-conveyancing` (Buying, selling, leaseholds, transfers)
    *   `/services/family-divorce` (Matrimonial, financial remedy, child arrangements)
    *   `/services/employment-disputes` (Tribunal claims, discrimination, contracts)
    *   `/services/personal-injury` (Accident compensation, medical negligence)
    *   `/services/civil-commercial` (Contract breaches, debt recovery, litigation)
    *   `/services/wills-probate` (Will drafting, estate administration, trusts)
    *   `/services/business-corporate` (Company incorporation, governance, compliance)
    *   *Each detail page includes: overview, common scenarios, firm assistance, FAQs, related articles, and consultation CTA.*
5.  **Our Team (`/team`)**:
    *   Detailed profiles featuring Solicitor Md Hanif (Immigration, Nationality & Employment Law Specialist) with verified contact `07368139587`, alongside team associates with editable credentials.
6.  **Legal Insights / Blog (`/insights`)**:
    *   Category filter tabs, live client-side search, reading time indicators, publication dates, and card grid.
    *   Pre-populated with rich, transcribed articles from the reference posters (Carmichael v National Power, Contract of Service vs Services, British Nationality Act Section 4C, Direct Discrimination Equality Act 2010, Indirect Discrimination PCP criteria, Immigration Bail 201).
7.  **Article Detail Page (`/insights/:slug`)**:
    *   Editorial layout with reading progress bar, breadcrumbs, key statutory references, callout boxes, related practice area links, share buttons, and consultation CTA.
8.  **Contact Us (`/contact`)**:
    *   Direct contact details (`+44 7368 139587` / `+44 20 7123 4567`), London address, interactive office hours card, validated enquiry form, and explicit local-demo limitation disclosure.
9.  **Request a Consultation (`/consultation`)**:
    *   Dedicated conversion page with service selection, situation summary, urgency selector, privacy acknowledgment, instant validation modal, and reference code generator.
10. **Privacy Policy & Legal Notice (`/privacy`)**:
    *   Data controller placeholders, client confidentiality statements, and regulatory notices.
11. **Admin Publishing Studio (`/admin`)**:
    *   Metric dashboard (Total, Published, Drafts).
    *   Article management table with search and status badges.
    *   Full article editor (Title, slug, category, author, excerpt, markdown/structured content sections, reading time, draft/publish toggle).
    *   Local persistence in `localStorage`, reset to sample data option, and JSON Export / Import with validation.

### Visual Identity & Theme Tokens

*   **Aesthetic Direction**: High-end British legal consultancy; authoritative, measured, and editorial.
*   **Palette**:
    *   Primary Navy: `#0A192F` / `#0F1E36` (header, hero dusk background, primary badges)
    *   Warm Legal Gold: `#C5A059` / `#D4AF37` (accent highlights, primary CTAs, icon borders)
    *   Canvas Backgrounds: `#FAF9F6` (warm ivory) and `#FFFFFF` (pure white)
    *   Text & Dividers: Slate `#1E293B`, Muted `#64748B`, Hairline Borders `#E2E8F0`
*   **Typography**:
    *   Headings & Display: Classic serif (`Cinzel` / `Playfair` fallback font-serif) with generous letter-spacing for uppercase kickers.
    *   Body & Interface: Clean sans-serif (`system-ui` / `Plus Jakarta Sans`) for optimal legibility at 16px with 1.6 line height.
*   **Anti-Slop Discipline**:
    *   Zero generic pills for static metadata — dates, read times, and categories separated by typographic dots (`·`).
    *   No synthetic AI scores or floating stats in top bars.
    *   Single-line controls and strict 3-zone header contract.

***

## 3. Key Product Decisions & Trade-Offs

*   **Self-Contained Local Operation**:
    *   *Chosen Approach*: The website operates 100% locally with zero external Google APIs, Firebase, or external image dependencies.
    *   *Why*: Complies strictly with the brief's critical requirement that the app run on the user's computer via `npm run dev` without cloud credentials.
*   **Local Storage for Administrative Publishing**:
    *   *Chosen Approach*: Provide a complete CMS interface at `/admin` with `localStorage` persistence, initial seeding from structured data, and JSON export/import.
    *   *Why*: Allows non-technical stakeholders to test publishing workflows immediately while remaining completely local; includes clear demonstration notices regarding production database migration.
*   **Real Reference Content Integration**:
    *   *Chosen Approach*: Transcribe the legal posters and advertisements provided by the user (featuring Solicitor Md Hanif and UK statutes) into authentic, multi-paragraph articles and team profiles.
    *   *Why*: Replaces generic lorem-ipsum with high-fidelity, jurisdictionally coherent content directly representing the firm's actual promotional material.

***

## 4. Technical Architecture & Data Strategy

### System & Navigation Flow

```
┌────────────────────────────────────────────────────────────────────────┐
│                        KARKON LEGAL WEB PLATFORM                       │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
          ┌─────────────────────────┴─────────────────────────┐
          ▼                                                   ▼
┌──────────────────┐                                ┌──────────────────┐
│   Public Site    │                                │    Admin Studio  │
│  (React Router)  │                                │     (/admin)     │
└─────────┬────────┘                                └─────────┬────────┘
          │                                                   │
  ┌───────┼───────────────────────────────┐                   │
  ▼       ▼               ▼               ▼                   ▼
Home    About      Practice Areas    Insights Hub      Local CMS Studio
 (/)   (/about)     (/services &       (/insights &     • Dashboard KPIs
                   8 detail pages)   individual slugs)  • Post Editor
                          │               ▲             • Draft / Publish
                          └───────┬───────┘             • JSON Export/Import
                                  ▼                           │
                        Consultation Booking                  │
                           (/consultation)                    │
                                  │                           │
                                  ▼                           ▼
                    ┌───────────────────────────┐   ┌──────────────────┐
                    │ Client Form Validation    │   │ LocalStorage /   │
                    │ Summary Modal & Mailto    │◄──┤ Initial Articles │
                    └───────────────────────────┘   └──────────────────┘
```

### Core Entities & Data Stores

*   `LegalService`: `id`, `slug`, `title`, `shortDesc`, `longDesc`, `iconName`, `keyScenarios[]`, `firmSupport[]`, `faqs[]`, `relatedArticleSlugs[]`.
*   `Article`: `id`, `slug`, `title`, `subtitle`, `category`, `author`, `publishedDate`, `readTime`, `excerpt`, `content` (structured sections, paragraphs, lists, quotes, statutes), `status` ('published' | 'draft'), `featured`, `tags[]`.
*   `TeamMember`: `id`, `name`, `role`, `credentials`, `specialties[]`, `phone`, `email`, `bio`, `photoPlaceholder`.
*   `ConsultationEnquiry`: `id`, `fullName`, `email`, `phone`, `service`, `urgency`, `message`, `submittedAt`, `status`.

***

## 5. Execution Steps

1.  **Dependencies & Routing Setup**: Install `react-router-dom` to support client-side multi-page routing across all required paths.
2.  **Data Architecture & Initial Seed**: Create `src/data/services.ts`, `src/data/team.ts`, and `src/data/articles.ts` with transcribed legal texts from the reference photos.
3.  **Local Storage Store & Admin Logic**: Implement `src/utils/storage.ts` to manage article state, initial seeding, draft filters, and JSON export/import.
4.  **Layout & Navigation Components**: Build the shared `Navbar`, `Footer`, `Breadcrumbs`, and `ConsultationModal` components adhering to the 3-zone contract.
5.  **Public Page Implementations**:
    *   Build Homepage (`/`) matching the exact layout and sections of reference image `C6D26D8F`.
    *   Build About Us (`/about`), Services directory (`/services`), and 8 individual service detail templates (`/services/:slug`).
    *   Build Our Team page (`/team`) and Contact page (`/contact`).
    *   Build Insights listing (`/insights`) and individual article reading template (`/insights/:slug`).
    *   Build Request a Consultation page (`/consultation`) and Privacy Policy (`/privacy`).
    *   Build 404 Not Found page.
6.  **Admin Studio (`/admin`)**:
    *   Build KPI overview, article list with status toggles, structured post creator/editor, and JSON backup/restore.
7.  **Verification**: Execute `compile_applet` and test all routes, search filters, drafting flows, and form validations.
