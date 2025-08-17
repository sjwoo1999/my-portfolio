import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import dynamic from 'next/dynamic';
const Particles = dynamic(() => import('react-tsparticles'), { ssr: false });

const Header = () => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const addRipple = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 1000);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 shadow-xl p-8 mb-8">
      {/* 파티클 배경 */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          options={{
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            interactivity: { events: { onClick: { enable: false }, onHover: { enable: false } }, modes: {} },
            particles: {
              color: { value: '#ffffff' },
              links: { enable: true, color: '#ffffff', opacity: 0.08 },
              move: { enable: true, speed: typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 0.4 },
              number: { value: 30 },
              opacity: { value: 0.15 },
              shape: { type: 'circle' },
              size: { value: 2 },
            },
            detectRetina: true,
          }}
        />
      </div>
      {/* 인트로 텍스트 + children(우측 상단) */}
      <div className="relative z-10 flex justify-between items-start">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">우성종</h1>
          <div className="text-lg font-medium text-slate-100">
            <Typewriter
              words={[
                '지속적인 성장을 목표로 합니다.',
                '백엔드 개발자, 창업가, 그리고 도전가.',
                '함께 성장할 동료를 찾고 있습니다.'
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1800}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex flex-wrap gap-4"
          >
            <a
              href="https://www.github.com/sjwoo1999"
              target="_blank"
              rel="noopener noreferrer"
              onClick={addRipple}
              className="group relative inline-flex items-center gap-2 px-4 py-2 overflow-hidden rounded-lg transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-md" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700/20 to-slate-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <AnimatePresence>
                {ripples.map((ripple) => (
                  <motion.span
                    key={ripple.id}
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 4, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute rounded-full bg-white/20"
                    style={{
                      left: ripple.x,
                      top: ripple.y,
                      width: "100px",
                      height: "100px",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              </AnimatePresence>
              <svg className="w-5 h-5 relative" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="relative text-white font-medium">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/우성종"
              target="_blank"
              rel="noopener noreferrer"
              onClick={addRipple}
              className="group relative inline-flex items-center gap-2 px-4 py-2 overflow-hidden rounded-lg transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-md" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700/20 to-slate-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <AnimatePresence>
                {ripples.map((ripple) => (
                  <motion.span
                    key={ripple.id}
                    initial={{ scale: 0, opacity: 0.5 }}
                    animate={{ scale: 4, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="absolute rounded-full bg-white/20"
                    style={{
                      left: ripple.x,
                      top: ripple.y,
                      width: "100px",
                      height: "100px",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              </AnimatePresence>
              <svg className="w-5 h-5 relative" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span className="relative text-white font-medium">LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Header;
