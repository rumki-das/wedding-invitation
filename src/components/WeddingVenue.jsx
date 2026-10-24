import { useState, useEffect, useMemo } from "react";
import { MapPin, CalendarDays, Clock } from "lucide-react";
import Reveal from "./common/Reveal";
import Kalka from "./common/Kalka";
import { useRevealOnce } from "./common/hooks";
import { C, IMG_CEREMONY_WEDDING } from "./common/theme";

const wedding = {
  date: "Wednesday, 25 November 2026",
  time: "4:51 PM – 8:41 PM",
  venue: "Banijya Bhaban",
  venueDetail: "Raiganj",
  mapUrl: "https://maps.app.goo.gl/GPjZbdu7w2tEP75f7",
};

/* ---------- Celebration burst — party-popper style, once the details are revealed ---------- */
function CelebrationBurst({ show }) {
  const particles = useMemo(() => {
    const emojis = ["🎉", "✨", "🎊", "🌸", "⭐"];
    return Array.from({ length: 22 }).map((_, i) => {
      const angle = Math.random() * 360;
      const dist = 55 + Math.random() * 70;
      const rad = (angle * Math.PI) / 180;
      return {
        tx: Math.cos(rad) * dist, ty: Math.sin(rad) * dist,
        delay: Math.random() * 0.2,
        isEmoji: Math.random() > 0.45,
        emoji: emojis[i % emojis.length],
        color: [C.gold, C.goldLight, C.maroon, "#ffffff"][i % 4],
      };
    });
  }, []);
  if (!show) return null;
  return (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20 overflow-visible">
      {particles.map((p, i) =>
        p.isEmoji ? (
          <span key={i} className="absolute text-lg" style={{ "--tx": `${p.tx}px`, "--ty": `${p.ty}px`, animation: `confettiPop 1s ease-out ${p.delay}s forwards` }}>{p.emoji}</span>
        ) : (
          <span key={i} className="absolute rounded-full" style={{ width: 6, height: 6, background: p.color, "--tx": `${p.tx}px`, "--ty": `${p.ty}px`, animation: `confettiPop 0.9s ease-out ${p.delay}s forwards` }} />
        )
      )}
    </div>
  );
}

/* ---------- Wedding date & venue: one card, details revealed on scroll ---------- */
export default function WeddingVenue() {
  const [detailsRef, revealed] = useRevealOnce(0.6);
  const [celebrating, setCelebrating] = useState(false);
  useEffect(() => {
    if (!revealed) return;
    const t1 = setTimeout(() => setCelebrating(true), 500);
    const t2 = setTimeout(() => setCelebrating(false), 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [revealed]);

  return (
    <section className="relative px-6 py-16 md:py-24 overflow-hidden" style={{ background: `linear-gradient(180deg, ${C.goldPale} 0%, ${C.ivory} 15%, ${C.ivory} 85%, ${C.goldPale} 100%)` }}>
      <Kalka className="absolute top-4 left-2 w-7 h-10 opacity-70" />
      <Kalka className="absolute top-4 right-2 w-7 h-10 opacity-70" flip />
      <div className="max-w-xl md:max-w-3xl mx-auto">
        <Reveal>
          <h2 className="text-center text-3xl md:text-5xl lg:text-6xl mb-2 md:mb-4" style={{ color: C.maroonDeep }}>The Wedding</h2>
          <p className="text-center text-lg mb-8 md:mb-12" style={{ color: `${C.brown}99` }}>Join us as we begin our journey together</p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="rounded-lg overflow-hidden relative" style={{ boxShadow: `0 10px 24px -12px ${C.maroonDeep}99` }}>
            <div className="w-full aspect-video overflow-hidden"><img src={IMG_CEREMONY_WEDDING} alt="Wedding Ceremony" className="w-full h-full object-cover" /></div>
            <div ref={detailsRef} className="relative overflow-hidden" style={{ background: C.ivory, border: `1px solid ${C.gold}55`, borderTop: "none" }}>
              <div className="relative p-6 md:p-10 text-center" style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? "translateY(0)" : "translateY(14px)",
                transition: "opacity 0.8s ease 0.45s, transform 0.8s cubic-bezier(.2,.7,.2,1) 0.45s",
              }}>
                <CelebrationBurst show={celebrating} />
                <div className="flex items-center justify-center gap-2">
                  <CalendarDays size={18} color={C.maroon} className="shrink-0" />
                  <span className="text-base md:text-xl tracking-widest uppercase" style={{ color: C.maroonDeep, fontFamily: "Marcellus, serif" }}>{wedding.date}</span>
                </div>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Clock size={17} color={C.maroon} className="shrink-0" />
                  <p className="text-lg md:text-xl" style={{ color: C.brown }}>{wedding.time}</p>
                </div>
                <div className="w-12 h-px mx-auto my-4 md:my-6" style={{ background: `${C.gold}99` }} />
                <div className="flex items-start justify-center gap-2">
                  <MapPin size={20} color={C.green} className="mt-1 shrink-0" />
                  <div>
                    <p className="text-xl md:text-2xl font-medium" style={{ color: C.brown }}>{wedding.venue}</p>
                    <p className="text-base md:text-lg" style={{ color: `${C.brown}99` }}>{wedding.venueDetail}</p>
                  </div>
                </div>
                <a href={wedding.mapUrl} target="_blank" rel="noreferrer" className="mt-5 md:mt-7 inline-flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide px-5 py-2 md:px-6 md:py-2.5 rounded-full" style={{ background: C.green, color: C.ivory }}>
                  <MapPin size={14} /> View on Maps
                </a>
              </div>
              {/* gold ribbon covering the details, lifts away once the card scrolls into view */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-base md:text-lg font-medium uppercase tracking-wide" style={{
                background: C.gold, color: C.maroonDeep,
                transform: revealed ? "translateY(-100%)" : "translateY(0)",
                transition: "transform 0.9s cubic-bezier(.6,0,.2,1) 0.15s",
              }}>
                ✦ ✦ ✦
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
