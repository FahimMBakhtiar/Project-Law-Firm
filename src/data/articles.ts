import { Article } from '../types';

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-1',
    slug: 'contract-of-service-vs-contract-for-services',
    title: 'Contract of Service vs Contract for Services',
    subtitle: 'Key Differences in UK Employment Law & Worker Status',
    category: 'Employment Disputes',
    author: 'Md Hanif',
    authorRole: 'Solicitor | Employment Law Specialist',
    authorVerified: true,
    publishedDate: '18 Sep 2024',
    readTime: '6 min read',
    excerpt: 'Understanding the legal distinction between an employee under a Contract of Service and a self-employed contractor under a Contract for Services is fundamental to avoiding tribunal disputes and HMRC penalties.',
    featured: true,
    status: 'published',
    imageKey: 'solicitorPortrait',
    statutoryReferences: [
      'Employment Rights Act 1996 s.230',
      'Equality Act 2010',
      'HMRC IR35 & Off-Payroll Working Rules',
    ],
    tags: ['Employment Law', 'Worker Status', 'Contract of Service', 'HMRC', 'Tribunal'],
    relatedServiceSlug: 'employment-disputes',
    sections: [
      {
        heading: 'Introduction: Why Legal Status Matters',
        paragraphs: [
          'In UK employment law, the words written on the front page of a contract do not conclude the question of employment status. Whether an individual is working under a Contract of Service (as an employee) or a Contract for Services (as an independent self-employed contractor) dictates statutory rights, tax obligations, and employer liabilities.',
          'Tribunals examine the practical commercial reality of the working arrangement. Misclassifying an employee as a self-employed contractor can expose employers to substantial backdated claims for holiday pay, unfair dismissal, National Minimum Wage breaches, and penalties from HM Revenue & Customs.',
        ],
      },
      {
        heading: 'Core Distinctions at a Glance',
        paragraphs: [
          'The courts apply well-established common law tests to distinguish between these two relationships:',
        ],
        bulletPoints: [
          'Contract of Service (Employee): The employer exercises control over how, when, and where work is done; personal service is mandatory with no right of substitution; the worker is deeply integrated into the business; full statutory employment rights apply (paid holiday, sick pay, unfair dismissal protection, statutory redundancy pay); and tax/National Insurance are deducted via PAYE.',
          'Contract for Services (Independent Contractor): The individual retains high autonomy over methods and scheduling; is free to provide a substitute; operates an independent business providing their own tools and equipment; receives limited statutory employment rights from the client; and invoices directly while self-assessing tax and National Insurance.',
        ],
        calloutBox: {
          title: 'Tribunal Principle: Substance Over Form',
          content: 'Labeling an individual "self-employed" or "freelance" in a written agreement will not prevent an Employment Tribunal from finding that a true Contract of Service exists if the worker is subject to direct management control and mutuality of obligation.',
          type: 'statute',
        },
      },
      {
        heading: 'Real-Life Workplace Scenarios',
        paragraphs: [
          'To understand how this operates in practice, consider three standard working patterns examined by UK courts:',
        ],
        bulletPoints: [
          '1. Full-time office worker: Bound by fixed working hours, supervised by line management, and using company IT equipment → Almost invariably working under a Contract of Service as an employee.',
          '2. Freelance IT consultant: Hired to deliver a specific software architecture project across multiple concurrent clients, working irregular hours with their own workstation → Operating under a Contract for Services.',
          '3. App-based delivery driver or courier: Using their own vehicle but subject to rigid platform rating systems and fixed pricing algorithms → Frequently litigated in UK courts, often classified as statutory "workers" entitled to minimum wage and holiday pay.',
        ],
      },
      {
        heading: 'Steps for Employers and Workers',
        paragraphs: [
          'Before drafting or signing consultancy agreements, both businesses and contractors should audit the degree of control, substitution clauses, and financial risk involved in the role.',
          'If you are facing an employment status dispute, an impending tribunal deadline, or require comprehensive contract reviews, obtaining early specialist legal advice ensures your position remains protected.',
        ],
      },
    ],
  },
  {
    id: 'art-2',
    slug: 'carmichael-case-employment-status-casual-workers',
    title: 'The Carmichael Case: Why It Is Very Important',
    subtitle: 'Carmichael v National Power plc [1999] UKHL 47 — Landmark Decision on Casual Workers',
    category: 'Employment Disputes',
    author: 'Md Hanif',
    authorRole: 'Solicitor | Employment Law Specialist',
    authorVerified: true,
    publishedDate: '10 Sep 2024',
    readTime: '7 min read',
    excerpt: 'The landmark House of Lords ruling in Carmichael v National Power established the indispensable role of mutuality of obligation when deciding whether casual and on-call workers are legally employees.',
    featured: true,
    status: 'published',
    imageKey: 'lawBooksScales',
    statutoryReferences: [
      'Carmichael v National Power plc [1999] UKHL 47',
      'Employment Rights Act 1996 s.230(1)',
      'Ready Mixed Concrete (South East) Ltd v Minister of Pensions [1968]',
    ],
    tags: ['Employment Law', 'Carmichael Case', 'Casual Workers', 'Zero-Hours', 'Mutuality of Obligation'],
    relatedServiceSlug: 'employment-disputes',
    sections: [
      {
        heading: 'Background to the Landmark House of Lords Decision',
        paragraphs: [
          'Mrs Carmichael and Mrs Leese worked as station guides at Blyth Power Station on a casual "as and when required" basis. When they sought written statements of employment particulars under the predecessor to the Employment Rights Act 1996, the employer resisted, contending that they were not employees during the gaps between tours.',
          'The case reached the UK House of Lords, creating what remains one of the most cited authorities in modern employment and labour jurisprudence.',
        ],
      },
      {
        heading: 'The Key Legal Ruling: Mutuality of Obligation',
        paragraphs: [
          'The House of Lords held that the casual guides had no overarching contract of employment ("umbrella contract") between periods of actual work. The determinative factor was the absence of mutuality of obligation.',
        ],
        quote: {
          text: 'There was no ongoing obligation on the employer to provide work, nor was there any continuing obligation on the guides to accept work when offered. In the absence of an irreducible minimum of mutual obligation, no contract of employment could exist.',
          citation: 'Lord Irvine of Lairg LC, Carmichael v National Power plc [1999] UKHL 47',
        },
      },
      {
        heading: 'Why the Carmichael Decision Matters Today',
        paragraphs: [
          'In contemporary Britain, characterized by flexible staffing arrangements, zero-hours contracts, and platform economy roles, the Carmichael doctrine is vital for several reasons:',
        ],
        bulletPoints: [
          'Defines the irreducible minimum: Without mutuality of obligation alongside control and personal service, an employment contract cannot stand.',
          'Crucial boundary for statutory rights: Unfair dismissal rights and redundancy pay require continuous service, which is broken if no umbrella contract connects casual shifts.',
          'Guides robust contract drafting: Enables employers and workers to understand the consequences of genuine on-call flexibility versus disguised permanent employment.',
        ],
      },
      {
        heading: 'Modern Scenarios Affected by Carmichael',
        paragraphs: [
          'The doctrine applies directly across key modern work structures:',
        ],
        bulletPoints: [
          'Zero-Hours Contracts: Evaluating whether an umbrella contract has evolved through regular, unvarying working patterns over time.',
          'Casual / On-Call Staffing: Assessing whether staff retain a genuine right to refuse shifts without adverse consequences.',
          'Gig Economy Platforms: Analyzing whether app terms create obligations between assignments.',
          'Temporary & Seasonal Employment: Structuring seasonal periods with clear start and termination markers.',
        ],
      },
    ],
  },
  {
    id: 'art-3',
    slug: 'british-nationality-act-section-4c',
    title: 'British Nationality Act 1981 – Section 4C',
    subtitle: 'Discretionary Registration for Children Born Outside the UK to British Mothers',
    category: 'Immigration & Asylum',
    author: 'Md Hanif',
    authorRole: 'Solicitor | Specialist in British Nationality Law',
    authorVerified: true,
    publishedDate: '02 Sep 2024',
    readTime: '8 min read',
    excerpt: 'How Section 4C remedies historical gender discrimination by enabling individuals born abroad before 1983 to British mothers to register as full British citizens.',
    featured: true,
    status: 'published',
    imageKey: 'immigrationDocs',
    statutoryReferences: [
      'British Nationality Act 1981 Section 4C',
      'Nationality, Immigration and Asylum Act 2002',
      'British Nationality Act 1948',
    ],
    tags: ['Immigration', 'British Nationality', 'Section 4C', 'Citizenship by Descent', 'Home Office'],
    relatedServiceSlug: 'immigration-asylum',
    sections: [
      {
        heading: 'Historical Background: The Pre-1983 Gender Inequity',
        paragraphs: [
          'Prior to 1 January 1983, British nationality law was inherently patriarchal. Under the British Nationality Act 1948, a child born outside the United Kingdom and Colonies could acquire British citizenship by descent through their legitimate father, but not through their mother.',
          'This created widespread injustice for generations of British women who gave birth abroad. Section 4C of the British Nationality Act 1981 was enacted by Parliament as a statutory remedy to eliminate this historic gender discrimination.',
        ],
      },
      {
        heading: 'Who Is Eligible to Apply Under Section 4C?',
        paragraphs: [
          'To qualify for registration as a British citizen under Section 4C, an applicant must satisfy three statutory criteria:',
        ],
        bulletPoints: [
          'You were born before 1 January 1983 outside the United Kingdom.',
          'You would have become a Citizen of the United Kingdom and Colonies (CUKC) through your British mother on the day of your birth if the law had allowed mothers to pass on citizenship on the same terms as fathers.',
          'You would have held the Right of Abode in the United Kingdom immediately before 1 January 1983.',
        ],
        calloutBox: {
          title: 'The Importance of Right of Abode',
          content: 'Not every CUKC held the Right of Abode in the UK. Applicants must prove their hypothetical right of abode through parentage, birthplace, or continuous residence under the Immigration Act 1971.',
          type: 'warning',
        },
      },
      {
        heading: 'How Section 4C Registration Restores Your Rights',
        paragraphs: [
          'Registration under Section 4C grants full British citizenship by descent, granting holders an unconditional right to live and work in the UK, obtain a British passport, and enjoy consular protection abroad.',
          'Because Section 4C applications involve reconstructing historical family documents—frequently spanning birth certificates, marriage registers, and colonial archives dating back over forty years—careful documentary preparation is essential before filing Home Office Form UKM.',
        ],
      },
    ],
  },
  {
    id: 'art-4',
    slug: 'direct-discrimination-employment-law-uk',
    title: 'Direct Discrimination in Employment Law',
    subtitle: 'Understanding Protections Under the Equality Act 2010',
    category: 'Employment Disputes',
    author: 'Md Hanif',
    authorRole: 'Solicitor | Employment Matters Specialist',
    authorVerified: true,
    publishedDate: '26 Aug 2024',
    readTime: '5 min read',
    excerpt: 'What constitutes direct discrimination under UK law, the three primary legal forms (Ordinary, By Association, By Perception), and how to seek redress at an Employment Tribunal.',
    featured: false,
    status: 'published',
    imageKey: 'solicitorPortrait',
    statutoryReferences: [
      'Equality Act 2010 s.13',
      'Coleman v Attridge Law [2008] (Discrimination by Association)',
      'Chief Constable of Norfolk v Coffey [2019] (Perception)',
    ],
    tags: ['Equality Act 2010', 'Direct Discrimination', 'Tribunal Claims', 'Workplace Rights'],
    relatedServiceSlug: 'employment-disputes',
    sections: [
      {
        heading: 'What is Direct Discrimination?',
        paragraphs: [
          'Under Section 13 of the Equality Act 2010, direct discrimination occurs when an employer treats an employee or job applicant less favourably than they treat (or would treat) others, because of a protected characteristic.',
          'Unlike indirect discrimination, direct discrimination cannot normally be justified by an employer, except in very narrow circumstances involving occupational requirements or age.',
        ],
      },
      {
        heading: 'The Three Forms of Direct Discrimination',
        paragraphs: [
          'UK law recognizes three distinct manifestations of direct discrimination:',
        ],
        bulletPoints: [
          '1. Ordinary Direct Discrimination: Occurs when you are treated less favourably because of your own protected characteristic (e.g. an exceptionally qualified female engineer passed over solely in favour of a less experienced male candidate).',
          '2. Discrimination by Association: Occurs when you are treated unfavourably not because of your own characteristic, but because of someone you are connected with (e.g. an employee denied flexible working or passed over for promotion because their child has a severe disability).',
          '3. Discrimination by Perception: Occurs when an employer treats a worker unfavourably based on a mistaken belief that they possess a protected characteristic (e.g. refusing to promote an employee because the employer mistakenly perceives them to follow a particular religion or sexual orientation).',
        ],
      },
      {
        heading: 'Remedies Available in Employment Tribunals',
        paragraphs: [
          'Compensation in successful discrimination claims is uncapped under UK law. Claimants may recover awards for financial loss as well as awards for Injury to Feelings under the established Vento guidelines.',
          'Early legal intervention helps preserve contemporaneous emails, grievance records, and witness accounts before the strict three-month tribunal limitation clock runs out.',
        ],
      },
    ],
  },
  {
    id: 'art-5',
    slug: 'workplace-discrimination-rights-and-equality-act',
    title: 'Discrimination in the Workplace: Know Your Rights',
    subtitle: 'Direct, Indirect, Harassment, and Victimisation Across the 9 Protected Characteristics',
    category: 'Employment Disputes',
    author: 'Md Hanif',
    authorRole: 'Solicitor | Employment Law Specialist',
    authorVerified: true,
    publishedDate: '19 Aug 2024',
    readTime: '6 min read',
    excerpt: 'A comprehensive guide to workplace equality protections under the Equality Act 2010, outlining the four primary categories of prohibited conduct and steps to protect your rights.',
    featured: false,
    status: 'published',
    imageKey: 'lawBooksScales',
    statutoryReferences: [
      'Equality Act 2010 ss.13, 19, 26, 27',
      'ACAS Code of Practice on Disciplinary and Grievance Procedures',
    ],
    tags: ['Employment Law', 'Harassment', 'Victimisation', 'Workplace Rights', 'Equality Act'],
    relatedServiceSlug: 'employment-disputes',
    sections: [
      {
        heading: 'The Nine Protected Characteristics',
        paragraphs: [
          'The Equality Act 2010 provides a unified statutory framework safeguarding individuals in employment across England, Wales, and Scotland. It explicitly covers nine protected characteristics: Age, Disability, Gender Reassignment, Marriage & Civil Partnership, Pregnancy & Maternity, Race, Religion or Belief, Sex, and Sexual Orientation.',
        ],
      },
      {
        heading: 'The Four Main Categories of Unlawful Conduct',
        paragraphs: [
          'Unlawful treatment generally falls into one of four statutory definitions:',
        ],
        bulletPoints: [
          'Direct Discrimination: Less favourable treatment directly motivated by a protected characteristic.',
          'Indirect Discrimination: A neutral provision, criterion, or practice (PCP) applied to everyone that puts individuals sharing a protected characteristic at a particular disadvantage, and cannot be shown to be a proportionate means of achieving a legitimate aim.',
          'Harassment: Unwanted conduct related to a protected characteristic that violates an employee\'s dignity or creates an intimidating, hostile, degrading, or offensive environment.',
          'Victimisation: Subjecting an individual to a detriment because they raised a discrimination complaint or supported a colleague\'s claim.',
        ],
      },
      {
        heading: 'Common Workplace Scenarios',
        paragraphs: [
          'Real-life instances include being denied promotion following maternity leave disclosure, offensive jokes or slurs left unaddressed by management, failure to implement reasonable adjustments for a disabled worker, or dismissal following the submission of a formal grievance.',
        ],
      },
    ],
  },
  {
    id: 'art-6',
    slug: 'immigration-bail-201-rights-and-compliance',
    title: 'Immigration Bail 201: Rights, Conditions & Compliance',
    subtitle: 'UK Home Office BAIL 201 Notification Under Immigration Act 2016',
    category: 'Immigration & Asylum',
    author: 'Md Hanif',
    authorRole: 'Solicitor | Specialist in All Immigration Matters',
    authorVerified: true,
    publishedDate: '12 Aug 2024',
    readTime: '6 min read',
    excerpt: 'What receiving a BAIL 201 notice means, how conditions are imposed as an alternative to detention, and how to apply for condition variations or relief.',
    featured: false,
    status: 'published',
    imageKey: 'immigrationDocs',
    statutoryReferences: [
      'Immigration Act 2016 Schedule 10',
      'Immigration Act 1971',
    ],
    tags: ['Immigration Bail', 'BAIL 201', 'Home Office', 'Detention', 'Immigration Act 2016'],
    relatedServiceSlug: 'immigration-asylum',
    sections: [
      {
        heading: 'What is a Home Office BAIL 201 Notice?',
        paragraphs: [
          'A BAIL 201 notification is an official legal document issued by the UK Home Office granting immigration bail under Schedule 10 of the Immigration Act 2016. It serves as an alternative to administrative detention while an individual\'s immigration case, appeal, or departure is pending.',
          'Immigration bail allows an individual to reside in the community, but subject to mandatory conditions designed to maintain contact and oversight.',
        ],
      },
      {
        heading: 'Mandatory Conditions and How They Affect You',
        paragraphs: [
          'The Home Office typically attaches one or more conditions to a BAIL 201 grant:',
        ],
        bulletPoints: [
          'Reporting Condition: Mandating regular attendance at a specified Home Office reporting centre or police station.',
          'Residence Condition: Requirement to live at a designated approved address and notify the Home Office prior to any relocation.',
          'Employment & Study Restrictions: Strict prohibition or strict limitations on working or studying in the UK.',
          'Financial Condition (Surety): Requirement for a financial guarantor to pledge funds ensuring compliance.',
          'Electronic Monitoring: In certain cases, requirement to wear an electronic monitoring tag.',
        ],
      },
      {
        heading: 'Consequences of Condition Breach',
        paragraphs: [
          'Breaching immigration bail conditions is a criminal offence under Section 24(1)(h) of the Immigration Act 1971 and can lead to immediate arrest and return to immigration detention. Furthermore, breaches are recorded against future visa or settlement applications.',
          'If an existing reporting location or condition is causing undue hardship or medical complications, a formal variation request can be made to the Home Office or the First-tier Tribunal.',
        ],
      },
    ],
  },
  {
    id: 'art-7',
    slug: 'property-conveyancing-what-to-expect',
    title: 'Property Conveyancing: What to Expect When Buying',
    subtitle: 'Navigating Title Searches, Exchange of Contracts, and Completion in England & Wales',
    category: 'Property & Conveyancing',
    author: 'Karkon Legal Property Practice',
    authorRole: 'Editorial Practice Guide',
    authorVerified: false,
    publishedDate: '05 Sep 2024',
    readTime: '5 min read',
    excerpt: 'A step-by-step roadmap for residential property transactions, explaining search packs, mortgage requirements, exchange of contracts, and final completion.',
    featured: false,
    status: 'published',
    imageKey: 'propertyHomes',
    statutoryReferences: [
      'Law of Property Act 1925',
      'Land Registration Act 2002',
    ],
    tags: ['Conveyancing', 'Property Law', 'Buying a Home', 'Land Registry'],
    relatedServiceSlug: 'property-conveyancing',
    sections: [
      {
        heading: 'The Conveyancing Process Demystified',
        paragraphs: [
          'Buying a residential property in England and Wales involves structured legal milestones from offer acceptance to handover of keys. Understanding these stages ensures smooth progress and prevents unexpected delays.',
        ],
      },
      {
        heading: 'Key Milestones in Every Transaction',
        paragraphs: [
          'Every freehold and leasehold purchase moves through three core phases:',
        ],
        bulletPoints: [
          'Pre-Exchange: Examining title deeds, ordering local authority and environmental searches, reviewing mortgage offers, and raising formal enquiries.',
          'Exchange of Contracts: The moment the agreement becomes legally binding; a 10% deposit is paid and a completion date is fixed.',
          'Completion: Funds are transferred to the seller\'s solicitors, legal ownership transfers, keys are released, and Land Registry applications are filed.',
        ],
      },
    ],
  },
  {
    id: 'art-8',
    slug: 'understanding-your-rights-in-family-law',
    title: 'Understanding Your Rights in Family Law',
    subtitle: 'Financial Remedy, Clean Break Orders, and Child Arrangements',
    category: 'Family & Divorce',
    author: 'Karkon Legal Family Practice',
    authorRole: 'Editorial Practice Guide',
    authorVerified: false,
    publishedDate: '28 Aug 2024',
    readTime: '5 min read',
    excerpt: 'An overview of financial dispute resolution and child welfare principles under English family law, highlighting the necessity of formal Consent Orders.',
    featured: false,
    status: 'published',
    imageKey: 'lawBooksScales',
    statutoryReferences: [
      'Matrimonial Causes Act 1973 s.25',
      'Children Act 1989',
    ],
    tags: ['Family Law', 'Divorce', 'Child Arrangements', 'Consent Orders'],
    relatedServiceSlug: 'family-divorce',
    sections: [
      {
        heading: 'Securing Financial Finality After Divorce',
        paragraphs: [
          'Many people believe that obtaining a final divorce order automatically ends financial claims between former spouses. In English law, this is a dangerous misconception. Without a court-approved Consent Order providing a Clean Break, former spouses can make claims on pensions, inheritance, and business assets years after divorce.',
        ],
      },
      {
        heading: 'The Welfare of the Child as Paramount Consideration',
        paragraphs: [
          'When determining Child Arrangements Orders, courts are bound by Section 1 of the Children Act 1989: the child\'s welfare is the court\'s paramount consideration. Judges assess housing stability, emotional needs, educational continuity, and parental capability rather than parental convenience.',
        ],
      },
    ],
  },
];
