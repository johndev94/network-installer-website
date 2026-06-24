import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import businessWifi from '../assets/site/carousel-business-wifi.jpg';
import homeOffice from '../assets/site/carousel-home-office.jpg';
import networkSupport from '../assets/site/carousel-network-support.jpg';

const slides = [
  {
    title: 'Business WiFi that supports the whole premises',
    eyebrow: 'Cafes, shops, pubs, restaurants',
    description:
      'Guest WiFi, staff devices, card machines, tills, and booking systems all need a stable network underneath.',
    image: businessWifi,
    alt: 'Cafe counter with WiFi access point, point-of-sale tablet, router, and switch equipment',
    bullets: ['Guest WiFi separation', 'Access point placement', 'Post-install testing'],
  },
  {
    title: 'Home office networks built for real work',
    eyebrow: 'Remote workers and home offices',
    description:
      'Cleaner WiFi, printer connectivity, VPN help, and fewer interruptions during video calls and work sessions.',
    image: homeOffice,
    alt: 'Home office desk with laptop, router, WiFi access point, and tidy cable management',
    bullets: ['Router optimisation', 'VPN assistance', 'Laptop and printer setup'],
  },
  {
    title: 'Troubleshooting with a clear next step',
    eyebrow: 'Fault finding and support',
    description:
      'When the network is unreliable, we check the router, switch, WiFi, cabling, and configuration before recommending changes.',
    image: networkSupport,
    alt: 'Technician troubleshooting a small business network cabinet with laptop diagnostics',
    bullets: ['On-site diagnosis', 'Switch and router checks', 'Plain-English report'],
  },
];

export function WorkCarousel() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const previous = () => {
    setActive((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const next = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-lg border border-line bg-ink shadow-soft lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[330px] lg:min-h-[520px]">
            <img
              key={slide.image}
              src={slide.image}
              alt={slide.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent lg:hidden" />
          </div>

          <div className="flex flex-col justify-between p-6 text-white sm:p-8 lg:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-brand-100">
                {slide.eyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                {slide.title}
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-200">
                {slide.description}
              </p>
              <ul className="mt-6 space-y-3">
                {slide.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2 text-sm">
                    <CheckCircle2
                      className="shrink-0 text-brand-100"
                      size={18}
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex gap-2" aria-label="Carousel slide controls">
                {slides.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    className={`h-2.5 rounded-full transition-all ${
                      active === index
                        ? 'w-8 bg-brand-100'
                        : 'w-2.5 bg-white/35 hover:bg-white/60'
                    }`}
                    aria-label={`Show slide ${index + 1}: ${item.title}`}
                    onClick={() => setActive(index)}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
                  aria-label="Previous carousel slide"
                  onClick={previous}
                >
                  <ArrowLeft size={20} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
                  aria-label="Next carousel slide"
                  onClick={next}
                >
                  <ArrowRight size={20} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
