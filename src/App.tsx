import { useState, useEffect, useRef } from "react";

import imgVideo from "../imports/0cb14c6e231a2dbda03b4bfc9a9ba5feafe896ea.png";
import imgMontrealLine from "../imports/37e5e1636a7dc6b5b4e3d39b132d8cd94103f00a.png";
import imgProcess1 from "../imports/af7e83a41f34747b1027c252e666145c786fcdac.png";
import imgProcess2 from "../imports/bdcf7125c185c9b1e8955a8775d9feb612ce356c.png";
import imgProcess3 from "../imports/a46424e92dcc4159900a5da96ba368db432cf792.png";
import imgProcess4 from "../imports/1875a18b710b3b61b97d86f6250dfab374417946.png";
import imgRCC from "./imports/full-shot-people-learning-language.jpg";
import imgSteel from "../imports/b8210939dcd3db50ec6c1260d69ee812933a7bbe.png";
import imgAudit from "../imports/0f9db395486ff2a99be32c814511700a4843e46a.png";
import imgValuation from "../imports/788659de0a15c2e1b9703d0b7eb3f6dbdad5eeb8.png";
import imgRetrofit from "../imports/c8f43005b54b07479181409c5d6f90606c3daeaf.png";
import imgBOQ from "../imports/6e92b631f87e6de5f9a9cd840258230e753f6284.png";
import imgProject1 from "../imports/58419233a2f1fc9a0672901d502746b29d18313c.png";
import imgProject2 from "../imports/ec0e71f510e4c6626e03331ed14fee76076fb320.png";
import imgProject3 from "../imports/02e0d7b8ca05321b86e5c69e02aeedd7d9d97d4b.png";
import imgProject4 from "../imports/cf645c6dcc61ea039ec9fca360208c22aff35817.png";
import imgProject5 from "../imports/40ade2b2d5502a548052586ac779b32099e9b3ed.png";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

// ─── NAVBAR ────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Services", id: "services" },
    { label: "About us", id: "about" },
    { label: "Projects", id: "projects" },
  ];

  return (
    <nav className="fixed top-[30px] left-1/2 -translate-x-1/2 z-50 w-[min(1170px,calc(100%-40px))]">
      <div
        className={`flex items-center justify-between pl-4 pr-2 h-[54px] rounded-[56px] border border-white/50 backdrop-blur-[14px] transition-colors duration-300 ${
          scrolled ? "bg-[#0f1e30]/85" : "bg-white/10"
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 shrink-0"
        >
          <div className="bg-[#4a90d9] size-8 rounded-[6px] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M4.5 16.5V3C4.5 2.17 5.17 1.5 6 1.5h6c.83 0 1.5.67 1.5 1.5v13.5H4.5Z"
                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
              />
              <path d="M1.5 16.5h15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M7.5 4.5h3M7.5 7.5h3M7.5 10.5h3M7.5 13.5h3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-white font-semibold text-[15px] tracking-[-0.375px] leading-[1.5]">STRUCTURA</p>
            <p className="text-[#4a90d9] text-[10px] tracking-[2px] uppercase leading-none">Engineering</p>
          </div>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {nav.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-white font-semibold text-[14px] hover:text-[#ff4d00] transition-colors"
              >
                {label}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo("contact")}
            className="bg-white text-[#0f1e30] font-semibold text-[14px] px-4 py-3 rounded-[40px] hover:bg-[#ff4d00] hover:text-white transition-colors"
          >
            Contact Us
          </button>
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
            <button
              key={id}
              onClick={() => { scrollTo(id); setMenuOpen(false); }}
              className="text-white font-semibold text-[15px] text-left px-2 py-1 hover:text-[#ff4d00] transition-colors"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => { scrollTo("contact"); setMenuOpen(false); }}
            className="bg-[#ff4d00] text-white font-semibold text-[14px] px-4 py-3 rounded-[40px] text-center"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── HERO ──────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[600px] sm:min-h-[730px] overflow-hidden">
      <img src={imgVideo} alt="" className="absolute inset-0 size-full object-cover" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(0deg,rgba(0,0,0,.4) 0%,rgba(102,102,102,.4) 100%),linear-gradient(90deg,rgba(0,0,0,.6) 0%,rgba(0,0,0,.6) 100%)",
        }}
      />

      <div className="relative z-10 min-h-[600px] sm:min-h-[730px] flex flex-col items-center justify-end gap-8 sm:gap-10 pb-16 sm:pb-20 px-4">
        {/* Headline */}
        <div className="flex flex-col items-center gap-4 sm:gap-5 w-full">
          <div className="flex flex-row items-center gap-[10px] sm:gap-[18px]">
            {["Define", "Design", "Deliver"].map((word, i) => (
              <div
                key={word}
                className={`flex items-center justify-center h-10 sm:h-14 px-1.5 sm:px-2.5 sm:pr-5 ${
                  i < 2 ? "border-r-2 border-white pr-3 sm:pr-5" : ""
                }`}
              >
                <span className="text-[clamp(22px,5.5vw,64px)] font-bold text-white tracking-[-0.5px] sm:tracking-[-1px] leading-none">
                  {word}
                </span>
              </div>
            ))}
          </div>
          <p className="text-[clamp(15px,2vw,22px)] text-white/95 font-['Figtree',sans-serif] text-center max-w-[790px] leading-[1.6]">
            Expert structural solutions for complex buildings and infrastructure. We transform architectural vision into enduring reality.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-row gap-3 sm:gap-6 items-center">
          <button
            onClick={() => scrollTo("services")}
            className="bg-[#ff4d00] text-white font-semibold text-[14px] sm:text-[18px] px-5 sm:px-8 py-3 sm:py-4 rounded-[48px] hover:bg-[#e54400] active:scale-95 transition-all whitespace-nowrap"
          >
            Our Services
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="border border-white text-white font-semibold text-[14px] sm:text-[18px] px-5 sm:px-8 py-3 sm:py-4 rounded-[48px] hover:bg-white/10 active:scale-95 transition-all whitespace-nowrap"
          >
            Consult With Us
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── LOGO STRIP ────────────────────────────────────────────────────────────
const PARTNERS = ["JEEP", "HONDA", "TATA PROJECTS", "GODREJ", "L&T", "PRESTIGE", "BRIGADE", "SOBHA", "DLF", "SHAPOORJI"];

function LogoStrip() {
  return (
    <div className="bg-[#0f1e30] h-[100px] sm:h-[150px] overflow-hidden flex items-center">
      <div
        className="flex gap-10 sm:gap-16 items-center whitespace-nowrap"
        style={{ animation: "marquee 28s linear infinite", width: "max-content" }}
      >
        {[...PARTNERS, ...PARTNERS].map((name, i) => (
          <span key={i} className="text-white/30 font-bold text-[14px] sm:text-[20px] tracking-[3px] sm:tracking-[4px] uppercase shrink-0 px-3 sm:px-4">
            {name}
          </span>
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
        <img src={imgMontrealLine} alt="" className="w-full h-full object-cover object-top" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-14 px-8 text-center border-0 border-transparent">
        <div className="max-w-[1090px]">
          <p className="text-[#ff4d00] text-[16px] font-medium uppercase tracking-wide mb-4">Who We Are</p>
          <p className="text-[#0f1e30] text-[clamp(28px,3.5vw,40px)] font-medium leading-[1.25]">
            Engineering strength. Delivering confidence. We partner with architects and developers to turn complex ideas into stable, buildable realities.
          </p>
        </div>
        <button
          onClick={() => scrollTo("services")}
          className="border border-white bg-white text-[#303030] font-semibold text-[18px] px-8 py-4 rounded-[48px] hover:bg-white/90 active:scale-95 transition-all"
        >
          Know more
        </button>
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 rounded-[12px]" />
      <p className="absolute bottom-5 left-5 right-5 text-white font-semibold text-[16px] sm:text-[18px] leading-snug">
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
  const [flying, setFlying] = useState<"left" | "right" | null>(null);
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
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragRef.current.active || flying) return;
    setDragX(e.clientX - dragRef.current.startX);
  };
  const onPointerUp = () => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    if (Math.abs(dragX) > 72) dismiss(dragX > 0 ? "right" : "left");
    else setDragX(0);
  };

  // Which number card is currently on top (1-based, for the counter)
  const topPosition = ALL_SERVICES.findIndex((_, i) => i === topIdx);

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Stack area */}
      <div className="relative w-full h-[300px] select-none">
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
              transform: `translateX(${tx}px) rotate(${rotate}deg)`,
              transition: flying ? "transform 0.32s ease" : "none",
              zIndex: 10,
              cursor: "grab",
            };
          } else {
            style = {
              transform: `scale(${scale}) translateY(${translateY}px)`,
              transition: "transform 0.3s ease",
              zIndex: 10 - depth,
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
              <BentoCard img={ALL_SERVICES[cardIdx].img} title={ALL_SERVICES[cardIdx].title} />
              {/* Swipe hint arrows on top card */}
              {isTop && !flying && Math.abs(dragX) < 10 && (
                <div className="absolute inset-x-0 bottom-14 flex justify-between px-5 pointer-events-none opacity-50">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
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
    <section id="services" className="py-14 sm:py-24 px-[clamp(24px,8vw,120px)] bg-white">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-12 mb-10 sm:mb-14">
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
      <div className="sm:hidden">
        <ServiceSwipeStack />
      </div>

      {/* ── Tablet+: bento grid ── */}
      <div
        className="hidden sm:grid gap-4 lg:gap-5"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "220px 220px 220px",
        }}
      >
        <div style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }}>
          <BentoCard img={imgRCC} title="RCC Design" />
        </div>
        <div style={{ gridColumn: "3", gridRow: "1" }}>
          <BentoCard img={imgSteel} title="Steel Design" />
        </div>
        <div style={{ gridColumn: "3", gridRow: "2" }}>
          <BentoCard img={imgAudit} title="Structural Audit" />
        </div>
        <div style={{ gridColumn: "1", gridRow: "3" }}>
          <BentoCard img={imgValuation} title="Property Valuation" />
        </div>
        <div style={{ gridColumn: "2", gridRow: "3" }}>
          <BentoCard img={imgRetrofit} title="Repair and Retrofitting" />
        </div>
        <div style={{ gridColumn: "3", gridRow: "3" }}>
          <BentoCard img={imgBOQ} title="Bill Of Quantities (BOQ)" />
        </div>
      </div>
    </section>
  );
}

// ─── PROJECTS ──────────────────────────────────────────────────────────────
const PROJECTS = [
  { title: "Commercial Tower", img: imgProject1 },
  { title: "Steel Bridge", img: imgProject2 },
  { title: "Residential Complex", img: imgProject3 },
  { title: "Industrial Hub", img: imgProject4 },
  { title: "Infrastructure", img: imgProject5 },
];

function ProjectsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const dragRef = useRef({ active: false, startX: 0, startPos: 0 });
  const setWRef = useRef(0);

  const CARD_GAP = 16;
  const SPEED = 0.6;

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
      if (!pausedRef.current && !dragRef.current.active && trackRef.current && setWRef.current > 0) {
        posRef.current += SPEED;
        if (posRef.current >= setWRef.current) posRef.current -= setWRef.current;
        trackRef.current.style.transform = `translateX(${-posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

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
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 px-[clamp(24px,8vw,120px)] mb-10 sm:mb-14">
        <div>
          <p className="text-[#ff4d00] text-[16px] font-medium uppercase mb-2.5">Featured Projects</p>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-medium text-white tracking-[-0.8px] leading-[1.25]">
            Structures That <span className="text-[#4a90d9]">Define Skylines</span>
          </h2>
        </div>
        <button className="text-[#ff4d00] font-semibold text-[16px] hover:underline transition-all self-start sm:self-auto">
          View all
        </button>
      </div>

      {/* Infinite rail — tripled so the loop is always seamless */}
      <div
        className="cursor-grab active:cursor-grabbing select-none"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
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
              className="relative h-[260px] sm:h-[380px] lg:h-[550px] w-[min(400px,78vw)] sm:w-[min(500px,70vw)] lg:w-[570px] shrink-0 rounded-[10px] overflow-hidden group"
            >
              <img
                src={p.img}
                alt={p.title}
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 rounded-[10px]" />
              <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white font-semibold text-[18px] sm:text-[22px] lg:text-[28px] whitespace-nowrap">
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
    title: "Initial Consultation",
    img: imgProcess1,
    lines: [
      "A focused consulting approach to align engineering strategies with client objectives.",
      "• Define structural requirements and project scope",
      "• Conduct feasibility and planning studies",
      "• Develop and finalize construction drawings",
    ],
  },
  {
    title: "Design & Planning",
    img: imgProcess2,
    lines: [
      "Detailed design process translating concepts into precise structural plans.",
      "• Structural system selection and optimization",
      "• Load analysis and safety factor assessment",
      "• Coordination with architectural and MEP teams",
    ],
  },
  {
    title: "Analysis & Design",
    img: imgProcess3,
    lines: [
      "Rigorous computational analysis ensuring structural integrity and code compliance.",
      "• Finite element analysis and modeling",
      "• Seismic and wind load calculations",
      "• Material optimization and cost efficiency",
    ],
  },
  {
    title: "Drawing & Delivery",
    img: imgProcess4,
    lines: [
      "Comprehensive documentation package ready for construction and regulatory approval.",
      "• Detailed construction drawings and specifications",
      "• BOQ and material take-offs",
      "• Review meetings and client sign-off",
    ],
  },
];

function ProcessSection() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const change = (i: number) => {
    if (i === active) return;
    setFading(true);
    setTimeout(() => { setActive(i); setFading(false); }, 220);
  };


  return (
    <section className="bg-white py-14 sm:py-24 px-[clamp(24px,8vw,120px)]">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end gap-8 lg:gap-12 mb-16">
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
      <div className="flex flex-col lg:flex-row gap-6 lg:h-[405px]">
        {/* Image panel */}
        <div className="relative rounded-[20px] overflow-hidden lg:w-[663px] h-[220px] sm:h-[300px] lg:h-auto shrink-0">
          <img
            src={STEPS[active].img}
            alt={STEPS[active].title}
            className={`absolute inset-0 size-full object-cover transition-opacity duration-220 ${fading ? "opacity-0" : "opacity-100"}`}
          />
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
                  className={`size-8 sm:size-9 rounded-full border-2 flex items-center justify-center font-semibold text-[13px] sm:text-[14px] shrink-0 transition-all duration-300 ${
                    i === active
                      ? "bg-[#ff4d00] border-[#ff4d00] text-white"
                      : "bg-white border-[#e0e0e0] text-black/40 hover:border-[#ff4d00]/50"
                  }`}
                >
                  {i + 1}
                </button>
                {/* Connector line */}
                {i < STEPS.length - 1 && (
                  <div className="w-[2px] flex-1 my-1.5 rounded-full bg-[#e8e8e8] relative overflow-hidden min-h-[20px]">
                    <div
                      className="absolute top-0 left-0 w-full bg-[#ff4d00] rounded-full transition-all duration-400"
                      style={{ height: i < active ? "100%" : "0%" }}
                    />
                  </div>
                )}
              </div>

              {/* Content */}
              <button
                onClick={() => change(i)}
                className="text-left group pb-4 sm:pb-6 flex-1"
              >
                <p
                  className={`font-medium text-[17px] sm:text-[21px] lg:text-[23px] leading-[1.3] mb-2 transition-colors ${
                    i === active ? "text-[#ff4d00]" : "text-black/60 group-hover:text-black/80"
                  }`}
                >
                  {step.title}
                </p>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: i === active ? "250px" : "0px", opacity: i === active ? 1 : 0 }}
                >
                  <div className="text-[#383838] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[26px]">
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
    value: "12th Floor, Techno Park, Whitefield, Bangalore — 560066",
    icon: (
      <path d="M14.167 2.833H2.833A1.417 1.417 0 001.417 4.25v8.5c0 .783.633 1.417 1.416 1.417h11.334c.782 0 1.416-.634 1.416-1.417V4.25c0-.782-.634-1.417-1.416-1.417Z M1.417 4.958l7.083 4.584 7.083-4.584" stroke="#1B3A5C" strokeWidth="1.417" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: "PHONE",
    value: "+91 80 4567 8900",
    icon: (
      <path d="M15.583 11.985v2.125a1.417 1.417 0 01-1.541 1.417 14.008 14.008 0 01-6.108-2.17 13.801 13.801 0 01-4.25-4.25A14.008 14.008 0 011.517 2.99 1.417 1.417 0 012.929 1.417H5.054a1.417 1.417 0 011.417 1.218c.09.68.255 1.347.495 1.988a1.417 1.417 0 01-.319 1.496l-.938.938a11.334 11.334 0 004.25 4.25l.938-.938a1.417 1.417 0 011.496-.319c.641.24 1.308.405 1.988.496a1.417 1.417 0 011.202 1.439Z" stroke="#1B3A5C" strokeWidth="1.417" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    label: "EMAIL",
    value: "hello@structura-eng.com",
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
    <section id="contact" className="bg-[#f5f7fa] py-14 sm:py-24 px-[clamp(24px,8vw,120px)]">
      <div className="mb-10 text-center">
        <p className="text-[#ff4d00] text-[16px] font-medium uppercase mb-2.5">Contact Us</p>
        <h2 className="text-[clamp(28px,3.5vw,40px)] font-medium text-[#111827] tracking-[-0.9px]">
          {"Let's Build Something "}<span className="text-[#4a90d9]">Extraordinary</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Info */}
        <div className="flex flex-col gap-12">
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
                  <p className="text-[#0f1e30] text-[16px]">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={submit} noValidate className="bg-white rounded-[10px] p-5 sm:p-10 flex flex-col gap-4">
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
                  <input className={`${field} ${errors.name ? "ring-2 ring-red-400" : ""}`} placeholder="Full Name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
                  {errors.name && <p className="text-red-500 text-[12px] mt-1">{errors.name}</p>}
                </div>
                <div className="flex-1">
                  <input type="email" className={`${field} ${errors.email ? "ring-2 ring-red-400" : ""}`} placeholder="Email Address" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
                  {errors.email && <p className="text-red-500 text-[12px] mt-1">{errors.email}</p>}
                </div>
              </div>

              <input className={field} placeholder="Phone Number" value={form.phone} onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))} />

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

              <button
                type="submit"
                className="w-full sm:w-auto bg-[#ff4d00] text-white font-semibold text-[18px] px-8 py-4 rounded-[48px] sm:self-start hover:bg-[#e54400] active:scale-95 transition-all mt-4 sm:mt-6"
              >
                Submit
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────────────────
const FOOTER_LINKS: Record<string, string[]> = {
  Company: ["About Us", "Our Team", "Careers", "News & Updates"],
  Services: ["Structural Design", "RCC & Steel", "Peer Review", "Value Engineering", "Construction Drawings"],
  Projects: ["Residential", "Commercial", "Industrial", "Infrastructure"],
};

function Footer() {
  return (
    <footer className="bg-[#0f1e30] pt-16 px-[clamp(24px,8vw,120px)]">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-14">
        {/* Brand */}
        <div className="max-w-[320px]">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="bg-[#4a90d9] size-8 rounded-[6px] flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4.5 16.5V3c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5v13.5H4.5Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M1.5 16.5h15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M7.5 4.5h3M7.5 7.5h3M7.5 10.5h3M7.5 13.5h3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="text-white font-semibold text-[15px] tracking-[-0.375px]">STRUCTURA</p>
              <p className="text-[#4a90d9] text-[10px] tracking-[2px] uppercase">Engineering</p>
            </div>
          </div>
          <p className="text-white/45 text-[13px] leading-[1.625] mb-6">
            Premier structural engineering consultancy delivering precision-engineered solutions across residential, commercial, industrial, and infrastructure sectors.
          </p>
          <div className="flex gap-3">
            {[
              <path key="li" d="M10 5c.995 0 1.948.395 2.652 1.098A3.75 3.75 0 0113.75 8.75v4.375H11.25V8.75a1.25 1.25 0 00-2.5 0v4.375H6.25V8.75A3.75 3.75 0 0110 5ZM3.75 5.625H1.25v7.5h2.5v-7.5ZM2.5 3.75a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5Z" />,
              <path key="tw" d="M13.75 2.5s-.438 1.313-1.25 2.125c1 6.25-5.875 10.813-11.25 7.25 1.375.063 2.75-.375 3.75-1.25C1.875 9.688.313 6 1.875 3.125 3.25 4.75 5.375 5.688 7.5 5.625 6.938 3 10 1.5 11.875 3.25c.688 0 1.875-.75 1.875-.75Z" />,
              <>
                <path key="ig1" d="M10.625 1.25H4.375A3.125 3.125 0 001.25 4.375v6.25a3.125 3.125 0 003.125 3.125h6.25a3.125 3.125 0 003.125-3.125v-6.25A3.125 3.125 0 0010.625 1.25Z" />
                <path key="ig2" d="M10.9375 4.0625h.0063" />
              </>,
            ].map((paths, i) => (
              <a key={i} href="#" className="size-9 rounded-[6px] border border-white/10 flex items-center justify-center hover:border-white/30 hover:bg-white/5 transition-all">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="white" strokeOpacity="0.4" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                  {paths}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="flex flex-wrap gap-x-16 gap-y-8">
          {Object.entries(FOOTER_LINKS).map(([cat, links]) => (
            <div key={cat}>
              <p className="text-white/35 text-[11px] font-medium tracking-[2.75px] uppercase mb-4">{cat}</p>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/50 text-[13px] hover:text-white/80 transition-colors">
                      {link}
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
          © 2025 STRUCTURA Engineering Consultancy Pvt. Ltd. All rights reserved.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
            <a key={l} href="#" className="text-white/25 text-[11px] hover:text-white/50 transition-colors">
              {l}
            </a>
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
  return (
    <div className="bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <HeroSection />
      <LogoStrip />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
