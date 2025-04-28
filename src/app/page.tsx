import BannerSection from "@/components/banner-section";
import BannerSection2 from "@/components/banner-section-2";
import BlogSection from "@/components/blog-section";
 import HeroSection from "@/components/hero-section";
import OurMenusSlider from "@/components/our-menus-slider";
import SubscriptionSection from "@/components/subscription-section";
 
export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <OurMenusSlider />
      <BannerSection/>
      <BlogSection/>
      <BannerSection2/>
      <SubscriptionSection/>
    </div>
  );
}
