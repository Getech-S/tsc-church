import { Clock } from "lucide-react";

export default function WeeklyAgenda() {
  const gatherings = [
    {
      day: "MONDAY – THURSDAY",
      title: "Kingdom Verdict",
      description: "Your Prayer is Answered.",
      time: "9:00 PM · EAT",
    },
    {
      day: "FRIDAY",
      title: "Prayer Flames",
      description: "A focused hour of prayer and intercession",
      time: "9:00 PM · EAT",
    },
    {
      day: "SATURDAY",
      title: "One on One With Apostle",
      description: "Personal spiritual guidance and ministry.",
      time: "11:00 AM · EAT",
    },
    {
      day: "SUNDAY SERVICE",
      title: "Raw Miracle Sunday",
      description: "A powerful gathering of worship, Word, and miracles.",
      time: "3:00 PM · EAT",
    },
  ];

  return (
    <section className="bg-[#1B1C1E] py-24 text-white relative overflow-hidden">
      
      {/* Background Decorative Dove 
      <img
        src="/dove.png"
        alt=""
        className="absolute right-[-5%] top-10 opacity-5 w-[500px] pointer-events-none select-none "
      />*/}

      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <p className="font-caveat text-[28px] leading-[27px] tracking-[0.5px] text-[#E8751A]"
                        style={{
                            fontVariantNumeric: "lining-nums tabular-nums",
                            fontFeatureSettings: '"liga" off, "calt" off',
                            fontFamily: "var(--font-caveat)",
                        }}
          >
            Weekly Program
          </p>
          <h2 className="text-[40px] md:text-[48px] font-bold text-[#1B1C1E] leading-tight tracking-[-1px]">
            
            <span className="text-white">Experience God <br />
            With Us All Week Long</span>
          </h2>
        </div>

        {/* HORIZONTAL LAYOUT LOGIC:
          - grid-cols-1 for mobile (vertical)
          - md:grid-cols-4 for desktop (horizontal)
          - Borders create the column separation
        */}
        <div className="grid grid-cols-1 md:grid-cols-4  border-white/10">
          {gatherings.map((item, index) => (
            <div
              key={index}
              className={`group flex flex-col items-start px-8 py-16 transition-all duration-500 hover:bg-white/0.02
                ${index !== 0 ? "md:border-l border-white/10" : ""} 
                border-b md:border-b-0 border-white/10
              `}
            >
              {/* Day Label */}
              <p className="text-[11px] tracking-[0.2em] font-bold text-white mb-4 uppercase">
                {item.day}
              </p>

              {/* Minimalist Orange Line */}
              <div className="w-8 h-[2px] bg-[#E8751A] mb-10 transition-all duration-500"></div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 tracking-tight transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed mb-10 min-h-[60px]">
                {item.description}
              </p>

              {/* Time Section - Pushed to the bottom of the card */}
              <div className="mt-auto flex items-center gap-1">
                <Clock size={16} className="text-white" />
                <span className="text-[12px] font-bold tracking-widest text-white/80 uppercase">
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Decorative Line */}
        <div className="h-1px w-full bg-white/10"></div>
      </div>
    </section>
  );
}