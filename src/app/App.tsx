import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Services } from './components/Services';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Why } from './components/Why';
import { ContactForm } from './components/ContactForm';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Hero />
          <TrustStrip />
          <Services />
          <TechStack />
          <Projects />
          <Process />
          <Why />
          <ContactForm />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}