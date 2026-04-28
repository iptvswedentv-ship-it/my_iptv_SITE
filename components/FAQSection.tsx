"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Was ist IPTV und wie funktioniert es?",
    answer:
      "IPTV (Internet Protocol Television) ist eine Technologie, die Fernsehprogramme über das Internet überträgt. Anstelle eines traditionellen Kabel- oder Satellitenanschlusses benötigen Sie lediglich eine stabile Internetverbindung und ein kompatibles Gerät. Sie erhalten von uns Zugangsdaten, die Sie in einer IPTV-App eingeben – und schon können Sie Ihre Lieblingssender und VODs genießen.",
  },
  {
    question: "Welche Geräte werden unterstützt?",
    answer:
      "Unser Service ist mit nahezu allen Geräten kompatibel: Smart TVs (Samsung, LG, Sony, Philips), Amazon Fire TV Stick, Android TV Boxen, Apple TV, Smartphones (iOS & Android), Tablets, PCs (Windows, Mac, Linux), MAG Boxen, Formuler, Enigma2 (Dreambox, VU+) und viele mehr. Wir unterstützen alle gängigen IPTV-Player wie TiviMate, IPTV Smarters, Duplex IPTV, Smart IPTV und weitere.",
  },
  {
    question: "Wie schnell erfolgt die Aktivierung?",
    answer:
      "Die Aktivierung erfolgt in der Regel innerhalb weniger Minuten nach Zahlungseingang. Sie erhalten Ihre Zugangsdaten direkt per WhatsApp oder E-Mail. In den meisten Fällen können Sie bereits innerhalb von 5 Minuten mit dem Streaming beginnen.",
  },
  {
    question: "Kann ich den Service vor dem Kauf testen?",
    answer:
      "Ja! Wir bieten einen kostenlosen 24-Stunden-Test an, damit Sie sich selbst von der Qualität unseres Services überzeugen können. Kontaktieren Sie uns einfach per WhatsApp, und wir richten Ihren Test-Zugang umgehend ein.",
  },
  {
    question: "Welche Zahlungsmethoden akzeptieren Sie?",
    answer:
      "Wir akzeptieren verschiedene sichere Zahlungsmethoden, darunter PayPal, Kreditkarte (Visa, Mastercard), Banküberweisung und Kryptowährungen. Alle Transaktionen sind sicher und verschlüsselt.",
  },
  {
    question: "Gibt es einen Vertrag oder eine Mindestlaufzeit?",
    answer:
      "Nein, bei uns gibt es keine langfristigen Verträge oder Verpflichtungen. Sie wählen einfach den gewünschten Zeitraum (3, 6 oder 12 Monate) und können nach Ablauf frei entscheiden, ob Sie verlängern möchten.",
  },
  {
    question: "Welche Internetgeschwindigkeit benötige ich?",
    answer:
      "Für ein optimales Streaming-Erlebnis empfehlen wir mindestens 10 Mbit/s für HD-Qualität und 25 Mbit/s für 4K/UHD-Inhalte. Eine stabile Verbindung (vorzugsweise LAN-Kabel) sorgt für die beste Performance.",
  },
  {
    question: "Was passiert, wenn ich technische Probleme habe?",
    answer:
      "Unser deutschsprachiges Support-Team ist 24/7 über WhatsApp erreichbar und hilft Ihnen schnell und unkompliziert bei allen technischen Fragen. Wir bieten auch detaillierte Einrichtungsanleitungen für alle unterstützten Geräte.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 relative section-glow">
      {/* Ambient orb */}
      <div className="ambient-orb w-[400px] h-[400px] bg-cyan-900/8 top-20 left-[-10%]" style={{ animationDelay: "5s" }} />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Häufig gestellte{" "}
            <span className="gradient-text">Fragen</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Finden Sie schnell Antworten auf Ihre Fragen.
          </p>
        </div>

        {/* FAQ items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl overflow-hidden !transform-none ${
                openIndex === index ? "!border-white/[0.1]" : ""
              }`}
            >
              <button
                id={`faq-btn-${index}`}
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 sm:p-7 text-left group"
              >
                <span className="text-sm sm:text-base font-semibold text-gray-200 pr-4 group-hover:text-white transition-colors duration-300 tracking-tight">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-white/[0.08] ${
                  openIndex === index ? "bg-red-600/20" : ""
                }`}>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 text-red-400" : ""
                    }`}
                  />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  openIndex === index ? "max-h-96 pb-6 sm:pb-7" : "max-h-0"
                }`}
              >
                <div className="px-6 sm:px-7">
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent mb-5" />
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
