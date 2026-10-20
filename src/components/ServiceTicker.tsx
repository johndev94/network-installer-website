import { Cable, Camera, Headset, House, LockKeyhole, Network, Router, ShieldCheck, Wifi, Wrench } from 'lucide-react';
import { Fragment, useEffect, useRef, useState } from 'react';

const items = [
  { label: 'Networking & WiFi', icon: Cable },
  { label: 'Security & firewalls', icon: ShieldCheck },
  { label: 'CCTV installations', icon: Camera },
  { label: 'Homes & businesses', icon: House },
  { label: 'Router setup', icon: Router },
  { label: 'Secure remote access', icon: LockKeyhole },
  { label: 'Guest WiFi', icon: Wifi },
  { label: 'Access point installation', icon: Network },
  { label: 'Network troubleshooting', icon: Wrench },
  { label: 'Ongoing IT support', icon: Headset },
];

const pixelsPerSecond = 18;

export function ServiceTicker() {
  const container = useRef<HTMLDivElement>(null);
  const firstSet = useRef<HTMLDivElement>(null);
  const [repeats, setRepeats] = useState(1);
  const [duration, setDuration] = useState(60);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const measure = () => {
      if (preference.matches) {
        setRepeats(1);
        return;
      }
      const width = container.current?.clientWidth ?? 0;
      const setWidth = firstSet.current?.getBoundingClientRect().width ?? 0;
      if (setWidth > 0) {
        const count = Math.max(1, Math.ceil(width / setWidth));
        setRepeats(count);
        // Keep the same travel speed when wider screens need more copies.
        setDuration((setWidth * count) / pixelsPerSecond);
      }
    };
    // Repeat compact sets to fill the screen instead of stretching the gaps.
    const observer = new ResizeObserver(measure);
    if (container.current) observer.observe(container.current);
    if (firstSet.current) observer.observe(firstSet.current);
    preference.addEventListener('change', measure);
    measure();
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', measure);
    };
  }, []);

  return (
    <div className="service-ticker" ref={container}>
      <p className="sr-only">{items.map(({ label }) => label).join(', ')}.</p>
      <div className="ticker-track" aria-hidden="true" style={{ animationDuration: `${duration}s` }}>
        {[0, 1].map((copy) => (
          <div className="ticker-group" key={copy}>
            {Array.from({ length: repeats }, (_, repeat) => (
              <div className="ticker-set" key={repeat} ref={copy === 0 && repeat === 0 ? firstSet : undefined}>
                {items.map(({ label, icon: Icon }) => (
                  <Fragment key={label}>
                    <span className="ticker-item">
                      <Icon size={22} strokeWidth={1.5} />
                      {label}
                    </span>
                    <span className="ticker-divider" />
                  </Fragment>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
