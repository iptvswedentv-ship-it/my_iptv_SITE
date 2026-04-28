import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPages, getPageBySlug } from "@/lib/csv-utils";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EntertainmentGallery from "@/components/EntertainmentGallery";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import WhatsAppSection from "@/components/WhatsAppSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate all static pages from CSV
export async function generateStaticParams() {
  const pages = getAllPages();
  return pages.map((page) => ({
    slug: page.Slug,
  }));
}

// Dynamic metadata from CSV
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    return {
      title: "Seite nicht gefunden – BesterIPTV Shop",
    };
  }

  return {
    title: page.Meta_Title,
    description: `${page.Page_H1} – Erleben Sie 80.000+ Sender & VODs in 4K/UHD. Premium IPTV Service mit Anti-Freeze Technologie, sofortiger Aktivierung und 24/7 Support.`,
    openGraph: {
      title: page.Meta_Title,
      description: `${page.Page_H1} – Premium IPTV mit 80.000+ Sendern in 4K/UHD.`,
      type: "website",
    },
  };
}

export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <HeroSection h1={page.Page_H1} />
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
