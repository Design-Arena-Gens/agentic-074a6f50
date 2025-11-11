"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiDownloadCloud,
  FiPauseCircle,
  FiPlayCircle
} from "react-icons/fi";
import { slides } from "./slide-data";

type ThemeStyle = {
  gradient: string;
  accent: string;
  accentSoft: string;
  glass: string;
};

const themeStyles: Record<string, ThemeStyle> = {
  emerald: {
    gradient: "from-brand-dark/90 via-brand-dark/60 to-black/80",
    accent: "bg-brand",
    accentSoft: "from-brand/30 to-brand-light/20",
    glass: "bg-white/5"
  },
  aqua: {
    gradient: "from-teal-900/90 via-slate-900/70 to-black/80",
    accent: "bg-cyan-400",
    accentSoft: "from-cyan-500/30 to-blue-400/20",
    glass: "bg-white/6"
  },
  sunrise: {
    gradient: "from-orange-900/90 via-purple-900/70 to-black/80",
    accent: "bg-orange-400",
    accentSoft: "from-orange-500/30 to-pink-500/20",
    glass: "bg-white/8"
  },
  midnight: {
    gradient: "from-slate-950/90 via-slate-900/70 to-black/80",
    accent: "bg-blue-500",
    accentSoft: "from-blue-600/30 to-indigo-500/20",
    glass: "bg-white/5"
  },
  forest: {
    gradient: "from-emerald-900/90 via-teal-900/70 to-black/80",
    accent: "bg-emerald-400",
    accentSoft: "from-emerald-500/30 to-lime-400/20",
    glass: "bg-white/7"
  }
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.95
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 120 : -120,
    opacity: 0,
    scale: 0.98,
    filter: "blur(6px)",
    transition: {
      duration: 0.5,
      ease: [0.7, 0, 0.84, 0]
    }
  })
};

const floatPulse = {
  animate: {
    y: [0, -12, 0],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 6,
      repeat: Infinity
    }
  }
};

export function SlideDeck() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        forward();
      } else if (event.key === "ArrowLeft") {
        backward();
      } else if (event.key.toLowerCase() === " ") {
        event.preventDefault();
        toggleAuto();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      forward();
    }, 7000);
    return () => clearInterval(timer);
  });

  const forward = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const backward = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleAuto = () => {
    setAutoPlay((prev) => !prev);
  };

  const slide = slides[current];
  const theme = useMemo(() => themeStyles[slide.theme], [slide.theme]);

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center px-4 py-10 sm:px-8 md:px-12">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          key={slide.id}
          variants={floatPulse}
          animate="animate"
          className={`absolute -top-40 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-gradient-to-br ${theme.accentSoft} blur-3xl opacity-60`}
        />
      </div>

      <div className="flex w-full max-w-6xl flex-col gap-6">
        <header className="flex items-center justify-between text-sm uppercase tracking-[0.4em] text-white/70">
          <motion.span
            key={slide.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {slide.eyebrow}
          </motion.span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleAuto}
              className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white transition hover:bg-white/20"
            >
              {autoPlay ? (
                <>
                  <FiPauseCircle className="text-brand-light" />
                  Auto
                </>
              ) : (
                <>
                  <FiPlayCircle className="text-brand-light" />
                  Auto
                </>
              )}
            </button>
            <button
              type="button"
              className="hidden items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-white opacity-40 transition hover:bg-white/20 hover:opacity-100 md:flex"
            >
              <FiDownloadCloud />
              Export Deck
            </button>
          </div>
        </header>

        <section
          className={`relative overflow-hidden rounded-[28px] border border-white/10 p-[1px] shadow-glow-green`}
        >
          <div
            className={`relative h-full w-full overflow-hidden rounded-[28px] bg-gradient-to-br ${theme.gradient}`}
          >
            <div className="absolute inset-0">
              <div className="absolute left-[-10%] top-[10%] h-48 w-48 rounded-full bg-white/5 blur-3xl" />
              <div className="absolute right-[-10%] top-[30%] h-64 w-64 rounded-full bg-white/5 blur-3xl" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_55%)]" />
            </div>

            <div className="relative flex flex-col gap-10 px-6 py-10 sm:px-10 md:flex-row md:px-12 md:py-14">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={slide.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex-1"
                >
                  <article className="flex h-full flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <motion.h1
                        initial={{ y: 18, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl font-semibold leading-tight text-white md:text-4xl"
                      >
                        {slide.title}
                      </motion.h1>
                      {slide.subtitle && (
                        <motion.p
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                          className="text-lg text-white/80 md:text-xl"
                        >
                          {slide.subtitle}
                        </motion.p>
                      )}
                      {slide.description && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.28 }}
                          className="text-base text-white/70 md:text-lg"
                        >
                          {slide.description}
                        </motion.p>
                      )}
                    </div>

                    {slide.metric && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className={`inline-flex w-fit flex-col gap-1 rounded-2xl bg-white/10 px-5 py-4 text-sm backdrop-blur`}
                      >
                        <span className="uppercase tracking-[0.3em] text-white/60">
                          {slide.metric.label}
                        </span>
                        <span className="text-lg font-semibold text-white">
                          {slide.metric.value}
                        </span>
                      </motion.div>
                    )}

                    {slide.bullets && (
                      <ul className="space-y-4">
                        {slide.bullets.map((bullet, index) => (
                          <motion.li
                            key={bullet.label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 * index }}
                            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm backdrop-blur-sm md:text-base"
                          >
                            <span className="font-semibold text-white">{bullet.label}</span>
                            {bullet.detail && (
                              <span className="mt-1 block text-white/70">{bullet.detail}</span>
                            )}
                          </motion.li>
                        ))}
                      </ul>
                    )}

                    {slide.insights && (
                      <div className="grid gap-4 sm:grid-cols-2">
                        {slide.insights.map((insight) => (
                          <motion.div
                            key={insight.headline}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className={`rounded-2xl border border-white/10 bg-white/5 p-4 text-sm backdrop-blur`}
                          >
                            <p className="text-white/70">{insight.headline}</p>
                            <p className="mt-2 text-lg font-semibold text-white">
                              {insight.highlight}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    {slide.quote && (
                      <motion.blockquote
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-2xl border border-white/10 bg-white/5 p-6 text-base italic text-white/80 backdrop-blur"
                      >
                        “{slide.quote.text}”
                        <span className="mt-3 block text-sm not-italic uppercase tracking-[0.3em] text-white/50">
                          {slide.quote.source}
                        </span>
                      </motion.blockquote>
                    )}

                    {slide.ctaLabel && (
                      <motion.a
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        href={slide.ctaLink}
                        className="inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-6 py-3 text-sm font-medium uppercase tracking-[0.3em] text-white transition hover:bg-white/30"
                      >
                        {slide.ctaLabel}
                        <FiArrowRight />
                      </motion.a>
                    )}

                    {slide.footerNote && (
                      <motion.footer
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="mt-auto text-xs uppercase tracking-[0.4em] text-white/40"
                      >
                        {slide.footerNote}
                      </motion.footer>
                    )}
                  </article>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={`${slide.id}-image`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative flex min-h-[320px] flex-1 items-center justify-center"
                >
                  <div className="absolute inset-6 rounded-[28px] border border-white/10 bg-white/10 blur-xl" />
                  <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[24px] border border-white/10 bg-black/20 shadow-xl">
                    <Image
                      src={slide.image.src}
                      alt={slide.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                      priority={slide.id === 1}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-4 text-xs text-white/60 sm:flex-row">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={backward}
              className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 uppercase tracking-[0.3em] text-white transition hover:bg-white/20"
            >
              <FiArrowLeft />
              Prev
            </button>
            <button
              type="button"
              onClick={forward}
              className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 uppercase tracking-[0.3em] text-white transition hover:bg-white/30"
            >
              Next
              <FiArrowRight />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {slides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`h-2 w-8 rounded-full transition ${
                  current === index ? "bg-white" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3 uppercase tracking-[0.3em] text-white/40">
            <span>{String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
