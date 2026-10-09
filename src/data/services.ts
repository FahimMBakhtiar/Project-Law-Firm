import { LegalService } from '../types';

export const LEGAL_SERVICES: LegalService[] = [
  {
    id: 'srv-1',
    slug: 'immigration-asylum',
    title: 'Immigration & Asylum',
    shortDesc: 'Visa, settlement, asylum and immigration matters.',
    fullOverview: 'Navigating UK immigration law requires precise documentation, up-to-date procedural knowledge, and prompt action. We provide structured guidance on visa applications, British nationality registration, administrative reviews, Home Office bail conditions, and asylum appeals.',
    iconName: 'Globe',
    targetAudience: 'Individuals, families, international professionals, and students navigating UK Home Office rules.',
    commonSituations: [
      'Applying for spouse, fiancé, or dependent family visas under Appendix FM.',
      'Registration as a British citizen under British Nationality Act 1981 (including historic Section 4C gender discrimination remedies).',
      'Challenging visa refusals, administrative reviews, and First-tier Tribunal appeals.',
      'Immigration Bail (BAIL 201) conditions management and variation applications.',
      'Indefinite Leave to Remain (ILR) and European Settlement Scheme (EUSS) status.',
    ],
    firmSupportServices: [
      'Comprehensive eligibility assessment before Home Office submission.',
      'Evidence bundling, cover letter drafting, and legal representation.',
      'Urgent bail applications and representations against administrative detention.',
      'Post-refusal appeal lodgement and hearing bundle preparation.',
    ],
    statutoryBases: [
      'Immigration Act 1971 & 2016',
      'British Nationality Act 1981',
      'UK Visas and Immigration (UKVI) Appendix FM and Skilled Worker Rules',
    ],
    faqs: [
      {
        question: 'What is Section 4C of the British Nationality Act 1981?',
        answer: 'Section 4C provides a legal remedy for individuals born outside the UK prior to 1 January 1983 to British mothers, remedying historic gender discrimination where citizenship could previously only be inherited through British fathers.',
      },
      {
        question: 'What should I do if I receive a Home Office BAIL 201 notice?',
        answer: 'A BAIL 201 notice grants immigration bail as an alternative to detention under strict conditions (e.g. reporting dates, residence requirements). Any condition breach can lead to re-detention, so urgent legal advice should be sought to comply or request condition variations.',
      },
      {
        question: 'How long do standard family visa applications take?',
        answer: 'Processing times typically range from 8 to 24 weeks depending on whether priority processing is available and whether the application is submitted from within the UK or overseas.',
      },
    ],
    relatedArticleSlugs: [
      'british-nationality-act-section-4c',
      'immigration-bail-201-rights-and-compliance',
      'uk-immigration-updates-key-changes',
    ],
    turnaroundEstimate: 'Initial consultations scheduled within 24–48 hours.',
  },
  {
    id: 'srv-2',
    slug: 'property-conveyancing',
    title: 'Property & Conveyancing',
    shortDesc: 'Buying, selling and property disputes.',
    fullOverview: 'Property transactions and boundary disputes represent substantial financial commitments. We assist buyers, sellers, landlords, and tenants through title examinations, contract exchanges, completion formalities, lease extensions, and landlord-tenant disagreements.',
    iconName: 'Home',
    targetAudience: 'Homebuyers, property investors, residential landlords, and tenants.',
    commonSituations: [
      'Residential freehold and leasehold purchases, sales, and remortgages.',
      'Lease extensions, freehold enfranchisement, and service charge disputes.',
      'Transfer of equity between co-owners and declarations of trust.',
      'Boundary disputes, easements, and rights of way disagreements.',
      'Section 21 and Section 8 possession notices and tenant arrears proceedings.',
    ],
    firmSupportServices: [
      'Pre-contract title investigation, local authority searches, and environmental checks.',
      'Drafting bespoke transfer deeds, covenants, and co-ownership agreements.',
      'Negotiating dispute settlements between neighboring landowners.',
      'Guiding clients through completion, Stamp Duty Land Tax (SDLT) filings, and Land Registry updates.',
    ],
    statutoryBases: [
      'Law of Property Act 1925',
      'Land Registration Act 2002',
      'Housing Act 1988 & Leasehold Reform (Ground Rent) Act 2022',
    ],
    faqs: [
      {
        question: 'What is the standard timeline for residential conveyancing?',
        answer: 'A typical residential conveyancing transaction in England and Wales takes approximately 8 to 12 weeks from receipt of draft contract pack to completion, depending on chain length and search delays.',
      },
      {
        question: 'What is the difference between freehold and leasehold?',
        answer: 'Freehold ownership grants outright ownership of the property and the land it stands on indefinitely. Leasehold gives ownership of the property for a fixed period under a lease from the freeholder.',
      },
    ],
    relatedArticleSlugs: [
      'property-conveyancing-what-to-expect',
    ],
    turnaroundEstimate: 'Quotes and initial contract reviews provided within 2 business days.',
  },
  {
    id: 'srv-3',
    slug: 'family-divorce',
    title: 'Family & Divorce',
    shortDesc: 'Marriage, divorce, child matters and family disputes.',
    fullOverview: 'Family matters demand both legal clarity and empathetic, constructive handling. We provide measured assistance with no-fault divorce proceedings, financial remedy orders, clean break consent orders, and child arrangements orders (CAOs).',
    iconName: 'Users',
    targetAudience: 'Spouses, civil partners, cohabitants, and parents resolving marital and parental rights.',
    commonSituations: [
      'No-fault divorce applications under the Divorce, Dissolution and Separation Act 2020.',
      'Division of matrimonial assets, pensions, property, and spousal maintenance.',
      'Drafting legally binding financial consent orders and clean break settlements.',
      'Child Arrangements Orders (residence, contact, holiday time, and schooling disputes).',
      'Prenuptial, postnuptial, and cohabitation agreements.',
    ],
    firmSupportServices: [
      'Drafting court applications and representing clients in private family dispute resolution.',
      'Negotiating fair financial settlements without acrimonious court battles.',
      'Securing urgent Non-Molestation Orders and Occupation Orders where protection is needed.',
      'Assisting parents through mediation and child welfare considerations.',
    ],
    statutoryBases: [
      'Matrimonial Causes Act 1973',
      'Children Act 1989',
      'Divorce, Dissolution and Separation Act 2020',
    ],
    faqs: [
      {
        question: 'How long does a no-fault divorce take in England and Wales?',
        answer: 'Under current law, there is a mandatory minimum 20-week reflection period between application and Conditional Order, plus a 6-week waiting period before Final Order, meaning proceedings take at least 6 months.',
      },
      {
        question: 'Is a divorce financial agreement automatically binding?',
        answer: 'No. An informal agreement between spouses is not legally binding until approved by a Family Court judge as a formal Consent Order.',
      },
    ],
    relatedArticleSlugs: [
      'understanding-your-rights-in-family-law',
    ],
    turnaroundEstimate: 'Sensitive, confidential consultation scheduled within 24 hours.',
  },
  {
    id: 'srv-4',
    slug: 'employment-disputes',
    title: 'Employment Disputes',
    shortDesc: 'Workplace disputes, contracts and HR matters.',
    fullOverview: 'Employment relationships are subject to detailed statutory protections under UK law. Led by specialist employment legal practitioners, we support employees and businesses through contract disputes, discrimination claims, unfair dismissal, and ACAS Early Conciliation.',
    iconName: 'Briefcase',
    targetAudience: 'Employees, company directors, gig economy contractors, and SME employers.',
    commonSituations: [
      'Worker classification disputes: Contract of Service (employee) vs Contract for Services (contractor).',
      'Unfair dismissal, constructive dismissal, and redundancy selection disputes.',
      'Direct and indirect workplace discrimination under the Equality Act 2010.',
      'Harassment, victimisation, and whistleblowing detriment.',
      'Drafting and negotiating Settlement Agreements with independent legal advice.',
    ],
    firmSupportServices: [
      'Reviewing employment contracts, restrictive covenants, and disciplinary proceedings.',
      'Representation during ACAS Early Conciliation and Employment Tribunal litigation.',
      'Assessing worker mutuality of obligation under landmark case law (such as Carmichael v National Power).',
      'Advising employers on compliant HR policies and grievance handling.',
    ],
    statutoryBases: [
      'Employment Rights Act 1996',
      'Equality Act 2010',
      'Trade Union and Labour Relations (Consolidation) Act 1992',
    ],
    faqs: [
      {
        question: 'What is the strict time limit for lodging an Employment Tribunal claim?',
        answer: 'Under UK law, the primary time limit is strictly three months minus one day from the date of dismissal or the discriminatory act. You must contact ACAS for Early Conciliation before the deadline expires.',
      },
      {
        question: 'What is the difference between a Contract of Service and a Contract for Services?',
        answer: 'A Contract of Service establishes an employment relationship with full statutory rights (holiday pay, redundancy, unfair dismissal). A Contract for Services establishes an independent contractor relationship with high autonomy and self-assessed taxes.',
      },
    ],
    relatedArticleSlugs: [
      'contract-of-service-vs-contract-for-services',
      'carmichael-case-employment-status-casual-workers',
      'direct-discrimination-employment-law-uk',
      'workplace-discrimination-rights-and-equality-act',
    ],
    turnaroundEstimate: 'Prompt assessment of tribunal limitation dates within 24 hours.',
  },
  {
    id: 'srv-5',
    slug: 'personal-injury',
    title: 'Personal Injury Claims',
    shortDesc: 'Accident claims and compensation.',
    fullOverview: 'Suffering an injury due to another party’s negligence can cause substantial physical, financial, and emotional strain. We guide claimants through accident claims, medical assessment reviews, special damages calculation, and insurer negotiations.',
    iconName: 'Car',
    targetAudience: 'Individuals injured in road accidents, workplace incidents, or public premises.',
    commonSituations: [
      'Road traffic collisions involving drivers, cyclists, and pedestrians.',
      'Accidents at work resulting from inadequate safety equipment or unsafe systems of work.',
      'Slips, trips, and falls on public highways or commercial premises (Occupiers’ liability).',
      'Industrial injury, repetitive strain, and manual handling injuries.',
    ],
    firmSupportServices: [
      'Independent case liability assessment and evidence gathering.',
      'Instructing certified medical experts to document injury prognosis.',
      'Quantifying general damages (pain, suffering) and special damages (lost wages, rehabilitation).',
      'Negotiating settlement offers with defendant insurance adjusters.',
    ],
    statutoryBases: [
      'Health and Safety at Work etc. Act 1974',
      'Occupiers’ Liability Act 1957 & 1984',
      'Limitation Act 1980 (3-year limitation)',
    ],
    faqs: [
      {
        question: 'What is the limitation period for personal injury claims in the UK?',
        answer: 'In England and Wales, you generally have three years from the date of the accident or three years from the date you gained knowledge of the injury to initiate court proceedings.',
      },
      {
        question: 'What can be claimed under special damages?',
        answer: 'Special damages cover quantifiable financial losses including loss of earnings, travel expenses to medical appointments, prescription costs, private medical treatment, and home care assistance.',
      },
    ],
    relatedArticleSlugs: [
      'understanding-your-rights-in-family-law',
    ],
    turnaroundEstimate: 'Initial case evaluation provided free of charge.',
  },
  {
    id: 'srv-6',
    slug: 'civil-commercial',
    title: 'Civil & Commercial Disputes',
    shortDesc: 'Disputes, contracts and business litigation.',
    fullOverview: 'Contractual disagreements, unpaid business debts, and partnership disputes can quickly disrupt operations and cash flow. We focus on pragmatic pre-action resolution, mediation, and robust representation in County Court and High Court actions.',
    iconName: 'Scale',
    targetAudience: 'Sole traders, small and medium enterprises, contractors, and individuals facing disputes.',
    commonSituations: [
      'Breach of contract claims involving suppliers, contractors, or customers.',
      'Commercial debt recovery, statutory demands, and insolvency proceedings.',
      'Shareholder and partnership disputes, deadlock resolution, and director duties.',
      'Professional negligence claims against accountants, surveyors, or architects.',
      'Injunctions and urgent asset protection orders.',
    ],
    firmSupportServices: [
      'Pre-Action Protocol compliance and Letter of Claim drafting.',
      'Without-prejudice negotiation and Alternative Dispute Resolution (ADR) advocacy.',
      'Commencing or defending County Court Money Claims.',
      'Enforcing judgments via Charging Orders, Third Party Debt Orders, and High Court Writs.',
    ],
    statutoryBases: [
      'Civil Procedure Rules (CPR)',
      'Consumer Rights Act 2015',
      'Late Payment of Commercial Debts (Interest) Act 1998',
    ],
    faqs: [
      {
        question: 'What are the Civil Procedure Rules (CPR) Pre-Action Protocols?',
        answer: 'Pre-Action Protocols require parties to exchange detailed information, documents, and realistic settlement proposals before issuing court proceedings. Courts penalize parties in costs if they skip these steps.',
      },
      {
        question: 'Can commercial debts be recovered quickly?',
        answer: 'For undisputed debts over £750 against a company or £5,000 against an individual, a formal Letter Before Action followed by a Statutory Demand often prompts prompt settlement without trial.',
      },
    ],
    relatedArticleSlugs: [
      'contract-of-service-vs-contract-for-services',
    ],
    turnaroundEstimate: 'Rapid litigation risk analysis within 48 hours.',
  },
  {
    id: 'srv-7',
    slug: 'wills-probate',
    title: 'Wills, Probate & Estate Matters',
    shortDesc: 'Wills, inheritance and estate planning.',
    fullOverview: 'Proper estate planning ensures your assets are protected and distributed according to your genuine wishes, shielding loved ones from unnecessary delays, disputes, and inheritance tax burdens.',
    iconName: 'FileText',
    targetAudience: 'Individuals and families planning for the future, executors, and bereaved beneficiaries.',
    commonSituations: [
      'Drafting valid single and mirror Wills tailored to family dynamics.',
      'Lasting Powers of Attorney (LPA) for Health & Welfare and Property & Financial Affairs.',
      'Grant of Probate applications and letters of administration for intestate estates.',
      'Estate administration, asset collection, and distribution to beneficiaries.',
      'Contested probate and Inheritance (Provision for Family and Dependants) Act 1975 claims.',
    ],
    firmSupportServices: [
      'Reviewing existing wills for statutory execution formalities and tax efficiency.',
      'Registering LPAs with the Office of the Public Guardian.',
      'Calculating Inheritance Tax (IHT) liabilities and claiming transferrable nil-rate bands.',
      'Guiding executors through their legal duties to prevent personal liability.',
    ],
    statutoryBases: [
      'Wills Act 1837',
      'Administration of Estates Act 1925',
      'Inheritance (Provision for Family and Dependants) Act 1975',
    ],
    faqs: [
      {
        question: 'What happens if someone passes away without a valid Will in the UK?',
        answer: 'Their estate is distributed according to the statutory Rules of Intestacy. Unmarried partners and stepchildren receive nothing automatically, which often leads to unintended hardship.',
      },
      {
        question: 'What is a Lasting Power of Attorney (LPA)?',
        answer: 'An LPA is a legal deed that allows you to appoint trusted individuals to make financial or medical decisions on your behalf if you lose mental capacity in the future.',
      },
    ],
    relatedArticleSlugs: [
      'understanding-your-rights-in-family-law',
    ],
    turnaroundEstimate: 'Standard Wills prepared within 5–7 business days.',
  },
  {
    id: 'srv-8',
    slug: 'business-corporate',
    title: 'Business & Corporate Legal Issues',
    shortDesc: 'Company formation, advice and commercial support.',
    fullOverview: 'From starting a new venture to scaling commercial operations, sound corporate legal structuring prevents internal deadlock and protects intellectual property, investments, and director liability.',
    iconName: 'Building2',
    targetAudience: 'Startups, growing enterprises, company directors, and business founders.',
    commonSituations: [
      'Incorporation structuring, bespoke Articles of Association, and shareholder agreements.',
      'Commercial contract review (terms of business, SLA, NDA, distribution agreements).',
      'Director service agreements and corporate governance compliance under Companies Act 2006.',
      'Mergers, acquisitions, share purchases, and asset transfers.',
      'Data protection (UK GDPR) compliance policies and supplier audits.',
    ],
    firmSupportServices: [
      'Drafting protective minority shareholder clauses and drag-along/tag-along rights.',
      'Structuring vendor contracts to limit liability and define clear payment mechanisms.',
      'Advising boards on statutory duties under Sections 171–177 of the Companies Act.',
      'Preparing standard business terms and conditions for UK and cross-border commerce.',
    ],
    statutoryBases: [
      'Companies Act 2006',
      'UK General Data Protection Regulation (UK GDPR)',
      'Data Protection Act 2018',
    ],
    faqs: [
      {
        question: 'Why is a bespoke Shareholder Agreement vital for co-founders?',
        answer: 'Standard Articles of Association do not adequately protect against founder departures, disputes, or death. A Shareholder Agreement sets rules on share valuation, transfer restrictions, and dispute deadlock mechanisms.',
      },
      {
        question: 'What are the key director duties under the Companies Act 2006?',
        answer: 'Key duties include acting within powers, promoting the success of the company for the benefit of members as a whole, exercising independent judgement, exercising reasonable care, and avoiding conflicts of interest.',
      },
    ],
    relatedArticleSlugs: [
      'contract-of-service-vs-contract-for-services',
    ],
    turnaroundEstimate: 'Corporate consultations arranged within 2 business days.',
  },
];
