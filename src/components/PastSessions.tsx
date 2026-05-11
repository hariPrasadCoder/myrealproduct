import { useState, MouseEvent, SyntheticEvent, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SESSIONS, { Session } from '../data/sessions';

interface SessionCardProps {
  session: Session;
  index: number;
}

function SessionCard({ session, index }: SessionCardProps) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [portraitMap, setPortraitMap] = useState<Record<number, boolean>>({});
  const hasMultiple = session.photos.length > 1;
  const isPortrait = portraitMap[photoIndex] ?? false;
  const touchStartX = useRef<number | null>(null);

  const prev = (e: MouseEvent) => {
    e.stopPropagation();
    setPhotoIndex((i) => (i - 1 + session.photos.length) % session.photos.length);
  };
  const next = (e: MouseEvent) => {
    e.stopPropagation();
    setPhotoIndex((i) => (i + 1) % session.photos.length);
  };
  const handleLoad = (e: SyntheticEvent<HTMLImageElement>, idx: number) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    if (naturalHeight > naturalWidth) {
      setPortraitMap(prev => ({ ...prev, [idx]: true }));
    }
  };
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      setPhotoIndex((i) =>
        delta < 0
          ? (i + 1) % session.photos.length
          : (i - 1 + session.photos.length) % session.photos.length
      );
    }
    touchStartX.current = null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="group flex flex-col overflow-hidden border border-white/5 hover:border-white/12 transition-colors"
    >
      {/* ── Photo ─────────────────────────────────────────────────────── */}
      <div
        className="relative h-72 overflow-hidden bg-brand-terminal shrink-0"
        onTouchStart={hasMultiple ? handleTouchStart : undefined}
        onTouchEnd={hasMultiple ? handleTouchEnd : undefined}
      >
        <img
          src={session.photos[photoIndex]}
          alt={session.headline}
          onLoad={(e) => handleLoad(e, photoIndex)}
          className={`absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out ${
            photoIndex === 0 || !isPortrait
              ? 'object-cover object-center group-hover:scale-[1.04]'
              : 'object-contain object-center'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Tag */}
        <div className="absolute top-3 left-3">
          <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-white/50 border border-white/15 bg-black/50 backdrop-blur-sm px-2 py-1">
            {session.tag}
          </span>
        </div>

        {/* LinkedIn — top right, on hover */}
        {session.linkedinUrl && (
          <a
            href={session.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center border border-white/20 bg-black/50 text-white/50 hover:text-white hover:border-white/50 transition-all opacity-0 group-hover:opacity-100"
          >
            <ArrowUpRight size={12} />
          </a>
        )}

        {/* Carousel */}
        {hasMultiple && (
          <>
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-black/60 border border-white/10 text-white/70 hover:text-white transition-all md:opacity-0 md:group-hover:opacity-100 z-10">
              <ChevronLeft size={14} />
            </button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center bg-black/60 border border-white/10 text-white/70 hover:text-white transition-all md:opacity-0 md:group-hover:opacity-100 z-10">
              <ChevronRight size={14} />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
              {session.photos.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setPhotoIndex(i); }}
                  className={`rounded-full transition-all ${i === photoIndex ? 'w-3 h-[3px] bg-white' : 'w-[3px] h-[3px] bg-white/40'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── Brand panel ───────────────────────────────────────────────── */}
      <div className="bg-brand-card px-5 pt-5 pb-6 flex flex-col gap-3 flex-1">

        {/* Org logo + name + sponsor */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            {session.logo && (
              <img
                src={session.logo}
                alt={session.company}
                className="h-10 w-auto max-w-[48px] object-contain grayscale invert mix-blend-screen opacity-70 transition-all duration-300 group-hover:[filter:none] group-hover:opacity-100 shrink-0"
              />
            )}
            <span className="text-sm font-medium text-white/70 leading-tight">{session.company}</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {session.sponsorLogo && (
              <img
                src={session.sponsorLogo}
                alt="Sponsored by Google"
                className="h-5 w-auto max-w-[48px] object-contain grayscale invert mix-blend-screen opacity-60 transition-all duration-300 group-hover:[filter:none] group-hover:opacity-100"
              />
            )}
            {session.hostedBy && (
              <span className="text-[9px] font-mono text-white/25 text-right leading-snug max-w-[90px]">{session.hostedBy}</span>
            )}
          </div>
        </div>

        {/* Headline */}
        <p className="text-white font-display font-medium text-[15px] leading-snug">
          {session.headline}
        </p>

        {/* Location + date */}
        <p className="text-white/30 text-[11px] font-mono mt-auto">
          {session.location} · {session.date}
        </p>
      </div>
    </motion.div>
  );
}

export default function PastSessions() {
  if (SESSIONS.length === 0) return null;

  return (
    <section className="py-24 border-t border-white/5">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-brand-primary font-mono text-xs tracking-widest uppercase mb-3 block">
              Trusted By
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white leading-[1.05]">
              Organisations we've<br />
              <span className="text-white/25">worked with.</span>
            </h2>
          </div>

          {/* Logo strip */}
          <div className="flex items-center gap-8 flex-wrap md:justify-end">
            {[
              { src: '/logos/unitar.png', alt: 'UNITAR' },
              { src: 'https://raw.githubusercontent.com/hariPrasadCoder/myrealproduct/main/public/sessions/Google%20logo%20only.png', alt: 'Google' },
              { src: 'https://raw.githubusercontent.com/hariPrasadCoder/myrealproduct/main/public/sessions/Microsoft%20logo%20only.png', alt: 'Microsoft' },
              { src: 'https://raw.githubusercontent.com/hariPrasadCoder/myrealproduct/main/public/sessions/Browserstack%20logo.png', alt: 'BrowserStack' },
              { src: 'https://raw.githubusercontent.com/hariPrasadCoder/myrealproduct/main/public/sessions/WiMLDS%20logo.jpeg', alt: 'WiMLDS' },
              { src: 'https://raw.githubusercontent.com/hariPrasadCoder/myrealproduct/main/public/sessions/FF%20logo.png', alt: 'Founders Factory' },
              { src: 'https://raw.githubusercontent.com/hariPrasadCoder/myrealproduct/main/public/sessions/AWS%20logo.png', alt: 'AWS' },
            ].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto max-w-[120px] object-contain grayscale invert mix-blend-screen opacity-60 transition-all duration-300 hover:[filter:none] hover:opacity-100"
              />
            ))}
          </div>
        </div>

          {/* grid — last card centred at normal card width when count is odd */}
        <div className="grid sm:grid-cols-2 gap-3">
          {SESSIONS.map((session, i) => {
            const isLastOdd = SESSIONS.length % 2 !== 0 && i === SESSIONS.length - 1;
            return (
              <div key={i} className={isLastOdd ? 'sm:col-span-2 flex sm:justify-center' : ''}>
                <div className={isLastOdd ? 'w-full sm:max-w-[calc(50%-0.375rem)]' : 'contents'}>
                  <SessionCard session={session} index={i} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
