import { Play, MessageCircle } from "lucide-react";

interface HeroSectionProps {
  h1: string;
}

const WHATSAPP_URL =
  "https://wa.me/212663254137?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20einen%20IPTV%20Test%20anfordern.";

export default function HeroSection({ h1 }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Pitch black base */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Ambient glowing orbs */}
      <div className="ambient-orb w-[600px] h-[600px] bg-red-900/20 top-[-10%] left-[-5%]" />
      <div
        className="ambient-orb w-[500px] h-[500px] bg-cyan-900/15 bottom-[-10%] right-[-5%]"
        style={{ animationDelay: "4s", animationDirection: "reverse" }}
      />
      <div
        className="ambient-orb w-[400px] h-[400px] bg-red-600/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ animationDelay: "2s" }}
      />

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                         radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: "100px 100px",
      }} />

      {/* Radial spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.06)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.06] rounded-full px-6 py-2.5 mb-10 animate-fade-in-up backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-gray-400 uppercase tracking-[0.15em]">
            #1 Premium IPTV Deutschland
          </span>
        </div>

        {/* H1 — Metallic Cinematic */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8 animate-fade-in-up tracking-tight"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="metallic-text">{h1}</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-12 animate-fade-in-up leading-relaxed tracking-wide"
          style={{ animationDelay: "0.3s" }}
        >
          Erleben Sie{" "}
          <span className="text-gray-200 font-medium">80.000+ Sender & VODs</span>{" "}
          in <span className="text-red-400 font-medium">4K/UHD</span>. Inklusive
          Live-Sport, Weltmeisterschaft & Blockbuster Filme.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          {/* Primary CTA — Magnetic */}
          <a
            id="cta-pricing"
            href="#pricing"
            className="btn-magnetic group flex items-center gap-2.5 bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-[length:200%_100%] hover:bg-right text-white px-10 py-4.5 rounded-full text-lg font-bold shadow-[0_0_30px_rgba(220,38,38,0.4)] animate-pulse-glow"
          >
            Preise ansehen
            <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          {/* WhatsApp Test — Magnetic */}
          <a
            id="cta-whatsapp-test"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-magnetic flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.08] hover:bg-green-600/20 hover:border-green-500/30 text-white px-10 py-4.5 rounded-full text-lg font-semibold backdrop-blur-sm"
          >
            <MessageCircle className="w-5 h-5 text-green-400" />
            Test via WhatsApp
          </a>
        </div>

        {/* Stats — Minimal */}
        <div
          className="grid grid-cols-3 gap-8 max-w-md mx-auto mt-20 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          {[
            { value: "80K+", label: "Sender" },
            { value: "4K", label: "UHD Qualität" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{stat.value}</div>
              <div className="text-xs text-gray-600 mt-1 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="w-[1px] h-16 mx-auto bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}
