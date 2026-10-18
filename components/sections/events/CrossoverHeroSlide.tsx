import Link from "next/link";
import { getImageProps } from "next/image";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { CROSSOVER } from "./crossover";

// The Crossover slide in the landing page hero slider (components/sections/Hero.tsx).

// Flyer background: portrait on phones, landscape from tablet up.
// <picture> lets each device download only the version it actually shows.
export function CrossoverHeroImage() {
  const common = {
    alt: "2026–2027 Crossover flyer: My Year of Grand Achievement with Apostle Charles",
    fill: true,
    sizes: "100vw",
    quality: 90,
  };
  const { props: { srcSet: wideSrcSet } } = getImageProps({ ...common, src: CROSSOVER.flyers.landscape.src });
  const { props: { srcSet: tallSrcSet, ...imgProps } } = getImageProps({ ...common, src: CROSSOVER.flyers.portrait.src });

  const flyer = (className: string, decorative = false) => (
    <picture>
      <source media="(min-width: 768px)" srcSet={wideSrcSet} />
      <img
        {...imgProps}
        {...(decorative && { alt: "", "aria-hidden": true })}
        srcSet={tallSrcSet}
        loading="eager"
        fetchPriority="high"
        className={className}
      />
    </picture>
  );

  return (
    <>
      {/* Desktop: blurred copy fills the edges and the area behind the floating navbar */}
      {flyer("hidden lg:block object-cover blur-2xl scale-110 opacity-50", true)}

      {/* Desktop: the flyer sits below the navbar so Apostle Charles is never cut off */}
      <div className="absolute inset-0 lg:top-24 lg:bottom-6">
        {flyer("object-cover object-top md:object-center lg:object-contain lg:object-bottom")}
      </div>
      {/* Light fades only, so the flyer stays readable: blend into the dark content area and back the button */}
      <div className="absolute inset-0 bg-linear-to-t from-[#1B1C1E] to-transparent to-20% lg:from-black/75 lg:to-30% pointer-events-none" />
    </>
  );
}

// Text and button shown over the hero while the Crossover slide is active
export function CrossoverHeroContent() {
  return (
    <div className="w-full flex flex-col items-center lg:items-start lg:-mb-8">
      {/* The wide flyer already carries the title on desktop; phones and tablets get it in words */}
      <div className="lg:hidden">
        <p
          className="text-[24px] leading-3 tracking-[0.5px] text-[#E8751A] mb-4"
          style={{
            fontVariantNumeric: "lining-nums tabular-nums",
            fontFeatureSettings: '"liga" off, "calt" off',
            fontFamily: "var(--font-caveat)",
          }}
        >
          Upcoming Event
        </p>
        <h2 className="font-bold tracking-tight leading-[1.2] text-white text-[32px] sm:text-5xl md:text-6xl drop-shadow-2xl">
          {CROSSOVER.eyebrow}
        </h2>
        <p className="mt-2 text-white/85 text-sm sm:text-base md:text-lg font-light tracking-wide">
          {CROSSOVER.title}
        </p>
      </div>

      <div className="mt-6 lg:mt-0 flex flex-col lg:flex-row items-center gap-4 lg:gap-8 w-full sm:w-auto">
        <Link
          href={CROSSOVER.href}
          className="w-full sm:w-auto px-8 py-3.5 bg-[#E8751A] text-white text-[15px] font-semibold rounded-full hover:bg-[#E8A020] transition-colors duration-300 ease-in-out flex items-center justify-center gap-2 shadow-lg shadow-black/40"
        >
          See Event Details <ArrowRight size={18} />
        </Link>
        <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-1 text-white/85 text-sm font-medium drop-shadow">
          <span className="flex items-center gap-2">
            <CalendarDays size={16} className="text-[#E8A020] shrink-0" /> {CROSSOVER.when}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-[#E8A020] shrink-0" /> {CROSSOVER.where}
          </span>
        </div>
      </div>
    </div>
  );
}
