const routeMap = {
  home: "index.html",
  smb: "smb-owners.html",
  jobs: "job-seekers.html",
  impact: "schools-nonprofits.html",
  students: "students.html",
  beginners: "non-technical.html",
  thanks: "thanks.html"
};

const storageKey = "ai-for-all-lang";

const siteCopy = {
  en: {
    brand: "AI for All",
    navHome: "Overview",
    navFormats: "Formats",
    navAudiences: "Audiences",
    navRegistration: "Register",
    footer: "Commercial AI training for complete beginners, teams, schools and mission-driven organizations.",
    actions: {
      register: "Register now",
      audiences: "See audience paths",
      brochure: "View course formats",
      backHome: "Back to main site",
      audiencePage: "Open page"
    },
    labels: {
      results: "Expected outcomes",
      fit: "Best fit",
      deliverables: "Commercial deliverables",
      process: "Typical rollout",
      registrationTitle: "Reserve a seat or request a group intake",
      registrationLead: "Every registration request is sent to sosthengj@gmail.com. Use this form for single seats, private cohorts, school programs or nonprofit sessions.",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phone: "Phone or WhatsApp",
      preferredLanguage: "Preferred language",
      organisation: "Organisation or school",
      role: "Role",
      audience: "Audience",
      format: "Preferred format",
      goals: "Primary goal",
      message: "What would you like this training to achieve?",
      submit: "Send registration request",
      consent: "You will receive a reply with schedule, confirmation and next steps.",
      summaryTitle: "What happens next",
      summaryList: [
        "Your request is emailed directly to the course team.",
        "You receive a tailored reply for public sessions or custom delivery.",
        "Private cohorts can be scoped for business, education or community use cases."
      ],
      languageOptions: ["English", "French", "Spanish"],
      audienceOptions: ["SMB owners", "Job seekers", "Schools or nonprofits", "Students", "Non-technical professionals", "General public"],
      formatOptions: ["Discovery session", "Case Studies session", "Workshop session", "Weekly pass", "Private group cohort"],
      goalOptions: ["Get started confidently", "Improve a workflow", "Launch a small AI project", "Upskill a team", "Explore a custom program"],
      contactNote: "Form submission uses FormSubmit for static hosting compatibility.",
      honeypot: "Leave this field empty"
    },
    home: {
      eyebrow: "Client-facing program",
      title: "A practical AI offer for people who want results before jargon.",
      lead: "AI for All is a multilingual, beginner-first training offer built for the public: small business owners, career changers, schools, nonprofits, students and non-technical professionals who need usable outcomes, clear guidance and credible delivery.",
      stats: [
        { value: "3", label: "teaching formats" },
        { value: "5€", label: "entry point" },
        { value: "3", label: "languages" }
      ],
      heroPills: ["Beginner-first", "Online + onsite", "Commercial delivery", "Multilingual"],
      heroSideTitle: "Designed for conversion and trust",
      heroSideBody: "The public site focuses on outcomes, audience relevance, practical formats and a direct registration path instead of internal curriculum detail.",
      heroSideList: ["Simple positioning", "Visible pricing", "Clear audience entry points", "Elegant media placeholders for future creative assets"],
      carouselTitle: "Idea carousel placeholder",
      carouselLead: "Reserved space for a future rotating showcase of client stories, workshop concepts or visual before/after examples.",
      carouselItems: [
        { title: "Retail workflow refresh", body: "Placeholder for a short visual story showing how an owner saves time on stock, messaging and FAQs." },
        { title: "Job-ready AI portfolio", body: "Placeholder for a reel, deck or carousel slide illustrating a candidate improving positioning and output." },
        { title: "School support toolkit", body: "Placeholder for a mission-led story about staff support, communications and community engagement." }
      ],
      mediaTitle: "Video and image placeholder stage",
      mediaLead: "Large reserved areas for a future hero video, instructor reel, cohort photography, screenshots or testimonials.",
      videoTitle: "Hero video placeholder",
      videoBody: "Use this space for an elegant intro film, a keynote clip or a montage of workshop moments.",
      imageTitle: "Campaign image placeholder",
      imageBody: "Use this space for brand photography, screenshots, quote graphics or seasonal launch visuals.",
      formatsTitle: "Three commercial formats, one clear progression",
      formatsLead: "Each format stands alone, while together they move a beginner from interest to understanding to hands-on output.",
      formats: [
        {
          kicker: "Discovery",
          title: "Accessible first contact",
          price: "5€",
          meta: "Mondays · online",
          body: "A low-friction session for people who want practical examples, plain language and a clear sense of where AI actually fits.",
          bullets: ["Four relatable use cases", "Zero technical assumptions", "Clear next-step guidance"]
        },
        {
          kicker: "Case Studies",
          title: "Measured real-world examples",
          price: "10€",
          meta: "Wednesdays · online",
          body: "Structured breakdowns of credible workflows, outcomes, tools, prompts and quality checks across work and community settings.",
          bullets: ["Documented examples", "ROI and risk framing", "Better decision-making"]
        },
        {
          kicker: "Workshop",
          title: "Hands-on build sessions",
          price: "15€",
          meta: "Fridays · online or onsite",
          body: "Participants leave with a working mini tool, clone or operational workflow instead of just theoretical understanding.",
          bullets: ["Live building", "Testing and polish", "Shareable result"]
        }
      ],
      audienceTitle: "Audience-specific landing pages",
      audienceLead: "Each audience gets its own one-page message, promise and use-case framing while keeping a shared registration route.",
      audiences: [
        { key: "smb", title: "SMB owners", body: "For operators who need faster marketing, admin and customer communication without hiring a large technical team." },
        { key: "jobs", title: "Job seekers", body: "For people who want stronger positioning, better outputs and a more visible practical AI profile." },
        { key: "impact", title: "Schools and nonprofits", body: "For mission-led teams that need efficient communications, support workflows and capacity building." },
        { key: "students", title: "Students", body: "For learners who want portfolio assets, study support and a real edge before entering work." },
        { key: "beginners", title: "Non-technical professionals", body: "For people who want useful AI habits without becoming engineers or tool specialists." }
      ],
      proofTitle: "Commercial positioning without inflated claims",
      proofLead: "The offer is framed around usable outcomes, responsible guidance and repeatable training design rather than hype.",
      proof: [
        { title: "Beginner-safe delivery", body: "The language stays clear, practical and respectful of non-technical audiences." },
        { title: "Visible value ladder", body: "Entry pricing creates access, while deeper sessions convert interest into commitment." },
        { title: "Flexible deployment", body: "Suitable for public cohorts, team sessions, school programs and nonprofit delivery." }
      ]
    },
    pages: {
      smb: {
        eyebrow: "SMB owners and operators",
        title: "Use AI to move faster on marketing, admin and customer communication.",
        lead: "This path is built for founders, shop owners, service providers and lean teams who need practical AI support without adding technical overhead.",
        fit: ["Retail and ecommerce", "Hospitality and service businesses", "Agencies, studios and independent operators"],
        deliverables: ["Offer copy and sales messaging", "Customer FAQ and response systems", "Mini workflow tools for booking, content and follow-up"],
        results: ["Sharper communication", "Faster repeatable admin", "More confident tool selection"],
        process: ["Discovery of current friction points", "Case-study walkthroughs by business type", "Hands-on build of a useful micro-tool"],
        ctaTitle: "Turn scattered experimentation into one clear operational method.",
        ctaBody: "Register for a public seat or request a small private cohort for your business team."
      },
      jobs: {
        eyebrow: "Job seekers and career changers",
        title: "Build a practical AI edge that employers can actually recognize.",
        lead: "This landing page is tuned for candidates who want stronger applications, better positioning and small proof-of-work assets instead of vague tool familiarity.",
        fit: ["Graduates and early-career talent", "Career changers", "Professionals re-entering the market"],
        deliverables: ["Stronger CV and profile materials", "Interview preparation flows", "A visible mini project or portfolio proof point"],
        results: ["More credible positioning", "Higher-quality written output", "Better confidence in interviews and task tests"],
        process: ["Map current profile gaps", "Study effective AI-assisted workflows", "Build one shareable proof-of-skill asset"],
        ctaTitle: "Move from curiosity to employable proof.",
        ctaBody: "Use the form to reserve a seat in a public cohort or request a focused support format."
      },
      impact: {
        eyebrow: "Schools and nonprofits",
        title: "Increase reach, clarity and staff capacity without losing mission quality.",
        lead: "This path is for educators, administrators, charity teams and community organizations that need more output from limited time and budget.",
        fit: ["School leadership and support teams", "Nonprofit communications and program staff", "Community education and outreach teams"],
        deliverables: ["Clearer updates and parent/community messaging", "Administrative and support workflow aids", "Mission-aligned content and resource systems"],
        results: ["Less time lost to repetitive drafting", "More consistent public communication", "Higher confidence using AI responsibly"],
        process: ["Identify capacity bottlenecks", "Review relevant education and nonprofit examples", "Build one practical support workflow or content system"],
        ctaTitle: "Bring practical AI into mission-led work with discipline and clarity.",
        ctaBody: "Register a staff member, a student-facing program or a custom session for your organization."
      },
      students: {
        eyebrow: "Students",
        title: "Use AI to study better, build proof and enter work with stronger habits.",
        lead: "This path is for learners who want AI to support research, revision, writing, project work and portfolio building without falling into weak shortcuts.",
        fit: ["University and college students", "Bootcamp learners", "Teen and adult learners building confidence"],
        deliverables: ["Study aids and revision systems", "Project support workflows", "Portfolio-ready mini builds and demos"],
        results: ["Better structure and consistency", "Higher output quality", "Useful practical confidence before internships or jobs"],
        process: ["Choose one high-value study or project use case", "Learn patterns that improve clarity and quality", "Build one presentable output for school or career use"],
        ctaTitle: "Learn to use AI well before the market expects it from you.",
        ctaBody: "Public seats and group sessions are available through the registration form below."
      },
      beginners: {
        eyebrow: "Non-technical professionals",
        title: "A calm, practical AI entry point for people who do not want a technical learning curve.",
        lead: "This path is for professionals, administrators, coordinators and independent workers who want results, not engineering vocabulary.",
        fit: ["Operations and admin professionals", "Coaches, consultants and service roles", "Anyone who feels behind but wants a credible start"],
        deliverables: ["Clear first-use workflows", "Prompting patterns that reduce guesswork", "A simple working tool or repeatable process"],
        results: ["Less intimidation", "Better judgment about tools and limits", "Immediate practical wins"],
        process: ["Start with plain-language use cases", "Review realistic examples and guardrails", "Build one small workflow you can keep using"],
        ctaTitle: "You do not need to become technical to become effective.",
        ctaBody: "Use the form to reserve a seat, request guidance or ask about a tailored beginner cohort."
      },
      thanks: {
        eyebrow: "Registration received",
        title: "Thank you. Your registration request has been sent.",
        lead: "A confirmation has been directed to the course inbox. You can return to the main site or continue browsing the audience-specific offers while waiting for a reply.",
        primary: "Return to the main site",
        secondary: "See audience pages"
      }
    }
  },
  fr: {
    brand: "L'IA pour tous",
    navHome: "Vue d'ensemble",
    navFormats: "Formats",
    navAudiences: "Publics",
    navRegistration: "Inscription",
    footer: "Une offre de formation IA commerciale pour d\u00e9butants complets, \u00e9quipes, \u00e9coles et organisations \u00e0 impact.",
    actions: {
      register: "S'inscrire",
      audiences: "Voir les parcours publics",
      brochure: "Voir les formats",
      backHome: "Retour au site principal",
      audiencePage: "Ouvrir la page"
    },
    labels: {
      results: "R\u00e9sultats attendus",
      fit: "Public id\u00e9al",
      deliverables: "Livrables commerciaux",
      process: "D\u00e9roul\u00e9 type",
      registrationTitle: "R\u00e9server une place ou demander un groupe priv\u00e9",
      registrationLead: "Chaque demande d'inscription est envoy\u00e9e \u00e0 sosthengj@gmail.com. Utilisez ce formulaire pour une place individuelle, une cohorte priv\u00e9e, un programme scolaire ou une session associative.",
      firstName: "Pr\u00e9nom",
      lastName: "Nom",
      email: "E-mail",
      phone: "T\u00e9l\u00e9phone ou WhatsApp",
      preferredLanguage: "Langue pr\u00e9f\u00e9r\u00e9e",
      organisation: "Organisation ou \u00e9cole",
      role: "Fonction",
      audience: "Public",
      format: "Format souhait\u00e9",
      goals: "Objectif principal",
      message: "Que souhaitez-vous obtenir avec cette formation ?",
      submit: "Envoyer la demande d'inscription",
      consent: "Vous recevrez une r\u00e9ponse avec le calendrier, la confirmation et les prochaines \u00e9tapes.",
      summaryTitle: "Suite du processus",
      summaryList: [
        "Votre demande est envoy\u00e9e directement \u00e0 l'\u00e9quipe du programme.",
        "Vous recevez une r\u00e9ponse adapt\u00e9e aux sessions publiques ou \u00e0 une formule sur mesure.",
        "Les cohortes priv\u00e9es peuvent \u00eatre cadr\u00e9es pour l'entreprise, l'\u00e9ducation ou le secteur associatif."
      ],
      languageOptions: ["Anglais", "Fran\u00e7ais", "Espagnol"],
      audienceOptions: ["Dirigeants de PME", "Personnes en recherche d'emploi", "\u00c9coles ou associations", "\u00c9tudiants", "Professionnels non techniques", "Grand public"],
      formatOptions: ["Session Discovery", "Session Cas d'usage", "Session Atelier", "Pass hebdomadaire", "Cohorte priv\u00e9e"],
      goalOptions: ["D\u00e9marrer avec confiance", "Am\u00e9liorer un flux de travail", "Lancer un petit projet IA", "Former une \u00e9quipe", "Explorer un programme sur mesure"],
      contactNote: "L'envoi du formulaire passe par FormSubmit pour rester compatible avec un h\u00e9bergement statique.",
      honeypot: "Laissez ce champ vide"
    },
    home: {
      eyebrow: "Site public",
      title: "Une offre IA concr\u00e8te pour les publics qui veulent des r\u00e9sultats avant le jargon.",
      lead: "L'IA pour tous est une offre multilingue, pens\u00e9e pour les d\u00e9butants, destin\u00e9e au public : dirigeants de PME, personnes en transition professionnelle, \u00e9coles, associations, \u00e9tudiants et professionnels non techniques qui veulent des r\u00e9sultats utilisables et un cadre cr\u00e9dible.",
      stats: [
        { value: "3", label: "formats" },
        { value: "5€", label: "ticket d'entr\u00e9e" },
        { value: "3", label: "langues" }
      ],
      heroPills: ["D\u00e9butant d'abord", "En ligne + sur site", "Positionnement commercial", "Multilingue"],
      heroSideTitle: "Con\u00e7u pour convertir sans surpromettre",
      heroSideBody: "Le site public met en avant les r\u00e9sultats, la pertinence par audience, des formats clairs et un parcours d'inscription direct, sans entrer dans les d\u00e9tails internes du programme.",
      heroSideList: ["Positionnement simple", "Tarifs visibles", "Entr\u00e9es par public", "Zones r\u00e9serv\u00e9es pour visuels futurs"],
      carouselTitle: "Emplacement pour carrousel d'id\u00e9es",
      carouselLead: "Espace r\u00e9serv\u00e9 \u00e0 une future vitrine de cas clients, concepts d'atelier ou visuels avant/apr\u00e8s.",
      carouselItems: [
        { title: "Flux retail repens\u00e9", body: "Emplacement pour un r\u00e9cit visuel montrant comment un commer\u00e7ant gagne du temps sur les stocks, les messages et les FAQ." },
        { title: "Portfolio IA orient\u00e9 emploi", body: "Emplacement pour une courte vid\u00e9o ou une s\u00e9rie de slides montrant l'am\u00e9lioration du positionnement d'un candidat." },
        { title: "Bo\u00eete \u00e0 outils pour \u00e9tablissement", body: "Emplacement pour un r\u00e9cit orient\u00e9 impact sur le soutien aux \u00e9quipes, la communication et l'engagement communautaire." }
      ],
      mediaTitle: "Sc\u00e8ne pour vid\u00e9os et visuels",
      mediaLead: "Grands espaces r\u00e9serv\u00e9s \u00e0 une future vid\u00e9o d'introduction, un reel formateur, des photos de cohortes, captures d'\u00e9cran ou t\u00e9moignages.",
      videoTitle: "Emplacement vid\u00e9o hero",
      videoBody: "Utilisez cette zone pour un film d'introduction, un extrait de keynote ou un montage d'atelier.",
      imageTitle: "Emplacement visuel de campagne",
      imageBody: "Utilisez cette zone pour des photos de marque, captures, citations graphiques ou visuels de lancement.",
      formatsTitle: "Trois formats commerciaux, une progression claire",
      formatsLead: "Chaque format fonctionne seul, mais l'ensemble fait progresser un d\u00e9butant de la curiosit\u00e9 \u00e0 la compr\u00e9hension puis \u00e0 la production.",
      formats: [
        {
          kicker: "Discovery",
          title: "Entr\u00e9e accessible",
          price: "5€",
          meta: "Lundi \u00b7 en ligne",
          body: "Une session simple d'acc\u00e8s pour les personnes qui veulent des exemples concrets, un langage clair et une id\u00e9e nette de la vraie place de l'IA.",
          bullets: ["Quatre cas tr\u00e8s parlants", "Aucun pr\u00e9requis technique", "Orientation claire pour la suite"]
        },
        {
          kicker: "Cas d'usage",
          title: "Exemples mesurables",
          price: "10€",
          meta: "Mercredi \u00b7 en ligne",
          body: "Des d\u00e9compositions structur\u00e9es de workflows cr\u00e9dibles, avec r\u00e9sultats, outils, prompts et contr\u00f4les qualit\u00e9.",
          bullets: ["Cas document\u00e9s", "Cadre ROI et risques", "Meilleure prise de d\u00e9cision"]
        },
        {
          kicker: "Atelier",
          title: "Construction guid\u00e9e",
          price: "15€",
          meta: "Vendredi \u00b7 en ligne ou sur site",
          body: "Les participants repartent avec un mini outil, un clone ou un workflow op\u00e9rationnel au lieu d'une compr\u00e9hension seulement th\u00e9orique.",
          bullets: ["Build en direct", "Tests et finitions", "R\u00e9sultat partageable"]
        }
      ],
      audienceTitle: "Pages d\u00e9di\u00e9es par audience",
      audienceLead: "Chaque audience dispose de sa propre promesse, de ses propres cas d'usage et d'un parcours d'inscription partag\u00e9.",
      audiences: [
        { key: "smb", title: "Dirigeants de PME", body: "Pour les structures qui veulent aller plus vite sur le marketing, l'administratif et la communication client sans cr\u00e9er une \u00e9quipe technique." },
        { key: "jobs", title: "Recherche d'emploi", body: "Pour les personnes qui veulent un meilleur positionnement, de meilleurs livrables et un profil IA plus visible." },
        { key: "impact", title: "\u00c9coles et associations", body: "Pour les structures \u00e0 impact qui ont besoin de communication, de soutien op\u00e9rationnel et de mont\u00e9e en comp\u00e9tences." },
        { key: "students", title: "\u00c9tudiants", body: "Pour les apprenants qui veulent des actifs de portfolio, un meilleur accompagnement d'\u00e9tude et une vraie avance." },
        { key: "beginners", title: "Professionnels non techniques", body: "Pour les personnes qui veulent de bonnes habitudes IA sans devenir ing\u00e9nieurs ni sp\u00e9cialistes outils." }
      ],
      proofTitle: "Un discours commercial sans promesses gonfl\u00e9es",
      proofLead: "L'offre est pr\u00e9sent\u00e9e autour de r\u00e9sultats utilisables, d'un cadre responsable et d'une formation reproductible.",
      proof: [
        { title: "Approche s\u00fbre pour d\u00e9butants", body: "Le discours reste clair, concret et adapt\u00e9 aux publics non techniques." },
        { title: "\u00c9chelle de valeur visible", body: "Le ticket d'entr\u00e9e facilite l'acc\u00e8s et les formats avanc\u00e9s convertissent l'int\u00e9r\u00eat en engagement." },
        { title: "D\u00e9ploiement flexible", body: "Adapt\u00e9 aux cohortes publiques, sessions d'\u00e9quipe, programmes scolaires et contextes associatifs." }
      ]
    },
    pages: {
      smb: {
        eyebrow: "PME et op\u00e9rateurs",
        title: "Utilisez l'IA pour aller plus vite sur le marketing, l'administratif et la relation client.",
        lead: "Ce parcours s'adresse aux fondateurs, commer\u00e7ants, prestataires et petites \u00e9quipes qui veulent un soutien IA pratique sans surcouche technique.",
        fit: ["Commerce et e-commerce", "H\u00f4tellerie, restauration et services", "Agences, studios et ind\u00e9pendants"],
        deliverables: ["Messages d'offre et contenus commerciaux", "Syst\u00e8mes de FAQ et de r\u00e9ponses client", "Mini outils pour booking, contenu et suivi"],
        results: ["Communication plus nette", "T\u00e2ches admin plus rapides", "Meilleure s\u00e9lection d'outils"],
        process: ["Rep\u00e9rer les frictions actuelles", "Voir des cas utiles selon le type d'activit\u00e9", "Construire un micro-outil imm\u00e9diatement exploitable"],
        ctaTitle: "Transformez des tests dispers\u00e9s en une m\u00e9thode op\u00e9rationnelle claire.",
        ctaBody: "Inscrivez-vous \u00e0 une session publique ou demandez une petite cohorte priv\u00e9e pour votre structure."
      },
      jobs: {
        eyebrow: "Recherche d'emploi et reconversion",
        title: "Construisez un avantage IA concret que les recruteurs peuvent vraiment voir.",
        lead: "Cette page s'adresse aux candidats qui veulent de meilleurs dossiers, un meilleur positionnement et de petites preuves de comp\u00e9tence au lieu d'une familiarit\u00e9 vague avec les outils.",
        fit: ["Jeunes dipl\u00f4m\u00e9s", "Personnes en reconversion", "Professionnels en retour sur le march\u00e9"],
        deliverables: ["CV et profils renforc\u00e9s", "Parcours de pr\u00e9paration d'entretien", "Mini projet visible ou preuve de travail"],
        results: ["Positionnement plus cr\u00e9dible", "Meilleure qualit\u00e9 d'expression", "Plus d'aisance sur les entretiens et tests"],
        process: ["Identifier les angles faibles du profil", "\u00c9tudier des workflows IA efficaces", "Construire un actif partageable"],
        ctaTitle: "Passez de la curiosit\u00e9 \u00e0 une preuve utile pour l'emploi.",
        ctaBody: "R\u00e9servez une place en cohorte publique ou demandez un format d'accompagnement cibl\u00e9."
      },
      impact: {
        eyebrow: "\u00c9coles et associations",
        title: "Augmentez la port\u00e9e, la clart\u00e9 et la capacit\u00e9 des \u00e9quipes sans diluer la mission.",
        lead: "Ce parcours est pens\u00e9 pour les directions, administrations, associations et \u00e9quipes de terrain qui doivent produire davantage avec peu de temps et de budget.",
        fit: ["Directions et \u00e9quipes support", "Communication et programmes associatifs", "Outreach et formation communautaire"],
        deliverables: ["Messages plus clairs pour parents et communaut\u00e9s", "Aides administratives et de support", "Syst\u00e8mes de contenu align\u00e9s \u00e0 la mission"],
        results: ["Moins de temps perdu en r\u00e9daction", "Communication plus coh\u00e9rente", "Usage responsable plus confiant"],
        process: ["Identifier les goulots d'\u00e9tranglement de capacit\u00e9", "Voir des exemples adapt\u00e9s \u00e0 l'\u00e9ducation et au secteur associatif", "Construire un workflow de soutien ou un syst\u00e8me de contenu"],
        ctaTitle: "Introduisez une IA pratique dans un cadre \u00e0 impact, avec discipline.",
        ctaBody: "Inscrivez une personne, un programme ou une session sur mesure pour votre organisation."
      },
      students: {
        eyebrow: "\u00c9tudiants",
        title: "Utilisez l'IA pour mieux \u00e9tudier, construire des preuves et entrer dans le travail avec de meilleurs r\u00e9flexes.",
        lead: "Ce parcours est con\u00e7u pour les apprenants qui veulent soutenir la recherche, la r\u00e9vision, l'\u00e9criture, les projets et le portfolio sans tomber dans les raccourcis faibles.",
        fit: ["Universit\u00e9 et enseignement sup\u00e9rieur", "Bootcamps et formations intensives", "Jeunes et adultes en reprise d'\u00e9tudes"],
        deliverables: ["Aides \u00e0 l'\u00e9tude et \u00e0 la r\u00e9vision", "Workflows de projet", "Mini builds pr\u00eats \u00e0 montrer"],
        results: ["Plus de structure", "Qualit\u00e9 plus stable", "Confiance pratique avant les stages et emplois"],
        process: ["Choisir un cas d'usage \u00e0 forte valeur", "Apprendre des sch\u00e9mas qui am\u00e9liorent la clart\u00e9", "Construire une sortie pr\u00e9sentable pour l'\u00e9cole ou la carri\u00e8re"],
        ctaTitle: "Apprenez \u00e0 bien utiliser l'IA avant que le march\u00e9 ne l'exige de vous.",
        ctaBody: "Les places publiques et les sessions de groupe sont disponibles via le formulaire ci-dessous."
      },
      beginners: {
        eyebrow: "Professionnels non techniques",
        title: "Une porte d'entr\u00e9e calme et pratique pour celles et ceux qui ne veulent pas d'une courbe technique lourde.",
        lead: "Ce parcours s'adresse aux professionnels, coordinateurs, administratifs et ind\u00e9pendants qui veulent des r\u00e9sultats, pas un vocabulaire d'ing\u00e9nieur.",
        fit: ["Ops et administratif", "Coachs, consultants et m\u00e9tiers de service", "Personnes qui se sentent en retard mais veulent un d\u00e9part solide"],
        deliverables: ["Premiers workflows clairs", "Patterns de prompting qui r\u00e9duisent le hasard", "Un petit outil ou processus r\u00e9utilisable"],
        results: ["Moins d'intimidation", "Meilleur jugement sur les outils et leurs limites", "Gains pratiques imm\u00e9diats"],
        process: ["Commencer par des cas d'usage en langage simple", "Voir des exemples r\u00e9alistes et leurs garde-fous", "Construire un petit workflow \u00e0 garder"],
        ctaTitle: "Vous n'avez pas besoin de devenir technique pour devenir efficace.",
        ctaBody: "Utilisez le formulaire pour r\u00e9server une place, demander un guidage ou un parcours d\u00e9butant sur mesure."
      },
      thanks: {
        eyebrow: "Demande envoy\u00e9e",
        title: "Merci. Votre demande d'inscription a \u00e9t\u00e9 envoy\u00e9e.",
        lead: "Une confirmation a \u00e9t\u00e9 dirig\u00e9e vers la bo\u00eete du programme. Vous pouvez revenir au site principal ou parcourir les pages par audience en attendant la r\u00e9ponse.",
        primary: "Retour au site principal",
        secondary: "Voir les pages audiences"
      }
    }
  },
  es: {
    brand: "La IA para todos",
    navHome: "Resumen",
    navFormats: "Formatos",
    navAudiences: "Audiencias",
    navRegistration: "Inscripci\u00f3n",
    footer: "Una oferta comercial de formaci\u00f3n en IA para principiantes, equipos, escuelas y organizaciones con impacto.",
    actions: {
      register: "Inscribirse",
      audiences: "Ver rutas por audiencia",
      brochure: "Ver formatos",
      backHome: "Volver al sitio principal",
      audiencePage: "Abrir p\u00e1gina"
    },
    labels: {
      results: "Resultados esperados",
      fit: "Encaje ideal",
      deliverables: "Entregables comerciales",
      process: "Despliegue t\u00edpico",
      registrationTitle: "Reserva una plaza o solicita un grupo privado",
      registrationLead: "Cada solicitud de inscripci\u00f3n se env\u00eda a sosthengj@gmail.com. Usa este formulario para plazas individuales, cohortes privadas, programas escolares o sesiones para organizaciones.",
      firstName: "Nombre",
      lastName: "Apellidos",
      email: "Correo electr\u00f3nico",
      phone: "Tel\u00e9fono o WhatsApp",
      preferredLanguage: "Idioma preferido",
      organisation: "Organizaci\u00f3n o centro",
      role: "Rol",
      audience: "Audiencia",
      format: "Formato preferido",
      goals: "Objetivo principal",
      message: "\u00bfQu\u00e9 te gustar\u00eda conseguir con esta formaci\u00f3n?",
      submit: "Enviar solicitud de inscripci\u00f3n",
      consent: "Recibir\u00e1s una respuesta con calendario, confirmaci\u00f3n y siguientes pasos.",
      summaryTitle: "Qu\u00e9 ocurre despu\u00e9s",
      summaryList: [
        "Tu solicitud se env\u00eda directamente al equipo del curso.",
        "Recibes una respuesta adaptada a sesiones p\u00fablicas o una entrega personalizada.",
        "Las cohortes privadas pueden dise\u00f1arse para empresa, educaci\u00f3n o impacto comunitario."
      ],
      languageOptions: ["Ingl\u00e9s", "Franc\u00e9s", "Espa\u00f1ol"],
      audienceOptions: ["Due\u00f1os de pymes", "Personas que buscan empleo", "Escuelas u ONG", "Estudiantes", "Profesionales no t\u00e9cnicos", "P\u00fablico general"],
      formatOptions: ["Sesi\u00f3n Discovery", "Sesi\u00f3n Case Studies", "Sesi\u00f3n Workshop", "Pase semanal", "Cohorte privada"],
      goalOptions: ["Empezar con confianza", "Mejorar un flujo de trabajo", "Lanzar un peque\u00f1o proyecto de IA", "Actualizar a un equipo", "Explorar un programa a medida"],
      contactNote: "El formulario usa FormSubmit para mantener compatibilidad con hosting est\u00e1tico.",
      honeypot: "Deja este campo vac\u00edo"
    },
    home: {
      eyebrow: "Sitio p\u00fablico",
      title: "Una oferta de IA pr\u00e1ctica para quienes quieren resultados antes que jerga.",
      lead: "La IA para todos es una oferta multiling\u00fce, pensada para principiantes, dirigida al p\u00fablico: due\u00f1os de pymes, personas en cambio profesional, escuelas, ONG, estudiantes y profesionales no t\u00e9cnicos que necesitan resultados \u00fatiles, claridad y una entrega cre\u00edble.",
      stats: [
        { value: "3", label: "formatos" },
        { value: "5€", label: "precio de entrada" },
        { value: "3", label: "idiomas" }
      ],
      heroPills: ["Pensado para principiantes", "Online + presencial", "Enfoque comercial", "Multiling\u00fce"],
      heroSideTitle: "Dise\u00f1ado para convertir con credibilidad",
      heroSideBody: "El sitio p\u00fablico se centra en resultados, relevancia por audiencia, formatos claros y una ruta directa de registro en lugar de mostrar el detalle interno del programa.",
      heroSideList: ["Posicionamiento claro", "Precios visibles", "Entradas por audiencia", "Espacios reservados para creatividades futuras"],
      carouselTitle: "Placeholder para carrusel de ideas",
      carouselLead: "Espacio reservado para una futura vitrina de historias de clientes, conceptos de workshop o visuales de antes y despu\u00e9s.",
      carouselItems: [
        { title: "Renovaci\u00f3n de flujo retail", body: "Placeholder para una historia visual corta que muestre c\u00f3mo un negocio ahorra tiempo en stock, mensajes y FAQ." },
        { title: "Portfolio de IA para empleo", body: "Placeholder para un reel, una presentaci\u00f3n o un carrusel que muestre c\u00f3mo una persona mejora su posicionamiento profesional." },
        { title: "Kit de apoyo para centros", body: "Placeholder para una historia orientada al impacto sobre apoyo al personal, comunicaciones y participaci\u00f3n comunitaria." }
      ],
      mediaTitle: "Escenario para video e imagen",
      mediaLead: "Grandes espacios reservados para un video hero, un reel del instructor, fotograf\u00eda de cohortes, capturas o testimonios.",
      videoTitle: "Placeholder de video hero",
      videoBody: "Usa este espacio para un video de introducci\u00f3n, un clip keynote o un montaje de sesiones.",
      imageTitle: "Placeholder de imagen de campa\u00f1a",
      imageBody: "Usa este espacio para fotograf\u00eda de marca, capturas, frases destacadas o visuales de lanzamiento.",
      formatsTitle: "Tres formatos comerciales, una progresi\u00f3n clara",
      formatsLead: "Cada formato funciona por separado, y juntos llevan a un principiante desde el inter\u00e9s hasta la comprensi\u00f3n y la construcci\u00f3n de algo \u00fatil.",
      formats: [
        {
          kicker: "Discovery",
          title: "Primer contacto accesible",
          price: "5€",
          meta: "Lunes \u00b7 online",
          body: "Una sesi\u00f3n de entrada f\u00e1cil para quienes quieren ejemplos pr\u00e1cticos, lenguaje claro y una idea realista de d\u00f3nde encaja la IA.",
          bullets: ["Cuatro casos muy cercanos", "Sin requisitos t\u00e9cnicos", "Siguiente paso claro"]
        },
        {
          kicker: "Case Studies",
          title: "Ejemplos reales y medibles",
          price: "10€",
          meta: "Mi\u00e9rcoles \u00b7 online",
          body: "Desgloses estructurados de flujos cre\u00edbles, con resultados, herramientas, prompts y controles de calidad.",
          bullets: ["Casos documentados", "Marco de ROI y riesgo", "Mejor criterio para decidir"]
        },
        {
          kicker: "Workshop",
          title: "Sesiones para construir",
          price: "15€",
          meta: "Viernes \u00b7 online o presencial",
          body: "Las personas participantes salen con un mini producto, un clon o un flujo operativo en lugar de solo teor\u00eda.",
          bullets: ["Construcci\u00f3n en vivo", "Pruebas y pulido", "Resultado compartible"]
        }
      ],
      audienceTitle: "P\u00e1ginas espec\u00edficas por audiencia",
      audienceLead: "Cada audiencia tiene su propio mensaje, promesa y enfoque de casos de uso, manteniendo una misma ruta de inscripci\u00f3n.",
      audiences: [
        { key: "smb", title: "Due\u00f1os de pymes", body: "Para operadores que necesitan acelerar marketing, administraci\u00f3n y comunicaci\u00f3n con clientes sin montar un gran equipo t\u00e9cnico." },
        { key: "jobs", title: "B\u00fasqueda de empleo", body: "Para personas que quieren mejor posicionamiento, mejores entregables y un perfil de IA m\u00e1s visible." },
        { key: "impact", title: "Escuelas y ONG", body: "Para equipos con impacto que necesitan comunicaciones m\u00e1s claras, apoyo operativo y desarrollo de capacidades." },
        { key: "students", title: "Estudiantes", body: "Para quienes quieren activos de portfolio, apoyo al estudio y una ventaja pr\u00e1ctica antes de entrar al mercado." },
        { key: "beginners", title: "Profesionales no t\u00e9cnicos", body: "Para quienes quieren h\u00e1bitos de IA \u00fatiles sin convertirse en ingenieros ni especialistas." }
      ],
      proofTitle: "Posicionamiento comercial sin exageraciones",
      proofLead: "La oferta est\u00e1 construida alrededor de resultados \u00fatiles, orientaci\u00f3n responsable y dise\u00f1o formativo repetible.",
      proof: [
        { title: "Entrega segura para principiantes", body: "El lenguaje se mantiene claro, pr\u00e1ctico y respetuoso con audiencias no t\u00e9cnicas." },
        { title: "Escalera de valor visible", body: "El precio de entrada facilita el acceso y los formatos m\u00e1s profundos convierten el inter\u00e9s en compromiso." },
        { title: "Despliegue flexible", body: "Apto para cohortes p\u00fablicas, sesiones privadas, programas escolares y trabajo con organizaciones." }
      ]
    },
    pages: {
      smb: {
        eyebrow: "Due\u00f1os de pymes y operadores",
        title: "Usa IA para avanzar m\u00e1s r\u00e1pido en marketing, administraci\u00f3n y comunicaci\u00f3n con clientes.",
        lead: "Esta ruta est\u00e1 pensada para fundadores, comercios, negocios de servicios y equipos peque\u00f1os que quieren apoyo pr\u00e1ctico sin a\u00f1adir complejidad t\u00e9cnica.",
        fit: ["Retail y ecommerce", "Hosteler\u00eda y servicios", "Agencias, estudios e independientes"],
        deliverables: ["Mensajer\u00eda comercial y de oferta", "Sistemas de FAQ y respuesta al cliente", "Mini herramientas para reservas, contenido y seguimiento"],
        results: ["Comunicaci\u00f3n m\u00e1s clara", "Admin repetitiva m\u00e1s r\u00e1pida", "Mejor criterio para elegir herramientas"],
        process: ["Detectar puntos de fricci\u00f3n actuales", "Ver casos \u00fatiles seg\u00fan el tipo de negocio", "Construir un microproducto realmente utilizable"],
        ctaTitle: "Convierte pruebas dispersas en un m\u00e9todo operativo claro.",
        ctaBody: "Inscr\u00edbete en una sesi\u00f3n p\u00fablica o pide una cohorte privada para tu empresa."
      },
      jobs: {
        eyebrow: "B\u00fasqueda de empleo y transici\u00f3n profesional",
        title: "Construye una ventaja de IA pr\u00e1ctica que el mercado pueda reconocer.",
        lead: "Esta p\u00e1gina est\u00e1 orientada a personas que quieren mejores candidaturas, mejor posicionamiento y peque\u00f1as pruebas de trabajo en lugar de una familiaridad difusa con herramientas.",
        fit: ["Talento inicial", "Personas en reconversi\u00f3n", "Profesionales que regresan al mercado"],
        deliverables: ["CV y perfiles m\u00e1s fuertes", "Flujos de preparaci\u00f3n para entrevistas", "Un mini proyecto visible o prueba de habilidad"],
        results: ["Posicionamiento m\u00e1s cre\u00edble", "Mejor calidad de salida escrita", "M\u00e1s confianza en entrevistas y pruebas"],
        process: ["Detectar brechas del perfil actual", "Estudiar flujos de trabajo eficaces con IA", "Construir un activo compartible"],
        ctaTitle: "Pasa de la curiosidad a una prueba \u00fatil para el empleo.",
        ctaBody: "Reserva una plaza p\u00fablica o solicita un formato m\u00e1s enfocado."
      },
      impact: {
        eyebrow: "Escuelas y ONG",
        title: "Aumenta alcance, claridad y capacidad del equipo sin perder calidad de misi\u00f3n.",
        lead: "Esta ruta es para direcciones, administraciones, ONG y equipos comunitarios que necesitan producir m\u00e1s con poco tiempo y presupuesto.",
        fit: ["Equipos directivos y de apoyo", "Comunicaci\u00f3n y programas", "Outreach y formaci\u00f3n comunitaria"],
        deliverables: ["Mensajer\u00eda m\u00e1s clara para familias y comunidad", "Apoyos administrativos y de servicio", "Sistemas de contenido alineados con la misi\u00f3n"],
        results: ["Menos tiempo perdido redactando", "Comunicaci\u00f3n p\u00fablica m\u00e1s consistente", "Uso m\u00e1s responsable y seguro de la IA"],
        process: ["Detectar cuellos de botella", "Revisar ejemplos relevantes para educaci\u00f3n y ONG", "Construir un flujo de apoyo o sistema de contenido"],
        ctaTitle: "Introduce IA pr\u00e1ctica en trabajo con impacto, con criterio y disciplina.",
        ctaBody: "Registra a una persona, un programa o una sesi\u00f3n a medida para tu organizaci\u00f3n."
      },
      students: {
        eyebrow: "Estudiantes",
        title: "Usa IA para estudiar mejor, crear prueba y entrar al mercado con mejores h\u00e1bitos.",
        lead: "Esta ruta es para quienes quieren que la IA apoye investigaci\u00f3n, revisi\u00f3n, escritura, proyectos y portfolio sin caer en atajos pobres.",
        fit: ["Universidad y college", "Bootcamps y cursos intensivos", "J\u00f3venes y adultos que est\u00e1n aprendiendo"],
        deliverables: ["Sistemas de estudio y repaso", "Flujos de apoyo a proyectos", "Mini builds listos para ense\u00f1ar"],
        results: ["M\u00e1s estructura", "Calidad m\u00e1s consistente", "Confianza pr\u00e1ctica antes de pr\u00e1cticas o empleo"],
        process: ["Elegir un caso de alto valor", "Aprender patrones que mejoran claridad y calidad", "Construir una salida presentable para estudio o carrera"],
        ctaTitle: "Aprende a usar bien la IA antes de que el mercado lo espere de ti.",
        ctaBody: "Las plazas p\u00fablicas y sesiones grupales est\u00e1n disponibles mediante el formulario."
      },
      beginners: {
        eyebrow: "Profesionales no t\u00e9cnicos",
        title: "Una entrada calmada y pr\u00e1ctica a la IA para quienes no quieren una curva t\u00e9cnica dura.",
        lead: "Esta ruta es para profesionales, coordinadores, perfiles administrativos e independientes que quieren resultados, no vocabulario de ingenier\u00eda.",
        fit: ["Operaciones y administraci\u00f3n", "Coaches, consultores y servicios", "Personas que se sienten rezagadas pero quieren un comienzo cre\u00edble"],
        deliverables: ["Primeros flujos claros", "Patrones de prompting que reducen improvisaci\u00f3n", "Una peque\u00f1a herramienta o proceso reutilizable"],
        results: ["Menos intimidaci\u00f3n", "Mejor criterio sobre herramientas y l\u00edmites", "Ganancias pr\u00e1cticas inmediatas"],
        process: ["Empezar con casos en lenguaje simple", "Ver ejemplos realistas y sus guardrails", "Construir un peque\u00f1o flujo para seguir usando"],
        ctaTitle: "No necesitas volverte t\u00e9cnico para volverte eficaz.",
        ctaBody: "Usa el formulario para reservar plaza, pedir orientaci\u00f3n o consultar por una cohorte inicial."
      },
      thanks: {
        eyebrow: "Solicitud enviada",
        title: "Gracias. Tu solicitud de inscripci\u00f3n ha sido enviada.",
        lead: "La confirmaci\u00f3n se ha dirigido al buz\u00f3n del curso. Puedes volver al sitio principal o seguir explorando las p\u00e1ginas por audiencia mientras esperas la respuesta.",
        primary: "Volver al sitio principal",
        secondary: "Ver p\u00e1ginas de audiencia"
      }
    }
  }
};

const state = {
  lang: getInitialLanguage(),
  page: document.body.dataset.page || "home"
};

function getInitialLanguage() {
  const saved = window.localStorage.getItem(storageKey);
  if (saved && siteCopy[saved]) {
    return saved;
  }
  return "en";
}

function getCopy() {
  return siteCopy[state.lang];
}

function getPageHref(pageKey) {
  return `./${routeMap[pageKey]}`;
}

function getThanksUrl() {
  if (window.location.protocol === "file:") {
    return "./thanks.html";
  }

  const pathname = window.location.pathname.replace(/[^/]+$/, routeMap.thanks);
  return `${window.location.origin}${pathname}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderBullets(items) {
  return `<ul class="bullet-list">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function renderSummary(copy) {
  return `
    <div class="contact-card">
      <div class="meta-row">${escapeHtml(copy.labels.summaryTitle)}</div>
      ${renderBullets(copy.labels.summaryList)}
      <p class="note" style="margin-top:16px;">${escapeHtml(copy.labels.contactNote)}</p>
    </div>
  `;
}

function renderRegistration(copy, defaultAudience) {
  const labels = copy.labels;
  const selectedAudience = defaultAudience || labels.audienceOptions[5];

  return `
    <section class="section" id="registration">
      <div class="section-card split-grid">
        <div>
          <div class="eyebrow">${escapeHtml(copy.navRegistration)}</div>
          <h2>${escapeHtml(labels.registrationTitle)}</h2>
          <p>${escapeHtml(labels.registrationLead)}</p>
          ${renderSummary(copy)}
        </div>
        <div class="form-shell">
          <form class="registration-form" action="https://formsubmit.co/sosthengj@gmail.com" method="POST" accept-charset="UTF-8">
            <input type="hidden" name="_subject" value="AI for All registration request">
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_template" value="table">
            <input type="hidden" name="_next" value="${escapeHtml(getThanksUrl())}">
            <div class="visually-hidden">
              <label for="company-website">${escapeHtml(labels.honeypot)}</label>
              <input id="company-website" type="text" name="_honey" tabindex="-1" autocomplete="off">
            </div>
            <div class="form-grid">
              <div class="field">
                <label for="first-name">${escapeHtml(labels.firstName)}</label>
                <input id="first-name" name="firstName" required>
              </div>
              <div class="field">
                <label for="last-name">${escapeHtml(labels.lastName)}</label>
                <input id="last-name" name="lastName" required>
              </div>
              <div class="field">
                <label for="email">${escapeHtml(labels.email)}</label>
                <input id="email" name="email" type="email" required>
              </div>
              <div class="field">
                <label for="phone">${escapeHtml(labels.phone)}</label>
                <input id="phone" name="phone">
              </div>
              <div class="field">
                <label for="language">${escapeHtml(labels.preferredLanguage)}</label>
                <select id="language" name="preferredLanguage">
                  ${labels.languageOptions.map((option) => `<option>${escapeHtml(option)}</option>`).join("")}
                </select>
              </div>
              <div class="field">
                <label for="organisation">${escapeHtml(labels.organisation)}</label>
                <input id="organisation" name="organisation">
              </div>
              <div class="field">
                <label for="role">${escapeHtml(labels.role)}</label>
                <input id="role" name="role">
              </div>
              <div class="field">
                <label for="audience">${escapeHtml(labels.audience)}</label>
                <select id="audience" name="audience">
                  ${labels.audienceOptions.map((option) => `<option${option === selectedAudience ? " selected" : ""}>${escapeHtml(option)}</option>`).join("")}
                </select>
              </div>
              <div class="field">
                <label for="format">${escapeHtml(labels.format)}</label>
                <select id="format" name="format">
                  ${labels.formatOptions.map((option) => `<option>${escapeHtml(option)}</option>`).join("")}
                </select>
              </div>
              <div class="field">
                <label for="goals">${escapeHtml(labels.goals)}</label>
                <select id="goals" name="goals">
                  ${labels.goalOptions.map((option) => `<option>${escapeHtml(option)}</option>`).join("")}
                </select>
              </div>
              <div class="field-full">
                <label for="message">${escapeHtml(labels.message)}</label>
                <textarea id="message" name="message" placeholder="${escapeHtml(labels.message)}"></textarea>
              </div>
            </div>
            <div class="form-actions">
              <p class="fine-print">${escapeHtml(labels.consent)}</p>
              <button class="button" type="submit">${escapeHtml(labels.submit)}</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `;
}

function renderHome() {
  const copy = getCopy();
  const home = copy.home;

  return `
    <div class="page-shell">
      <section class="hero-card" id="home">
        <div class="hero-grid">
          <div>
            <div class="eyebrow">${escapeHtml(home.eyebrow)}</div>
            <h1>${escapeHtml(home.title)}</h1>
            <p class="lead">${escapeHtml(home.lead)}</p>
            <div class="pill-row">
              ${home.heroPills.map((item) => `<span class="pill">${escapeHtml(item)}</span>`).join("")}
            </div>
            <div class="hero-actions">
              <a class="button" href="#registration">${escapeHtml(copy.actions.register)}</a>
              <a class="secondary-button" href="#audiences">${escapeHtml(copy.actions.audiences)}</a>
            </div>
            <div class="metric-grid">
              ${home.stats.map((item) => `
                <div class="metric-card">
                  <strong>${escapeHtml(item.value)}</strong>
                  <span>${escapeHtml(item.label)}</span>
                </div>
              `).join("")}
            </div>
          </div>
          <div class="hero-side">
            <div class="showcase-panel">
              <div class="panel-title">
                <strong>${escapeHtml(home.heroSideTitle)}</strong>
                <span class="pill">${escapeHtml(copy.brand)}</span>
              </div>
              <p>${escapeHtml(home.heroSideBody)}</p>
              <ul class="tag-list">
                ${home.heroSideList.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>
            </div>
            <div class="showcase-panel">
              <div class="panel-title">
                <strong>${escapeHtml(home.carouselTitle)}</strong>
                <span class="muted-label">UI reserve</span>
              </div>
              <p>${escapeHtml(home.carouselLead)}</p>
              <div class="placeholder-stack">
                ${home.carouselItems.map((item) => `
                  <div class="placeholder-card">
                    <div class="placeholder-kicker">Concept tile</div>
                    <strong>${escapeHtml(item.title)}</strong>
                    <p>${escapeHtml(item.body)}</p>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="formats">
        <div class="section-header">
          <div>
            <div class="eyebrow">${escapeHtml(copy.navFormats)}</div>
            <h2>${escapeHtml(home.formatsTitle)}</h2>
          </div>
          <p>${escapeHtml(home.formatsLead)}</p>
        </div>
        <div class="formats-grid">
          ${home.formats.map((format) => `
            <article class="format-card">
              <div class="meta-row">${escapeHtml(format.kicker)}</div>
              <h3>${escapeHtml(format.title)}</h3>
              <div class="price-row">
                <strong>${escapeHtml(format.price)}</strong>
                <span class="muted-label">${escapeHtml(format.meta)}</span>
              </div>
              <p>${escapeHtml(format.body)}</p>
              ${renderBullets(format.bullets)}
            </article>
          `).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-header">
          <div>
            <div class="eyebrow">Media</div>
            <h2>${escapeHtml(home.mediaTitle)}</h2>
          </div>
          <p>${escapeHtml(home.mediaLead)}</p>
        </div>
        <div class="media-grid">
          <div class="media-placeholder video">
            <div class="media-frame">
              <div class="media-bar">
                <strong>${escapeHtml(home.videoTitle)}</strong>
                <span class="pill">16:9</span>
              </div>
              <div class="media-stage">
                <div>
                  <strong>${escapeHtml(home.videoTitle)}</strong>
                  <p>${escapeHtml(home.videoBody)}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="media-placeholder image">
            <div class="media-frame">
              <div class="media-bar">
                <strong>${escapeHtml(home.imageTitle)}</strong>
                <span class="pill">Campaign</span>
              </div>
              <div class="media-stage">
                <div>
                  <strong>${escapeHtml(home.imageTitle)}</strong>
                  <p>${escapeHtml(home.imageBody)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="audiences">
        <div class="section-header">
          <div>
            <div class="eyebrow">${escapeHtml(copy.navAudiences)}</div>
            <h2>${escapeHtml(home.audienceTitle)}</h2>
          </div>
          <p>${escapeHtml(home.audienceLead)}</p>
        </div>
        <div class="audience-grid">
          ${home.audiences.map((item) => `
            <article class="audience-card">
              <div class="meta-row">Audience path</div>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.body)}</p>
              <a class="secondary-button" href="${escapeHtml(getPageHref(item.key))}">${escapeHtml(copy.actions.audiencePage)}</a>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-header">
          <div>
            <div class="eyebrow">Positioning</div>
            <h2>${escapeHtml(home.proofTitle)}</h2>
          </div>
          <p>${escapeHtml(home.proofLead)}</p>
        </div>
        <div class="proof-grid">
          ${home.proof.map((item) => `
            <article class="proof-card">
              <strong>${escapeHtml(item.title)}</strong>
              <p>${escapeHtml(item.body)}</p>
            </article>
          `).join("")}
        </div>
      </section>

      ${renderRegistration(copy)}
    </div>
  `;
}

function getAudienceLabel(copy, pageKey) {
  const map = {
    smb: 0,
    jobs: 1,
    impact: 2,
    students: 3,
    beginners: 4
  };
  return copy.labels.audienceOptions[map[pageKey]];
}

function renderAudiencePage(pageKey) {
  const copy = getCopy();
  const page = copy.pages[pageKey];

  return `
    <div class="page-shell">
      <section class="hero-card" id="home">
        <div class="hero-grid">
          <div>
            <div class="eyebrow">${escapeHtml(page.eyebrow)}</div>
            <h1>${escapeHtml(page.title)}</h1>
            <p class="lead">${escapeHtml(page.lead)}</p>
            <div class="hero-actions">
              <a class="button" href="#registration">${escapeHtml(copy.actions.register)}</a>
              <a class="secondary-button" href="${escapeHtml(getPageHref("home"))}#audiences">${escapeHtml(copy.actions.backHome)}</a>
            </div>
          </div>
          <div class="hero-side">
            <div class="showcase-panel">
              <div class="panel-title">
                <strong>${escapeHtml(copy.labels.fit)}</strong>
                <span class="pill">${escapeHtml(copy.brand)}</span>
              </div>
              ${renderBullets(page.fit)}
            </div>
            <div class="showcase-panel" id="formats">
              <div class="panel-title">
                <strong>${escapeHtml(copy.labels.deliverables)}</strong>
                <span class="pill">Offer</span>
              </div>
              ${renderBullets(page.deliverables)}
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="focus-grid">
          <article class="focus-card">
            <div class="meta-row">${escapeHtml(copy.labels.results)}</div>
            ${renderBullets(page.results)}
          </article>
          <article class="focus-card">
            <div class="meta-row">${escapeHtml(copy.labels.process)}</div>
            ${renderBullets(page.process)}
          </article>
          <article class="focus-card">
            <div class="meta-row">Commercial fit</div>
            <p>${escapeHtml(page.ctaBody)}</p>
          </article>
        </div>
      </section>

      <section class="section">
        <div class="cta-band">
          <div class="split-grid">
            <div>
              <div class="eyebrow" style="color:#d1fae5;">${escapeHtml(copy.navRegistration)}</div>
              <h2>${escapeHtml(page.ctaTitle)}</h2>
              <p>${escapeHtml(page.ctaBody)}</p>
            </div>
            <div class="placeholder-card" style="background:rgba(255,255,255,0.08); border-color:rgba(255,255,255,0.16); color:#fff;">
              <div class="placeholder-kicker" style="color:rgba(255,255,255,0.68);">Future asset zone</div>
              <strong>${escapeHtml(copy.home.carouselTitle)}</strong>
              <p style="color:rgba(255,255,255,0.8);">${escapeHtml(copy.home.mediaLead)}</p>
            </div>
          </div>
        </div>
      </section>

      ${renderRegistration(copy, getAudienceLabel(copy, pageKey))}
    </div>
  `;
}

function renderThanksPage() {
  const copy = getCopy();
  const page = copy.pages.thanks;

  return `
    <div class="page-shell">
      <section class="thanks-card">
        <div class="eyebrow">${escapeHtml(page.eyebrow)}</div>
        <h1>${escapeHtml(page.title)}</h1>
        <p class="lead">${escapeHtml(page.lead)}</p>
        <div class="hero-actions">
          <a class="button" href="${escapeHtml(getPageHref("home"))}">${escapeHtml(page.primary)}</a>
          <a class="secondary-button" href="${escapeHtml(getPageHref("home"))}#audiences">${escapeHtml(page.secondary)}</a>
        </div>
      </section>
    </div>
  `;
}

function renderPage() {
  const root = document.getElementById("page-root");
  if (!root) {
    return;
  }

  if (state.page === "thanks") {
    root.innerHTML = renderThanksPage();
    return;
  }

  if (state.page === "home") {
    root.innerHTML = renderHome();
    return;
  }

  root.innerHTML = renderAudiencePage(state.page);
}

function setStaticCopy() {
  const copy = getCopy();
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-copy]").forEach((node) => {
    const key = node.dataset.copy;
    if (copy[key]) {
      node.textContent = copy[key];
    }
  });

  document.title = `${copy.brand} | ${document.body.dataset.page || "home"}`;
}

function bindLanguageToggle() {
  const buttons = document.querySelectorAll(".lang-toggle button");
  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      window.localStorage.setItem(storageKey, state.lang);
      buttons.forEach((node) => node.classList.toggle("active", node === button));
      setStaticCopy();
      renderPage();
    });
  });
}

setStaticCopy();
bindLanguageToggle();
renderPage();