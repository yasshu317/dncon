/**
 * ============================================================
 *  BizPresence Pro — Site Configuration
 * ============================================================
 *  To adapt this template for a different company, update the
 *  values in this file only. No component code changes needed.
 * ============================================================
 */
import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  // ── Company Identity ──────────────────────────────────────
  company: {
    name: "DBCON INC",
    shortName: "DBCON INC",
    tagline: "Information Technology Solutions",
    description:
      "An international Information Technology company providing consulting and outsourcing solutions to Fortune 1000 companies with the latest technology available in the market.",
    founded: "Late 1995",
    logoText: "DBCON INC",
    contact: {
      address: "1 Tara Blvd, Suite #LL7, Nashua, NH 03062",
      phone: "603-891-1200",
      fax: "603-891-1452",
      emails: {
        Sales: "sales@dbconinc.com",
        Jobs: "jobs@dbconinc.com",
        "General Info": "info@dbconinc.com",
        President: "president@dbconinc.com",
      },
    },
  },

  // ── Design Theme  ─────────────────────────────────────────
  theme: {
    primaryColor: "#3b82f6",
    accentColor: "#7c3aed",
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
        { label: "Columbus", href: "/products#columbus" },
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
    subheadline: "Since Late 1995",
    description:
      "We deliver consulting, outsourcing, and software solutions that keep Fortune 1000 enterprises running at the cutting edge. From ERP to e-commerce, from architecture to deployment — we've got you covered.",
    ctaPrimary: { label: "Explore Solutions", href: "/solutions" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
    stats: [
      { value: "30+", label: "Years of Excellence" },
      { value: "15+", label: "Fortune 1000 Clients" },
      { value: "5", label: "Outsourcing Models" },
      { value: "100%", label: "Client Commitment" },
    ],
  },

  // ── About ─────────────────────────────────────────────────
  about: {
    summary:
      "DBCON INC is a privately held software products development and consulting/outsourcing services company started and managed by a team of young, highly motivated software engineers with a vision to provide cost-effective solutions. From our inception as a small company in the late 1995, we have been innovative about how we work and what we develop.",
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
      id: "columbus",
      name: "Columbus",
      tagline: "Recruiting Firm Management Suite",
      description:
        "Columbus is a comprehensive solution to manage the full lifecycle of a recruiting firm's business operations. Built for efficiency and scale, it centralizes every aspect of your recruiting workflow.",
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
        "Full-range services for intuitive UIs, back-end databases, and middle-tier applications. We build complex systems using C++, J2EE, CORBA, .NET, XML, WebLogic, and WebSphere. Our EAI team creates SAP integrations (ABAP, IDOC, ALE, EDI, XML, BAPI, JCo, SAP-BW) for Fortune 100 companies.",
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
      "DBCON INC offers a comprehensive benefits package and a culture that values innovation, growth, and employee satisfaction. We are constantly looking for highly qualified and motivated professionals.",
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
        location: "Nashua, NH 03062",
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
        location: "Nashua, NH 03062",
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
        location: "Nashua, NH 03062",
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
        location: "Nashua, NH 03062",
        hoursPerWeek: "40",
      },
      {
        id: "1001",
        positionId: "1001",
        title: "Programmer",
        type: "contract",
        experience: "3 years",
        skills: ".NET Framework, ASP.NET, C#, COBOL II, CICS, VSAM, JCL, Alpha Server 1200.",
        location: "Nashua, NH 03062",
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
        location: "Nashua, NH 03062",
        hoursPerWeek: "40",
      },
    ],
    applyInfo:
      "Send your resume to: Attn: HR, DBCON INC, 1 Tara Blvd, Suite LL7, Nashua, NH 03062 | Fax: 603-891-1452 | Email: resumes@dbconinc.com",
  },

  // ── Partners ──────────────────────────────────────────────
  partners: {
    intro:
      "DBCON INC helps companies link their business processes through our widespread IT knowledge and talented resources, working with partners across the USA and offshore sites.",
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
        contact: "candidates@dbconinc.com (candidates) | joborders@dbconinc.com (job orders)",
      },
      {
        category: "IT Solutions Partners",
        description:
          "We outsource projects from Fortune 1000 companies and work with quality development partners committed to delivering within time and budget.",
        contact: "partners@dbconinc.com",
      },
    ],
  },

  // ── Clients ───────────────────────────────────────────────
  clients: [
    "Arizona State University",
    "Capgemini",
    "Capital One",
    "Cisco Systems",
    "CVS Caremark",
    "Kentucky State University",
    "Mastercard",
    "Michaels Stores",
    "Microsoft",
    "NEC",
    "Oncor",
    "Prudential",
    "Walmart",
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
      title: "DBCON INC Relocates to Larger Nashua Office",
      date: "2024-01-15",
      summary:
        "DBCON INC has relocated to a larger, modern office space in Nashua to accommodate our growing team and expanding client base.",
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
    title: "DBCON INC — Information Technology Solutions",
    description:
      "International IT consulting and outsourcing solutions for Fortune 1000 companies. Software development, ERP, cloud, database, and web services since 1995.",
    keywords: [
      "IT consulting",
      "outsourcing",
      "software development",
      "ERP",
      "SAP",
      "J2EE",
      ".NET",
      "database services",
      "Fortune 1000",
    ],
  },
};
