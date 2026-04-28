import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EntertainmentGallery from "@/components/EntertainmentGallery";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import WhatsAppSection from "@/components/WhatsAppSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection h1="Premium IPTV Deutschland – Beste Angebote & Sofort-Zugang" />
        <EntertainmentGallery />
        <FeaturesSection />
        <PricingSection />
        <WhatsAppSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
