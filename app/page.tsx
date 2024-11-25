import BlogSection from "@/components/ui/BlogSection";
import BannerSection from "@/components/ui/sections/BannerSection";
import RecentStories from "@/components/ui/sections/RecentStories";

export default function Home() {
  return (
    <main className="w-full my-5 space-y-14 ">
      <BannerSection />
      <BlogSection />
      <RecentStories />
    </main>
  );
}
