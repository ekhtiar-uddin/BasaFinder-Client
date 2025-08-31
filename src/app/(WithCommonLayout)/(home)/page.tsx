import FeaturedProperties from "@/components/modules/home/FeaturedProperties/FeaturedProperties";
import CallToActionSection from "@/components/modules/home/landing/CallToActionSection";
import DiscoverSection from "@/components/modules/home/landing/DiscoverSection";
import FeaturesSection from "@/components/modules/home/landing/FeaturesSection";
import FrequentQuestion from "@/components/modules/home/landing/FrequentQuestion";
import HeroSection from "@/components/modules/home/landing/HeroSection";
import Testimonials from "@/components/modules/home/landing/Testimonials";
import Footer from "@/components/shared/Footer";

const HomePage = () => {
  return (
    <div className="bg-white">
      <HeroSection />

      <FeaturedProperties />
      <FeaturesSection />
      <DiscoverSection />

      <Testimonials />
      <CallToActionSection />
      <FrequentQuestion />
      <Footer />
    </div>
  );
};

export default HomePage;
