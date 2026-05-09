import FeaturedProperties from "@/components/modules/home/FeaturedProperties/FeaturedProperties";
import CallToActionSection from "@/components/modules/home/landing/CallToActionSection";
import { CityExplorer } from "@/components/modules/home/landing/CityExplorer";
import DiscoverSection from "@/components/modules/home/landing/DiscoverSection";
import FeaturesSection from "@/components/modules/home/landing/FeaturesSection";
import FrequentQuestion from "@/components/modules/home/landing/FrequentQuestion";
import HeroSection from "@/components/modules/home/landing/HeroSection";
import { HowItWorks } from "@/components/modules/home/landing/HowItWorks";
import Testimonials from "@/components/modules/home/landing/Testimonials";
import { TrustStatsBar } from "@/components/modules/home/landing/TrustStatsBar";
import Footer from "@/components/shared/Footer";

const HomePage = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <TrustStatsBar />
      <FeaturedProperties />
      <CityExplorer />
      <FeaturesSection />
      <HowItWorks />

      <DiscoverSection />

      <Testimonials />

      <FrequentQuestion />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default HomePage;
