import { Navbar } from "@/components/layout/Navbar";
import { LiveStreamHero } from "@/components/sections/sermons/LiveStreamHero";
import { SermonDetails } from "@/components/sections/sermons/SermonDetails";
import { Footer } from "@/components/sections/Footer";
import { getLiveOrLatestSermon } from "@/app/actions/getYoutubeVideos";
import { MoreSermons } from "@/components/sections/sermons/MoreSermons";
export const dynamic = "force-dynamic";

export default async function WorshipOnlinePage() {
  const { videoId, isLive, title } = await getLiveOrLatestSermon();

  return (
    <main className="bg-[#1B1C1E] min-h-screen">
      <Navbar isFloating={false} />
      <LiveStreamHero videoId={videoId} isLive={isLive} title={title} />
      <SermonDetails />
      <MoreSermons/>
      <Footer />
    </main>
  );
}
