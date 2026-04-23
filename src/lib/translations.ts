import { Locale } from './i18n';

export interface Translations {
  nav: {
    services: string;
    projects: string;
    process: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    secondary: string;
  };
  trust: {
    yearsExp: string;
    projectsShipped: string;
    technologies: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  tech: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewCase: string;
  };
  process: {
    title: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  why: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    tagline: string;
    contact: string;
  };
  contactForm: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
}

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      services: 'Services',
      projects: 'Projects',
      process: 'Process',
      contact: 'Contact',
    },
    hero: {
      title: 'Full-Stack Development & DevOps Engineering',
      subtitle: 'Production-ready web applications from architecture to deployment. I build, scale, and maintain systems that perform under real-world conditions. Trusted by healthcare, fintech, and e-commerce companies worldwide.',
      cta: 'Start a Project',
      secondary: 'View Work',
    },
    trust: {
      yearsExp: '7+ Years Experience',
      projectsShipped: '100+ Projects Shipped',
      technologies: '30+ Technologies',
    },
    services: {
      title: 'What I Build',
      subtitle: 'Full-cycle development from concept to production',
      items: [
        {
          title: 'Frontend Engineering',
          description: 'Modern React/Next.js applications with TypeScript. Component architecture, state management, performance optimization, and responsive design.',
        },
        {
          title: 'Backend Development',
          description: 'Scalable Node.js/Python APIs, database design, authentication systems, real-time features, and third-party integrations.',
        },
        {
          title: 'Cloud Infrastructure',
          description: 'AWS/GCP deployment, containerization with Docker, orchestration, auto-scaling, monitoring, and cost optimization.',
        },
        {
          title: 'DevOps & CI/CD',
          description: 'Automated pipelines, testing workflows, deployment strategies, infrastructure as code, and production monitoring.',
        },
      ],
    },
    tech: {
      title: 'Technology Stack',
      subtitle: 'Battle-tested tools for production systems',
    },
    projects: {
      title: 'Selected Projects',
      subtitle: 'Real-world applications built for scale and performance',
      viewCase: 'View Case Study',
    },
    process: {
      title: 'How We Work',
      subtitle: 'Structured approach to shipping production systems',
      steps: [
        {
          title: 'Discovery & Planning',
          description: 'Requirements analysis, technical architecture design, technology selection, and timeline planning.',
        },
        {
          title: 'Development & Testing',
          description: 'Iterative development with continuous testing, code reviews, and progress updates.',
        },
        {
          title: 'Deployment & Support',
          description: 'Production deployment, monitoring setup, documentation, and ongoing maintenance.',
        },
      ],
    },
    why: {
      title: 'Why Work With Me',
      items: [
        {
          title: 'Full-Stack Expertise',
          description: 'No handoffs between specialists. I own the entire stack from UI to infrastructure.',
        },
        {
          title: 'Production Focus',
          description: 'Code that ships and scales. Built for real users, not demos.',
        },
        {
          title: 'Direct Communication',
          description: 'Work directly with the engineer building your product. No project managers.',
        },
        {
          title: 'Long-Term Support',
          description: 'Available for maintenance, updates, and scaling as your needs evolve.',
        },
      ],
    },
    cta: {
      title: 'Ready to Build Something Great?',
      subtitle: "Let's discuss your project and create a technical roadmap.",
      button: 'Get in Touch',
    },
    footer: {
      tagline: 'Full-Stack Development & DevOps Engineering',
      contact: 'Contact',
    },
    contactForm: {
      title: 'Get in Touch',
      subtitle: "Let's discuss your project and create a technical roadmap together.",
      name: 'Your Name',
      email: 'Email Address',
      message: 'Project Details',
      submit: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully! I will get back to you soon.',
      error: 'Failed to send message. Please try again or contact me directly.',
    },
  },
  uk: {
    nav: {
      services: 'Послуги',
      projects: 'Проєкти',
      process: 'Процес',
      contact: 'Контакт',
    },
    hero: {
      title: 'Full-Stack Розробка та DevOps Інжиніринг',
      subtitle: 'Продакшн-готові веб-застосунки від архітектури до деплою. Будую, масштабую та підтримую системи, які працюють у реальних умовах. Довіряють компанії з медицини, фінтеху та e-commerce по всьому світу.',
      cta: 'Почати Проєкт',
      secondary: 'Переглянути Роботи',
    },
    trust: {
      yearsExp: '7+ Років Досвіду',
      projectsShipped: '100+ Проєктів Завершено',
      technologies: '30+ Технологій',
    },
    services: {
      title: 'Що Я Створюю',
      subtitle: 'Повний цикл розробки від концепції до продакшну',
      items: [
        {
          title: 'Frontend Інжиніринг',
          description: 'Сучасні React/Next.js застосунки з TypeScript. Архітектура компонентів, керування станом, оптимізація продуктивності.',
        },
        {
          title: 'Backend Розробка',
          description: 'Масштабовані Node.js/Python API, проєктування баз даних, системи авторизації, реал-тайм функції.',
        },
        {
          title: 'Хмарна Інфраструктура',
          description: 'Деплой на AWS/GCP, контейнеризація Docker, оркестрація, автомасштабування, моніторинг.',
        },
        {
          title: 'DevOps & CI/CD',
          description: 'Автоматизовані пайплайни, тестування, стратегії деплою, інфраструктура як код, моніторинг.',
        },
      ],
    },
    tech: {
      title: 'Технологічний Стек',
      subtitle: 'Перевірені інструменти для продакшн систем',
    },
    projects: {
      title: 'Обрані Проєкти',
      subtitle: 'Реальні застосунки, побудовані для масштабу та продуктивності',
      viewCase: 'Кейс-стаді',
    },
    process: {
      title: 'Як Ми Працюємо',
      subtitle: 'Структурований підхід до створення продакшн систем',
      steps: [
        {
          title: 'Аналіз та Планування',
          description: 'Аналіз вимог, проєктування технічної архітектури, вибір технологій, планування термінів.',
        },
        {
          title: 'Розробка та Тестування',
          description: 'Ітеративна розробка з постійним тестуванням, код рев\'ю та оновленнями прогресу.',
        },
        {
          title: 'Деплой та Підтримка',
          description: 'Продакшн деплой, налаштування моніторингу, документація, постійна підтримка.',
        },
      ],
    },
    why: {
      title: 'Чому Працювати зі Мною',
      items: [
        {
          title: 'Full-Stack Експертиза',
          description: 'Без передачі між спеціалістами. Я володію всім стеком від UI до інфраструктури.',
        },
        {
          title: 'Фокус на Продакшн',
          description: 'Код, який працює та масштабується. Створено для реальних користувачів.',
        },
        {
          title: 'Пряма Комунікація',
          description: 'Робота безпосередньо з інженером, який будує ваш продукт. Без менеджерів проєктів.',
        },
        {
          title: 'Довгострокова Підтримка',
          description: 'Доступний для підтримки, оновлень та масштабування у міру розвитку.',
        },
      ],
    },
    cta: {
      title: 'Готові Створити Щось Чудове?',
      subtitle: 'Обговоримо ваш проєкт та створимо технічну дорожню карту.',
      button: 'Зв\'язатися',
    },
    footer: {
      tagline: 'Full-Stack Розробка та DevOps Інжиніринг',
      contact: 'Контакт',
    },
    contactForm: {
      title: 'Зв\'язатися',
      subtitle: 'Обговоримо ваш проєкт та створимо технічну дорожню карту разом.',
      name: 'Ваше Ім\'я',
      email: 'Email Адреса',
      message: 'Деталі Проєкту',
      submit: 'Надіслати',
      sending: 'Надсилання...',
      success: 'Повідомлення надіслано! Я зв\'яжуся з вами найближчим часом.',
      error: 'Помилка відправки. Спробуйте ще раз або зв\'яжіться зі мною напряму.',
    },
  },
  pl: {
    nav: {
      services: 'Usługi',
      projects: 'Projekty',
      process: 'Proces',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Programowanie Full-Stack i Inżynieria DevOps',
      subtitle: 'Aplikacje webowe gotowe do produkcji od architektury po wdrożenie. Buduję, skaluję i utrzymuję systemy działające w rzeczywistych warunkach. Zaufane przez firmy z sektora medycznego, fintech i e-commerce na całym świecie.',
      cta: 'Rozpocznij Projekt',
      secondary: 'Zobacz Realizacje',
    },
    trust: {
      yearsExp: '7+ Lat Doświadczenia',
      projectsShipped: '100+ Zrealizowanych Projektów',
      technologies: '30+ Technologii',
    },
    services: {
      title: 'Co Tworzę',
      subtitle: 'Pełny cykl rozwoju od koncepcji do produkcji',
      items: [
        {
          title: 'Inżynieria Frontend',
          description: 'Nowoczesne aplikacje React/Next.js z TypeScript. Architektura komponentów, zarządzanie stanem, optymalizacja wydajności.',
        },
        {
          title: 'Rozwój Backend',
          description: 'Skalowalne API Node.js/Python, projektowanie baz danych, systemy uwierzytelniania, funkcje czasu rzeczywistego.',
        },
        {
          title: 'Infrastruktura Chmurowa',
          description: 'Wdrożenie AWS/GCP, konteneryzacja Docker, orkiestracja, autoskalowanie, monitoring, optymalizacja kosztów.',
        },
        {
          title: 'DevOps i CI/CD',
          description: 'Zautomatyzowane pipelines, przepływy testów, strategie wdrożeń, infrastruktura jako kod, monitoring produkcyjny.',
        },
      ],
    },
    tech: {
      title: 'Stos Technologiczny',
      subtitle: 'Sprawdzone narzędzia dla systemów produkcyjnych',
    },
    projects: {
      title: 'Wybrane Projekty',
      subtitle: 'Rzeczywiste aplikacje zbudowane z myślą o skali i wydajności',
      viewCase: 'Zobacz Studium Przypadku',
    },
    process: {
      title: 'Jak Pracujemy',
      subtitle: 'Ustrukturyzowane podejście do dostarczania systemów produkcyjnych',
      steps: [
        {
          title: 'Odkrywanie i Planowanie',
          description: 'Analiza wymagań, projektowanie architektury technicznej, wybór technologii, planowanie harmonogramu.',
        },
        {
          title: 'Rozwój i Testowanie',
          description: 'Rozwój iteracyjny z ciągłym testowaniem, przeglądy kodu i aktualizacje postępów.',
        },
        {
          title: 'Wdrożenie i Wsparcie',
          description: 'Wdrożenie produkcyjne, konfiguracja monitoringu, dokumentacja, bieżąca konserwacja.',
        },
      ],
    },
    why: {
      title: 'Dlaczego Warto ze Mną Pracować',
      items: [
        {
          title: 'Ekspertyza Full-Stack',
          description: 'Bez przekazywania między specjalistami. Zarządzam całym stosem od UI po infrastrukturę.',
        },
        {
          title: 'Skupienie na Produkcji',
          description: 'Kod który działa i skaluje się. Zbudowany dla prawdziwych użytkowników, nie demo.',
        },
        {
          title: 'Bezpośrednia Komunikacja',
          description: 'Praca bezpośrednio z inżynierem budującym twój produkt. Bez kierowników projektów.',
        },
        {
          title: 'Długoterminowe Wsparcie',
          description: 'Dostępny dla konserwacji, aktualizacji i skalowania w miarę rozwoju potrzeb.',
        },
      ],
    },
    cta: {
      title: 'Gotowy Zbudować Coś Świetnego?',
      subtitle: 'Omówmy twój projekt i stwórzmy mapę drogową techniczną.',
      button: 'Skontaktuj Się',
    },
    footer: {
      tagline: 'Programowanie Full-Stack i Inżynieria DevOps',
      contact: 'Kontakt',
    },
    contactForm: {
      title: 'Skontaktuj Się',
      subtitle: 'Omówmy twój projekt i stwórzmy mapę drogową techniczną razem.',
      name: 'Twoje Imię',
      email: 'Adres Email',
      message: 'Szczegóły Projektu',
      submit: 'Wyślij Wiadomość',
      sending: 'Wysyłanie...',
      success: 'Wiadomość wysłana pomyślnie! Skontaktuję się wkrótce.',
      error: 'Nie udało się wysłać wiadomości. Spróbuj ponownie lub skontaktuj się bezpośrednio.',
    },
  },
  de: {
    nav: {
      services: 'Leistungen',
      projects: 'Projekte',
      process: 'Prozess',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Full-Stack-Entwicklung & DevOps-Engineering',
      subtitle: 'Produktionsreife Webanwendungen von der Architektur bis zum Deployment. Ich baue, skaliere und warte Systeme, die unter realen Bedingungen funktionieren. Vertraut von Gesundheits-, Fintech- und E-Commerce-Unternehmen weltweit.',
      cta: 'Projekt Starten',
      secondary: 'Arbeiten Ansehen',
    },
    trust: {
      yearsExp: '7+ Jahre Erfahrung',
      projectsShipped: '100+ Ausgelieferte Projekte',
      technologies: '30+ Technologien',
    },
    services: {
      title: 'Was Ich Entwickle',
      subtitle: 'Vollständiger Entwicklungszyklus vom Konzept zur Produktion',
      items: [
        {
          title: 'Frontend-Engineering',
          description: 'Moderne React/Next.js-Anwendungen mit TypeScript. Komponentenarchitektur, State-Management, Performance-Optimierung.',
        },
        {
          title: 'Backend-Entwicklung',
          description: 'Skalierbare Node.js/Python-APIs, Datenbankdesign, Authentifizierungssysteme, Echtzeit-Features.',
        },
        {
          title: 'Cloud-Infrastruktur',
          description: 'AWS/GCP-Deployment, Containerisierung mit Docker, Orchestrierung, Auto-Scaling, Monitoring, Kostenoptimierung.',
        },
        {
          title: 'DevOps & CI/CD',
          description: 'Automatisierte Pipelines, Test-Workflows, Deployment-Strategien, Infrastructure as Code, Produktions-Monitoring.',
        },
      ],
    },
    tech: {
      title: 'Technologie-Stack',
      subtitle: 'Bewährte Tools für Produktionssysteme',
    },
    projects: {
      title: 'Ausgewählte Projekte',
      subtitle: 'Echte Anwendungen für Skalierung und Performance entwickelt',
      viewCase: 'Fallstudie Ansehen',
    },
    process: {
      title: 'Wie Wir Arbeiten',
      subtitle: 'Strukturierter Ansatz zur Bereitstellung von Produktionssystemen',
      steps: [
        {
          title: 'Analyse & Planung',
          description: 'Anforderungsanalyse, Design der technischen Architektur, Technologieauswahl, Zeitplanung.',
        },
        {
          title: 'Entwicklung & Testing',
          description: 'Iterative Entwicklung mit kontinuierlichem Testing, Code-Reviews und Fortschrittsaktualisierungen.',
        },
        {
          title: 'Deployment & Support',
          description: 'Produktions-Deployment, Monitoring-Setup, Dokumentation, laufende Wartung.',
        },
      ],
    },
    why: {
      title: 'Warum Mit Mir Arbeiten',
      items: [
        {
          title: 'Full-Stack-Expertise',
          description: 'Keine Übergaben zwischen Spezialisten. Ich beherrsche den gesamten Stack von UI bis Infrastruktur.',
        },
        {
          title: 'Produktionsfokus',
          description: 'Code, der ausgeliefert wird und skaliert. Für echte Benutzer gebaut, nicht für Demos.',
        },
        {
          title: 'Direkte Kommunikation',
          description: 'Arbeiten Sie direkt mit dem Ingenieur, der Ihr Produkt baut. Keine Projektmanager.',
        },
        {
          title: 'Langfristige Unterstützung',
          description: 'Verfügbar für Wartung, Updates und Skalierung, wenn sich Ihre Anforderungen entwickeln.',
        },
      ],
    },
    cta: {
      title: 'Bereit, Etwas Großartiges Zu Bauen?',
      subtitle: 'Lassen Sie uns Ihr Projekt besprechen und eine technische Roadmap erstellen.',
      button: 'Kontakt Aufnehmen',
    },
    footer: {
      tagline: 'Full-Stack-Entwicklung & DevOps-Engineering',
      contact: 'Kontakt',
    },
    contactForm: {
      title: 'Kontakt Aufnehmen',
      subtitle: 'Lassen Sie uns Ihr Projekt besprechen und gemeinsam eine technische Roadmap erstellen.',
      name: 'Ihr Name',
      email: 'E-Mail-Adresse',
      message: 'Projektdetails',
      submit: 'Nachricht Senden',
      sending: 'Wird gesendet...',
      success: 'Nachricht erfolgreich gesendet! Ich melde mich bald bei Ihnen.',
      error: 'Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt.',
    },
  },
  es: {
    nav: {
      services: 'Servicios',
      projects: 'Proyectos',
      process: 'Proceso',
      contact: 'Contacto',
    },
    hero: {
      title: 'Desarrollo Full-Stack e Ingeniería DevOps',
      subtitle: 'Aplicaciones web listas para producción desde la arquitectura hasta el despliegue. Construyo, escalo y mantengo sistemas que funcionan en condiciones reales. Confiado por empresas de salud, fintech y e-commerce en todo el mundo.',
      cta: 'Iniciar Proyecto',
      secondary: 'Ver Trabajos',
    },
    trust: {
      yearsExp: '7+ Años de Experiencia',
      projectsShipped: '100+ Proyectos Entregados',
      technologies: '30+ Tecnologías',
    },
    services: {
      title: 'Qué Construyo',
      subtitle: 'Ciclo completo de desarrollo desde el concepto hasta la producción',
      items: [
        {
          title: 'Ingeniería Frontend',
          description: 'Aplicaciones modernas React/Next.js con TypeScript. Arquitectura de componentes, gestión de estado, optimización de rendimiento.',
        },
        {
          title: 'Desarrollo Backend',
          description: 'APIs escalables Node.js/Python, diseño de bases de datos, sistemas de autenticación, características en tiempo real.',
        },
        {
          title: 'Infraestructura en la Nube',
          description: 'Despliegue AWS/GCP, contenedorización con Docker, orquestación, auto-escalado, monitoreo, optimización de costos.',
        },
        {
          title: 'DevOps y CI/CD',
          description: 'Pipelines automatizados, flujos de pruebas, estrategias de despliegue, infraestructura como código, monitoreo de producción.',
        },
      ],
    },
    tech: {
      title: 'Stack Tecnológico',
      subtitle: 'Herramientas probadas para sistemas de producción',
    },
    projects: {
      title: 'Proyectos Seleccionados',
      subtitle: 'Aplicaciones reales construidas para escala y rendimiento',
      viewCase: 'Ver Caso de Estudio',
    },
    process: {
      title: 'Cómo Trabajamos',
      subtitle: 'Enfoque estructurado para entregar sistemas de producción',
      steps: [
        {
          title: 'Descubrimiento y Planificación',
          description: 'Análisis de requisitos, diseño de arquitectura técnica, selección de tecnología, planificación de cronograma.',
        },
        {
          title: 'Desarrollo y Pruebas',
          description: 'Desarrollo iterativo con pruebas continuas, revisiones de código y actualizaciones de progreso.',
        },
        {
          title: 'Despliegue y Soporte',
          description: 'Despliegue en producción, configuración de monitoreo, documentación, mantenimiento continuo.',
        },
      ],
    },
    why: {
      title: 'Por Qué Trabajar Conmigo',
      items: [
        {
          title: 'Experiencia Full-Stack',
          description: 'Sin transferencias entre especialistas. Domino todo el stack desde UI hasta infraestructura.',
        },
        {
          title: 'Enfoque en Producción',
          description: 'Código que se despliega y escala. Construido para usuarios reales, no demos.',
        },
        {
          title: 'Comunicación Directa',
          description: 'Trabaja directamente con el ingeniero que construye tu producto. Sin gerentes de proyecto.',
        },
        {
          title: 'Soporte a Largo Plazo',
          description: 'Disponible para mantenimiento, actualizaciones y escalado a medida que evolucionan tus necesidades.',
        },
      ],
    },
    cta: {
      title: '¿Listo Para Construir Algo Grandioso?',
      subtitle: 'Discutamos tu proyecto y creemos una hoja de ruta técnica.',
      button: 'Contactar',
    },
    footer: {
      tagline: 'Desarrollo Full-Stack e Ingeniería DevOps',
      contact: 'Contacto',
    },
    contactForm: {
      title: 'Contactar',
      subtitle: 'Discutamos tu proyecto y creemos una hoja de ruta técnica juntos.',
      name: 'Tu Nombre',
      email: 'Dirección de Email',
      message: 'Detalles del Proyecto',
      submit: 'Enviar Mensaje',
      sending: 'Enviando...',
      success: '¡Mensaje enviado exitosamente! Me pondré en contacto pronto.',
      error: 'Error al enviar el mensaje. Por favor intenta de nuevo o contáctame directamente.',
    },
  },
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale];
}
