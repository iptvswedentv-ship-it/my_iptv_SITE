import { Tv, ShieldCheck, CreditCard, Scale, FileText, ShieldAlert } from "lucide-react";

export default function Footer() {
  return (
    <footer id="footer" className="relative border-t border-white/[0.04]">
      <div className="absolute inset-0 bg-[#030303]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 sm:py-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg shadow-red-600/15">
                <Tv className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-white">Bester</span>
                <span className="text-red-500">IPTV</span>
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Ihr Premium IPTV Anbieter in Deutschland. Erleben Sie
              Entertainment der nächsten Generation.
            </p>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 mb-5 uppercase tracking-[0.2em]">
              Service
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#pricing" className="text-sm text-gray-600 hover:text-white transition-colors duration-300">
                  Preise
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/212663254137?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20einen%20IPTV%20Test%20anfordern."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-white transition-colors duration-300"
                >
                  Test via WhatsApp
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-gray-600 hover:text-white transition-colors duration-300">
                  Geräte-Support
                </a>
              </li>
              <li>
                <a href="#entertainment" className="text-sm text-gray-600 hover:text-white transition-colors duration-300">
                  Einrichtung
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 mb-5 uppercase tracking-[0.2em]">
              Rechtliches
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/212663254137?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20einen%20IPTV%20Test%20anfordern."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-white transition-colors duration-300"
                >
                  WhatsApp Kontakt
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-gray-600 hover:text-white transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/agb" className="text-sm text-gray-600 hover:text-white transition-colors duration-300 flex items-center gap-1.5">
                  <Scale className="w-3 h-3" />
                  AGB
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="text-sm text-gray-600 hover:text-white transition-colors duration-300 flex items-center gap-1.5">
                  <FileText className="w-3 h-3" />
                  Datenschutzerklärung
                </a>
              </li>
              <li>
                <a href="/dmca" className="text-sm text-gray-600 hover:text-white transition-colors duration-300 flex items-center gap-1.5">
                  <ShieldAlert className="w-3 h-3" />
                  DMCA
                </a>
              </li>
            </ul>
          </div>

          {/* Secure Payments */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 mb-5 uppercase tracking-[0.2em]">
              Sichere Zahlung
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {[
                { name: "PayPal", icon: CreditCard },
                { name: "Visa", icon: CreditCard },
                { name: "Mastercard", icon: CreditCard },
              ].map((method) => {
                const Icon = method.icon;
                return (
                  <div
                    key={method.name}
                    className="flex items-center gap-1.5 bg-white/[0.03] border border-white/[0.04] rounded-lg px-3.5 py-2"
                  >
                    <Icon className="w-3.5 h-3.5 text-gray-500" />
                    <span className="text-[11px] text-gray-500">{method.name}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center gap-2 mt-5 text-green-600">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[11px] font-medium tracking-wide">
                SSL-verschlüsselt & sicher
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] py-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <p className="text-[11px] text-gray-700">
              © 2026 BesterIPTV Shop. Alle Rechte vorbehalten.
            </p>
            <div className="hidden sm:flex items-center gap-3 text-[11px] text-gray-700">
              <a href="/agb" className="hover:text-gray-400 transition-colors duration-300">AGB</a>
              <span className="text-gray-800">•</span>
              <a href="/datenschutz" className="hover:text-gray-400 transition-colors duration-300">Datenschutz</a>
              <span className="text-gray-800">•</span>
              <a href="/dmca" className="hover:text-gray-400 transition-colors duration-300">DMCA</a>
            </div>
          </div>
          <p className="text-[11px] text-gray-700 text-center sm:text-right max-w-md leading-relaxed">
            Haftungsausschluss: Wir sind ein unabhängiger IPTV-Dienstleister.
            Alle Marken und Logos gehören ihren jeweiligen Eigentümern.
          </p>
        </div>
      </div>
    </footer>
  );
}
