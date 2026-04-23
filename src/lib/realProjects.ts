import { Locale } from './i18n';

export interface Project {
  id: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  tech: string[];
  metrics: Record<Locale, string[]>;
  url: string | null;
}

export const realProjects: Project[] = [
  {
    id: 'buy-all-shop',
    title: {
      en: 'Buy All Shop (E-commerce)',
      uk: 'Buy All Shop (інтернет‑магазин)',
      pl: 'Buy All Shop (e-commerce)',
      de: 'Buy All Shop (E-Commerce)',
      es: 'Buy All Shop (e-commerce)',
    },
    description: {
      en: 'Improved performance and UX of a custom e-commerce platform. Refactored the frontend to reduce unnecessary re-renders, optimized API calls and SQL queries, and added admin dashboard charts/visualizations.',
      uk: 'Покращив продуктивність та UX кастомної e-commerce платформи: рефакторинг фронтенду (менше зайвих re-render), оптимізація API та SQL-запитів, додав графіки/візуалізації для адмін-панелі.',
      pl: 'Poprawa wydajności i UX platformy e-commerce: refaktoryzacja frontendu (mniej re-renderów), optymalizacja wywołań API i zapytań SQL oraz dodanie wykresów do panelu administracyjnego.',
      de: 'Verbesserung von Performance und UX einer E-Commerce-Plattform: Frontend-Refactoring (weniger Re-Renders), Optimierung von API-Calls und SQL-Queries sowie Charts im Admin-Dashboard.',
      es: 'Mejora del rendimiento y UX de una plataforma e-commerce: refactor del frontend (menos re-renders), optimización de llamadas API y consultas SQL, y gráficos para el panel de administración.',
    },
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Telegram API'],
    metrics: {
      en: ['Performance optimization', 'Frontend refactor', 'Admin charts'],
      uk: ['Оптимізація продуктивності', 'Рефакторинг фронтенду', 'Графіки для адмінки'],
      pl: ['Optymalizacja wydajności', 'Refaktoryzacja frontendu', 'Wykresy w panelu admina'],
      de: ['Performance-Optimierung', 'Frontend-Refactoring', 'Admin-Charts'],
      es: ['Optimización de rendimiento', 'Refactor frontend', 'Gráficas en admin'],
    },
    url: 'https://buy-all.store',
  },
  {
    id: 'walk-fit-win',
    title: {
      en: 'Walk Fit Win (Rewards App)',
      uk: 'Walk Fit Win (rewards застосунок)',
      pl: 'Walk Fit Win (aplikacja nagród)',
      de: 'Walk Fit Win (Rewards-App)',
      es: 'Walk Fit Win (app de recompensas)',
    },
    description: {
      en: 'Modernized a legacy walking-rewards app. Built new REST APIs with LoopBack + Swagger, implemented geolocation and MongoDB queries, and added a React portal with real-time WebSocket features for live interactions and prize draws.',
      uk: 'Модернізація legacy rewards-застосунку: нові REST API на LoopBack + Swagger, геолокація та запити MongoDB, React-портал і real-time функції через WebSocket для інтеракцій та розіграшів призів.',
      pl: 'Modernizacja aplikacji nagród: nowe REST API (LoopBack + Swagger), geolokalizacja i zapytania MongoDB oraz portal React z funkcjami WebSocket w czasie rzeczywistym.',
      de: 'Modernisierung einer Legacy-Rewards-App: neue REST-APIs (LoopBack + Swagger), Geolocation & MongoDB-Queries sowie ein React-Portal mit WebSocket-Features in Echtzeit.',
      es: 'Modernización de una app legacy de recompensas: nuevas APIs REST (LoopBack + Swagger), geolocalización y consultas MongoDB, y un portal React con WebSockets en tiempo real.',
    },
    tech: ['Node.js', 'LoopBack', 'Swagger', 'React', 'MongoDB', 'Twilio API'],
    metrics: {
      en: ['API modernization', 'Real-time features', 'Legacy refactor'],
      uk: ['Оновлення API', 'Real-time функції', 'Робота з legacy кодом'],
      pl: ['Modernizacja API', 'Funkcje real-time', 'Refaktor legacy'],
      de: ['API-Modernisierung', 'Echtzeit-Features', 'Legacy-Refactor'],
      es: ['Modernización de API', 'Funciones real-time', 'Refactor legacy'],
    },
    url: 'https://play.google.com/store/apps/details?id=org.kbp.publish.walkfitwin',
  },
  {
    id: 'builtwell-devops',
    title: {
      en: 'Builtwell (DevOps)',
      uk: 'Builtwell (DevOps)',
      pl: 'Builtwell (DevOps)',
      de: 'Builtwell (DevOps)',
      es: 'Builtwell (DevOps)',
    },
    description: {
      en: 'Deployed and maintained backend infrastructure on AWS. Set up and configured EC2, Linux environments, and NGINX as a reverse proxy, managed secure env variables and automated deployments, and optimized reliability and scaling.',
      uk: 'Деплой та підтримка бекенд-інфраструктури на AWS: EC2, Linux середовище, NGINX як reverse proxy, безпечні env змінні, автоматизація деплоїв, оптимізація надійності та масштабування.',
      pl: 'Wdrożenie i utrzymanie infrastruktury backendu na AWS: EC2, środowiska Linux, NGINX jako reverse proxy, bezpieczne zmienne środowiskowe, automatyzacja wdrożeń i poprawa niezawodności.',
      de: 'Deployment und Betrieb der Backend-Infrastruktur auf AWS: EC2, Linux-Umgebungen, NGINX als Reverse Proxy, sichere Env-Variablen, automatisierte Deployments und Optimierungen für Zuverlässigkeit.',
      es: 'Despliegue y mantenimiento de infraestructura backend en AWS: EC2, entornos Linux, NGINX como reverse proxy, variables seguras, despliegues automatizados y mejora de la fiabilidad.',
    },
    tech: ['AWS', 'EC2', 'NGINX', 'Linux', 'CI/CD'],
    metrics: {
      en: ['AWS setup', 'Reverse proxy', 'Deployment automation'],
      uk: ['AWS налаштування', 'Reverse proxy', 'Автоматизація деплою'],
      pl: ['Konfiguracja AWS', 'Reverse proxy', 'Automatyzacja wdrożeń'],
      de: ['AWS-Setup', 'Reverse Proxy', 'Deployment-Automatisierung'],
      es: ['Configuración AWS', 'Reverse proxy', 'Automatización de despliegues'],
    },
    url: 'https://play.google.com/store/apps/details?id=com.peakgoalsdt.builtwell',
  },
  {
    id: 'godly-kids-backend',
    title: {
      en: 'Godly Kids (Mobile back-end)',
      uk: 'Godly Kids (бекенд для мобільного застосунку)',
      pl: 'Godly Kids (backend aplikacji)',
      de: 'Godly Kids (Mobile-Backend)',
      es: 'Godly Kids (backend móvil)',
    },
    description: {
      en: 'Designed and built the backend from scratch: secure REST API with JWT auth and role-based access, Swagger documentation, and admin API for managing content. Integrated subscriptions, push notifications, and in-app purchases (Stripe + RevenueCat).',
      uk: 'Спроєктував і реалізував бекенд з нуля: безпечний REST API з JWT та ролями, Swagger-документація, admin API для керування контентом. Інтеграції підписок, push-нотифікацій та in-app покупок (Stripe + RevenueCat).',
      pl: 'Zaprojektowanie i budowa backendu od zera: REST API z JWT i rolami, dokumentacja Swagger oraz admin API do zarządzania treściami. Integracje subskrypcji, push i zakupów w aplikacji (Stripe + RevenueCat).',
      de: 'Backend von Grund auf entwickelt: REST API mit JWT/rollenbasiertem Zugriff, Swagger-Doku und Admin-API für Content-Management. Integrationen für Abos, Push und In-App-Käufe (Stripe + RevenueCat).',
      es: 'Backend desde cero: API REST segura con JWT y roles, documentación Swagger y API de administración para contenido. Integración de suscripciones, push y compras in-app (Stripe + RevenueCat).',
    },
    tech: ['Node.js', 'NestJS', 'TypeScript', 'MongoDB', 'Google Cloud Platform'],
    metrics: {
      en: ['JWT auth', 'Admin API', 'Subscriptions & IAP'],
      uk: ['JWT авторизація', 'Admin API', 'Підписки та IAP'],
      pl: ['JWT auth', 'Admin API', 'Subskrypcje i IAP'],
      de: ['JWT-Auth', 'Admin-API', 'Abos & IAP'],
      es: ['Auth JWT', 'API admin', 'Suscripciones e IAP'],
    },
    url: 'https://godlykids.com',
  },
];
