import { createContext, useContext, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Pause, Play } from 'lucide-react';

const MotionContext = createContext(false);

export function useMotionPaused() {
  return useContext(MotionContext);
}

export function MotionEffects({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const stopped = paused || reduced;

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(preference.matches);
    sync();
    preference.addEventListener('change', sync);
    return () => preference.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (stopped || !root.current || !('IntersectionObserver' in window)) return;
    const elements = root.current.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.setAttribute('data-visible', 'true');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    elements.forEach((element) => {
      element.setAttribute('data-observed', 'true');
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, [stopped]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      const amount = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
      progress.current?.style.setProperty('transform', `scaleX(${amount})`);
      frame = 0;
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  return (
    <MotionContext.Provider value={stopped}>
      <div ref={root} data-motion={stopped ? 'paused' : 'running'}>
        <div ref={progress} className="reading-progress" aria-hidden="true" />
        {children}
        {!reduced && (
          <button type="button" className="motion-toggle" aria-label={paused ? 'Resume animations' : 'Pause animations'} aria-pressed={paused} onClick={() => setPaused((value) => !value)}>
            {paused ? <Play size={18} aria-hidden="true" /> : <Pause size={18} aria-hidden="true" />}
            <span role="tooltip">{paused ? 'Resume animations' : 'Pause animations'}</span>
          </button>
        )}
      </div>
    </MotionContext.Provider>
  );
}
