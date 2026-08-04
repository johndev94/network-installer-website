import { useCallback, useState } from 'react';
import { ContactForm } from './components/ContactForm';
import { FAQ } from './components/FAQ';
import { FeaturedPricingCarousel } from './components/FeaturedPricingCarousel';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ServicesGrid } from './components/ServicesGrid';
import { ServiceDetailsDialog } from './components/ServiceDetailsDialog';
import { WorkCarousel } from './components/WorkCarousel';
import type { Service } from './data/services';

function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [quoteServiceId, setQuoteServiceId] = useState('');

  const closeDetails = useCallback(() => setSelectedService(null), []);

  const requestQuote = (service: Service) => {
    setQuoteServiceId(service.id);
    setSelectedService(null);
    window.setTimeout(() => {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <WorkCarousel />
        <ServicesGrid onViewDetails={setSelectedService} />

        <section id="prices" className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-wider text-brand-700">
                Pricing
              </p>
              <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
                Straightforward starting prices
              </h2>
              <p className="mt-4 text-base leading-7 text-muted">
                Every site is different. These guide prices cover common jobs;
                equipment, cabling and larger installations are quoted clearly.
              </p>
            </div>
            <FeaturedPricingCarousel onViewDetails={setSelectedService} />
          </div>
        </section>

        <FAQ />
        <ContactForm selectedServiceId={quoteServiceId} />
      </main>
      <Footer />
      <ServiceDetailsDialog
        service={selectedService}
        onClose={closeDetails}
        onRequestQuote={requestQuote}
      />
    </div>
  );
}

export default App;
