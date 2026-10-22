import { useEffect, useRef, useState } from 'react';

const reduced = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** 粒子 + 连线背景（canvas） */
export function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current;
    if (!c || reduced()) return;
    const ctx = c.getContext('2d');
    let w, h, raf, pts = [];
    const mouse = { x: -999, y: -999 };
    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = c.offsetWidth; h = c.offsetHeight;
      c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(90, Math.floor((w * h) / 16000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      }));
    };
    const onMove = (e) => { const r = c.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      const color = getComputedStyle(c).color || '#8b5cf6';
      ctx.fillStyle = color; ctx.strokeStyle = color;
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 120) { p.x += dx / d; p.y += dy / d; }
        ctx.globalAlpha = 0.7; ctx.beginPath(); ctx.arc(p.x, p.y, 1.4, 0, 7); ctx.fill();
      }
      for (let i = 0; i < pts.length; i++)
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 110) { ctx.globalAlpha = (1 - d / 110) * 0.25; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
        }
      raf = requestAnimationFrame(tick);
    };
    resize(); tick();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onMove);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); window.removeEventListener('pointermove', onMove); };
  }, []);
  return <canvas ref={ref} className="bx-particles" aria-hidden="true" />;
}

/** 光标聚光 + 3D 倾斜卡片 */
export function TiltCard({ className = '', children, style }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    el.style.setProperty('--mx', `${x}px`); el.style.setProperty('--my', `${y}px`);
    if (reduced() || window.innerWidth < 768) return;
    const rx = ((y / r.height) - 0.5) * -6, ry = ((x / r.width) - 0.5) * 6;
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ''; };
  return (
    <div ref={ref} className={`bx-card ${className}`} style={style} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
    </div>
  );
}

/** 文字乱码解密 */
export function ScrambleText({ text, className }) {
  const [out, setOut] = useState(text);
  useEffect(() => {
    if (reduced()) return;
    const chars = '!<>-_\\/[]{}=+*^?#01ABCDEF';
    let frame = 0, raf;
    const total = text.length * 4 + 12;
    const run = () => {
      frame++;
      setOut(text.split('').map((ch, i) => (ch === ' ' || frame > i * 4 + 12 ? ch : chars[(Math.random() * chars.length) | 0])).join(''));
      if (frame < total) raf = requestAnimationFrame(run);
    };
    run();
    return () => cancelAnimationFrame(raf);
  }, [text]);
  return <span className={className} aria-label={text}>{out}</span>;
}

/** 数字滚动 */
export function CountUp({ to, duration = 1200 }) {
  const [n, setN] = useState(to);
  const ref = useRef(null);
  useEffect(() => {
    if (reduced() || !('IntersectionObserver' in window)) return;
    setN(0);
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const step = (t) => { const p = Math.min(1, (t - t0) / duration); setN(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(step); };
      requestAnimationFrame(step);
    });
    ref.current && io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n}</span>;
}
