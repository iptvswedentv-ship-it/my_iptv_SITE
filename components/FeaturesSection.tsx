import { ShieldCheck, MonitorSmartphone, Zap, Headphones } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Anti-Freeze Technologie",
    description:
      "Unsere fortschrittliche Server-Infrastruktur garantiert unterbrechungsfreies Streaming ohne Pufferung.",
    gradient: "from-red-500 to-orange-500",
    glowColor: "rgba(239, 68, 68, 0.15)",
  },
  {
    icon: MonitorSmartphone,
    title: "Alle Geräte",
    description:
      "Kompatibel mit Smart TV, Smartphone, Tablet, PC, Fire Stick, MAG Box und allen gängigen IPTV-Playern.",
    gradient: "from-blue-500 to-cyan-500",
    glowColor: "rgba(59, 130, 246, 0.15)",
  },
  {
    icon: Zap,
    title: "Schnelle Aktivierung",
    description:
      "Nach Ihrer Bestellung erhalten Sie innerhalb von Minuten Ihre Zugangsdaten. Sofort loslegen!",
    gradient: "from-yellow-500 to-amber-500",
    glowColor: "rgba(234, 179, 8, 0.15)",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Unser deutschsprachiges Support-Team steht Ihnen rund um die Uhr per WhatsApp zur Verfügung.",
    gradient: "from-green-500 to-emerald-500",
    glowColor: "rgba(34, 197, 94, 0.15)",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 sm:py-32 relative section-glow">
      {/* Ambient orb */}
      <div className="ambient-orb w-[500px] h-[500px] bg-red-900/8 bottom-0 left-[-10%]" style={{ animationDelay: "6s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Warum{" "}
            <span className="gradient-text">BesterIPTV?</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Premium Qualität, maximale Zuverlässigkeit und erstklassiger Service
            – das macht uns zum besten Anbieter.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="glass-card group relative rounded-2xl p-7 sm:p-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${feature.glowColor}, transparent 70%)` }}
                />

                {/* Icon */}
                <div
                  className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-all duration-500`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="relative text-lg font-bold text-white mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="relative text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
