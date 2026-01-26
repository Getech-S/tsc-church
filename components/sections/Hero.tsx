export function Hero() {
  // FIXED: "to bottom" ensures a perfect vertical flow (Top -> Bottom).
  // FIXED: Relaxed stops (30%/70%) to match the smoother shine in your screenshot
  // FIXED: Added backgroundSize to ensure the gradient stretches covering the text height.
  /*const goldGradientStyle = {
    background: "text-transparent bg-clip-text bg-gradient-to-r from-[#F5BE40] via-[#FFFFFF] to-[#F5BE40]",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    backgroundSize: "100% 200%", // Forces the gradient to fit the text height vertically
    backgroundPosition: "0 0",
  };*/

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">

      {/* 1. BACKGROUND IMAGE LAYER */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        {/* Dark Overlay with Multiply for that deep studio look */}
        <div className="absolute inset-0 bg-[#000000]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* 2. TEXT LAYER */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 text-center mt-24">

        <h1 className="leading-tight drop-shadow-sm">

          {/* "Welcome to" (Regular Weight) */}
          <span
            className="block font-normal text-6xl md:text-8xl lg:text-hero-huge mb-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#F5BE40] via-[#FFFFFF] to-[#F5BE40]"


          >
            Welcome to
          </span>

          {/* "True Salvation" (Bold Weight) */}
          <span
            className="block font-bold text-6xl md:text-8xl lg:text-hero-huge pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#F5BE40] via-[#FFFFFF] to-[#F5BE40]"

          >
            True Salvation
          </span>

          {/* "Church" (Bold Weight) */}
          <span
            className="block font-bold text-6xl md:text-8xl lg:text-hero-huge pb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F5BE40] via-[#FFFFFF] to-[#F5BE40]"

          >
            Church
          </span>
        </h1>

      </div>
    </section>
  );
}