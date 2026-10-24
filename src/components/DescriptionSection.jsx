import Reveal from "./common/Reveal";
import RevealImage from "./common/RevealImage";
import Kalka from "./common/Kalka";
import { C, IMG_INVITE_FRAME } from "./common/theme";

/* ---------- Description section: wedding shloka + families/invitation message ---------- */
export default function DescriptionSection() {
  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-6 text-center" style={{ background: `linear-gradient(180deg, ${C.goldPale} 0%, ${C.ivory} 50%, ${C.goldPale} 100%)` }}>
        <Reveal><Kalka className="w-7 h-10 sm:w-9 sm:h-14 md:w-11 md:h-16 lg:w-14 lg:h-20 mx-auto mb-4" /></Reveal>
        <Reveal delay={0.1}>
          <p className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-relaxed mb-3" style={{ color: C.maroonDeep, fontFamily: "'Tiro Devanagari Sanskrit', serif" }}>
            यदिदं हृदयं मम तदिदं हृदयं तव
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-xl sm:text-3xl md:text-4xl lg:text-5xl italic" style={{ color: C.maroon, fontFamily: "'Cormorant Garamond', serif" }}>
            Yadidam Hridayam Mama Tadidam Hridayam Tava
          </p>
        </Reveal>
      </section>

      <section
        className="relative w-full overflow-hidden"
        style={{ background: `linear-gradient(180deg, ${C.goldPale} 0%, ${C.ivory} 12%, ${C.ivory} 88%, ${C.goldPale} 100%)` }}
      >
        <RevealImage
          src={IMG_INVITE_FRAME}
          alt=""
          className="relative block w-full h-auto"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 8%, #000 92%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, #000 8%, #000 92%, transparent 100%)",
          }}
        />
        <div className="absolute flex flex-col items-center justify-center text-center" style={{ top: "15%", bottom: "30%", left: "14%", right: "14%" }}>
          <Reveal><Kalka className="w-4 h-6 sm:w-10 sm:h-14 md:w-12 md:h-16 lg:w-16 lg:h-24 xl:w-20 xl:h-28 mx-auto mb-2 lg:mb-4" /></Reveal>
          <Reveal delay={0.08}>
            <p className="text-base sm:text-base md:text-lg lg:text-xl xl:text-3xl uppercase tracking-[0.2em] mb-2 lg:mb-4" style={{ color: C.maroon }}>Our Beginning</p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-9xl leading-none" style={{ color: C.maroonDeep, fontFamily: "'Cormorant Garamond', serif" }}>Rumki</p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="text-base sm:text-base md:text-lg lg:text-xl xl:text-3xl mt-1 mb-2 lg:mt-3 lg:mb-4 leading-snug" style={{ color: `${C.brown}CC` }}>daughter of Lt. Soumen Das<br />&amp; Smt. Gopali Das</p>
          </Reveal>
          <Reveal delay={0.32}>
            <p className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl italic mb-2 lg:mb-4" style={{ color: C.gold }}>weds</p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl 2xl:text-9xl leading-none" style={{ color: C.maroonDeep, fontFamily: "'Cormorant Garamond', serif" }}>Manomoy</p>
          </Reveal>
          <Reveal delay={0.48}>
            <p className="text-base sm:text-base md:text-lg lg:text-xl xl:text-3xl mt-1 lg:mt-3 leading-snug" style={{ color: `${C.brown}CC` }}>son of Sri Bhabesh Chandra Biswas<br />&amp; Smt. Suchitra Biswas</p>
          </Reveal>
          <Reveal delay={0.56}>
            <div className="w-10 sm:w-12 lg:w-16 xl:w-24 h-px mx-auto mt-3 mb-2 lg:mt-6 lg:mb-4" style={{ background: `${C.gold}99` }} />
          </Reveal>
          <Reveal delay={0.64}>
            <p className="text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl leading-snug mx-auto max-w-[230px] sm:max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-2xl" style={{ color: C.maroon, fontFamily: "'Parisienne', cursive" }}>
              We request the pleasure of your company as we celebrate our wedding festivities with love, laughter, and joy.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
