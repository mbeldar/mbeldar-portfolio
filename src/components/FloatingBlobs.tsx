import React, { useEffect, useRef } from 'react';
import '../assets/css/GlobalBackground.css';

const BLOB_COUNT = 5;

const PRESET = [
  { w: 360, h: 360, bg: 'radial-gradient(circle at 30% 30%, #7c3aed, transparent 40%)' },
  { w: 260, h: 260, bg: 'radial-gradient(circle at 30% 30%, #06b6d4, transparent 40%)' },
  { w: 420, h: 420, bg: 'radial-gradient(circle at 30% 30%, #f97316, transparent 30%)' },
  { w: 200, h: 200, bg: 'radial-gradient(circle at 30% 30%, #ef4444, transparent 40%)' },
  { w: 320, h: 320, bg: 'radial-gradient(circle at 30% 30%, #10b981, transparent 40%)' },
];

const rand = (min: number, max: number) => Math.random() * (max - min) + min;

const FloatingBlobs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const blobs = Array.from(container.querySelectorAll<HTMLDivElement>('.blob'));
    const state: Array<any> = [];

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // simple rejection sampling to avoid initial clustering
    const minDist = Math.max(120, Math.min(vw, vh) * 0.12);

    for (let i = 0; i < blobs.length; i++) {
      const el = blobs[i];
      const preset = PRESET[i % PRESET.length];
      const w = preset.w;
      const h = preset.h;

      let posX = 0;
      let posY = 0;
      let tries = 0;
      do {
        posX = rand(-w * 0.5, vw - w * 0.5);
        posY = rand(-h * 0.5, vh - h * 0.5);
        tries++;
        if (tries > 12) break;
      } while (state.some(s => {
        const dx = s.x - posX;
        const dy = s.y - posY;
        return Math.hypot(dx, dy) < minDist;
      }));
      const x = posX;
      const y = posY;

      const angle = rand(0, Math.PI * 2);
      const speed = rand(12, 50); // px/sec
      const vx = Math.cos(angle) * speed;
      const vy = Math.sin(angle) * speed;

      el.style.width = `${w}px`;
      el.style.height = `${h}px`;
      el.style.left = '0px';
      el.style.top = '0px';
      el.style.background = preset.bg;
      el.classList.add('js-animated');
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      state.push({ el, x, y, vx, vy, w, h });
    }

    let running = true;
    let last = performance.now();

    const onResize = () => {
      // noop here; we'll read window sizes each frame
    };
    window.addEventListener('resize', onResize);

    const step = (now: number) => {
      if (!running) return;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      for (const b of state) {
        b.x += b.vx * dt;
        b.y += b.vy * dt;

        // wrap-around: when fully out of bounds, reappear on opposite side
        if (b.x > vw + b.w) b.x = -b.w;
        if (b.x < -b.w) b.x = vw + b.w;
        if (b.y > vh + b.h) b.y = -b.h;
        if (b.y < -b.h) b.y = vh + b.h;

        b.el.style.transform = `translate3d(${Math.round(b.x)}px, ${Math.round(b.y)}px, 0)`;
      }

      requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="floating-blobs" aria-hidden>
      {Array.from({ length: BLOB_COUNT }).map((_, i) => (
        <div key={i} className={`blob b${i + 1}`} />
      ))}
    </div>
  );
};

export default FloatingBlobs;
