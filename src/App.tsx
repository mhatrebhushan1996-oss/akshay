import { useState, useEffect, useRef } from "react";

import imgVideo from "../imports/0cb14c6e231a2dbda03b4bfc9a9ba5feafe896ea.png";
import heroVideo from "../imports/hero-oculus.mp4";
import imgMontrealLine from "../imports/montrealline-1.png";
import imgProcess1 from "../imports/process-step-1.png";
import imgProcess2 from "../imports/process-step-2.png";
import imgProcess3 from "../imports/process-step-3.png";
import imgProcess4 from "../imports/process-step-4.png";
import imgRCC from "../imports/service-rcc-design.jpg";
import imgSteel from "../imports/service-steel-design.png";
import imgAudit from "../imports/service-structural-audit.png";
import imgValuation from "../imports/service-property-valuation.png";
import imgRetrofit from "../imports/service-repair-retrofitting.png";
import imgBOQ from "../imports/service-boq.png";
import imgProject1 from "../imports/project-admin-building.png";
import imgProject2 from "../imports/project-dianing-building.png";
import imgProject3 from "../imports/project-food-mall-building.png";
import imgProject4 from "../imports/project-hotel-complex-building.png";
import imgProject5 from "../imports/project-g7-residental-building.png";
import imgClientAdani from "../imports/client-adani-transparent.png";
import imgClientReliance from "../imports/client-reliance.png";
import imgClientDlf from "../imports/client-dlf.png";
import imgClientBrookfield from "../imports/client-brookfield.png";
import imgClientGodrej from "../imports/client-godrej.png";
import imgClientPiramal from "../imports/client-piramal.png";
import imgStructeasyLogo from "../imports/structeasy-logo.png";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`relative block aspect-[454/58] overflow-hidden ${className}`}>
      <img
        src={imgStructeasyLogo}
        alt="Structeasy"
        className="absolute left-[-7.71%] top-[-74.14%] w-[114.32%] max-w-none"
      />
    </span>
  );
}

function AnimatedHeroWord({ word, delay }: { word: string; delay: number }) {
  return (
    <span className="hero-split-word" aria-hidden="true">
      {Array.from(word).map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className="hero-split-letter"
          style={{ animationDelay: `${delay + index * 55}ms` }}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}

type RevealButtonProps = {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "light" | "orange";
  compact?: boolean;
  className?: string;
};

function RevealButton({
  label,
  onClick,
  type = "button",
  variant = "orange",
  compact = false,
  className = "",
}: RevealButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={label}
      className={`reveal-btn reveal-btn--${variant} ${compact ? "reveal-btn--compact" : ""} ${className}`}
    >
      <span className="reveal-btn__original">{label}</span>
      <span className="reveal-btn__letters" aria-hidden="true">{label}</span>
    </button>
  );
}

// ─── NAVBAR ────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      if (currentScrollY < 80 || currentScrollY < lastScrollYRef.current - 4) {
        setNavVisible(true);
      } else if (currentScrollY > lastScrollYRef.current + 4) {
        setNavVisible(false);
        setMenuOpen(false);
      }

      lastScrollYRef.current = currentScrollY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Services", id: "services" },
    { label: "About us", id: "about" },
    { label: "Projects", id: "projects" },
  ];

  return (
    <nav
      className={`fixed top-[30px] left-1/2 -translate-x-1/2 z-50 w-[min(1170px,calc(100%-40px))] transition-[transform,opacity] duration-300 ease-out ${
        navVisible ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`flex items-center justify-between py-2 pl-6 pr-2 rounded-[56px] border border-white/50 backdrop-blur-[14px] transition-colors duration-300 ${
          scrolled ? "bg-[#0f1e30]/85" : "bg-white/10"
        }`}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex shrink-0 items-center"
          aria-label="Structeasy — back to top"
        >
          <BrandLogo className="w-[132px] sm:w-[150px]" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {nav.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollTo(id);
                }}
                className="text-white font-semibold text-[14px] hover:text-[#ff4d00] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <RevealButton
            label="Contact Us"
            onClick={() => scrollTo("contact")}
            variant="light"
            compact
          />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-2 rounded-2xl bg-[#0f1e30]/95 backdrop-blur-[14px] border border-white/10 p-4 flex flex-col gap-3">
          {nav.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(event) => {
                event.preventDefault();
                scrollTo(id);
                setMenuOpen(false);
              }}
              className="text-white font-semibold text-[15px] text-left px-2 py-1 hover:text-[#ff4d00] transition-colors"
            >
              {label}
            </a>
          ))}
          <RevealButton
            label="Contact Us"
            onClick={() => { scrollTo("contact"); setMenuOpen(false); }}
            compact
            className="w-full"
          />
        </div>
      )}
    </nav>
  );
}

// ─── HERO ──────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[640px] overflow-hidden bg-[#0f1e30] sm:min-h-[730px]">
      <video
        src={heroVideo}
        poster={imgVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 size-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,28,.58)_0%,rgba(8,18,28,.64)_100%)]" />
      <div className="absolute inset-0 bg-black/15" />

      <div className="relative z-10 flex min-h-[640px] items-end justify-center px-5 pb-14 sm:min-h-[730px] sm:px-8 sm:pb-20">
        <div className="flex w-full max-w-[1000px] flex-col items-center text-center">
          <h1
            className="flex items-center justify-center text-[clamp(34px,5.2vw,64px)] font-bold leading-none tracking-[-0.035em] text-white"
          >
            <span className="sr-only">Structural Engineering Consultancy in Mumbai — </span>
            <span className="px-2.5 sm:px-5"><AnimatedHeroWord word="Define" delay={180} /></span>
            <span className="hero-split-divider h-[0.82em] w-px bg-white/80" aria-hidden="true" />
            <span className="px-2.5 sm:px-5"><AnimatedHeroWord word="Design" delay={520} /></span>
            <span className="hero-split-divider hero-split-divider--second h-[0.82em] w-px bg-white/80" aria-hidden="true" />
            <span className="px-2.5 sm:px-5"><AnimatedHeroWord word="Deliver" delay={900} /></span>
          </h1>
          <p className="mt-5 max-w-[720px] text-[14px] leading-relaxed text-white/80 sm:text-[17px]">
            Structural engineering consultancy for safe, efficient RCC and steel structures in Mumbai and across India.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── LOGO STRIP ────────────────────────────────────────────────────────────
const CLIENT_LOGOS = [
  { name: "Adani", img: imgClientAdani },
  { name: "Reliance Industries Limited", img: imgClientReliance },
  { name: "DLF", img: imgClientDlf },
  { name: "Brookfield Properties", img: imgClientBrookfield },
  { name: "Godrej Properties", img: imgClientGodrej },
  { name: "Piramal Realty", img: imgClientPiramal },
];

function LogoStrip() {
  const logoSequence = Array.from(
    { length: 6 },
    (_, i) => CLIENT_LOGOS[i % CLIENT_LOGOS.length],
  );

  return (
    <div className="scroll-reveal bg-[#ecf5ff] h-[110px] sm:h-[150px] overflow-hidden flex items-center" data-reveal="fade">
      <div
        className="flex items-center whitespace-nowrap"
        style={{ animation: "marquee 28s linear infinite", width: "max-content" }}
      >
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14"
            aria-hidden={group === 1}
          >
            {logoSequence.map((client, i) => (
              <div
                key={`${group}-${i}`}
                className="flex h-24 w-56 shrink-0 items-center justify-center px-2 sm:h-32 sm:w-72 sm:px-3"
              >
                <img
                  src={client.img}
                  alt={group === 0 ? client.name : ""}
                  className="max-h-20 w-full object-contain sm:max-h-24"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── ABOUT ─────────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[667px] opacity-50 pointer-events-none">
        <img
          src={imgMontrealLine}
          alt=""
          className="size-full object-cover object-bottom sm:object-contain"
        />
      </div>
      <div className="scroll-reveal relative z-10 flex flex-col items-center gap-14 px-8 text-center border-0 border-transparent">
        <div className="max-w-[1090px]">
          <p className="text-[#ff4d00] text-[16px] font-medium uppercase tracking-wide mb-4">Who We Are</p>
          <h2 className="text-[#0f1e30] text-[clamp(28px,3.5vw,40px)] font-medium leading-[1.25]">
            Engineering strength. Delivering confidence. We partner with architects and developers to turn complex ideas into stable, buildable realities.
          </h2>
        </div>
        <RevealButton
          label="Know more"
          onClick={() => scrollTo("services")}
        />
      </div>
    </section>
  );
}

// ─── SERVICES ──────────────────────────────────────────────────────────────
const ALL_SERVICES = [
  { title: "RCC Design", img: imgRCC },
  { title: "Steel Design", img: imgSteel },
  { title: "Structural Audit", img: imgAudit },
  { title: "Property Valuation", img: imgValuation },
  { title: "Repair and Retrofitting", img: imgRetrofit },
  { title: "Bill Of Quantities (BOQ)", img: imgBOQ },
];

// Shared card — fills its grid cell, consistent label placement
function BentoCard({ img, title }: { img: string; title: string }) {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-[12px] group cursor-pointer">
      <img
        src={img}
        alt={title}
        className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
        draggable={false}
      />
      <div className="absolute inset-0 rounded-[12px] bg-gradient-to-b from-transparent via-transparent to-black" />
      <p className="absolute bottom-4 left-4 right-4 text-[15px] font-semibold leading-[1.2] text-white sm:bottom-5 sm:left-5 sm:right-5 sm:text-[18px]">
        {title}
      </p>
    </div>
  );
}

// ── Mobile swipe stack ──────────────────────────────────────────────────────
function ServiceSwipeStack() {
  const total = ALL_SERVICES.length;
  // `order` holds indices from bottom to top — last item is the top card
  const [order, setOrder] = useState(() => ALL_SERVICES.map((_, i) => i));
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [flying, setFlying] = useState<"left" | "right" | null>(null);
  const [activeArrow, setActiveArrow] = useState<"left" | "right" | null>(null);
  const dragRef = useRef({ active: false, startX: 0 });

  const topIdx = order[order.length - 1];

  const dismiss = (dir: "left" | "right") => {
    setFlying(dir);
    setTimeout(() => {
      setOrder((prev) => {
        const next = [...prev];
        const top = next.pop()!;
        next.unshift(top); // send to bottom of stack
        return next;
      });
      setDragX(0);
      setFlying(null);
    }, 320);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { active: true, startX: e.clientX };
    setDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current.active || flying) return;
    setDragX(e.clientX - dragRef.current.startX);
  };
  const onPointerUp = () => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    setDragging(false);
    if (Math.abs(dragX) > 72) dismiss(dragX > 0 ? "right" : "left");
    else setDragX(0);
  };

  const clickArrow = (dir: "left" | "right") => {
    if (flying) return;
    setDragging(false);
    setActiveArrow(dir);
    window.setTimeout(() => setActiveArrow(null), 360);
    dismiss(dir);
  };

  // Which number card is currently on top (1-based, for the counter)
  const topPosition = ALL_SERVICES.findIndex((_, i) => i === topIdx);
  const dragProgress = Math.min(Math.abs(dragX) / 180, 1);

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Stack area */}
      <div className="relative h-[300px] w-full touch-pan-y select-none">
        {order.map((cardIdx, stackPos) => {
          const isTop = stackPos === order.length - 1;
          const depth = order.length - 1 - stackPos; // 0 = top, 1 = second, …
          if (depth > 2) return null; // only render top 3

          const scale = 1 - depth * 0.05;
          const translateY = depth * 14;

          let style: React.CSSProperties;
          if (isTop) {
            const tx = flying
              ? flying === "right" ? 500 : -500
              : dragX;
            const rotate = flying
              ? flying === "right" ? 18 : -18
              : dragX * 0.07;
            style = {
              transform: `translateX(${tx}px) rotate(${rotate}deg) scale(${1 - dragProgress * 0.035})`,
              opacity: 1 - dragProgress * 0.12,
              transition: dragging
                ? "none"
                : "transform 0.38s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease",
              zIndex: 10,
              cursor: "grab",
              willChange: "transform, opacity",
            };
          } else {
            const liftProgress = depth === 1 ? dragProgress : 0;
            style = {
              transform: `scale(${scale + liftProgress * 0.05}) translateY(${translateY - liftProgress * 14}px)`,
              transition: dragging ? "none" : "transform 0.38s cubic-bezier(0.22, 1, 0.36, 1)",
              zIndex: 10 - depth,
              willChange: "transform",
            };
          }

          return (
            <div
              key={cardIdx}
              className="absolute inset-0 rounded-[14px] overflow-hidden"
              style={style}
              {...(isTop
                ? { onPointerDown, onPointerMove, onPointerUp, onPointerCancel: onPointerUp }
                : {})}
            >
              <BentoCard
                img={ALL_SERVICES[cardIdx].img}
                title={ALL_SERVICES[cardIdx].title}
              />
              {/* Clickable swipe arrows on the top card */}
              {isTop && Math.abs(dragX) < 10 && (
                <div className="pointer-events-none absolute inset-x-0 bottom-14 z-20 flex justify-between px-5">
                  {(["left", "right"] as const).map((dir) => (
                    <button
                      key={dir}
                      type="button"
                      aria-label={`${dir === "left" ? "Previous" : "Next"} service`}
                      onPointerDown={(event) => event.stopPropagation()}
                      onClick={(event) => {
                        event.stopPropagation();
                        clickArrow(dir);
                      }}
                      className={`service-swipe-arrow pointer-events-auto flex size-10 items-center justify-center rounded-full border border-white/55 bg-[#0f1e30]/45 text-white backdrop-blur-sm ${
                        activeArrow === dir ? `service-swipe-arrow--${dir}` : ""
                      }`}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d={dir === "left" ? "M15 18L9 12L15 6" : "M9 6L15 12L9 18"}
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ))}
                </div>
              )}
              {/* Swipe direction tint */}
              {isTop && dragX > 20 && (
                <div className="absolute inset-0 bg-green-500/20 rounded-[14px] pointer-events-none" />
              )}
              {isTop && dragX < -20 && (
                <div className="absolute inset-0 bg-[#ff4d00]/20 rounded-[14px] pointer-events-none" />
              )}
            </div>
          );
        })}
      </div>

      {/* Counter + dots */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-[#0f1e30]/40 text-[12px] font-medium tracking-wide">
          {topPosition + 1} / {total}
        </p>
        <div className="flex gap-1.5">
          {ALL_SERVICES.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === topIdx ? "w-5 bg-[#ff4d00]" : "w-1.5 bg-[#d0d0d0]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="overflow-hidden bg-white px-[clamp(24px,8vw,120px)] py-14 sm:py-24">
      {/* Header */}
      <div className="scroll-reveal flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-12 mb-10 sm:mb-14">
        <div className="lg:w-[518px] shrink-0">
          <p className="text-[#ff4d00] text-[16px] font-medium uppercase mb-2.5">Services</p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-medium text-[#0f1e30] tracking-[-0.8px] leading-normal">
            End-to-End Structural <span className="text-[#4a90d9]">Engineering Services</span>
          </h2>
        </div>
        <p className="flex-1 text-[#414141] text-[18px] sm:text-[20px] leading-[1.4]">
          From initial concept to final construction documentation, we offer a full spectrum of structural engineering services tailored to your project's unique demands.
        </p>
      </div>

      {/* ── Mobile: swipe stack ── */}
      <div className="scroll-reveal reveal-delay-1 sm:hidden" data-reveal="scale">
        <ServiceSwipeStack />
      </div>

      {/* ── Tablet+: reference-style bento grid ── */}
      <div
        className="scroll-reveal reveal-delay-1 hidden grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-4 sm:grid lg:gap-5"
        data-reveal="scale"
        style={{ aspectRatio: "2.15 / 1" }}
      >
        <div className="min-h-0 min-w-0">
          <BentoCard img={imgRCC} title="RCC Design" />
        </div>

        <div className="grid min-w-0 grid-rows-2 gap-4 lg:gap-5">
          <div className="grid min-h-0 grid-cols-2 gap-4 lg:gap-5">
            <BentoCard img={imgSteel} title="Steel Design" />
            <BentoCard img={imgAudit} title="Structural Audit" />
          </div>

          <div className="grid min-h-0 grid-cols-3 gap-4 lg:gap-5">
            <BentoCard img={imgValuation} title="Property Valuation" />
            <BentoCard img={imgRetrofit} title="Repair and Retrofitting" />
            <BentoCard img={imgBOQ} title="Bill Of Quantities (BOQ)" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PROJECTS ──────────────────────────────────────────────────────────────
const PROJECTS = [
  { title: "Admin Building", img: imgProject1 },
  { title: "Dining Building", img: imgProject2 },
  { title: "Food Mall Building", img: imgProject3 },
  { title: "Hotel Complex Building", img: imgProject4 },
  { title: "G+6 Residential Building", img: imgProject5 },
];

function ProjectsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef(0);
  const hoverPausedRef = useRef(false);
  const navigationPausedRef = useRef(false);
  const navigationTimerRef = useRef<number | null>(null);
  const dragRef = useRef({ active: false, startX: 0, startPos: 0 });
  const setWRef = useRef(0);

  const CARD_GAP = 16;
  const SPEED = 1.2;

  // Measure actual rendered card width (responsive) so seamless loop is accurate
  useEffect(() => {
    const measure = () => {
      if (firstCardRef.current) {
        setWRef.current = (firstCardRef.current.offsetWidth + CARD_GAP) * PROJECTS.length;
        // Clamp scroll position when resizing down
        if (posRef.current >= setWRef.current) posRef.current = 0;
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const tick = () => {
      if (!hoverPausedRef.current && !navigationPausedRef.current && !dragRef.current.active && trackRef.current && setWRef.current > 0) {
        posRef.current += SPEED;
        if (posRef.current >= setWRef.current) posRef.current -= setWRef.current;
        trackRef.current.style.transform = `translateX(${-posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    return () => {
      if (navigationTimerRef.current !== null) window.clearTimeout(navigationTimerRef.current);
    };
  }, []);

  const moveByCard = (direction: -1 | 1) => {
    const track = trackRef.current;
    const firstCard = firstCardRef.current;
    const setWidth = setWRef.current;
    if (!track || !firstCard || setWidth <= 0) return;

    if (navigationTimerRef.current !== null) window.clearTimeout(navigationTimerRef.current);
    navigationPausedRef.current = true;

    const cardStep = firstCard.offsetWidth + CARD_GAP;
    let start = posRef.current;

    if (direction === -1 && start < cardStep) {
      start += setWidth;
      posRef.current = start;
      track.style.transition = "none";
      track.style.transform = `translateX(${-start}px)`;
      track.getBoundingClientRect();
    }

    const target = start + direction * cardStep;
    posRef.current = target;
    track.style.transition = "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
    track.style.transform = `translateX(${-target}px)`;

    navigationTimerRef.current = window.setTimeout(() => {
      const normalized = ((posRef.current % setWidth) + setWidth) % setWidth;
      posRef.current = normalized;
      track.style.transition = "none";
      track.style.transform = `translateX(${-normalized}px)`;
      navigationPausedRef.current = false;
      navigationTimerRef.current = null;
    }, 620);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { active: true, startX: e.clientX, startPos: posRef.current };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current.active) return;
    const delta = dragRef.current.startX - e.clientX;
    let next = dragRef.current.startPos + delta;
    const sw = setWRef.current;
    if (next < 0) next += sw;
    if (next >= sw) next -= sw;
    posRef.current = next;
    if (trackRef.current) trackRef.current.style.transform = `translateX(${-posRef.current}px)`;
  };
  const onPointerUp = () => { dragRef.current.active = false; };

  return (
    <section id="projects" className="bg-[#0f1e30] py-12 sm:py-16 overflow-hidden">
      {/* Header */}
      <div className="scroll-reveal flex flex-col sm:flex-row sm:items-end justify-between gap-6 px-[clamp(24px,8vw,120px)] mb-10 sm:mb-14">
        <div>
          <p className="text-[#ff4d00] text-[16px] font-medium uppercase mb-2.5">Featured Projects</p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-medium text-white tracking-[-0.8px] leading-[1.25]">
            Structures That <span className="text-[#4a90d9]">Define Skylines</span>
          </h2>
        </div>
        <div className="flex items-center gap-3 self-start sm:self-auto" aria-label="Case study navigation">
          <button
            type="button"
            onClick={() => moveByCard(-1)}
            aria-label="Previous case study"
            className="flex size-11 items-center justify-center rounded-full border border-white/35 text-white transition-all duration-300 hover:border-[#ff4d00] hover:bg-[#ff4d00] active:scale-95 sm:size-12"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => moveByCard(1)}
            aria-label="Next case study"
            className="flex size-11 items-center justify-center rounded-full border border-white/35 text-white transition-all duration-300 hover:border-[#ff4d00] hover:bg-[#ff4d00] active:scale-95 sm:size-12"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Infinite rail — tripled so the loop is always seamless */}
      <div
        className="scroll-reveal reveal-delay-1 relative cursor-grab select-none active:cursor-grabbing"
        data-reveal="right"
        onMouseEnter={() => { hoverPausedRef.current = true; }}
        onMouseLeave={() => { hoverPausedRef.current = false; }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <div ref={trackRef} className="flex gap-4 will-change-transform" style={{ width: "max-content", paddingLeft: "clamp(24px,8vw,120px)" }}>
          {[...PROJECTS, ...PROJECTS, ...PROJECTS].map((p, i) => (
            <div
              key={i}
              ref={i === 0 ? firstCardRef : undefined}
              className="relative h-[260px] w-[min(400px,78vw)] shrink-0 overflow-hidden rounded-[10px] sm:h-[380px] sm:w-[min(500px,70vw)] lg:h-[550px] lg:w-[777px] group"
            >
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-[10px]" />
              <p className="absolute bottom-5 left-5 right-5 text-left text-[22px] font-medium leading-tight text-white sm:bottom-7 sm:left-7 sm:right-7 sm:text-[28px] lg:bottom-8 lg:left-8 lg:right-8 lg:text-[36px]">
                {p.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── ENGINEERING PROCESS ───────────────────────────────────────────────────
const STEPS = [
  {
    title: "DISCOVER",
    img: imgProcess1,
    lines: [
      "• Understand project requirements",
      "• Review architectural drawings",
      "• Collect site & soil information",
      "• Define client objectives",
    ],
  },
  {
    title: "ANALYZE",
    img: imgProcess2,
    lines: [
      "• Develop structural system",
      "• Calculate structural loads",
      "• Perform structural analysis",
      "• Optimize the design",
    ],
  },
  {
    title: "DESIGN & DETAIL",
    img: imgProcess3,
    lines: [
      "• Design slabs, beams & columns",
      "• Design foundations & staircases",
      "• Prepare reinforcement detailing",
      "• Create structural drawings",
    ],
  },
  {
    title: "DELIVER & SUPPORT",
    img: imgProcess4,
    lines: [
      "• Deliver construction-ready drawings",
      "• Provide technical consultancy",
      "• Review structural requirements",
      "• Resolve site-related queries",
    ],
  },
];

function ProcessSection() {
  const [active, setActive] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  const autoTimerRef = useRef<number | null>(null);

  const change = (i: number, restartTimer = true) => {
    if (restartTimer && autoTimerRef.current !== null) {
      window.clearTimeout(autoTimerRef.current);
      autoTimerRef.current = null;
    }
    if (i === active) {
      if (restartTimer) setTimerKey((key) => key + 1);
      return;
    }
    setActive(i);
    if (restartTimer) setTimerKey((key) => key + 1);
  };

  useEffect(() => {
    autoTimerRef.current = window.setTimeout(() => {
      autoTimerRef.current = null;
      change((active + 1) % STEPS.length, false);
    }, 10000);

    return () => {
      if (autoTimerRef.current !== null) window.clearTimeout(autoTimerRef.current);
    };
  }, [active, timerKey]);

  return (
    <section id="process" className="bg-white py-14 sm:py-24 px-[clamp(24px,8vw,120px)]">
      {/* Header */}
      <div className="scroll-reveal flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-12 mb-16">
        <div className="lg:w-[518px] shrink-0">
          <p className="text-[#ff4d00] text-[16px] font-medium uppercase mb-2.5">Our Process</p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-medium text-[#0f1e30] tracking-[-0.8px] leading-[1.225]">
            Our Engineering <span className="text-[#4a90d9]">Approach</span>
          </h2>
        </div>
        <p className="flex-1 text-[#414141] text-[20px] leading-[1.4]">
          A systematic approach to structural engineering, from initial concept to successful project completion.
        </p>
      </div>

      {/* Content */}
      <div className="scroll-reveal reveal-delay-1 flex flex-col lg:flex-row gap-6 lg:h-[405px]" data-reveal="scale">
        {/* Image panel */}
        <div className="relative rounded-[20px] overflow-hidden lg:w-[663px] h-[220px] sm:h-[300px] lg:h-auto shrink-0">
          {STEPS.map((step, i) => (
            <img
              key={step.title}
              src={step.img}
              alt={i === active ? step.title : ""}
              aria-hidden={i !== active}
              className={`absolute inset-0 size-full object-cover transition-[opacity,transform] duration-700 ease-in-out ${
                i === active ? "scale-100 opacity-100" : "scale-[1.025] opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Accordion with inline process line */}
        <div className="flex flex-col flex-1 justify-center">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex gap-4 sm:gap-5">
              {/* Step indicator column */}
              <div className="flex flex-col items-center shrink-0 pt-0.5">
                {/* Dot */}
                <button
                  onClick={() => change(i)}
                  aria-label={`Show process step ${i + 1}: ${step.title}`}
                  className={`relative size-8 sm:size-9 rounded-full border-2 flex items-center justify-center font-semibold text-[13px] sm:text-[14px] shrink-0 transition-all duration-500 ease-out ${
                    i === active
                      ? "scale-105 bg-[#ff4d00] border-[#ff4d00] text-white shadow-[0_4px_16px_rgba(255,77,0,0.28)]"
                      : "bg-white border-[#e0e0e0] text-black/40 hover:border-[#ff4d00]/50"
                  }`}
                >
                  {i + 1}
                </button>
                {/* Connector line */}
                <div
                  className={`w-[3px] flex-1 my-1.5 rounded-full relative overflow-hidden min-h-[20px] ${
                    i === STEPS.length - 1 ? "bg-gradient-to-b from-[#e8e8e8] to-transparent" : "bg-[#e8e8e8]"
                  }`}
                >
                  {i <= active && (
                    <div
                      key={i === active ? `${active}-${timerKey}` : i}
                      className={`absolute top-0 left-0 w-full rounded-full bg-gradient-to-b from-[#ff4d00] to-[#ff7a3d] ${
                        i === active ? "process-line-progress" : "h-full"
                      }`}
                    />
                  )}
                </div>
              </div>

              {/* Content */}
              <button
                onClick={() => change(i)}
                className="text-left group pb-4 sm:pb-6 flex-1"
              >
                <p
                  className={`font-medium text-[17px] sm:text-[21px] lg:text-[23px] leading-[1.3] mb-2 transition-colors duration-500 ${
                    i === active ? "text-[#ff4d00]" : "text-black/60 group-hover:text-black/80"
                  }`}
                >
                  {step.title}
                </p>
                <div
                  className="grid transition-[grid-template-rows,opacity] duration-700 ease-in-out"
                  style={{ gridTemplateRows: i === active ? "1fr" : "0fr", opacity: i === active ? 1 : 0 }}
                >
                  <div className="min-h-0 overflow-hidden text-[#383838] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[26px]">
                    {step.lines.map((line, j) => (
                      <p key={j}>{line}</p>
                    ))}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CONTACT ───────────────────────────────────────────────────────────────
type FormState = { name: string; email: string; phone: string; service: string; brief: string; privacy: boolean };

const INFO = [
  {
    label: "OFFICE ADDRESS",
    value: "119-120, Shivji Market, Plot 8 & 9, Sector -19D, Vashi, Navi Mumbai-400 703",
    icon: (
      <path d="M14.167 2.833H2.833A1.417 1.417 0 001.417 4.25v8.5c0 .783.633 1.417 1.416 1.417h11.334c.782 0 1.416-.634 1.416-1.417V4.25c0-.782-.634-1.417-1.416-1.417Z M1.417 4.958l7.083 4.584 7.083-4.584" stroke="#1B3A5C" strokeWidth="1.417" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: "PHONE",
    value: "+91 7208865757 / 9326667659",
    icon: (
      <path d="M15.583 11.985v2.125a1.417 1.417 0 01-1.541 1.417 14.008 14.008 0 01-6.108-2.17 13.801 13.801 0 01-4.25-4.25A14.008 14.008 0 011.517 2.99 1.417 1.417 0 012.929 1.417H5.054a1.417 1.417 0 011.417 1.218c.09.68.255 1.347.495 1.988a1.417 1.417 0 01-.319 1.496l-.938.938a11.334 11.334 0 004.25 4.25l.938-.938a1.417 1.417 0 011.496-.319c.641.24 1.308.405 1.988.496a1.417 1.417 0 011.202 1.439Z" stroke="#1B3A5C" strokeWidth="1.417" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: "EMAIL",
    value: "structeasy@gmail.com",
    icon: (
      <path d="M14.167 2.833H2.833A1.417 1.417 0 001.417 4.25v8.5c0 .783.633 1.417 1.416 1.417h11.334c.782 0 1.416-.634 1.416-1.417V4.25c0-.782-.634-1.417-1.416-1.417Z M1.417 4.958l7.083 4.584 7.083-4.584" stroke="#1B3A5C" strokeWidth="1.417" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", phone: "", service: "", brief: "", privacy: false });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.privacy) e.privacy = true as any;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: "", email: "", phone: "", service: "", brief: "", privacy: false }); }, 3500);
  };

  const field = "w-full bg-[#f5f7fa] rounded px-5 py-3 text-[16px] text-[#414141] outline-none focus:ring-2 focus:ring-[#4a90d9]/30 transition-all";

  return (
    <section id="contact" className="bg-[#ecf5ff] py-14 sm:py-24 px-[clamp(24px,8vw,120px)]">
      <div className="scroll-reveal mb-10 text-center">
        <p className="text-[#ff4d00] text-[16px] font-medium uppercase mb-2.5">Contact Us</p>
        <h2 className="text-[clamp(28px,3.5vw,40px)] font-medium text-[#111827] tracking-[-0.9px]">
          {"Let's Build Something "}<span className="text-[#4a90d9]">Extraordinary</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Info */}
        <div className="scroll-reveal flex flex-col gap-12" data-reveal="left">
          <p className="text-[#414141] text-[20px] leading-[1.4]">
            Ready to discuss your project? Our team of structural engineers is here to provide expert consultation, detailed proposals, and technical support from day one.
          </p>
          <div className="flex flex-col gap-6">
            {INFO.map(({ label, value, icon }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="bg-[rgba(27,58,92,0.08)] size-10 rounded-[6px] flex items-center justify-center shrink-0">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">{icon}</svg>
                </div>
                <div>
                  <p className="text-[#ff4d00] text-[10px] tracking-[1px] uppercase mb-1">{label}</p>
                  {label === "PHONE" ? (
                    <p className="text-[#0f1e30] text-[16px]">
                      <a className="hover:text-[#ff4d00] hover:underline" href="tel:+917208865757">+91 7208865757</a>
                      {" / "}
                      <a className="hover:text-[#ff4d00] hover:underline" href="tel:+919326667659">9326667659</a>
                    </p>
                  ) : label === "EMAIL" ? (
                    <a className="text-[#0f1e30] text-[16px] hover:text-[#ff4d00] hover:underline" href="mailto:structeasy@gmail.com">
                      {value}
                    </a>
                  ) : (
                    <address className="text-[#0f1e30] text-[16px] not-italic">{value}</address>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={submit} noValidate className="scroll-reveal reveal-delay-1 bg-white rounded-[10px] p-5 sm:p-10 flex flex-col gap-4" data-reveal="right">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
              <div className="size-16 rounded-full bg-green-100 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17L4 12" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p className="text-[#0f1e30] text-[22px] font-semibold">Message Sent!</p>
              <p className="text-[#414141] text-[16px]">{"We'll get back to you within 24 hours."}</p>
            </div>
          ) : (
            <>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input required className={`${field} ${errors.name ? "ring-2 ring-red-400" : ""}`} placeholder="Full Name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
                  {errors.name && <p className="text-red-500 text-[12px] mt-1">{errors.name}</p>}
                </div>
                <div className="flex-1">
                  <input required type="email" className={`${field} ${errors.email ? "ring-2 ring-red-400" : ""}`} placeholder="Email Address" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
                  {errors.email && <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <input
                  required
                  type="tel"
                  className={`${field} ${errors.phone ? "ring-2 ring-red-400" : ""}`}
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                />
                {errors.phone && <p className="text-red-500 text-[12px] mt-1">{errors.phone}</p>}
              </div>

              <div className="relative">
                <select
                  className={`${field} appearance-none cursor-pointer`}
                  value={form.service}
                  onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                >
                  <option value="" disabled>Service Required</option>
                  {["Structural Design","RCC & Steel","Peer Review","Value Engineering","Construction Drawings","Property Valuation","Repair and Retrofitting","BOQ"].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <svg className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 9L12 15L6 9" stroke="#414141" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <textarea className={`${field} resize-none h-36`} placeholder="Project Brief" value={form.brief} onChange={(e) => setForm((f) => ({ ...f, brief: e.target.value }))} />

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-[#d6d6d6] accent-[#ff4d00]"
                  checked={form.privacy}
                  onChange={(e) => setForm((f) => ({ ...f, privacy: e.target.checked }))}
                />
                <span className={`text-[14px] font-light ${errors.privacy ? "text-red-500" : "text-[#414141]"}`}>
                  You agree to our friendly{" "}
                  <span className="text-[#ff4d00] font-medium hover:underline cursor-pointer">privacy policy.</span>
                </span>
              </label>

              <RevealButton
                label="Submit"
                type="submit"
                className="mt-4 w-full sm:mt-6 sm:w-auto sm:self-start"
              />
            </>
          )}
        </form>
      </div>
    </section>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────────────────
const FOOTER_LINKS: Record<string, { label: string; id: string }[]> = {
  Company: [
    { label: "About Us", id: "about" },
    { label: "Contact Us", id: "contact" },
  ],
  Services: ALL_SERVICES.map(({ title }) => ({ label: title, id: "services" })),
  Projects: [
    { label: "Project Portfolio", id: "projects" },
    { label: "Our Process", id: "process" },
  ],
};

function Footer() {
  return (
    <footer className="bg-[#0f1e30] pt-16 px-[clamp(24px,8vw,120px)]">
      <div className="scroll-reveal flex flex-col lg:flex-row items-start justify-between gap-12 mb-14">
        {/* Brand */}
        <div className="max-w-[320px]">
          <BrandLogo className="mb-5 w-[210px]" />
          <p className="text-white/45 text-[13px] leading-[1.625] mb-6">
            STRUCTEASY is a professional RCC Structural Design &amp; Engineering Consultancy focused on delivering safe, efficient, and practical structural solutions for modern construction projects.
          </p>
          <div className="flex gap-3" aria-hidden="true">
            {[
              <path key="li" d="M10 5c.995 0 1.948.395 2.652 1.098A3.75 3.75 0 0113.75 8.75v4.375H11.25V8.75a1.25 1.25 0 00-2.5 0v4.375H6.25V8.75A3.75 3.75 0 0110 5ZM3.75 5.625H1.25v7.5h2.5v-7.5ZM2.5 3.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5Z" />,
              <path key="tw" d="M13.75 2.5s-.438 1.313-1.25 2.125c1 6.25-5.875 10.813-11.25 7.25 1.375.063 2.75-.375 3.75-1.25C1.875 9.688.313 6 1.875 3.125 3.25 4.75 5.375 5.688 7.5 5.625 6.938 3 10 1.5 11.875 3.25c.688 0 1.875-.75 1.875-.75Z" />,
              <>
                <path key="ig1" d="M10.625 1.25H4.375A3.125 3.125 0 001.25 4.375v6.25a3.125 3.125 0 003.125 3.125h6.25a3.125 3.125 0 003.125-3.125v-6.25A3.125 3.125 0 0010.625 1.25Z" />
                <path key="ig2" d="M10.9375 4.0625h.0063" />
              </>,
            ].map((paths, i) => (
              <span key={i} className="size-9 rounded-[6px] border border-white/10 flex items-center justify-center">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="white" strokeOpacity="0.4" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                  {paths}
                </svg>
              </span>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="flex flex-wrap gap-x-16 gap-y-8">
          {Object.entries(FOOTER_LINKS).map(([cat, links]) => (
            <div key={cat}>
              <p className="text-white/35 text-[11px] font-medium tracking-[2.75px] uppercase mb-4">{cat}</p>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ label, id }) => (
                  <li key={label}>
                    <a href={`#${id}`} className="text-white/50 text-[13px] hover:text-white/80 transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/[0.08] py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/25 text-[11px] tracking-[0.275px] text-center sm:text-left">
          © 2026 STRUCTEASY Engineering Consultancy. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
            <span key={l} className="text-white/25 text-[11px]">
              {l}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── SCROLL TO TOP ──────────────────────────────────────────────────────────
function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-4 right-4 sm:bottom-[50px] sm:right-[40px] bg-[#0f1e30] border border-white size-11 sm:size-12 rounded-full flex items-center justify-center hover:bg-[#1b3a5c] active:scale-90 transition-all z-50 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 15L12 9L6 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

// ─── APP ───────────────────────────────────────────────────────────────────
export default function App() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".scroll-reveal"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <main>
        <HeroSection />
        <LogoStrip />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
