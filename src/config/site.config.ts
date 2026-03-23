/**
 * ============================================================
 *  BizPresence Pro — Site configuration (single source of truth)
 * ============================================================
 *  Replace the COMPANY block with your organization’s details.
 *  All other sections are sample template copy — edit as needed.
 * ============================================================
 */
import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  // ── Company (replace with your organization) ───────────────
  company: {
    name: "Your Company Inc.",
    shortName: "Your Company",
    tagline: "Enterprise Technology & Digital Services",
    description:
      "A professional technology services organization delivering consulting, software engineering, and managed solutions. Update this description in site.config.ts to reflect your value proposition and markets.",
    founded: "20XX",
    logoText: "YOUR COMPANY",
    hqLine: "Your City, Region",
    contact: {
      address: "123 Business Boulevard, Suite 100, Your City, ST 00000",
      phone: "+1 (555) 000-0000",
      fax: "+1 (555) 000-0001",
      emails: {
        Sales: "sales@yourcompany.com",
        Jobs: "careers@yourcompany.com",
        "General Info": "hello@yourcompany.com",
        President: "office@yourcompany.com",
      },
    },
  },

  // ── Design theme (reference for tooling / future theming) ───
  theme: {
    primaryColor: "#f97316",
    accentColor: "#f59e0b",
  },

  // ── Top Navigation ────────────────────────────────────────
  navigation: [
    { label: "Home", href: "/" },
    {
      label: "Company",
      href: "/company",
      children: [
        { label: "About Us", href: "/company#about" },
        { label: "What We Do", href: "/company#what-we-do" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      label: "Solutions",
      href: "/solutions",
      children: [
        { label: "Consulting", href: "/solutions#consulting" },
        { label: "On-site Outsourcing", href: "/solutions#onsite" },
        { label: "Off-site Outsourcing", href: "/solutions#offsite" },
        { label: "Off-shore Outsourcing", href: "/solutions#offshore" },
        { label: "Near-shore Outsourcing", href: "/solutions#nearshore" },
      ],
    },
    {
      label: "Products",
      href: "/products",
      children: [
        { label: "Aurora Suite", href: "/products#sample-suite" },
      ],
    },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Application Support", href: "/services#app-support" },
        { label: "Database Services", href: "/services#database" },
        { label: "Network Services", href: "/services#network" },
        { label: "OS Services", href: "/services#os" },
        { label: "Project Management", href: "/services#pm" },
        { label: "Design & Architecture", href: "/services#design" },
        { label: "Software Development", href: "/services#dev" },
        { label: "Software Testing", href: "/services#testing" },
        { label: "Web Design / E-commerce", href: "/services#web" },
      ],
    },
    {
      label: "Partners",
      href: "/partners",
      children: [
        { label: "Consulting Partners", href: "/partners#consulting" },
        { label: "IT Solutions", href: "/partners#it-solutions" },
        { label: "Clients", href: "/partners#clients" },
      ],
    },
    { label: "Tech Stack", href: "/tech-stack" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ],

  // ── Hero Section ──────────────────────────────────────────
  hero: {
    headline: "Powering Enterprise IT",
    subheadline: "Trusted by leading enterprises",
    description:
      "We deliver consulting, outsourcing, and software solutions that help large organizations stay competitive — from ERP and integration to cloud, custom development, and ongoing support.",
    ctaPrimary: { label: "Explore Solutions", href: "/solutions" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
    stats: [
      { value: "30+", label: "Years of Excellence" },
      { value: "15+", label: "Enterprise Clients" },
      { value: "5", label: "Delivery Models" },
      { value: "100%", label: "Client Commitment" },
    ],
  },

  // ── About ─────────────────────────────────────────────────
  about: {
    summary:
      "We are a privately held software products and consulting firm, built by experienced engineers and delivery leaders focused on practical, cost-effective solutions. Since our early years, we have invested continuously in how we build, partner, and support long-running enterprise systems.",
    additionalParagraphs: [
      "The company continues to devote substantial human and financial resources to its development, services, and support activities.",
      "Our success lies in our customer's and partner's satisfaction and success, combined with our employee's enthusiasm and growth.",
    ],
    mission:
      "To develop and extend software solutions from a business viewpoint by collaborating with businesses, IT executives, and solution providers — delivering measurable value at every engagement.",
    vision:
      "To be the partner of choice for enterprises seeking reliable, innovative, and cost-effective IT solutions that transform operations and accelerate growth.",
    whatWeDo: [
      {
        icon: "Code2",
        title: "Software Products Development",
        description:
          "Building innovative and scalable software products tailored to business needs.",
      },
      {
        icon: "Users",
        title: "Software Consulting Services",
        description:
          "Expert consulting to optimize IT systems and align technology with business strategy.",
      },
      {
        icon: "Globe",
        title: "Outsourcing & Turnkey Projects",
        description:
          "End-to-end outsourcing and complete turnkey solutions delivered on time and within budget.",
      },
    ],
    highlights: [
      {
        icon: "Cpu",
        title: "Full SDLC Expertise",
        description:
          "From requirements analysis through deployment and ongoing support — we own the entire lifecycle.",
      },
      {
        icon: "Globe",
        title: "Global Delivery",
        description:
          "On-site, off-site, off-shore, and near-shore models to fit your budget and collaboration style.",
      },
      {
        icon: "ShieldCheck",
        title: "Enterprise-Grade Quality",
        description:
          "UML, design patterns, Six Sigma, and CMM methodologies ensure every deliverable meets the highest standards.",
      },
      {
        icon: "Users",
        title: "Talented Team",
        description:
          "Developers, testers, DBAs, ERP consultants, and project managers — all under one roof.",
      },
    ],
  },

  // ── Solutions ─────────────────────────────────────────────
  solutions: [
    {
      id: "consulting",
      title: "Consulting",
      icon: "Lightbulb",
      summary:
        "Creative and innovative services with talented, experienced IT professionals.",
      description:
        "Our consultants bring years of hands-on experience across Finance, Banking, Insurance, Manufacturing, Healthcare, Telecom, and more. They deliver efficient solutions and leading-edge technological deployments — backed by expertise in Project Management, Architecture, SDLC, and testing methodologies.",
    },
    {
      id: "onsite",
      title: "On-site Outsourcing",
      icon: "Building2",
      summary:
        "Full or partial teams embedded at your location to manage core and non-core projects.",
      description:
        "We provide selective or full-fledged teams to manage product and project development from requirement analysis through deployment and support — on your premises, enabling you to focus on your core business.",
    },
    {
      id: "offsite",
      title: "Off-site Outsourcing",
      icon: "MapPin",
      summary:
        "Build and maintain your IT needs from our facilities, reducing overhead costs.",
      description:
        "Leveraging our on-site facilities and full SDLC knowledge, we build and maintain your IT solutions while providing regular project updates. We collaborate closely with your staff for deployment and training, reducing real-estate and employee overhead costs.",
    },
    {
      id: "offshore",
      title: "Off-shore Outsourcing",
      icon: "Globe",
      summary:
        "Leverage global talent pools and time-zone advantages for round-the-clock delivery.",
      description:
        "Our off-shore development centers provide significant cost savings while enabling 24/7 service through multi time-zone teams. We setup and manage ODCs for small and medium businesses, or integrate with your existing off-shore teams through our experienced on-site coordinators.",
    },
    {
      id: "nearshore",
      title: "Near-shore Outsourcing",
      icon: "Navigation",
      summary:
        "All the benefits of outsourcing without timezone or communication barriers.",
      description:
        "For clients who need close collaboration, near-shore outsourcing (e.g. Canada for US clients) provides similar time zones, cultural alignment, and strong infrastructure — maximizing productivity without sacrificing communication quality.",
    },
  ],

  // ── Products ──────────────────────────────────────────────
  products: [
    {
      id: "sample-suite",
      name: "Aurora Suite",
      tagline: "Sample enterprise operations product",
      description:
        "Aurora Suite is example product copy for this template: a modular platform to manage core operational workflows (candidates, clients, partners, time, billing). Replace with your real product story in site.config.ts.",
      features: [
        "Candidate Management",
        "Client Relationship Management",
        "Partner & Vendor Management",
        "Timesheet Tracking",
        "Job Orders Management",
        "Payment Processing",
        "Reporting & Analytics",
        "RDBMS-agnostic back-end",
      ],
    },
  ],

  // ── Services ──────────────────────────────────────────────
  services: [
    {
      id: "app-support",
      title: "Application Support",
      icon: "LifeBuoy",
      summary:
        "Proactive support strategies that let you focus on your business.",
      description:
        "We maintain all or part of your applications — whether internally developed or purchased packages. We support ERP systems (SAP, PeopleSoft), provide on-site and remote support via phone and email, and help increase the ROI of your software investments.",
      technologies: ["SAP", "PeopleSoft", "Oracle", "Siebel"],
    },
    {
      id: "database",
      title: "Database Services",
      icon: "Database",
      summary: "Expert DBA services for mission-critical data systems.",
      description:
        "Our expert DBAs manage Sybase, Oracle, MS-SQL Server, and SAP databases for major financial and manufacturing corporations. We also provide database development (J2EE/JDBC, C++, ADO.NET), stored procedures, Data Warehousing, Business Intelligence, and ETL development using Cognos, Business Objects, and Ascential DataStage.",
      technologies: ["Oracle", "MS-SQL Server", "Sybase", "SAP", "Cognos", "Business Objects"],
    },
    {
      id: "network",
      title: "Network Services",
      icon: "Network",
      summary: "Secure, high-performance networks for modern enterprises.",
      description:
        "From VPN and firewall administration to network design, troubleshooting, and cloud integration — we manage increasingly complex environments with IP phones, PDA devices, and multi-platform systems. We also provide 24/7 phone and email support.",
    },
    {
      id: "os",
      title: "OS Services",
      icon: "Terminal",
      summary: "UNIX, Linux, and Windows system administration.",
      description:
        "User management, disk/memory/process management, security administration, patch management, scripting, backup and recovery — all handled by certified engineers. We support SUN Solaris, HP-Unix, VAX, and Microsoft Windows Server families, plus Apache, MS-IIS, and major application servers.",
      technologies: ["SUN Solaris", "HP-Unix", "Windows Server", "Linux", "Apache", "IIS"],
    },
    {
      id: "pm",
      title: "Project Management",
      icon: "ClipboardList",
      summary:
        "Experienced PMs who deliver on time, within budget, at every scale.",
      description:
        "Our project managers help you plan, manage risks, and coordinate delivery across on-site and off-shore teams. We act as on-site PMO for your off-shore/near-shore projects and provide executive-level updates while managing developers, testers, and deployment teams.",
    },
    {
      id: "design",
      title: "Design & Architecture",
      icon: "PenTool",
      summary: "Robust architectural blueprints using UML and design patterns.",
      description:
        "Using UML, design patterns, and tools like Rational Rose and Visio, we create both application system design and database design/modelling. We work through the full project lifecycle, keeping specifications updated to match your evolving requirements.",
    },
    {
      id: "dev",
      title: "Software Development",
      icon: "Code2",
      summary:
        "End-to-end development across desktop, web, and enterprise platforms.",
      description:
        "Full-range services for intuitive UIs, back-end databases, and middle-tier applications. We build complex systems using C++, J2EE, CORBA, .NET, XML, WebLogic, and WebSphere. Our EAI team creates SAP integrations (ABAP, IDOC, ALE, EDI, XML, BAPI, JCo, SAP-BW) for large enterprise programs.",
      technologies: ["C++", "J2EE", ".NET", "XML", "WebLogic", "WebSphere", "SAP ABAP"],
    },
    {
      id: "testing",
      title: "Software Testing",
      icon: "CheckSquare",
      summary:
        "Rigorous QA using Six Sigma, Rational Suite, and Mercury Interactive.",
      description:
        "Good planning and exhaustive test cases are critical to software success. From design phase through UAT, we create test plans for usability, regression, and integration testing. We use Rational Suite, Mercury Interactive, and Clear-Quality, deploying teams on-site or at our facilities as needed.",
      technologies: ["Rational Suite", "Mercury Interactive", "Clear-Quality"],
    },
    {
      id: "web",
      title: "Web Design / E-commerce",
      icon: "ShoppingCart",
      summary:
        "From simple web presence to full-catalog transactional e-commerce.",
      description:
        "We choose the right stack for your needs and budget — from open-source (Linux, Apache, Tomcat, PHP, MySQL) to enterprise (MS IIS, J2EE, MQ-Series, Oracle). We also extend ERP and web applications for mobile devices (PDA, wireless phones, Tablet PC) and create/distribute web services using J2EE or .NET.",
      technologies: ["React", "Next.js", "PHP", "J2EE", ".NET", "MySQL", "Oracle"],
    },
  ],

  // ── Careers ───────────────────────────────────────────────
  careers: {
    intro:
      "We offer competitive benefits and a culture that values growth, collaboration, and technical excellence. We regularly hire experienced professionals across consulting, engineering, and delivery roles.",
    benefits: [
      "Comprehensive health care coverage options",
      "Referral & performance bonuses",
      "Tuition reimbursement",
      "Paid holidays and vacations",
      "Profit-sharing scheme",
      "Employee feedback & open-door culture",
    ],
    positions: [
      {
        id: "1009",
        positionId: "1009",
        title: "Computer Systems Analyst",
        type: "full-time",
        experience: "5 years",
        skills:
          "Functional requirements, systems analysis, Genesys interaction routing, Web interface & IVR, .Net, Voice objects, Genesys IRD/CME/OCM/SCI, Actuate, WCF, Sonic ESB, SQL 2003, UAT, MS Visual Studio 2010.",
        location: "HQ — see posting",
        hoursPerWeek: "40",
      },
      {
        id: "1010",
        positionId: "1010",
        title: "Software Developer, Applications",
        type: "full-time",
        experience: "2 years",
        skills:
          "J2EE, JSF, ORM, SOA, STRUTS, ADF, BPM, Single Sign-On, C++, Objective-C, WSDL, MQ Series, Solaris, Linux.",
        location: "HQ — see posting",
        hoursPerWeek: "40",
      },
      {
        id: "1011",
        positionId: "1011",
        title: "Software Developer, Applications (Sr.)",
        type: "full-time",
        experience: "5 years",
        skills:
          "J2EE, JSF, ORM, SOA, STRUTS, MQ Series, Palm OS, Code Warrior, Solaris, Linux. M.S or MBA required.",
        location: "HQ — see posting",
        hoursPerWeek: "40",
      },
      {
        id: "1014",
        positionId: "1014",
        title: "Software Developer, Applications (Tandem)",
        type: "full-time",
        experience: "5 years",
        skills:
          "TANDEM application development, Connex, Paragon (FASTest), ISO8583, North East Switch, HP Advantage, SAFE CU, C, TACL, TAL, Pathway, FUP, Enscribe.",
        location: "HQ — see posting",
        hoursPerWeek: "40",
      },
      {
        id: "1001",
        positionId: "1001",
        title: "Programmer",
        type: "contract",
        experience: "3 years",
        skills: ".NET Framework, ASP.NET, C#, COBOL II, CICS, VSAM, JCL, Alpha Server 1200.",
        location: "HQ — see posting",
        hoursPerWeek: "40",
      },
      {
        id: "1002",
        positionId: "1002",
        title: "Network / Cloud Engineer",
        type: "contract",
        experience: "3 years",
        skills:
          "Virtual machine design, public cloud environments, VPC, deployment scripts, automation scripting, managed service provider coordination.",
        location: "HQ — see posting",
        hoursPerWeek: "40",
      },
    ],
    applyInfo:
      "Apply using the instructions on the Careers page. Include your resume and the position ID. Mailing address, fax, and dedicated HR email are listed in the footer and Contact page once you update site.config.ts.",
  },

  // ── Partners ──────────────────────────────────────────────
  partners: {
    intro:
      "We help organizations connect business processes and technology through experienced delivery teams, working with partners across regions and time zones.",
    categories: [
      {
        category: "Consulting Partners",
        description:
          "We work with partners to provide consulting services across the full SDLC.",
        areas: [
          "Unix & NT System Administration",
          "Feasibility Studies & Requirements Specifications",
          "Architecture & Design Services",
          "Software Development",
          "Software Testing",
          "Application Deployment, Support & Maintenance",
        ],
        contact: "candidates@yourcompany.com (candidates) | joborders@yourcompany.com (job orders)",
      },
      {
        category: "IT Solutions Partners",
        description:
          "We collaborate with delivery partners on complex programs for global enterprises, with clear scope, quality gates, and predictable timelines.",
        contact: "partners@yourcompany.com",
      },
    ],
  },

  // ── Clients ───────────────────────────────────────────────
  clients: [
    "Sample Healthcare Group",
    "Example Financial Corp",
    "Demo Retail International",
    "Northwind Utilities",
    "Contoso University",
    "Fabrikam Logistics",
    "Adventure Works Tech",
    "Wide World Trading",
    "Litware Industries",
    "Alpine Supply Co.",
    "Trey Research Labs",
    "Blue Horizon Airlines",
    "Consolidated Messaging",
  ],

  // ── Technology Stack ──────────────────────────────────────
  techStack: [
    {
      category: "Languages & Frameworks",
      icon: "Code2",
      color: "from-blue-500/20 to-cyan-500/20",
      technologies: [
        "Ruby on Rails",
        "Java / J2EE",
        "Python",
        "Node.js",
        ".NET / C#",
        "React / Next.js",
        "PHP",
        "C / C++",
        "COBOL",
        "ABAP (SAP)",
      ],
    },
    {
      category: "Cloud Platforms",
      icon: "Cloud",
      color: "from-purple-500/20 to-blue-500/20",
      technologies: [
        "AWS (EC2, ECS, Lambda, S3, RDS, CloudFront)",
        "Microsoft Azure (AKS, Functions, App Service)",
        "Google Cloud Platform (GKE, Cloud Run, BigQuery)",
        "Kubernetes (K8s)",
        "Docker / Podman",
        "Terraform / Pulumi",
        "CI/CD — GitHub Actions, Jenkins, Azure DevOps",
        "Serverless Architectures",
      ],
    },
    {
      category: "Databases",
      icon: "Database",
      color: "from-green-500/20 to-teal-500/20",
      technologies: [
        "Oracle",
        "MS-SQL Server",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Sybase",
        "SAP HANA",
        "Snowflake",
        "Amazon Aurora",
      ],
    },
    {
      category: "Enterprise & Integration",
      icon: "Layers",
      color: "from-orange-500/20 to-red-500/20",
      technologies: [
        "SAP (ABAP, IDOC, ALE, BAPI, BW)",
        "MQ Series / MSMQ",
        "WebLogic / WebSphere",
        "RESTful APIs / GraphQL",
        "SOAP / Web Services / WSDL",
        "Apache Kafka",
        "Microservices Architecture",
        "SOA / ESB",
      ],
    },
    {
      category: "DevOps & Cloud-Native",
      icon: "Cpu",
      color: "from-pink-500/20 to-purple-500/20",
      technologies: [
        "Infrastructure as Code (IaC)",
        "Service Mesh (Istio, Linkerd)",
        "Observability (Datadog, Prometheus, Grafana)",
        "GitOps (ArgoCD, Flux)",
        "Container Security (Snyk, Trivy)",
        "API Gateway (AWS API GW, Kong, NGINX)",
        "Load Balancing & Auto-scaling",
        "Multi-cloud & Hybrid Cloud",
      ],
    },
    {
      category: "Testing & Quality",
      icon: "CheckSquare",
      color: "from-yellow-500/20 to-orange-500/20",
      technologies: [
        "Rational Suite",
        "Mercury Interactive",
        "Selenium / Playwright",
        "JUnit / RSpec (Rails)",
        "Six Sigma QA",
        "Postman / API Testing",
        "Performance Testing (JMeter)",
        "OWASP Security Testing",
      ],
    },
  ],

  // ── News & Events ─────────────────────────────────────────
  news: [
    {
      id: "1",
      title: "Template: publish your company news here",
      date: "2024-01-15",
      summary:
        "Replace this item in site.config.ts with real press releases, milestones, or leadership updates. This entry demonstrates the news layout only.",
      type: "news",
    },
  ],

  events: [
    "Programming Languages — JAVA, VB.NET, C#, C++",
    "UNIX System and Database Administration",
    "Software Development and Testing",
    "Benefits of Outsourcing: on-site, near-shore, off-shore",
    "How to Succeed with E-commerce and M-commerce",
  ],

  // ── SEO ───────────────────────────────────────────────────
  seo: {
    title: "Your Company Inc. — Enterprise Technology & Services",
    description:
      "Professional IT consulting, software delivery, cloud, ERP, and managed services. Config-driven corporate site template — customize in site.config.ts.",
    keywords: [
      "IT consulting",
      "software development",
      "enterprise services",
      "cloud",
      "ERP",
      "SAP",
      "outsourcing",
      "digital transformation",
    ],
  },

  // ── Simple chat assistant (keyword → answer) ─────────────
  chatbot: {
    title: "Website Assistant",
    placeholder: "Ask a quick question…",
    welcomeMessage:
      "Hi — I answer common questions from this site’s content. Ask about services, contact options, careers, or delivery models, or tap a suggestion below.",
    suggestions: [
      "What services do you offer?",
      "How do I contact you?",
      "Where are you located?",
      "Are you hiring?",
    ],
    faqs: [
      {
        keywords: ["hello", "hi", "hey", "good morning", "good afternoon"],
        answer: "Hello! How can I help you today? You can ask about our services, location, contact details, or careers.",
      },
      {
        keywords: ["service", "services", "what do you do", "offer", "support"],
        answer:
          "We provide application support, database services, network & OS administration, project management, design & architecture, and more. See the Services page for the full list.",
      },
      {
        keywords: ["contact", "email", "phone", "call", "reach", "sales"],
        answer:
          "Phone, fax, and department emails are listed on the Contact page and in the site footer. Update site.config.ts with your real contact details.",
      },
      {
        keywords: ["address", "location", "where", "office", "visit", "hq"],
        answer:
          "The headquarters address shown in the footer and Contact page comes from site.config.ts — replace it with your organization’s address.",
      },
      {
        keywords: ["career", "careers", "job", "jobs", "hiring", "resume", "apply"],
        answer:
          "Open roles and how to apply are on the Careers page. Sample postings are included as template data; replace them with your actual listings.",
      },
      {
        keywords: ["founded", "since", "history", "how long"],
        answer:
          "The “founded” line and company story are defined in site.config.ts under company and about — update them to match your organization.",
      },
      {
        keywords: ["client", "clients", "who do you work", "customers"],
        answer:
          "The Clients section lists sample names for layout preview. Replace the clients array in site.config.ts with your public references or logos.",
      },
      {
        keywords: ["sap", "erp", "oracle", "cloud", "aws", "azure", "tech stack", "technology"],
        answer:
          "We work across ERP (SAP, Oracle), cloud (AWS, Azure, GCP), databases, integration, DevOps, and modern stacks including Ruby on Rails. See Tech Stack for details.",
      },
      {
        keywords: ["aurora", "product", "software product", "suite"],
        answer:
          "The Products page includes sample product copy (Aurora Suite) to show layout. Replace it in site.config.ts with your real offerings.",
      },
      {
        keywords: ["outsourc", "onsite", "offshore", "nearshore", "consulting"],
        answer:
          "We offer consulting plus on-site, off-site, off-shore, and near-shore outsourcing models. See Solutions for how each works.",
      },
    ],
    fallbackMessage:
      "Thanks for your message. For detailed requests, use the Contact page or the general inquiry email from your site configuration.",
  },
};
