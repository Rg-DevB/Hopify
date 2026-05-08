export const translations = {
  en: {
    // Sidebar
    dashboard: "Dashboard",
    analytics: "Analytics",
    calendar: "Calendar",
    appointments: "Appointments",
    patients: "Patients",
    doctors: "Doctors",
    rooms: "Rooms",
    aiPrescription: "AI Prescription",
    pharmacy: "Pharmacy",
    services: "Services",
    publicPortal: "Public Portal",
    settings: "Settings",
    help: "Help Center",
    logout: "Log Out",

    // Dashboard
    welcome: "Welcome back",
    hospitalStatus: "Hospital Status",
    activePatients: "Active Patients",
    availableDoctors: "Doctors Available",
    bedOccupancy: "Bed Occupancy",
    emergencyCases: "Emergency Cases",
    quickActions: "Quick Actions",
    addAppointment: "New Appointment",
    addPatient: "Add Patient",
    exportCsv: "Export CSV",
    aiSettings: "AI Settings",
    liveFeed: "AI Live Agent Feed",

    // Portal
    howCanWeHelp: "How can we help you today?",
    findDoctor: "Find a Doctor",
    myAppointments: "My Appointments",
    medicalRecords: "Medical Records",
    nextAppointment: "Next Appointment",
    aiTriage: "Need immediate advice?",
    startTriage: "Start AI Triage",
  },
  fr: {
    // Sidebar
    dashboard: "Tableau de Bord",
    analytics: "Analyses",
    calendar: "Calendrier",
    appointments: "Rendez-vous",
    patients: "Patients",
    doctors: "Médecins",
    rooms: "Chambres",
    aiPrescription: "Prescription IA",
    pharmacy: "Pharmacie",
    services: "Services",
    publicPortal: "Portail Public",
    settings: "Paramètres",
    help: "Centre d'Aide",
    logout: "Déconnexion",

    // Dashboard
    welcome: "Bon retour",
    hospitalStatus: "État de l'Hôpital",
    activePatients: "Patients Actifs",
    availableDoctors: "Médecins Disponibles",
    bedOccupancy: "Occupation des Lits",
    emergencyCases: "Cas d'Urgence",
    quickActions: "Actions Rapides",
    addAppointment: "+ Rendez-vous",
    addPatient: "+ Patient",
    exportCsv: "Exporter CSV",
    aiSettings: "Réglages IA",
    liveFeed: "Flux IA en Direct",

    // Portal
    howCanWeHelp: "Comment pouvons-nous vous aider aujourd'hui ?",
    findDoctor: "Trouver un Docteur",
    myAppointments: "Mes Rendez-vous",
    medicalRecords: "Dossiers Médicaux",
    nextAppointment: "Prochain Rendez-vous",
    aiTriage: "Besoin d'un conseil immédiat ?",
    startTriage: "Démarrer le Triage IA",
  }
};

export type Language = "en" | "fr";
export type TranslationKeys = keyof typeof translations.en;
