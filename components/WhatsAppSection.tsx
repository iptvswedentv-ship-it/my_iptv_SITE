import { MessageCircle, Phone, Clock, CheckCircle2 } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/212663254137?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20einen%20IPTV%20Test%20anfordern.";

export default function WhatsAppSection() {
  return (
    <section id="whatsapp-support" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Ambient orbs — green tint */}
      <div className="ambient-orb w-[500px] h-[500px] bg-green-900/10 top-1/2 left-[10%] -translate-y-1/2" style={{ animationDelay: "3s" }} />
      <div className="ambient-orb w-[400px] h-[400px] bg-green-800/8 top-1/2 right-[10%] -translate-y-1/2" style={{ animationDelay: "7s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main card */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Glass background */}
          <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-2xl border border-white/[0.06] rounded-3xl" />
          {/* Green accent glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-green-600/8 rounded-full blur-3xl" />

          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left content */}
              <div>
                {/* Badge */}
                <div className="inline-flex items-center gap-2.5 bg-green-600/10 border border-green-500/15 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-green-400 uppercase tracking-[0.2em]">
                    Jetzt erreichbar
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight tracking-tight">
                  WhatsApp{" "}
                  <span className="text-green-400">Support & Test</span>
                </h2>

                <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10">
                  Haben Sie Fragen oder möchten Sie unseren Service testen?
                  Schreiben Sie uns direkt auf WhatsApp für eine blitzschnelle
                  Antwort!
                </p>

                {/* Features */}
                <div className="space-y-5 mb-10">
                  {[
                    { icon: Clock, text: "Antwort innerhalb weniger Minuten" },
                    { icon: CheckCircle2, text: "Kostenloser IPTV Test verfügbar" },
                    { icon: Phone, text: "Persönliche Beratung auf Deutsch" },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.text} className="flex items-center gap-4">
                        <div className="w-9 h-9 rounded-xl bg-green-600/10 border border-green-500/10 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-green-400" />
                        </div>
                        <span className="text-sm text-gray-400">{item.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA */}
                <a
                  id="whatsapp-section-btn"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-9 py-4.5 rounded-full text-lg font-bold shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_40px_rgba(34,197,94,0.5)]"
                >
                  <MessageCircle className="w-6 h-6" />
                  Test via WhatsApp
                </a>
              </div>

              {/* Right content — Phone number card */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm">
                  {/* Glow behind card */}
                  <div className="absolute inset-0 bg-green-500/10 rounded-2xl blur-2xl scale-110" />

                  <div className="relative glass-card !bg-white/[0.03] rounded-2xl p-9 text-center !transform-none">
                    {/* WhatsApp icon */}
                    <div className="w-20 h-20 mx-auto mb-7 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-xl shadow-green-600/25">
                      <MessageCircle className="w-10 h-10 text-white" />
                    </div>

                    <p className="text-xs text-gray-500 mb-3 uppercase tracking-[0.15em]">
                      Schreiben Sie uns auf WhatsApp
                    </p>

                    {/* Phone number */}
                    <p className="text-2xl sm:text-3xl font-bold text-white mb-1.5 tracking-wide">
                      +212 663254137
                    </p>

                    <p className="text-[11px] text-gray-600 mb-8 tracking-wide">
                      24/7 verfügbar • Deutsch & Mehrsprachig
                    </p>

                    {/* Secondary CTA */}
                    <a
                      id="whatsapp-card-btn"
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-green-600/10 border border-green-500/15 hover:bg-green-600 text-green-400 hover:text-white px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat starten
                    </a>

                    {/* Trust indicators */}
                    <div className="flex items-center justify-center gap-5 mt-7">
                      {["Sicher", "Kostenlos", "Schnell"].map((label) => (
                        <div key={label} className="flex items-center gap-1.5 text-[11px] text-gray-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
