import Image from "next/image";
import Link from "next/link";

export function AboutLeadership() {
    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="mx-auto max-w-[1280px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Background Decorative Dove */}
      <img
        src="/dove.png"
        alt=""
        className="absolute right-[-5%] top-10 opacity-5 w-[500px] pointer-events-none select-none "
      />


                {/* LEFT COLUMN: Text Content */}
                <div className="flex flex-col items-start">

                    {/* Eyebrow: Handwritten Style */}
                    <span className="text-[24px] lg:text-[28px] text-[#E8751A] leading-[12px] tracking-[0.5px] font-normal text-left mb-3"
                        style={{
                            fontVariantNumeric: "lining-nums tabular-nums",
                            fontFeatureSettings: '"liga" off, "calt" off',
                            fontFamily: "var(--font-caveat)",
                        }}
                    >
                        Meet The One He Sent
                    </span>

                    {/* Main Heading */}
                    <h2 className="text-[32px] sm:text-[36px] sm:mb-8 md:text-[40px] lg:text-[48px] font-bold text-gray-900 leading-[1.1] tracking-[-2px] mb-8">
                        A humble vessel <br />
                        loved by Jesus, sent to you.
                    </h2>

                    {/* MOBILE ONLY IMAGE: Appears between Title and Paragraphs */}
                    <div className="lg:hidden relative w-full aspect-4/5 rounded-[16px] overflow-hidden shadow-lg mb-8">
                        <Image
                            src="/about-apostle.jpg"
                            alt="Apostle Charles"
                            fill
                            /* Applied scale-110 for a subtle zoom effect */
                            className="object-cover scale-150"
                        />
                    </div>

                    {/* Subtext */}
                    <p className="text-[16px] text-gray-500 mb-5 font-regular">
                        Apostle Charles does not stand before this church to be admired. He stands as a signpost, pointing every heart away from the weight of the world and toward the freedom found only in the King of Kings.
                    </p>
                    <p className="text-[16px] text-gray-500 mb-5 font-regular">
                        His calling is not a title. It is a life. A life committed to shepherding, teaching, and guiding this family in accordance with the Word of God, encouraging repentance, discipleship, and faithful Christian living through prayer, pastoral leadership, and personal encounter.
                    </p>
                    
                    {/* BUTTON */}
                    <Link href="/apostle-bio">
                        <button
                            className="w-full sm:w-auto text-center px-8 py-3 bg-[#E8751A] text-white text-[14px] font-semibold rounded-full hover:bg-[#E8A020] transition-colors duration-300 ease-in-out flex items-center justify-center gap-2"
                            
                        >
                            Read More
                        </button>
                    </Link>

                </div>

                {/* RIGHT COLUMN: Image (Desktop Only) */}
                <div className="hidden lg:block relative w-full aspect-4/5 lg:h-[619px] lg:w-auto rounded-[16px] overflow-hidden shadow-lg">
                    <Image
                        src="/about-apostle.jpg"
                        alt="Apostle Charles"
                        fill
                        /* Applied scale-110 for a subtle zoom effect */
                        className="object-cover scale-140"
                    />
                </div>

            </div>
        </section>
    );
}