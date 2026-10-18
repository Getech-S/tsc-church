import { CalendarDays, Clock, HandHeart, MapPin, Radio, Zap } from "lucide-react";

// Single source of truth for the Crossover 2026 → 2027 event.
// Used by the Events page pop-up (CrossoverModal) and the landing page banner (CrossoverBanner).
export const CROSSOVER = {
  slug: "crossover",
  // Deep link: the Events page opens the Crossover pop-up automatically when it sees this param
  href: "/events?event=crossover",

  flyers: {
    portrait: { src: "/events/crossover-2026-portrait.webp", width: 1414, height: 2000 },
    landscape: { src: "/events/crossover-2026-landscape.webp", width: 2000, height: 1125 },
  },
  // Frames the portrait flyer in the Events card so both "CROSSOVER" and Apostle Charles stay in view
  cardImagePosition: "center 25%",

  eyebrow: "2026–2027 Crossover",
  title: "My Year of Grand Achievements",
  host: "Hosted by Apostle Charles Lwanga",
  when: "Dec 19th & 20th, 2026 · 6:00 PM EAT",
  where: "Muganzirwazza, Katwe, Kampala",
  intro:
    "Don't wait for the calendar to dictate your breakthrough! Join us for a powerful two-day event as we transition from profound gratitude into explosive miracles and the undeniable power of Jesus Christ.",

  bringIntro: "To prepare for the ultimate spiritual shift, please bring:",
  bring: [
    {
      icon: HandHeart,
      title: "Your Answered Prayers",
      text: "Bring a record of your testimonies from 2026. We will begin at the altar of Thanksgiving to praise God for what He has already done.",
    },
    {
      icon: Zap,
      title: "Your 2027 Requests",
      text: "Bring your new prayer requests for the new year. Position your faith for the thundering fire of mass prayer, healing, and your next wave of blessings.",
    },
  ],

  details: [
    { icon: CalendarDays, label: "Dates", value: "December 19th & 20th, 2026" },
    { icon: Clock, label: "Time", value: "6:00 PM EAT" },
    { icon: MapPin, label: "Location", value: "True Salvation Church (Muganzirwazza, Katwe, Kampala, Uganda)" },
    { icon: Radio, label: "Live Stream", value: "YouTube, Zoom & TikTok" },
  ],

  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Muganzirwazza%20Commercial%20Complex%2C%20Katwe%2C%20Kampala%2C%20Uganda",
};

// Shown in the Events grid until the event ends, unless the admin has already
// created the Crossover event in the dashboard (then the Firestore card is used instead).
export const CROSSOVER_FALLBACK_EVENT = {
  id: "crossover-2026",
  titleEn: `${CROSSOVER.eyebrow}: ${CROSSOVER.title}`,
  date: "Dec 19th & 20th, 2026",
  systemDate: "2026-12-20",
  location: CROSSOVER.where,
  image: CROSSOVER.flyers.portrait.src,
};

// Recognises the Crossover card among the Firestore events.
// Pinned to December 2026 so next year's Crossover won't pick up this year's copy.
export function isCrossoverEvent(event: any): boolean {
  const title = [event?.titleEn, event?.titleRw, event?.title].filter(Boolean).join(" ");
  return /cross\s*-?\s*over/i.test(title) && String(event?.systemDate ?? "").startsWith("2026-12");
}
