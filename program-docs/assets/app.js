    const months = {
      en: ["June 2026", "July 2026", "August 2026", "September 2026", "October 2026", "November 2026", "December 2026", "January 2027", "February 2027", "March 2027", "April 2027", "May 2027"],
      fr: ["Juin 2026", "Juillet 2026", "Ao
      es: ["Junio 2026", "Julio 2026", "Agosto 2026", "Septiembre 2026", "Octubre 2026", "Noviembre 2026", "Diciembre 2026", "Enero 2027", "Febrero 2027", "Marzo 2027", "Abril 2027", "Mayo 2027"]
    };

    const schedule = [
      {
        month: 0,
        week: 1,
        theme: { en: "Personal productivity", fr: "Productivit
        discovery: {
          en: ["Inbox triage", "Meeting notes", "Weekly planning", "Task prioritisation"],
          fr: ["Tri des e-mails", "Notes de r
          es: ["Clasificaci
        },
        cases: {
          en: ["Consultant recap assistant", "Teacher lesson prep", "Founder email drafting", "Admin document Q&A"],
          fr: ["Assistant de synth
          es: ["Asistente de res
        },
        workshop: { en: "Personal AI dashboard", fr: "Tableau de bord IA personnel", es: "Panel personal con IA" }
      },
      {
        month: 0,
        week: 2,
        theme: { en: "Family administration", fr: "Administration familiale", es: "Administraci
        discovery: {
          en: ["Meal planning", "School messages", "Budget reminders", "Shared calendars"],
          fr: ["Planification des repas", "Messages scolaires", "Rappels budg
          es: ["Planificaci
        },
        cases: {
          en: ["Parent committee newsletter", "After-school club planning", "Caregiver rota automation", "Household expense summaries"],
          fr: ["Newsletter de parents d'
          es: ["Bolet
        },
        workshop: { en: "Household planner app", fr: "Application d'organisation du foyer", es: "App de organizaci
      },
      {
        month: 0,
        week: 3,
        theme: { en: "Job search and personal brand", fr: "Recherche d'emploi et marque personnelle", es: "B
        discovery: {
          en: ["CV tailoring", "Cover letter drafts", "Portfolio copy", "Interview prep"],
          fr: ["Adaptation du CV", "Brouillons de lettre", "Texte de portfolio", "Pr
          es: ["Adaptaci
        },
        cases: {
          en: ["Graduate job pack", "Career-change profile rewrite", "LinkedIn bio refresh", "Mock interview coach"],
          fr: ["Kit d'insertion pour jeune dipl
          es: ["Kit laboral para reci
        },
        workshop: { en: "Personal brand landing page", fr: "Page vitrine de marque personnelle", es: "Landing page de marca personal" }
      },
      {
        month: 0,
        week: 4,
        theme: { en: "Freelance side hustle", fr: "Activit
        discovery: {
          en: ["Service packaging", "Proposal writing", "Lead qualification", "Client onboarding"],
          fr: ["Pack d'offres", "R
          es: ["Paquetes de servicios", "Redacci
        },
        cases: {
          en: ["Graphic designer quote generator", "Copywriter intake form", "Coach session notes", "Photographer follow-up system"],
          fr: ["G
          es: ["Generador de presupuestos para dise
        },
        workshop: { en: "Freelancer CRM lite", fr: "Mini CRM freelance", es: "Mini CRM para freelance" }
      },
      {
        month: 1,
        week: 5,
        theme: { en: "Travel and hospitality", fr: "Voyage et h
        discovery: {
          en: ["Trip itineraries", "Guest FAQs", "Local guides", "Review responses"],
          fr: ["Itin
          es: ["Itinerarios de viaje", "Preguntas frecuentes de hu
        },
        cases: {
          en: ["Boutique hotel concierge bot", "Travel advisor planning pack", "Museum visit assistant", "Airbnb host message templates"],
          fr: ["Bot concierge d'h
          es: ["Bot de conserjer
        },
        workshop: { en: "City guide planner", fr: "Planificateur de guide urbain", es: "Planificador de gu
      },
      {
        month: 1,
        week: 6,
        theme: { en: "Food and restaurants", fr: "Restauration", es: "Restauraci
        discovery: {
          en: ["Menu ideas", "Diet filters", "Reservation replies", "Promotion copy"],
          fr: ["Id
          es: ["Ideas de men
        },
        cases: {
          en: ["Cafe social posts", "Restaurant allergen checker", "Meal-prep order FAQ", "Food truck event planner"],
          fr: ["Publications sociales pour caf
          es: ["Publicaciones sociales para cafeter
        },
        workshop: { en: "Restaurant booking SPA", fr: "SPA de r
      },
      {
        month: 1,
        week: 7,
        theme: { en: "Fitness and wellness", fr: "Fitness et bien-
        discovery: {
          en: ["Workout plans", "Habit nudges", "Class summaries", "Nutrition logs"],
          fr: ["Plans d'entra
          es: ["Planes de entrenamiento", "Recordatorios de h
        },
        cases: {
          en: ["Studio member assistant", "Online coach check-in bot", "Yoga class recap", "Wellness challenge tracker"],
          fr: ["Assistant pour membres de studio", "Bot de suivi pour coach en ligne", "R
          es: ["Asistente para miembros de estudio", "Bot de seguimiento para coach online", "Resumen de clase de yoga", "Seguimiento de reto de bienestar"]
        },
        workshop: { en: "Habit tracker app", fr: "Application de suivi d'habitudes", es: "App de seguimiento de h
      },
      {
        month: 1,
        week: 8,
        theme: { en: "Retail and e-commerce", fr: "Commerce et e-commerce", es: "Retail y comercio electr
        discovery: {
          en: ["Product descriptions", "Bundle ideas", "FAQ drafts", "Review analysis"],
          fr: ["Descriptions produits", "Id
          es: ["Descripciones de productos", "Ideas de paquetes", "Borradores de FAQ", "An
        },
        cases: {
          en: ["Shop owner catalog refresh", "Returns-support assistant", "Marketplace SEO rewrite", "Stock note summariser"],
          fr: ["Refonte de catalogue pour boutique", "Assistant de support retours", "R
          es: ["Renovaci
        },
        workshop: { en: "Mini storefront clone", fr: "Mini clone de boutique", es: "Mini clon de tienda online" }
      },
      {
        month: 2,
        week: 9,
        theme: { en: "Education and study skills", fr: "Education et m
        discovery: {
          en: ["Flashcards", "Revision plans", "Simple explainers", "Assignment outlines"],
          fr: ["Cartes m
          es: ["Tarjetas de estudio", "Planes de repaso", "Explicaciones sencillas", "Esquemas de tareas"]
        },
        cases: {
          en: ["Tutor homework helper", "School admin FAQ", "Adult learner study buddy", "Campus event digest"],
          fr: ["Assistant de devoirs pour tuteur", "FAQ administrative scolaire", "Compagnon d'
          es: ["Asistente de tareas para tutor", "FAQ administrativa escolar", "Compa
        },
        workshop: { en: "Study planner app", fr: "Application de planification d'
      },
      {
        month: 2,
        week: 10,
        theme: { en: "Language learning", fr: "Apprentissage des langues", es: "Aprendizaje de idiomas" },
        discovery: {
          en: ["Conversation prompts", "Vocabulary drills", "Pronunciation notes", "Travel phrases"],
          fr: ["Prompts de conversation", "Exercices de vocabulaire", "Notes de prononciation", "Phrases de voyage"],
          es: ["Prompts de conversaci
        },
        cases: {
          en: ["Community school practice bot", "Customer service phrasebook", "Expat survival guide", "Language club newsletter"],
          fr: ["Bot de pratique pour 
          es: ["Bot de pr
        },
        workshop: { en: "Language coach web app", fr: "Application web coach linguistique", es: "App web de coach de idiomas" }
      },
      {
        month: 2,
        week: 11,
        theme: { en: "Real estate and rentals", fr: "Immobilier et locations", es: "Inmobiliaria y alquileres" },
        discovery: {
          en: ["Listing drafts", "Tenant FAQs", "Viewing summaries", "Move-in guides"],
          fr: ["Brouillons d'annonces", "FAQ locataires", "Synth
          es: ["Borradores de anuncios", "FAQ de inquilinos", "Res
        },
        cases: {
          en: ["Agency listing enhancer", "Landlord support bot", "Property viewing assistant", "Student housing guide"],
          fr: ["Am
          es: ["Mejorador de anuncios de agencia", "Bot de soporte para arrendadores", "Asistente para visitas de propiedades", "Gu
        },
        workshop: { en: "Property listing portal", fr: "Portail d'annonces immobili
      },
      {
        month: 2,
        week: 12,
        theme: { en: "Home services", fr: "Services 
        discovery: {
          en: ["Quote requests", "Appointment reminders", "Service checklists", "Aftercare messages"],
          fr: ["Demandes de devis", "Rappels de rendez-vous", "Checklists de service", "Messages apr
          es: ["Solicitudes de presupuesto", "Recordatorios de citas", "Listas de verificaci
        },
        cases: {
          en: ["Plumber booking scripts", "Cleaning service FAQ", "Electrician estimate drafts", "Gardener seasonal planner"],
          fr: ["Scripts de r
          es: ["Guiones de reservas para fontanero", "FAQ de servicio de limpieza", "Borradores de presupuesto para electricista", "Planificador estacional para jardinero"]
        },
        workshop: { en: "Local service booking app", fr: "Application de r
      },
      {
        month: 2,
        week: 13,
        theme: { en: "Beauty and personal care", fr: "Beaut
        discovery: {
          en: ["Appointment prompts", "Package naming", "Aftercare tips", "Social captions"],
          fr: ["Prompts de rendez-vous", "Noms d'offres", "Conseils apr
          es: ["Prompts para citas", "Nombres de paquetes", "Consejos posteriores", "Textos para redes"]
        },
        cases: {
          en: ["Salon upsell assistant", "Barber queue update bot", "Spa treatment guide", "Makeup artist inquiry flow"],
          fr: ["Assistant d'upsell pour salon", "Bot de file d'attente pour barbier", "Guide de soins spa", "Parcours de demande pour maquilleuse"],
          es: ["Asistente de venta adicional para sal
        },
        workshop: { en: "Salon booking dashboard", fr: "Tableau de bord de salon", es: "Panel de reservas para sal
      },
      {
        month: 3,
        week: 14,
        theme: { en: "SMB marketing", fr: "Marketing pour PME", es: "Marketing para pymes" },
        discovery: {
          en: ["Campaign ideas", "Audience personas", "Landing page copy", "Newsletter drafts"],
          fr: ["Id
          es: ["Ideas de campa
        },
        cases: {
          en: ["Local bakery launch campaign", "Consultancy lead magnet", "Gym referral email series", "School open-day promo"],
          fr: ["Campagne de lancement pour boulangerie", "Lead magnet pour cabinet", "S
          es: ["Campa
        },
        workshop: { en: "Campaign planner board", fr: "Tableau de planification de campagne", es: "Tablero de planificaci
      },
      {
        month: 3,
        week: 15,
        theme: { en: "Sales and CRM", fr: "Ventes et CRM", es: "Ventas y CRM" },
        discovery: {
          en: ["Lead notes", "Follow-up drafts", "Call summaries", "Pipeline updates"],
          fr: ["Notes prospects", "Brouillons de relance", "Synth
          es: ["Notas de prospectos", "Borradores de seguimiento", "Res
        },
        cases: {
          en: ["Agency lead qualification", "B2B meeting recap", "Property sales follow-up", "Donor outreach tracker"],
          fr: ["Qualification de prospects en agence", "R
          es: ["Calificaci
        },
        workshop: { en: "Simple CRM clone", fr: "Clone de CRM simple", es: "Clon de CRM sencillo" }
      },
      {
        month: 3,
        week: 16,
        theme: { en: "Customer support", fr: "Support client", es: "Atenci
        discovery: {
          en: ["Response templates", "Complaint triage", "Knowledge snippets", "Tone rewriting"],
          fr: ["Mod
          es: ["Plantillas de respuesta", "Clasificaci
        },
        cases: {
          en: ["Retail returns inbox", "SaaS helpdesk assistant", "School parent query router", "Clinic appointment replies"],
          fr: ["Bo
          es: ["Bandeja de devoluciones retail", "Asistente de helpdesk SaaS", "Enrutador de consultas de padres", "Respuestas de citas en cl
        },
        workshop: { en: "Helpdesk portal", fr: "Portail de support", es: "Portal de soporte" }
      },
      {
        month: 3,
        week: 17,
        theme: { en: "Events and community", fr: "Ev
        discovery: {
          en: ["Run sheets", "Speaker bios", "Volunteer prompts", "Attendee updates"],
          fr: ["Conducteurs d'
          es: ["Guiones de evento", "Biograf
        },
        cases: {
          en: ["Meetup organiser toolkit", "Festival FAQ bot", "Conference recap writer", "Charity gala planner"],
          fr: ["Kit d'organisateur de meetup", "Bot FAQ de festival", "R
          es: ["Kit para organizador de meetup", "Bot FAQ de festival", "Redactor de resumen de conferencia", "Planificador de gala ben
        },
        workshop: { en: "Event registration app", fr: "Application d'inscription 
      },
      {
        month: 4,
        week: 18,
        theme: { en: "Nonprofit and fundraising", fr: "Associatif et collecte", es: "ONG y recaudaci
        discovery: {
          en: ["Donor thank-yous", "Grant outlines", "Volunteer briefs", "Impact summaries"],
          fr: ["Messages de remerciement donateurs", "Plans de subvention", "Briefs b
          es: ["Mensajes de agradecimiento a donantes", "Esquemas de subvenciones", "Briefs para voluntarios", "Res
        },
        cases: {
          en: ["Food bank outreach campaign", "Youth charity impact report", "Volunteer shift helper", "Community grant application pack"],
          fr: ["Campagne d'un food bank", "Rapport d'impact pour association jeunesse", "Assistant de planning b
          es: ["Campa
        },
        workshop: { en: "Donation campaign microsite", fr: "Microsite de campagne de dons", es: "Micrositio de campa
      },
      {
        month: 4,
        week: 19,
        theme: { en: "Healthcare administration", fr: "Administration de sant
        discovery: {
          en: ["Appointment reminders", "Patient FAQs", "Intake summaries", "Wellness explainers"],
          fr: ["Rappels de rendez-vous", "FAQ patients", "Synth
          es: ["Recordatorios de citas", "FAQ de pacientes", "Res
        },
        cases: {
          en: ["Clinic reminder workflow", "Dental pre-visit assistant", "Therapy admin support", "Wellness centre triage guide"],
          fr: ["Workflow de rappels en clinique", "Assistant pr
          es: ["Flujo de recordatorios en cl
        },
        workshop: { en: "Clinic scheduling app", fr: "Application de planning clinique", es: "App de agenda para cl
      },
      {
        month: 4,
        week: 20,
        theme: { en: "Legal and compliance basics", fr: "Bases juridiques et conformit
        discovery: {
          en: ["Plain-English summaries", "Checklist generation", "Policy comparisons", "Risk spotting"],
          fr: ["Synth
          es: ["Res
        },
        cases: {
          en: ["Privacy notice rewrite", "HR policy explainer", "Vendor contract summary", "School safeguarding checklist"],
          fr: ["R
          es: ["Reescritura de aviso de privacidad", "Explicaci
        },
        workshop: { en: "Policy assistant portal", fr: "Portail d'assistance aux politiques", es: "Portal asistente de pol
      },
      {
        month: 4,
        week: 21,
        theme: { en: "Finance and budgeting", fr: "Finance et budget", es: "Finanzas y presupuestos" },
        discovery: {
          en: ["Budget summaries", "Expense categorisation", "Savings plans", "Invoice prompts"],
          fr: ["Synth
          es: ["Res
        },
        cases: {
          en: ["Household budget coach", "Freelancer invoice helper", "Club treasurer monthly digest", "School trip cost planner"],
          fr: ["Coach budg
          es: ["Coach de presupuesto familiar", "Asistente de facturaci
        },
        workshop: { en: "Budget tracker dashboard", fr: "Tableau de bord de budget", es: "Panel de seguimiento de presupuesto" }
      },
      {
        month: 5,
        week: 22,
        theme: { en: "HR and recruiting", fr: "RH et recrutement", es: "RR. HH. y reclutamiento" },
        discovery: {
          en: ["Job descriptions", "Candidate summaries", "Interview questions", "Onboarding packs"],
          fr: ["Descriptions de poste", "Synth
          es: ["Descripciones de puesto", "Res
        },
        cases: {
          en: ["Small business hiring toolkit", "Volunteer recruitment pack", "Intern interview matrix", "Employee handbook refresh"],
          fr: ["Kit de recrutement pour petite entreprise", "Pack de recrutement de b
          es: ["Kit de contrataci
        },
        workshop: { en: "Applicant tracking mini app", fr: "Mini application de suivi de candidatures", es: "Mini app de seguimiento de candidatos" }
      },
      {
        month: 5,
        week: 23,
        theme: { en: "Knowledge management", fr: "Gestion des connaissances", es: "Gesti
        discovery: {
          en: ["FAQ building", "Document summaries", "SOP drafts", "Searchable notes"],
          fr: ["Construction de FAQ", "Synth
          es: ["Construcci
        },
        cases: {
          en: ["Internal wiki assistant", "Training handbook condensing", "Agency process finder", "School policy search bot"],
          fr: ["Assistant de wiki interne", "Condensation de manuel de formation", "Moteur de process d'agence", "Bot de recherche de politique scolaire"],
          es: ["Asistente de wiki interna", "Condensaci
        },
        workshop: { en: "Knowledge base portal", fr: "Portail de base de connaissances", es: "Portal de base de conocimiento" }
      },
      {
        month: 5,
        week: 24,
        theme: { en: "Media and content studio", fr: "Studio de contenu", es: "Estudio de contenido" },
        discovery: {
          en: ["Editorial ideas", "Storyboarding", "Transcript repurposing", "Thumbnail copy"],
          fr: ["Id
          es: ["Ideas editoriales", "Storyboard", "Reutilizaci
        },
        cases: {
          en: ["Podcast clip planner", "Newsletter production flow", "Video script support", "Community media digest"],
          fr: ["Planificateur d'extraits de podcast", "Workflow de newsletter", "Support de script vid
          es: ["Planificador de clips de podcast", "Flujo de producci
        },
        workshop: { en: "Content calendar studio", fr: "Studio de calendrier de contenu", es: "Estudio de calendario de contenido" }
      },
      {
        month: 5,
        week: 25,
        theme: { en: "Podcasts and newsletters", fr: "Podcasts et newsletters", es: "Podcasts y newsletters" },
        discovery: {
          en: ["Episode outlines", "Show notes", "Headline tests", "Sponsor copy"],
          fr: ["Plans d'
          es: ["Esquemas de episodios", "Notas del programa", "Pruebas de titulares", "Texto para patrocinadores"]
        },
        cases: {
          en: ["Founder podcast workflow", "School alumni newsletter", "Nonprofit monthly bulletin", "Expert interview prep"],
          fr: ["Workflow de podcast de dirigeant", "Newsletter d'anciens 
          es: ["Flujo de podcast para fundador", "Bolet
        },
        workshop: { en: "Newsletter CMS clone", fr: "Clone de CMS newsletter", es: "Clon de CMS para newsletter" }
      },
      {
        month: 6,
        week: 26,
        theme: { en: "Holiday retail", fr: "Commerce des f
        discovery: {
          en: ["Gift guides", "Seasonal bundles", "Promo emails", "Customer FAQs"],
          fr: ["Guides cadeaux", "Bundles saisonniers", "E-mails promotionnels", "FAQ clients"],
          es: ["Gu
        },
        cases: {
          en: ["Pop-up shop campaign", "Gift store support bot", "Last-mile stock updates", "Holiday marketplace refresh"],
          fr: ["Campagne de boutique 
          es: ["Campa
        },
        workshop: { en: "Gift finder app", fr: "Application de recherche de cadeaux", es: "App buscadora de regalos" }
      },
      {
        month: 6,
        week: 27,
        theme: { en: "Seasonal charities", fr: "Associations saisonni
        discovery: {
          en: ["Volunteer mobilisation", "Campaign messages", "Donation stories", "Urgent updates"],
          fr: ["Mobilisation des b
          es: ["Movilizaci
        },
        cases: {
          en: ["Toy drive coordination", "Winter shelter intake bot", "Festive appeal landing page", "Volunteer rota helper"],
          fr: ["Coordination de collecte de jouets", "Bot d'accueil pour refuge d'hiver", "Landing page d'appel festif", "Assistant de planning b
          es: ["Coordinaci
        },
        workshop: { en: "Volunteer rota planner", fr: "Planificateur de planning b
      },
      {
        month: 6,
        week: 28,
        theme: { en: "Year-end reporting", fr: "Rapports de fin d'ann
        discovery: {
          en: ["Summary writing", "Slide outlines", "Metrics narrative", "Board briefs"],
          fr: ["R
          es: ["Redacci
        },
        cases: {
          en: ["SMB annual review pack", "School department report", "Association impact digest", "Project retrospective helper"],
          fr: ["Pack de revue annuelle PME", "Rapport de d
          es: ["Paquete de revisi
        },
        workshop: { en: "Reporting dashboard", fr: "Tableau de bord de reporting", es: "Panel de informes" }
      },
      {
        month: 6,
        week: 29,
        theme: { en: "Personal finance reset", fr: "Remise 
        discovery: {
          en: ["Goal planning", "Debt tracking", "Savings scenarios", "Subscription audits"],
          fr: ["Planification d'objectifs", "Suivi des dettes", "Sc
          es: ["Planificaci
        },
        cases: {
          en: ["Family budget reboot", "Student expense planner", "Freelancer cash-flow coach", "Subscription cleanup assistant"],
          fr: ["Red
          es: ["Reinicio del presupuesto familiar", "Planificador de gastos estudiantiles", "Coach de flujo de caja para freelance", "Asistente de limpieza de suscripciones"]
        },
        workshop: { en: "Savings planner", fr: "Planificateur d'
      },
      {
        month: 6,
        week: 30,
        theme: { en: "Year-end showcase week", fr: "Semaine vitrine de fin d'ann
        discovery: {
          en: ["Best prompts recap", "Favorite tools", "Student demos", "Confidence review"],
          fr: ["R
          es: ["Resumen de mejores prompts", "Herramientas favoritas", "Demos de estudiantes", "Revisi
        },
        cases: {
          en: ["Top wins from previous sectors", "Peer walkthroughs", "Prompt clinic", "Portfolio story capture"],
          fr: ["Meilleurs gains des secteurs pr
          es: ["Mejores logros de sectores previos", "Recorridos entre pares", "Cl
        },
        workshop: { en: "Student project gallery", fr: "Galerie de projets 
      },
      {
        month: 7,
        week: 31,
        theme: { en: "New year habits and coaching", fr: "Nouvelles habitudes et coaching", es: "Nuevos h
        discovery: {
          en: ["Goal prompts", "Habit streaks", "Reflection journaling", "Weekly reviews"],
          fr: ["Prompts d'objectifs", "S
          es: ["Prompts de objetivos", "Rachas de h
        },
        cases: {
          en: ["Coach client accountability bot", "Gym challenge planner", "Student focus journal", "Manager one-to-one prep"],
          fr: ["Bot de responsabilisation pour coach", "Planificateur de challenge sportif", "Journal de concentration 
          es: ["Bot de responsabilidad para coach", "Planificador de reto deportivo", "Diario de enfoque para estudiantes", "Preparaci
        },
        workshop: { en: "Goal coach app", fr: "Application coach d'objectifs", es: "App de coach de objetivos" }
      },
      {
        month: 7,
        week: 32,
        theme: { en: "Local tourism and city guides", fr: "Tourisme local et guides urbains", es: "Turismo local y gu
        discovery: {
          en: ["Walking routes", "Family-friendly tips", "Hidden gems", "Multilingual scripts"],
          fr: ["Itin
          es: ["Rutas a pie", "Consejos para familias", "Joyas ocultas", "Guiones multiling
        },
        cases: {
          en: ["Tour guide itinerary builder", "Hotel neighborhood guide", "Museum day planner", "Local event digest"],
          fr: ["Constructeur d'itin
          es: ["Constructor de itinerarios para gu
        },
        workshop: { en: "Interactive city guide", fr: "Guide urbain interactif", es: "Gu
      },
      {
        month: 7,
        week: 33,
        theme: { en: "Schools and tutoring", fr: "Ecoles et soutien scolaire", es: "Escuelas y tutor
        discovery: {
          en: ["Lesson hooks", "Rubric drafting", "Parent updates", "Revision checklists"],
          fr: ["Accroches de cours", "R
          es: ["Ganchos para clases", "Redacci
        },
        cases: {
          en: ["Tutoring pack generator", "Homework support workflow", "Teacher admin simplifier", "Learning support summaries"],
          fr: ["G
          es: ["Generador de paquete de tutor
        },
        workshop: { en: "Tutor portal", fr: "Portail de tutorat", es: "Portal de tutor
      },
      {
        month: 7,
        week: 34,
        theme: { en: "Professional services", fr: "Services professionnels", es: "Servicios profesionales" },
        discovery: {
          en: ["Proposal decks", "Scope summaries", "Meeting recaps", "Client Q&A"],
          fr: ["Decks de proposition", "Synth
          es: ["Presentaciones de propuestas", "Res
        },
        cases: {
          en: ["Agency project starter kit", "Accountant client portal copy", "Law office intake form", "Architect brief assistant"],
          fr: ["Kit de lancement pour agence", "Texte de portail client pour comptable", "Formulaire d'accueil cabinet juridique", "Assistant de brief architecte"],
          es: ["Kit inicial para agencia", "Texto para portal de clientes de contabilidad", "Formulario de admisi
        },
        workshop: { en: "Client portal clone", fr: "Clone de portail client", es: "Clon de portal de clientes" }
      },
      {
        month: 8,
        week: 35,
        theme: { en: "Beauty and fashion retail", fr: "Beaut
        discovery: {
          en: ["Lookbook copy", "Launch captions", "FAQ styling", "Trend summaries"],
          fr: ["Texte de lookbook", "L
          es: ["Texto para lookbook", "Textos de lanzamiento", "FAQ de estilismo", "Res
        },
        cases: {
          en: ["Boutique collection launch", "Beauty box assistant", "Stylist recommendation flow", "Return reason analysis"],
          fr: ["Lancement de collection boutique", "Assistant de box beaut
          es: ["Lanzamiento de colecci
        },
        workshop: { en: "Style quiz storefront", fr: "Boutique avec quiz de style", es: "Tienda con quiz de estilo" }
      },
      {
        month: 8,
        week: 36,
        theme: { en: "Wedding and event planning", fr: "Mariage et planification", es: "Bodas y planificaci
        discovery: {
          en: ["Timeline drafting", "Vendor comparisons", "Guest comms", "Moodboard ideas"],
          fr: ["R
          es: ["Redacci
        },
        cases: {
          en: ["Planner client dashboard", "Venue FAQ assistant", "Supplier shortlist matrix", "Day-of run sheet builder"],
          fr: ["Tableau de bord client pour wedding planner", "Assistant FAQ lieu de r
          es: ["Panel de clientes para wedding planner", "Asistente FAQ de venue", "Matriz de selecci
        },
        workshop: { en: "Event planning board", fr: "Tableau de planification d'
      },
      {
        month: 8,
        week: 37,
        theme: { en: "Mental wellbeing resources", fr: "Ressources de bien-
        discovery: {
          en: ["Reflection prompts", "Support scripts", "Resource packs", "Check-in flows"],
          fr: ["Prompts de r
          es: ["Prompts de reflexi
        },
        cases: {
          en: ["Employee wellbeing digest", "Student support signposting", "Community helpline FAQ", "Coach check-in workflow"],
          fr: ["Digest de bien-
          es: ["Resumen de bienestar para empleados", "Orientaci
        },
        workshop: { en: "Wellbeing resource hub", fr: "Hub de ressources bien-
      },
      {
        month: 8,
        week: 38,
        theme: { en: "Creator economy and merch", fr: "Creator economy et merchandising", es: "Econom
        discovery: {
          en: ["Audience offers", "Merch ideas", "Fan emails", "Content repurposing"],
          fr: ["Offres d'audience", "Id
          es: ["Ofertas para audiencia", "Ideas de merchandising", "Correos para fans", "Reutilizaci
        },
        cases: {
          en: ["Creator shop launch", "Membership community copy", "Fan support inbox", "Merch description refresh"],
          fr: ["Lancement de boutique cr
          es: ["Lanzamiento de tienda para creador", "Texto para comunidad de miembros", "Bandeja de soporte a fans", "Actualizaci
        },
        workshop: { en: "Creator storefront clone", fr: "Clone de boutique cr
      },
      {
        month: 9,
        week: 39,
        theme: { en: "Logistics and delivery", fr: "Logistique et livraison", es: "Log
        discovery: {
          en: ["Route summaries", "Delay updates", "Driver notes", "Dispatch FAQs"],
          fr: ["Synth
          es: ["Res
        },
        cases: {
          en: ["Courier dispatch helper", "Local bakery delivery updates", "Warehouse handoff notes", "Customer ETA assistant"],
          fr: ["Assistant de dispatch coursier", "Mises 
          es: ["Asistente de despacho para mensajer
        },
        workshop: { en: "Delivery tracker", fr: "Suivi de livraison", es: "Rastreador de entregas" }
      },
      {
        month: 9,
        week: 40,
        theme: { en: "Manufacturing and quality", fr: "Production et qualit
        discovery: {
          en: ["Inspection notes", "Issue summaries", "SOP updates", "Shift handovers"],
          fr: ["Notes d'inspection", "Synth
          es: ["Notas de inspecci
        },
        cases: {
          en: ["Factory quality log summariser", "Maintenance briefing assistant", "Safety notice rewrite", "Procurement update digest"],
          fr: ["Synth
          es: ["Resumidor de registro de calidad de f
        },
        workshop: { en: "Quality checklist app", fr: "Application de checklist qualit
      },
      {
        month: 9,
        week: 41,
        theme: { en: "Construction and trades", fr: "Construction et m
        discovery: {
          en: ["Site reports", "Material lists", "Client updates", "Risk checklists"],
          fr: ["Rapports de chantier", "Listes de mat
          es: ["Informes de obra", "Listas de materiales", "Actualizaciones para clientes", "Listas de riesgo"]
        },
        cases: {
          en: ["Renovation progress writer", "Electrician estimate flow", "Project handover summary", "Trade scheduling helper"],
          fr: ["R
          es: ["Redactor de avance de renovaci
        },
        workshop: { en: "Job progress tracker", fr: "Suivi d'avancement chantier", es: "Rastreador de avance de obra" }
      },
      {
        month: 9,
        week: 42,
        theme: { en: "Agriculture and food supply", fr: "Agriculture et cha
        discovery: {
          en: ["Crop diaries", "Season planning", "Market briefs", "Supplier updates"],
          fr: ["Journaux de culture", "Planification saisonni
          es: ["Diarios de cultivo", "Planificaci
        },
        cases: {
          en: ["Farmers market prep bot", "Co-op inventory digest", "CSA member updates", "Produce order assistant"],
          fr: ["Bot de pr
          es: ["Bot de preparaci
        },
        workshop: { en: "Farm order portal", fr: "Portail de commande agricole", es: "Portal de pedidos agr
      },
      {
        month: 9,
        week: 43,
        theme: { en: "Public information services", fr: "Services d'information au public", es: "Servicios de informaci
        discovery: {
          en: ["Citizen FAQs", "Service explainers", "Application checklists", "Event notices"],
          fr: ["FAQ citoyens", "Explications de services", "Checklists de d
          es: ["FAQ ciudadanas", "Explicaciones de servicios", "Listas de tr
        },
        cases: {
          en: ["Library info assistant", "Town hall service guide", "Public workshop reminder bot", "Community alert digest"],
          fr: ["Assistant d'information biblioth
          es: ["Asistente de informaci
        },
        workshop: { en: "Citizen help portal", fr: "Portail d'aide citoyenne", es: "Portal de ayuda ciudadana" }
      },
      {
        month: 10,
        week: 44,
        theme: { en: "Sustainability and energy", fr: "Durabilit
        discovery: {
          en: ["Energy tips", "Waste checklists", "Impact messaging", "Project summaries"],
          fr: ["Conseils 
          es: ["Consejos energ
        },
        cases: {
          en: ["School recycling campaign", "Solar installer FAQ", "Office energy report recap", "Community repair day plan"],
          fr: ["Campagne de recyclage scolaire", "FAQ d'installateur solaire", "R
          es: ["Campa
        },
        workshop: { en: "Energy savings calculator", fr: "Calculateur d'
      },
      {
        month: 10,
        week: 45,
        theme: { en: "Museums and culture", fr: "Mus
        discovery: {
          en: ["Exhibit captions", "Visitor guides", "School visit briefs", "Membership emails"],
          fr: ["Cartels d'exposition", "Guides visiteurs", "Briefs de visite scolaire", "E-mails adh
          es: ["Textos de exposici
        },
        cases: {
          en: ["Museum audio guide drafts", "Gallery event planner", "Archive search helper", "Cultural center membership drive"],
          fr: ["Brouillons de guide audio mus
          es: ["Borradores de audiogu
        },
        workshop: { en: "Museum guide app", fr: "Application guide mus
      },
      {
        month: 10,
        week: 46,
        theme: { en: "Sports clubs and leagues", fr: "Clubs sportifs et ligues", es: "Clubes deportivos y ligas" },
        discovery: {
          en: ["Fixture updates", "Training plans", "Volunteer notes", "Match summaries"],
          fr: ["Mises 
          es: ["Actualizaciones de calendario", "Planes de entrenamiento", "Notas para voluntarios", "Res
        },
        cases: {
          en: ["Youth club parent updates", "League admin digest", "Coach planning assistant", "Tournament registration helper"],
          fr: ["Mises 
          es: ["Actualizaciones para padres de club juvenil", "Resumen administrativo de liga", "Asistente de planificaci
        },
        workshop: { en: "League management app", fr: "Application de gestion de ligue", es: "App de gesti
      },
      {
        month: 10,
        week: 47,
        theme: { en: "Property management", fr: "Gestion immobili
        discovery: {
          en: ["Maintenance requests", "Tenant notices", "Inspection summaries", "Vendor follow-up"],
          fr: ["Demandes de maintenance", "Avis locataires", "Synth
          es: ["Solicitudes de mantenimiento", "Avisos a inquilinos", "Res
        },
        cases: {
          en: ["Building manager inbox triage", "Tenant portal FAQs", "Repair coordination helper", "Move-out checklist assistant"],
          fr: ["Tri de bo
          es: ["Clasificaci
        },
        workshop: { en: "Tenant portal", fr: "Portail locataire", es: "Portal de inquilinos" }
      },
      {
        month: 11,
        week: 48,
        theme: { en: "Returns and reverse logistics", fr: "Retours et logistique inverse", es: "Devoluciones y log
        discovery: {
          en: ["Return reasons", "Resolution scripts", "Policy explainers", "Stock recovery notes"],
          fr: ["Motifs de retour", "Scripts de r
          es: ["Motivos de devoluci
        },
        cases: {
          en: ["Fashion returns assistant", "Electronics replacement flow", "Warehouse triage summaries", "Refund escalation tracker"],
          fr: ["Assistant retours mode", "Flux de remplacement 
          es: ["Asistente de devoluciones de moda", "Flujo de reemplazo de electr
        },
        workshop: { en: "Returns center portal", fr: "Portail centre de retours", es: "Portal de centro de devoluciones" }
      },
      {
        month: 11,
        week: 49,
        theme: { en: "Associations and alumni", fr: "Associations et anciens", es: "Asociaciones y exalumnos" },
        discovery: {
          en: ["Member digests", "Event invites", "Volunteer packs", "Renewal messages"],
          fr: ["Digests adh
          es: ["Res
        },
        cases: {
          en: ["Alumni reunion outreach", "Membership benefit explainer", "Chapter newsletter workflow", "Association sponsor pack"],
          fr: ["Prospection r
          es: ["Alcance para reuni
        },
        workshop: { en: "Member directory app", fr: "Application annuaire adh
      },
      {
        month: 11,
        week: 50,
        theme: { en: "Faith and community groups", fr: "Groupes de foi et communaut
        discovery: {
          en: ["Weekly notices", "Volunteer shifts", "Care requests", "Event recaps"],
          fr: ["Annonces hebdomadaires", "Plannings b
          es: ["Avisos semanales", "Turnos de voluntarios", "Solicitudes de ayuda", "Res
        },
        cases: {
          en: ["Community bulletin assistant", "Food outreach rota", "Small-group discussion prompts", "New member welcome flow"],
          fr: ["Assistant de bulletin communautaire", "Planning de maraude alimentaire", "Prompts de discussion petits groupes", "Parcours d'accueil nouveaux membres"],
          es: ["Asistente de bolet
        },
        workshop: { en: "Community hub app", fr: "Application hub communautaire", es: "App de hub comunitario" }
      },
      {
        month: 11,
        week: 51,
        theme: { en: "Capstone build lab", fr: "Laboratoire de projet final", es: "Laboratorio de proyecto final" },
        discovery: {
          en: ["Prompt review", "Project scoping", "Risk checklist", "Deployment prep"],
          fr: ["Revue de prompts", "Cadrage projet", "Checklist de risques", "Pr
          es: ["Revisi
        },
        cases: {
          en: ["Best-fit use case selection", "Prompt debugging clinic", "Landing page polish", "User testing loop"],
          fr: ["S
          es: ["Selecci
        },
        workshop: { en: "Choose-your-own app sprint", fr: "Sprint d'application au choix", es: "Sprint de aplicaci
      },
      {
        month: 11,
        week: 52,
        theme: { en: "Portfolio and graduation showcase", fr: "Portfolio et showcase de cl
        discovery: {
          en: ["Storytelling", "Portfolio framing", "Confidence reflection", "Next-step mapping"],
          fr: ["Storytelling", "Mise en valeur du portfolio", "R
          es: ["Storytelling", "Enmarcado del portafolio", "Reflexi
        },
        cases: {
          en: ["Demo day presentations", "LinkedIn proof points", "Student success stories", "Referral-ready project pages"],
          fr: ["Pr
          es: ["Presentaciones de demo day", "Pruebas para LinkedIn", "Historias de 
        },
        workshop: { en: "Portfolio showcase site", fr: "Site vitrine de portfolio", es: "Sitio vitrina de portafolio" }
      }
    ];

    const copy = {
      en: {
        brandEyebrow: "Three-language delivery",
        brandTitle: "AI Masterclass Program",
        navExecutive: "Executive View",
        navStructure: "Structure & Calendar",
        navCurricula: "Curricula",
        navTechnical: "Technical Details",
        navPitch: "Pitch Deck Copy",
        footerNote: "Prepared as a self-contained planning document for a rolling 12-month beginner AI masterclass program.",
        executive: {
          heroEyebrow: "Purpose and positioning",
          heroTitle: "A beginner-first AI program that moves students from curiosity to a working build in one class.",
          heroLead: "This program is designed for complete beginners who need practical confidence, not abstract theory. Every week combines a discovery lens, real-world case studies, and a hands-on workshop so participants can understand AI in plain language, see where it creates measurable value, and finish the week able to build something useful themselves.",
          kpis: [
            { value: "52", label: "weekly themes across 12 rolling months" },
            { value: "3", label: "class formats every week in English, French and Spanish" },
            { value: "1", label: "hands-on build each Friday with beginner-safe tooling" },
            { value: "25€", label: "weekly pass covering any class combination" }
          ],
          sideCards: [
            {
              title: "Core promise",
              body: "Students do not leave with vague inspiration. They leave with prompts, repeatable workflows, a deployed mini-project, and a clearer idea of where AI fits in their work or personal life."
            },
            {
              title: "Teaching stance",
              body: "The tone is practical, contemporary and credible. The program uses relatable sectors, simple language, honest conversations about limits, and exercises that lower fear while raising standards."
            },
            {
              title: "Commercial logic",
              body: "The weekly ladder invites low-friction entry through Discovery, deeper conviction through Case Studies, and conversion to capability through Workshops. The pass pricing encourages repeat attendance without making the offer complex."
            }
          ],
          outcomesTitle: "What this program is built to achieve",
          outcomesNote: "The design principle is simple: every class should feel valuable on its own, while the weekly sequence compounds confidence and skill.",
          outcomes: [
            "Make AI understandable for non-technical adults without oversimplifying its risks.",
            "Give delegates a repeatable framework for evaluating when AI helps, when it does not, and how to check outputs.",
            "Use highly relatable personal, business, nonprofit and educational scenarios so the examples feel immediately useful.",
            "Build one deployable beginner project every week using prompts, lightweight tools and a clear quality checklist.",
            "Create a portfolio effect over time so returning students can demonstrate progress publicly or professionally."
          ],
          principlesTitle: "Program design principles",
          principles: [
            "Beginner-safe: no coding background assumed, but technical people still find the content credible and concrete.",
            "Real life first: each week is built around a sector that people instantly recognise from work, family or daily life.",
            "Balanced realism: every class discusses alternatives, costs, hallucinations, misuse risk and reputation risk.",
            "Build-to-learn: Friday workshops convert concepts into an app, clone or operational tool that can be deployed quickly.",
            "Multilingual delivery: all materials and facilitation are prepared in English, French and Spanish from day one."
          ],
          audienceTitle: "Who this is for",
          audienceCards: [
            { title: "Career starters", body: "Students, graduates and career changers who want a useful AI portfolio and practical job-ready habits." },
            { title: "Professionals", body: "Managers, administrators, consultants, teachers, freelancers and operators who need immediate workflow gains." },
            { title: "Small organisations", body: "SMBs, nonprofits, associations and schools that want accessible AI literacy without a heavy transformation project." },
            { title: "Curious builders", body: "People who may not think of themselves as technical, but are motivated by visible outcomes and guided experimentation." }
          ]
        },
        structure: {
          title: "Program structure, calendar, audience and pricing",
          note: "The schedule below assumes a rolling launch in June 2026 and can repeat annually with refreshed examples, case studies and workshop builds.",
          weeklyTitle: "Weekly operating model",
          weeklyTableHeaders: ["Day", "Time", "Format", "Mode", "Price"],
          weeklyRows: [
            ["Monday", "7:00 PM - 8:00 PM", "Discovery", "Online", "5€"],
            ["Monday", "10:00 PM - 12:00 AM", "Discovery", "Online", "5€"],
            ["Wednesday", "7:00 PM - 8:00 PM", "Case Studies", "Online", "10€"],
            ["Wednesday", "10:00 PM - 12:00 AM", "Case Studies", "Online", "10€"],
            ["Friday", "7:00 PM - 8:00 PM", "Workshop", "Onsite", "15€"],
            ["Friday", "10:00 PM - 12:00 AM", "Workshop", "Online", "15€"]
          ],
          pricingTitle: "Price grid and policy",
          pricingHeaders: ["Offer", "Access", "Price", "Terms"],
          pricingRows: [
            ["Single Discovery ticket", "One Monday class, online", "5€", "Non-refundable; no-show is not refundable."],
            ["Single Case Study ticket", "One Wednesday class, online", "10€", "Non-refundable; no-show is not refundable."],
            ["Single Workshop ticket", "One Friday class, online or onsite", "15€", "Non-refundable; no-show is not refundable."],
            ["Weekly pass", "Any combination of classes within one week", "25€", "Best value option for full-week immersion."],
            ["Instructor cancellation policy", "Applicable to any cancelled class", "50% refund", "If the instructor cancels the class, 50% of the paid amount is refunded." ]
          ],
          audienceTitle: "Target audience by intent",
          audience: [
            "Absolute beginners who need a low-pressure entry point into AI.",
            "Professionals seeking practical use cases before investing in larger tools or training.",
            "Entrepreneurs and freelancers wanting to create assets, content and lightweight systems faster.",
            "Teachers, nonprofit teams and community leaders looking for responsible, accessible AI applications."
          ],
          calendarTitle: "12-month weekly calendar",
          calendarNote: "Each week uses one relatable theme. Discovery introduces four sample uses, Case Studies brings four measurable examples, and Workshop turns the theme into a practical app or clone.",
          monthToggleOpen: "Open month",
          monthToggleClose: "Close month",
          weekLabel: "Week",
          weekCols: ["Discovery highlights", "Case study angles", "Workshop build"]
        },
        curricula: {
          title: "Curricula and detailed class structure",
          note: "The class plans preserve a consistent rhythm while adapting the examples and build challenge to the weekly theme.",
          cards: [
            {
              title: "Discovery",
              subtitle: "Fast confidence building for beginners",
              summary: "Discovery is the accessible front door. It shows what modern AI can do for ordinary people in ordinary contexts without assuming technical knowledge.",
              steps: [
                "Welcome, framing of the week, and a quick Q&A or playful AI maturity quiz.",
                "Introduction to four topic samples that show innovative but practical uses of AI for non-technical people.",
                "For each sample: the challenge, non-AI alternatives, the AI answer, common pitfalls, limitations, and best-practice recommendations.",
                "Student quiz and discussion on how they would solve a similar challenge.",
                "Closing tips, curated online resources, recommended AI magazines, and a bridge into the Wednesday case studies."
              ],
              outcomes: ["Reduce fear", "Improve judgment", "Spark ideas", "Encourage first experiments"]
            },
            {
              title: "Case Study",
              subtitle: "Proof through concrete business and social outcomes",
              summary: "Case Studies translate curiosity into credibility. They show recent situations in business, nonprofit, SMB and education where AI delivered measurable gains.",
              steps: [
                "Welcome, rapid temperature check, and a short quiz about current AI habits or assumptions.",
                "Introduction to four recent, real-world scenarios with clear context and measurable benefits.",
                "For each case: the initial challenge, the consequences of inaction, non-AI alternatives with cost-reward analysis, the AI stack used, prompts and agent logic, hallucination corrections, and the final product or workflow.",
                "Discussion of misuse risk, reputation risk, governance concerns, and quality controls.",
                "Closing discussion, further reading, instructor playbooks, next-step recommendations, and a handoff into Friday's build."
              ],
              outcomes: ["Build trust", "Show ROI", "Teach evaluation", "Normalize quality control"]
            },
            {
              title: "Workshop",
              subtitle: "Build a working project in class",
              summary: "The workshop is where beginners become makers. Each week the class builds a different lightweight app, clone or operational tool around the week's theme.",
              steps: [
                "Welcome, short Q&A, and introduction to the practical solution to be built during the session.",
                "Review of the challenge and why AI is useful for this assignment.",
                "The method: Why this build matters, What tools and agents are needed, How prompts are structured, and So What must be checked to reduce hallucinations and reach a usable result.",
                "Live building, incremental testing, polish, and simple deployment or publishing guidance.",
                "Closing review, best practices, resource list, and ideas for how students can extend the build after class."
              ],
              outcomes: ["Make something real", "Practice prompting", "Understand QA", "Leave with a portfolio asset"]
            }
          ],
          teachingTitle: "Teaching mechanics across all formats",
          teaching: [
            "Every session starts with interaction to assess maturity and keep the room active rather than passive.",
            "Examples are chosen for recognisable real-world pressure points: speed, cost, admin burden, service quality and communication clarity.",
            "Every AI success story is paired with limitations, quality checks, and a realistic discussion of misuse.",
            "The Friday workshop always ends with a usable output, even if simplified, so the student experiences a complete loop."
          ]
        },
        technical: {
          title: "Technical details and implementation toolset",
          note: "The toolset stays intentionally lightweight. The aim is not to overwhelm beginners, but to help them complete credible, deployable work in one session.",
          stackCards: [
            {
              title: "Core AI assistants",
              body: "ChatGPT, Claude, Gemini or Microsoft Copilot for prompting, drafting, comparison and critique. The teaching model is tool-agnostic so the class can adapt to whichever assistant the student already uses."
            },
            {
              title: "Build layer",
              body: "No-code or low-code builders such as Lovable, Bolt, Replit, Glide, Softr, Notion, Airtable, Canva and Tally. These are chosen because they shorten the path from prompt to visible result."
            },
            {
              title: "Publishing layer",
              body: "Vercel, Netlify, Replit Deployments, Glide sharing links, Notion publishing, Google Drive and Canva presentation links. Each workshop ends with a clear path to sharing or deploying the result."
            },
            {
              title: "Quality layer",
              body: "Prompt checklists, hallucination spotting, source verification, manual review, peer review, and simple acceptance criteria. Beginners are taught that output quality comes from process discipline, not only from the model."
            }
          ],
          tableTitle: "Recommended toolset by class type",
          headers: ["Class type", "Primary goal", "Recommended tools", "Instructor preparation", "Student output"],
          rows: [
            ["Discovery", "Inspiration plus judgment", "ChatGPT or Copilot, Perplexity, Canva, Mentimeter or Kahoot", "Prepare four topical prompts, one quiz, one pitfalls checklist, and a short resource pack", "Prompt examples, topic notes, and a personal list of first-use ideas"],
            ["Case Study", "Credibility plus measurable value", "ChatGPT or Claude, Perplexity, Notion, Canva, Airtable or Sheets", "Prepare four documented cases, ROI notes, prompt chains, and risk commentary", "Case study breakdowns, quality-control templates, and repeatable evaluation questions"],
            ["Workshop", "Build and deploy", "Lovable or Bolt, Replit, Glide, Softr, Airtable, Tally, Vercel or Netlify", "Prepare one build brief, asset pack, fallback prompts, testing checklist, and deployment path", "A working app, clone or mini operational tool with a shareable link or demo-ready output"]
          ],
          logisticsTitle: "Operational delivery checklist",
          logistics: [
            "One multilingual slide deck per week with English, French and Spanish versions aligned to the same examples.",
            "A pre-class asset folder containing prompts, screenshots, references, sample data and a backup demo path.",
            "A standard quality rubric: clarity, usefulness, factual risk, brand risk, privacy and deployability.",
            "A post-class recap containing prompts, resources, reading list, recommended magazines and next-week teaser.",
            "A simple attendance and conversion funnel from Discovery to Case Study to Workshop to weekly pass."
          ],
          buildTitle: "Workshop implementation pattern",
          buildSteps: [
            "Start from a single-use problem statement anchored in the week's theme.",
            "Prompt an initial app plan with pages, user flow, and essential data fields.",
            "Generate the first working version fast, then spend most of the session on refinement and QA.",
            "Check factual accuracy, safety, and brand tone before publishing.",
            "Publish a lightweight version and show students how to evolve it after class."
          ]
        },
        pitch: {
          title: "Three-paragraph pitch copy for outreach",
          note: "Written to be engaging and credible for LinkedIn, Instagram captions, email outreach or live verbal presentation without sounding inflated.",
          cards: [
            {
              title: "Course pitch",
              paragraphs: [
                "Artificial intelligence has become impossible to ignore, but for many people it still feels abstract, intimidating or overhyped. This masterclass program is built for complete beginners who want a practical way in. Instead of technical jargon, it uses familiar situations from work, personal life, education and small business to show where AI genuinely saves time, improves quality and opens up new ideas.",
                "Each week is structured as a progression. Monday's Discovery session makes the topic easy to understand, Wednesday's Case Studies show where AI has already produced measurable results, and Friday's Workshop turns the learning into a real build. The goal is not just to talk about AI. The goal is to help people leave class having made something useful with it.",
                "The result is a program that feels serious without feeling heavy. Students gain confidence, judgment and practical output at the same time. Whether someone wants to sharpen their career profile, improve a workflow, launch a side project or simply stop feeling behind, this course gives them a clear and credible path forward."
              ]
            },
            {
              title: "Discovery pitch",
              paragraphs: [
                "Discovery is the easiest way to enter the program. It is designed for people who are curious about AI but do not yet know where it fits in their daily life or work. Every session introduces four modern, creative and highly relatable uses of AI in plain language, with no technical background required.",
                "Rather than presenting AI as magic, Discovery shows the challenge first, then compares traditional alternatives with AI-assisted approaches. Students learn what works, what does not, what can go wrong, and how to think more clearly about value, quality and limitations.",
                "By the end of the hour, participants have a stronger sense of their own AI maturity level, a shortlist of tools and resources to explore, and several practical ideas they can try immediately. It is low-pressure, high-value, and an ideal first step into confident AI use."
              ]
            },
            {
              title: "Case Study pitch",
              paragraphs: [
                "Case Studies is for people who want evidence, not slogans. Each session unpacks four recent, real-world examples drawn from business, nonprofit, educational and service environments where AI solved a meaningful problem and produced visible benefits.",
                "Students see the full picture: the original challenge, the risks of doing nothing, the non-AI alternatives, the toolset that was chosen, the prompts that shaped the output, the mistakes that had to be corrected, and the final result that created value. This makes AI feel less mysterious and much more manageable.",
                "For professionals, entrepreneurs and decision-makers, these classes are especially useful because they build practical judgment. They help people recognise where AI is truly worth using, how to avoid reputation damage or weak outputs, and how to approach implementation with more discipline."
              ]
            },
            {
              title: "Workshop pitch",
              paragraphs: [
                "Workshop is where the theory becomes tangible. Every Friday, students build a different lightweight app, clone or operational tool inspired by a real-life need. The aim is not to produce perfect enterprise software. The aim is to prove that even a beginner can go from prompt to working result in a guided session.",
                "The format is deliberately practical: why this build matters, what tools are needed, how to structure the prompts, and how to reduce hallucinations while improving usefulness. Students follow a repeatable method that makes the process feel less random and much more transferable to their own projects.",
                "This is often the moment when confidence changes shape. Instead of just understanding what AI could do, students see what they themselves can do with it. They leave with something visible, shareable and extendable, which is exactly what makes the learning stick."
              ]
            }
          ]
        },
        common: {
          audienceCardLabel: "Audience",
          outcomesLabel: "Outcomes",
          summaryLabel: "Summary",
          monthlyThemes: "themes",
          scheduleSummary: "Rolling 12-month thematic plan",
          quickFacts: ["English", "French", "Spanish", "Beginner-first", "Online + onsite", "Practical builds"]
        }
      },
      fr: {
        brandEyebrow: "Animation en trois langues",
        brandTitle: "Programme AI Masterclass",
        navExecutive: "Vue Ex
        navStructure: "Structure et Calendrier",
        navCurricula: "Curricula",
        navTechnical: "D
        navPitch: "Textes de Pr
        footerNote: "Document de planification autonome pour un programme de masterclass IA d
        executive: {
          heroEyebrow: "Objectif et positionnement",
          heroTitle: "Un programme IA pens
          heroLead: "Ce programme est con
          kpis: [
            { value: "52", label: "th
            { value: "3", label: "formats de cours chaque semaine en anglais, fran
            { value: "1", label: "construction pratique chaque vendredi avec des outils adapt
            { value: "25€", label: "pass hebdomadaire couvrant n'importe quelle combinaison de cours" }
          ],
          sideCards: [
            {
              title: "Promesse centrale",
              body: "Les participants ne repartent pas avec une inspiration vague. Ils repartent avec des prompts, des workflows r
            },
            {
              title: "Posture p
              body: "Le ton est pratique, contemporain et cr
            },
            {
              title: "Logique commerciale",
              body: "L'
            }
          ],
          outcomesTitle: "Ce que le programme vise 
          outcomesNote: "Le principe est simple: chaque cours doit avoir de la valeur seul, tandis que la s
          outcomes: [
            "Rendre l'IA compr
            "Donner aux participants un cadre r
            "Utiliser des sc
            "Construire chaque semaine un projet d
            "Cr
          ],
          principlesTitle: "Principes de conception du programme",
          principles: [
            "S
            "Le r
            "R
            "Apprendre en construisant: les ateliers du vendredi transforment les concepts en app, clone ou outil op
            "Livraison multilingue: tous les contenus et l'animation sont pr
          ],
          audienceTitle: "Public vis
          audienceCards: [
            { title: "D
            { title: "Professionnels", body: "Managers, administratifs, consultants, enseignants, freelances et op
            { title: "Petites structures", body: "PME, associations, ONG et 
            { title: "Constructeurs curieux", body: "Des personnes qui ne se voient pas forc
          ]
        },
        structure: {
          title: "Structure du programme, calendrier, audience et tarification",
          note: "Le planning ci-dessous suppose un lancement glissant en juin 2026 et peut 
          weeklyTitle: "Mod
          weeklyTableHeaders: ["Jour", "Horaire", "Format", "Mode", "Prix"],
          weeklyRows: [
            ["Lundi", "19h00 - 20h00", "D
            ["Lundi", "22h00 - 00h00", "D
            ["Mercredi", "19h00 - 20h00", "Cas d'usage", "En ligne", "10€"],
            ["Mercredi", "22h00 - 00h00", "Cas d'usage", "En ligne", "10€"],
            ["Vendredi", "19h00 - 20h00", "Atelier", "Pr
            ["Vendredi", "22h00 - 00h00", "Atelier", "En ligne", "15€"]
          ],
          pricingTitle: "Grille tarifaire et politique",
          pricingHeaders: ["Offre", "Acc
          pricingRows: [
            ["Billet D
            ["Billet Cas d'usage", "Un cours du mercredi, en ligne", "10€", "Non remboursable; l'absence n'est pas remboursable."],
            ["Billet Atelier", "Un cours du vendredi, en ligne ou sur site", "15€", "Non remboursable; l'absence n'est pas remboursable."],
            ["Pass hebdomadaire", "Toute combinaison de cours sur une semaine", "25€", "Option la plus avantageuse pour une immersion compl
            ["Politique d'annulation formateur", "Applicable 
          ],
          audienceTitle: "Audience cible par intention",
          audience: [
            "Grands d
            "Professionnels souhaitant voir des cas d'usage concrets avant d'investir davantage.",
            "Entrepreneurs et freelances qui veulent produire plus vite des actifs, contenus et syst
            "Enseignants, associations et responsables communautaires en recherche d'applications responsables et accessibles."
          ],
          calendarTitle: "Calendrier hebdomadaire sur 12 mois",
          calendarNote: "Chaque semaine porte un th
          monthToggleOpen: "Ouvrir le mois",
          monthToggleClose: "Fermer le mois",
          weekLabel: "Semaine",
          weekCols: ["Axes de D
        },
        curricula: {
          title: "Curricula et structure d
          note: "Les plans de cours gardent un rythme coh
          cards: [
            {
              title: "D
              subtitle: "Construire rapidement la confiance des d
              summary: "La D
              steps: [
                "Accueil, cadrage de la semaine et Q&R rapide ou quiz ludique sur la maturit
                "Introduction 
                "Pour chaque exemple: le d
                "Quiz et discussion sur la mani
                "Cl
              ],
              outcomes: ["R
            },
            {
              title: "Cas d'usage",
              subtitle: "Prouver la valeur par des r
              summary: "Les Cas d'usage transforment la curiosit
              steps: [
                "Accueil, prise de temp
                "Introduction 
                "Pour chaque cas: probl
                "Discussion des risques d'abus, de r
                "Cl
              ],
              outcomes: ["Installer la confiance", "Montrer le ROI", "Enseigner l'
            },
            {
              title: "Atelier",
              subtitle: "Construire un projet fonctionnel pendant le cours",
              summary: "L'atelier est l'endroit o
              steps: [
                "Accueil, courte Q&R et pr
                "Revue du d
                "La m
                "Construction en direct, tests progressifs, finitions et conseils simples de publication ou de d
                "Cl
              ],
              outcomes: ["Produire quelque chose de r
            }
          ],
          teachingTitle: "M
          teaching: [
            "Chaque session commence par de l'interaction pour 
            "Les exemples sont choisis pour leurs points de tension concrets: vitesse, co
            "Chaque succ
            "L'atelier du vendredi se termine toujours par un livrable utilisable, m
          ]
        },
        technical: {
          title: "D
          note: "L'outillage reste volontairement l
          stackCards: [
            {
              title: "Assistants IA centraux",
              body: "ChatGPT, Claude, Gemini ou Microsoft Copilot pour le prompting, la r
            },
            {
              title: "Couche de build",
              body: "Des outils no-code ou low-code tels que Lovable, Bolt, Replit, Glide, Softr, Notion, Airtable, Canva et Tally. Ils sont retenus parce qu'ils raccourcissent fortement le chemin entre le prompt et un r
            },
            {
              title: "Couche de publication",
              body: "Vercel, Netlify, Replit Deployments, liens de partage Glide, publication Notion, Google Drive et liens de pr
            },
            {
              title: "Couche qualit
              body: "Checklists de prompts, d
            }
          ],
          tableTitle: "Outils recommand
          headers: ["Type de cours", "But principal", "Outils recommand
          rows: [
            ["D
            ["Cas d'usage", "Cr
            ["Atelier", "Construire et d
          ],
          logisticsTitle: "Checklist op
          logistics: [
            "Un deck multilingue par semaine avec versions anglaise, fran
            "Un dossier pr
            "Une grille qualit
            "Un r
            "Un tunnel simple de conversion entre D
          ],
          buildTitle: "Pattern d'impl
          buildSteps: [
            "Partir d'un probl
            "Prompter un plan initial d'application avec pages, flux utilisateur et champs de donn
            "G
            "V
            "Publier une version l
          ]
        },
        pitch: {
          title: "Textes de pr
          note: "R
          cards: [
            {
              title: "Pitch du programme",
              paragraphs: [
                "L'intelligence artificielle est devenue impossible 
                "Chaque semaine suit une progression claire. Le lundi, la D
                "Le r
              ]
            },
            {
              title: "Pitch D
              paragraphs: [
                "La D
                "Plut
                "Au bout d'une heure, ils repartent avec une meilleure id
              ]
            },
            {
              title: "Pitch Cas d'usage",
              paragraphs: [
                "Les Cas d'usage s'adressent aux personnes qui veulent des preuves, pas des slogans. Chaque session d
                "Les participants voient l'ensemble du tableau: le d
                "Pour les professionnels, entrepreneurs et d
              ]
            },
            {
              title: "Pitch Atelier",
              paragraphs: [
                "L'Atelier est le moment o
                "Le format est volontairement pratique: pourquoi ce build compte, quels outils utiliser, comment structurer les prompts et comment r
                "C'est souvent 
              ]
            }
          ]
        },
        common: {
          audienceCardLabel: "Public",
          outcomesLabel: "R
          summaryLabel: "Synth
          monthlyThemes: "th
          scheduleSummary: "Plan th
          quickFacts: ["Anglais", "Fran
        }
      },
      es: {
        brandEyebrow: "Impartido en tres idiomas",
        brandTitle: "Programa AI Masterclass",
        navExecutive: "Vista Ejecutiva",
        navStructure: "Estructura y Calendario",
        navCurricula: "Curr
        navTechnical: "Detalles T
        navPitch: "Textos de Presentaci
        footerNote: "Documento aut
        executive: {
          heroEyebrow: "Prop
          heroTitle: "Un programa de IA pensado para principiantes que convierte la curiosidad en una construcci
          heroLead: "Este programa est
          kpis: [
            { value: "52", label: "temas semanales durante 12 meses continuos" },
            { value: "3", label: "formatos de clase cada semana en ingl
            { value: "1", label: "construcci
            { value: "25€", label: "pase semanal para cualquier combinaci
          ],
          sideCards: [
            {
              title: "Promesa central",
              body: "Los participantes no se van con una inspiraci
            },
            {
              title: "Enfoque docente",
              body: "El tono es pr
            },
            {
              title: "L
              body: "La escalera semanal facilita una entrada de baja fricci
            }
          ],
          outcomesTitle: "Lo que este programa busca conseguir",
          outcomesNote: "El principio es simple: cada clase debe tener valor por s
          outcomes: [
            "Hacer que la IA sea comprensible para adultos no t
            "Dar a los asistentes un marco repetible para evaluar cu
            "Usar escenarios personales, empresariales, sociales y educativos muy cercanos para que los ejemplos se sientan inmediatamente 
            "Construir cada semana un proyecto desplegable con prompts, herramientas ligeras y una lista clara de control de calidad.",
            "Crear un efecto portfolio a lo largo del tiempo para que quienes repitan puedan demostrar progreso de forma p
          ],
          principlesTitle: "Principios de dise
          principles: [
            "Seguro para principiantes: no se asume experiencia t
            "Primero la vida real: cada semana se organiza alrededor de un sector que cualquiera reconoce en su trabajo, familia o rutina.",
            "Realismo equilibrado: cada clase aborda alternativas, costes, alucinaciones, riesgos de mal uso y riesgos reputacionales.",
            "Aprender construyendo: los talleres del viernes convierten conceptos en una app, clon o herramienta operativa desplegable r
            "Entrega multiling
          ],
          audienceTitle: "A qui
          audienceCards: [
            { title: "Personas al inicio de carrera", body: "Estudiantes, reci
            { title: "Profesionales", body: "Managers, perfiles administrativos, consultores, docentes, freelancers y operadores que necesitan mejoras inmediatas de flujo de trabajo." },
            { title: "Organizaciones peque
            { title: "Constructores curiosos", body: "Personas que quiz
          ]
        },
        structure: {
          title: "Estructura del programa, calendario, audiencia y precios",
          note: "El plan siguiente asume un lanzamiento continuo en junio de 2026 y puede repetirse cada a
          weeklyTitle: "Modelo operativo semanal",
          weeklyTableHeaders: ["D
          weeklyRows: [
            ["Lunes", "7:00 PM - 8:00 PM", "Discovery", "Online", "5€"],
            ["Lunes", "10:00 PM - 12:00 AM", "Discovery", "Online", "5€"],
            ["Mi
            ["Mi
            ["Viernes", "7:00 PM - 8:00 PM", "Workshop", "Presencial", "15€"],
            ["Viernes", "10:00 PM - 12:00 AM", "Workshop", "Online", "15€"]
          ],
          pricingTitle: "Tabla de precios y pol
          pricingHeaders: ["Oferta", "Acceso", "Precio", "Condiciones"],
          pricingRows: [
            ["Entrada Discovery", "Una clase del lunes, online", "5€", "No reembolsable; la ausencia no es reembolsable."],
            ["Entrada Case Study", "Una clase del mi
            ["Entrada Workshop", "Una clase del viernes, online o presencial", "15€", "No reembolsable; la ausencia no es reembolsable."],
            ["Pase semanal", "Cualquier combinaci
            ["Pol
          ],
          audienceTitle: "Audiencia objetivo por intenci
          audience: [
            "Principiantes absolutos que necesitan una entrada sencilla al mundo de la IA.",
            "Profesionales que quieren ver casos pr
            "Emprendedores y freelancers que desean crear activos, contenido y sistemas ligeros con mayor rapidez.",
            "Docentes, equipos de ONG y l
          ],
          calendarTitle: "Calendario semanal de 12 meses",
          calendarNote: "Cada semana gira en torno a un tema muy reconocible. Discovery introduce cuatro usos, Case Studies aporta cuatro ejemplos medibles y Workshop convierte el tema en una app o clon pr
          monthToggleOpen: "Abrir mes",
          monthToggleClose: "Cerrar mes",
          weekLabel: "Semana",
          weekCols: ["Destacados de Discovery", "Enfoques de casos", "Construcci
        },
        curricula: {
          title: "Curr
          note: "Los planes de clase mantienen un ritmo constante mientras adaptan los ejemplos y el reto de construcci
          cards: [
            {
              title: "Discovery",
              subtitle: "Generar confianza r
              summary: "Discovery es la puerta de entrada m
              steps: [
                "Bienvenida, marco de la semana y una Q&A r
                "Introducci
                "Para cada ejemplo: el reto, las alternativas sin IA, la respuesta con IA, las trampas habituales, las limitaciones y las mejores pr
                "Quiz y conversaci
                "Cierre con consejos, recursos online, revistas de IA recomendadas y puente hacia los casos del mi
              ],
              outcomes: ["Reducir el miedo", "Mejorar el criterio", "Activar ideas", "Fomentar primeros experimentos"]
            },
            {
              title: "Case Study",
              subtitle: "Demostrar valor con resultados concretos",
              summary: "Case Studies convierte la curiosidad en credibilidad. Muestra situaciones recientes del mundo empresarial, social, pyme y educativo en las que la IA gener
              steps: [
                "Bienvenida, toma de pulso r
                "Introducci
                "Para cada caso: el reto inicial, las consecuencias de no actuar, las alternativas sin IA con an
                "Discusi
                "Cierre con recursos, playbooks del instructor, recomendaciones de profundizaci
              ],
              outcomes: ["Generar confianza", "Mostrar ROI", "Ense
            },
            {
              title: "Workshop",
              subtitle: "Construir un proyecto funcional durante la sesi
              summary: "Workshop es donde los principiantes se convierten en creadores. Cada semana la clase construye una app ligera, un clon o una herramienta operativa basada en el tema de la semana.",
              steps: [
                "Bienvenida, breve Q&A e introducci
                "Revisi
                "El m
                "Construcci
                "Cierre con mejores pr
              ],
              outcomes: ["Crear algo real", "Practicar prompting", "Entender QA", "Salir con un activo de portfolio"]
            }
          ],
          teachingTitle: "Mec
          teaching: [
            "Cada sesi
            "Los ejemplos se eligen por sus puntos de presi
            "Cada historia de 
            "El taller del viernes siempre termina con un resultado utilizable, aunque sea simplificado, para que el alumno viva el ciclo completo."
          ]
        },
        technical: {
          title: "Detalles t
          note: "El stack se mantiene intencionalmente ligero. El objetivo no es abrumar a los principiantes, sino ayudarles a completar trabajo cre
          stackCards: [
            {
              title: "Asistentes de IA principales",
              body: "ChatGPT, Claude, Gemini o Microsoft Copilot para prompting, redacci
            },
            {
              title: "Capa de construcci
              body: "Herramientas no-code o low-code como Lovable, Bolt, Replit, Glide, Softr, Notion, Airtable, Canva y Tally. Se eligen porque acortan mucho el camino entre el prompt y un resultado visible."
            },
            {
              title: "Capa de publicaci
              body: "Vercel, Netlify, Replit Deployments, enlaces de Glide, publicaci
            },
            {
              title: "Capa de calidad",
              body: "Listas de comprobaci
            }
          ],
          tableTitle: "Herramientas recomendadas por tipo de clase",
          headers: ["Tipo de clase", "Objetivo principal", "Herramientas recomendadas", "Preparaci
          rows: [
            ["Discovery", "Inspiraci
            ["Case Study", "Credibilidad y valor medible", "ChatGPT o Claude, Perplexity, Notion, Canva, Airtable o Sheets", "Preparar cuatro casos documentados, notas de ROI, cadenas de prompts y comentarios de riesgo", "Desgloses de casos, plantillas de control de calidad y preguntas repetibles de evaluaci
            ["Workshop", "Construir y desplegar", "Lovable o Bolt, Replit, Glide, Softr, Airtable, Tally, Vercel o Netlify", "Preparar un brief de build, paquete de activos, prompts de respaldo, checklist de pruebas y ruta de despliegue", "Una app, clon o mini herramienta operativa funcional con enlace compartible o resultado listo para demo"]
          ],
          logisticsTitle: "Checklist operativa",
          logistics: [
            "Un deck multiling
            "Una carpeta previa a la clase con prompts, capturas, referencias, datos de muestra y una ruta de demo de respaldo.",
            "Una r
            "Un resumen posterior a la clase con prompts, recursos, lecturas, revistas recomendadas y teaser de la semana siguiente.",
            "Un embudo sencillo de asistencia y conversi
          ],
          buildTitle: "Patr
          buildSteps: [
            "Partir de un problema de uso 
            "Promptear un plan inicial de la app con p
            "Generar r
            "Comprobar exactitud factual, seguridad y tono de marca antes de publicar.",
            "Publicar una versi
          ]
        },
        pitch: {
          title: "Textos de presentaci
          note: "Escritos para resultar atractivos y cre
          cards: [
            {
              title: "Pitch del programa",
              paragraphs: [
                "La inteligencia artificial ya es imposible de ignorar, pero para muchas personas sigue siendo abstracta, intimidante o sobredimensionada. Esta masterclass est
                "Cada semana sigue una progresi
                "El resultado es un programa serio sin resultar pesado. Los participantes ganan confianza, criterio y resultados pr
              ]
            },
            {
              title: "Pitch de Discovery",
              paragraphs: [
                "Discovery es la forma m
                "En vez de presentar la IA como magia, Discovery muestra primero el reto y luego compara las alternativas tradicionales con los enfoques asistidos por IA. Los estudiantes aprenden qu
                "Al terminar la hora, los participantes cuentan con una mejor idea de su nivel de madurez en IA, una selecci
              ]
            },
            {
              title: "Pitch de Case Study",
              paragraphs: [
                "Case Studies est
                "Los participantes ven la imagen completa: el reto original, los riesgos de no hacer nada, las alternativas sin IA, las herramientas elegidas, los prompts que guiaron el trabajo, los errores que hubo que corregir y el resultado final que gener
                "Para profesionales, emprendedores y responsables de decisi
              ]
            },
            {
              title: "Pitch de Workshop",
              paragraphs: [
                "Workshop es el momento en que la teor
                "El formato es deliberadamente pr
                "Ese suele ser el punto donde la confianza cambia de forma. En lugar de limitarse a entender lo que la IA podr
              ]
            }
          ]
        },
        common: {
          audienceCardLabel: "Audiencia",
          outcomesLabel: "Resultados",
          summaryLabel: "Resumen",
          monthlyThemes: "temas",
          scheduleSummary: "Plan tem
          quickFacts: ["Ingl
        }
      }
    };

    const state = {
      lang: "en",
      tab: "executive"
    };

    const textRepairs = [
      ["Aofbt", "Ao\u00fbt"],
      ["entraeenement", "entra\u00eenement"],
      ["entraeenements", "entra\u00eenements"],
      ["eatre", "\u00eatre"],
      ["salf3n", "sal\u00f3n"],
      ["cafetereda", "cafeter\u00eda"],
      ["barbereda", "barber\u00eda"],
      ["consultoreda", "consultor\u00eda"],
      ["conserjereda", "conserjer\u00eda"],
      ["panadereda", "panader\u00eda"],
      ["biografeda", "biograf\u00eda"],
      ["Gueda", "Gu\u00eda"],
      ["Guedas", "Gu\u00edas"],
      ["gueda", "gu\u00eda"],
      ["guedas", "gu\u00edas"],
      ["clednica", "cl\u00ednica"],
      ["resfamen", "resumen"],
      ["boletedn", "bolet\u00edn"],
      ["muse9e", "mus\u00e9e"],
      ["journe9e", "journ\u00e9e"],
      ["confe9rence", "conf\u00e9rence"],
      ["synth", "synth"],
      ["the9rapie", "th\u00e9rapie"],
      ["hue9spedes", "hu\u00e9spedes"],
      ["disef1ador", "dise\u00f1ador"],
      ["compaf1ero", "compa\u00f1ero"],
      ["campaf1a", "campa\u00f1a"],
      ["resef1as", "rese\u00f1as"],
      ["ale9rgenos", "al\u00e9rgenos"],
      ["cate1logo", "cat\u00e1logo"],
      ["pre1ctica", "pr\u00e1ctica"],
      ["he1bitos", "h\u00e1bitos"],
      ["bene9fica", "ben\u00e9fica"],
      ["subvencif3n", "subvenci\u00f3n"]
    ];

    function cleanText(value) {
      if (typeof value !== "string" || state.lang === "en") {
        return value;
      }

      let output = value.replace(/\u0000/g, "");

      textRepairs.forEach(([from, to]) => {
        output = output.split(from).join(to);
      });

      output = output
        .replace(/e9/g, "\u00e9")
        .replace(/e8/g, "\u00e8")
        .replace(/e7/g, "\u00e7")
        .replace(/e6/g, "\u00e6")
        .replace(/e5/g, "\u00e5")
        .replace(/e4/g, "\u00e4")
        .replace(/e3/g, "\u00e3")
        .replace(/e2/g, "\u00e2")
        .replace(/e1/g, "\u00e1")
        .replace(/e0/g, "\u00e0")
        .replace(/ed/g, "\u00ed")
        .replace(/ec/g, "\u00ec")
        .replace(/ef/g, "\u00ef")
        .replace(/ee/g, "\u00ee")
        .replace(/f6/g, "\u00f6")
        .replace(/f5/g, "\u00f5")
        .replace(/f4/g, "\u00f4")
        .replace(/f3/g, "\u00f3")
        .replace(/f2/g, "\u00f2")
        .replace(/f1/g, "\u00f1")
        .replace(/fc/g, "\u00fc")
        .replace(/fb/g, "\u00fb")
        .replace(/fa/g, "\u00fa");

      return output;
    }

    function cleanValue(value) {
      if (Array.isArray(value)) {
        return value.map((item) => cleanValue(item));
      }

      if (value && typeof value === "object") {
        return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, cleanValue(item)]));
      }

      return cleanText(value);
    }

    function renderTags(items) {
      return `<div class="mini-tags">${items.map((item) => `<span class="mini-tag">${cleanText(item)}</span>`).join("")}</div>`;
    }

    function renderList(items) {
      return `<ul class="clean">${items.map((item) => `<li>${cleanText(item)}</li>`).join("")}</ul>`;
    }

    function renderExecutive() {
      const data = cleanValue(copy[state.lang]);
      const block = data.executive;
      return `
        <div class="hero">
          <div class="hero-grid">
            <div>
              <div class="eyebrow">${block.heroEyebrow}</div>
              <h1>${block.heroTitle}</h1>
              <p class="lead">${block.heroLead}</p>
              <div class="pill-row" style="margin-top:20px;">
                ${data.common.quickFacts.map((fact) => `<span class="pill">${fact}</span>`).join("")}
              </div>
              <div class="hero-kpis">
                ${block.kpis.map((kpi) => `
                  <div class="kpi">
                    <strong>${kpi.value}</strong>
                    <span>${kpi.label}</span>
                  </div>
                `).join("")}
              </div>
            </div>
            <div class="hero-side">
              ${block.sideCards.map((card) => `
                <div class="info-card">
                  <h3>${card.title}</h3>
                  <p>${card.body}</p>
                </div>
              `).join("")}
            </div>
          </div>
        </div>

        <div class="panel">
          <div class="section-header">
            <div>
              <h2 class="section-title">${block.outcomesTitle}</h2>
            </div>
            <div class="section-note muted">${block.outcomesNote}</div>
          </div>
          <div class="grid-2">
            <div class="info-card">
              ${renderList(block.outcomes)}
            </div>
            <div class="info-card">
              <h3>${block.principlesTitle}</h3>
              ${renderList(block.principles)}
            </div>
          </div>
        </div>

        <div class="panel">
          <div class="section-header">
            <h2 class="section-title">${block.audienceTitle}</h2>
            <div class="section-note muted">${data.common.scheduleSummary}</div>
          </div>
          <div class="grid-4">
            ${block.audienceCards.map((card) => `
              <div class="info-card">
                <h3>${card.title}</h3>
                <p>${card.body}</p>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    function renderWeeklyTable(headers, rows) {
      return `
        <div class="table-wrap">
          <table class="responsive-table">
            <thead>
              <tr>${headers.map((header) => `<th>${cleanText(header)}</th>`).join("")}</tr>
            </thead>
            <tbody>
              ${rows.map((row) => `<tr>${row.map((cell, index) => `<td data-label="${cleanText(headers[index])}">${cleanText(cell)}</td>`).join("")}</tr>`).join("")}
            </tbody>
          </table>
        </div>
      `;
    }

    function renderScheduleMonth(monthIndex) {
      const data = cleanValue(copy[state.lang]);
      const monthWeeks = schedule.filter((week) => week.month === monthIndex).map((week) => cleanValue(week));
      return `
        <article class="month-card ${monthIndex === 0 ? "open" : ""}">
          <div class="month-head">
            <div>
              <div class="eyebrow">${data.common.scheduleSummary}</div>
              <h3>${cleanText(months[state.lang][monthIndex])}</h3>
            </div>
            <div class="month-actions">
              <span class="pill">${monthWeeks.length} ${data.common.monthlyThemes}</span>
              <button class="month-toggle ${monthIndex === 0 ? "open" : ""}">${monthIndex === 0 ? data.structure.monthToggleClose : data.structure.monthToggleOpen}</button>
            </div>
          </div>
          <div class="month-body">
            ${monthWeeks.map((item) => `
              <div class="week-card">
                <div class="week-label">${data.structure.weekLabel} ${item.week}</div>
                <div class="week-content">
                  <h4>${cleanText(item.theme[state.lang])}</h4>
                  <div class="week-columns">
                    <div>
                      <strong>${data.structure.weekCols[0]}</strong>
                      ${renderTags(item.discovery[state.lang])}
                    </div>
                    <div>
                      <strong>${data.structure.weekCols[1]}</strong>
                      ${renderTags(item.cases[state.lang])}
                    </div>
                    <div>
                      <strong>${data.structure.weekCols[2]}</strong>
                      <div class="tool-card">
                        <p>${cleanText(item.workshop[state.lang])}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </article>
      `;
    }

    function renderStructure() {
      const data = cleanValue(copy[state.lang]);
      const block = data.structure;
      return `
        <div class="panel">
          <div class="section-header">
            <div>
              <div class="eyebrow">${block.weeklyTitle}</div>
              <h2 class="section-title">${block.title}</h2>
            </div>
            <div class="section-note muted">${block.note}</div>
          </div>
          <div class="grid-2">
            <div>
              ${renderWeeklyTable(block.weeklyTableHeaders, block.weeklyRows)}
            </div>
            <div>
              <div class="info-card" style="height:100%;">
                <h3>${block.pricingTitle}</h3>
                ${renderWeeklyTable(block.pricingHeaders, block.pricingRows)}
              </div>
            </div>
          </div>
        </div>

        <div class="panel">
          <div class="section-header">
            <h2 class="section-title">${block.audienceTitle}</h2>
            <div class="section-note muted">${block.calendarNote}</div>
          </div>
          <div class="info-card">
            ${renderList(block.audience)}
          </div>
        </div>

        <div class="panel">
          <div class="section-header">
            <div>
              <div class="eyebrow">${data.common.scheduleSummary}</div>
              <h2 class="section-title">${block.calendarTitle}</h2>
            </div>
            <div class="section-note muted">${block.calendarNote}</div>
          </div>
          <div class="month-grid">
            ${months[state.lang].map((_, index) => renderScheduleMonth(index)).join("")}
          </div>
        </div>
      `;
    }

    function renderCurricula() {
      const data = cleanValue(copy[state.lang]);
      const block = data.curricula;
      return `
        <div class="panel">
          <div class="section-header">
            <div>
              <div class="eyebrow">${data.common.summaryLabel}</div>
              <h2 class="section-title">${block.title}</h2>
            </div>
            <div class="section-note muted">${block.note}</div>
          </div>
          <div class="grid-3">
            ${block.cards.map((card) => `
              <div class="class-card">
                <div class="eyebrow">${card.subtitle}</div>
                <h3>${card.title}</h3>
                <p>${card.summary}</p>
                <div class="step-list">
                  ${card.steps.map((step, index) => `
                    <div class="step-item">
                      <span>${index + 1}</span>
                      <p>${step}</p>
                    </div>
                  `).join("")}
                </div>
                <div style="margin-top:16px;">
                  <strong>${data.common.outcomesLabel}</strong>
                  ${renderTags(card.outcomes)}
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="panel">
          <div class="section-header">
            <h2 class="section-title">${block.teachingTitle}</h2>
          </div>
          <div class="info-card">
            ${renderList(block.teaching)}
          </div>
        </div>
      `;
    }

    function renderTechnical() {
      const data = cleanValue(copy[state.lang]);
      const block = data.technical;
      return `
        <div class="panel">
          <div class="section-header">
            <div>
              <div class="eyebrow">${data.common.summaryLabel}</div>
              <h2 class="section-title">${block.title}</h2>
            </div>
            <div class="section-note muted">${block.note}</div>
          </div>
          <div class="grid-4">
            ${block.stackCards.map((card) => `
              <div class="tool-card">
                <h3>${card.title}</h3>
                <p>${card.body}</p>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="panel">
          <div class="section-header">
            <h2 class="section-title">${block.tableTitle}</h2>
          </div>
          <div class="table-wrap">
            <table class="tool-table responsive-table">
              <thead>
                <tr>${block.headers.map((header) => `<th>${cleanText(header)}</th>`).join("")}</tr>
              </thead>
              <tbody>
                ${block.rows.map((row) => `<tr>${row.map((cell, index) => `<td data-label="${cleanText(block.headers[index])}">${cleanText(cell)}</td>`).join("")}</tr>`).join("")}
              </tbody>
            </table>
          </div>
        </div>

        <div class="panel">
          <div class="grid-2">
            <div class="info-card">
              <h3>${block.logisticsTitle}</h3>
              ${renderList(block.logistics)}
            </div>
            <div class="info-card">
              <h3>${block.buildTitle}</h3>
              ${renderList(block.buildSteps)}
            </div>
          </div>
        </div>
      `;
    }

    function renderPitch() {
      const data = cleanValue(copy[state.lang]);
      const block = data.pitch;
      return `
        <div class="panel">
          <div class="section-header">
            <div>
              <div class="eyebrow">${data.common.summaryLabel}</div>
              <h2 class="section-title">${block.title}</h2>
            </div>
            <div class="section-note muted">${block.note}</div>
          </div>
          <div class="pitch-stack">
            ${block.cards.map((card) => `
              <div class="pitch-card">
                <h3>${card.title}</h3>
                ${card.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }

    function renderPrintDocument() {
      const data = cleanValue(copy[state.lang]);
      return `
        <section class="print-section">
          ${renderExecutive()}
        </section>
        <section class="print-section">
          ${renderStructure()}
        </section>
        <section class="print-section">
          ${renderCurricula()}
        </section>
        <section class="print-section">
          ${renderTechnical()}
        </section>
        <section class="print-section">
          ${renderPitch()}
        </section>
        <div class="footer-note">${cleanText(data.footerNote)}</div>
      `;
    }

    function renderAll() {
      const data = cleanValue(copy[state.lang]);
      document.documentElement.lang = state.lang;
      const isPrintMode = document.body.dataset.mode === "print";

      document.querySelectorAll("[data-i18n]").forEach((node) => {
        const key = node.dataset.i18n;
        node.textContent = cleanText(data[key]);
      });

      if (isPrintMode) {
        const printRoot = document.getElementById("print-root");
        if (printRoot) {
          printRoot.innerHTML = renderPrintDocument();
          printRoot.querySelectorAll(".month-card").forEach((card) => card.classList.add("open"));
        }
        return;
      }

      document.getElementById("executive").innerHTML = renderExecutive();
      document.getElementById("structure").innerHTML = renderStructure();
      document.getElementById("curricula").innerHTML = renderCurricula();
      document.getElementById("technical").innerHTML = renderTechnical();
      document.getElementById("pitch").innerHTML = renderPitch();

      bindMonthToggles();
    }

    function bindMonthToggles() {
      const data = cleanValue(copy[state.lang]);
      document.querySelectorAll(".month-card").forEach((card) => {
        const button = card.querySelector(".month-toggle");
        if (!button) {
          return;
        }
        button.addEventListener("click", () => {
          const isOpen = card.classList.toggle("open");
          button.classList.toggle("open", isOpen);
          button.textContent = isOpen ? data.structure.monthToggleClose : data.structure.monthToggleOpen;
        });
      });
    }

    const tabButtons = document.querySelectorAll(".nav-tabs button");
    if (tabButtons.length) {
      tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
          state.tab = button.dataset.tab;
          tabButtons.forEach((node) => node.classList.toggle("active", node === button));
          document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.toggle("active", panel.id === state.tab));
        });
      });
    }

    const langButtons = document.querySelectorAll(".lang-switch button");
    if (langButtons.length) {
      langButtons.forEach((button) => {
        button.addEventListener("click", () => {
          state.lang = button.dataset.lang;
          langButtons.forEach((node) => node.classList.toggle("active", node === button));
          renderAll();
        });
      });
    }

    renderAll();
