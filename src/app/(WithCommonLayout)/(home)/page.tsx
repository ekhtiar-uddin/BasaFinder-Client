import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
import CallToActionSection from "@/components/modules/home/landing/CallToActionSection";
import DiscoverSection from "@/components/modules/home/landing/DiscoverSection";
import FeaturesSection from "@/components/modules/home/landing/FeaturesSection";
import HeroSection from "@/components/modules/home/landing/HeroSection";
import Testimonials from "@/components/modules/home/landing/Testimonials";
import Footer from "@/components/shared/Footer";

const HomePage = () => {
  return (
    <div className="bg-white">
      <HeroSection />

      <div className="bg-blue-400 h-[30vh]">
        <h1>sdfsd</h1>
      </div>

      <FeaturedProducts />
      <FeaturesSection />
      <DiscoverSection />

      <Testimonials />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default HomePage;
