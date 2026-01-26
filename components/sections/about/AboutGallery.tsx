import Image from "next/image";

const GALLERY_ITEMS = [
    {
        title: "Worship Team",
        image: "/gallery-worship.jpg",
    },
    {
        title: "Baptism",
        image: "/gallery-baptism.jpg",
    },
    {
        title: "Gathering",
        image: "/gallery-gathering.jpg",
    },
    {
        title: "Service",
        image: "/gallery-service.jpg",
    },
];

export function AboutGallery() {
    return (
        <section className="bg-white py-20 lg:py-28">

            {/* CONTAINER: Max Width 1280px */}
            <div className="mx-auto max-w-[1280px] px-6 md:px-12 flex flex-col gap-12">

                {/* HEADER */}
                <div className="flex flex-col items-center text-center gap-2">
                    {/* Eyebrow: Handwritten Style */}
                    <span className="font-caveat text-[28px] leading-[27px] text-[#DD5F4C] tracking-[0.5px]">
                        Moments of Grace
                    </span>
                    {/* Main Title */}
                    <h2 className="text-[40px] md:text-[48px] font-bold text-gray-900 leading-tight">
                        Life in the Atmosphere
                    </h2>
                </div>

                {/* GALLERY GRID 
           - 4 Columns on Desktop
           - Gap: 24px
        */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {GALLERY_ITEMS.map((item, index) => (
                        <div
                            key={index}
                            className="group relative w-full h-[350px] rounded-[16px] overflow-hidden shadow-lg cursor-pointer"
                        >

                            {/* IMAGE BACKGROUND */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* GRADIENT OVERLAY 
                 - From Black (0%) to Transparent
                 - Ensures text legibility at bottom
              */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                            {/* TEXT CONTENT 
                 - Position: Absolute Bottom Left
                 - Padding: 24px
              */}
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-[24px] font-bold text-[#F5BE41] leading-tight drop-shadow-md">
                                    {item.title}
                                </h3>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}