"use client";

import { useState } from "react";
import { Check, Star, Crown, ShoppingCart } from "lucide-react";

type DeviceCategory = "1-device" | "2-devices";

const plans = {
  "1-device": [
    {
      id: "1d-3m",
      duration: "3 Monate",
      price: 30,
      perMonth: "10,00",
      features: [
        "80.000+ Live-Sender",
        "60.000+ VODs & Serien",
        "4K / UHD Qualität",
        "Anti-Freeze Technologie",
        "EPG & Catch-Up",
        "24/7 WhatsApp Support",
      ],
      popular: false,
    },
    {
      id: "1d-6m",
      duration: "6 Monate",
      price: 45,
      perMonth: "7,50",
      features: [
        "80.000+ Live-Sender",
        "60.000+ VODs & Serien",
        "4K / UHD Qualität",
        "Anti-Freeze Technologie",
        "EPG & Catch-Up",
        "24/7 WhatsApp Support",
      ],
      popular: false,
    },
    {
      id: "1d-12m",
      duration: "12 Monate",
      price: 60,
      perMonth: "5,00",
      features: [
        "80.000+ Live-Sender",
        "60.000+ VODs & Serien",
        "4K / UHD Qualität",
        "Anti-Freeze Technologie",
        "EPG & Catch-Up",
        "24/7 WhatsApp Support",
        "Kostenlose Erneuerung-Rabatt",
      ],
      popular: true,
    },
  ],
  "2-devices": [
    {
      id: "2d-3m",
      duration: "3 Monate",
      price: 45,
      perMonth: "15,00",
      features: [
        "80.000+ Live-Sender",
        "60.000+ VODs & Serien",
        "4K / UHD Qualität",
        "Anti-Freeze Technologie",
        "2 Geräte gleichzeitig",
        "24/7 WhatsApp Support",
      ],
      popular: false,
    },
    {
      id: "2d-6m",
      duration: "6 Monate",
      price: 55,
      perMonth: "9,17",
      features: [
        "80.000+ Live-Sender",
        "60.000+ VODs & Serien",
        "4K / UHD Qualität",
        "Anti-Freeze Technologie",
        "2 Geräte gleichzeitig",
        "24/7 WhatsApp Support",
      ],
      popular: false,
    },
    {
      id: "2d-12m",
      duration: "12 Monate",
      price: 99,
      perMonth: "8,25",
      features: [
        "80.000+ Live-Sender",
        "60.000+ VODs & Serien",
        "4K / UHD Qualität",
        "Anti-Freeze Technologie",
        "2 Geräte gleichzeitig",
        "24/7 WhatsApp Support",
        "Kostenlose Erneuerung-Rabatt",
      ],
      popular: false,
    },
  ],
};

export default function PricingSection() {
  const [activeCategory, setActiveCategory] =
    useState<DeviceCategory>("1-device");

  const currentPlans = plans[activeCategory];

  return (
    <section
      id="pricing"
      className="py-24 sm:py-32 relative section-glow"
    >
      {/* Ambient orbs */}
      <div className="ambient-orb w-[600px] h-[400px] bg-red-900/10 top-0 left-1/2 -translate-x-1/2" style={{ animationDelay: "2s" }} />
      <div className="ambient-orb w-[300px] h-[300px] bg-cyan-900/8 bottom-20 right-10" style={{ animationDelay: "8s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Unsere <span className="gradient-text">Preise</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Transparente Preise, keine versteckten Kosten. Wählen Sie den Plan,
            der zu Ihnen passt.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-white/[0.03] border border-white/[0.06] rounded-full p-1.5 backdrop-blur-sm">
            <button
              id="toggle-1-device"
              onClick={() => setActiveCategory("1-device")}
              className={`px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === "1-device"
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/25"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              1 Gerät
            </button>
            <button
              id="toggle-2-devices"
              onClick={() => setActiveCategory("2-devices")}
              className={`px-7 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === "2-devices"
                  ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-600/25"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              2 Geräte
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {currentPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-2xl transition-all duration-500 ${
                plan.popular
                  ? "bestseller-ring scale-[1.03] hover:scale-105"
                  : "glass-card"
              }`}
            >
              {/* Bestseller badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-[length:200%_100%] text-white text-[11px] font-bold px-5 py-1.5 rounded-full shadow-xl shadow-red-600/30 uppercase tracking-wider animate-shimmer">
                    <Crown className="w-3.5 h-3.5" />
                    Bestseller
                  </div>
                </div>
              )}

              <div className="p-7 sm:p-9">
                {/* Duration */}
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {plan.duration}
                  </h3>
                  {plan.popular && (
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  )}
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-5xl font-extrabold tracking-tight ${plan.popular ? "metallic-text" : "text-white"}`}>
                      {plan.price}€
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1.5 tracking-wide">
                    nur {plan.perMonth}€ / Monat
                  </p>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mb-8" />

                {/* Features list */}
                <ul className="space-y-3.5 mb-9">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-4.5 h-4.5 shrink-0 mt-0.5 ${plan.popular ? "text-red-400" : "text-green-500/70"}`} />
                      <span className="text-sm text-gray-400 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  id={`buy-${plan.id}`}
                  href={`https://wa.me/212663254137?text=Hallo!%20Ich%20m%C3%B6chte%20das%20Paket%3A%20${encodeURIComponent(
                    plan.duration
                  )}%20(${activeCategory === "1-device" ? "1%20Ger%C3%A4t" : "2%20Ger%C3%A4te"})%20f%C3%BCr%20${plan.price}%E2%82%AC%20bestellen.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-[length:200%_100%] hover:bg-right text-white shadow-[0_0_25px_rgba(220,38,38,0.3)] hover:shadow-[0_0_35px_rgba(220,38,38,0.5)] hover:scale-[1.02]"
                      : "bg-white/[0.04] border border-white/[0.06] text-white hover:bg-white/[0.08] hover:border-white/[0.12] hover:scale-[1.02]"
                  }`}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Jetzt Kaufen
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center text-gray-600 text-sm mt-14 tracking-wide">
          ✓ Keine versteckten Kosten &nbsp;•&nbsp; ✓ Sofortige Aktivierung
          &nbsp;•&nbsp; ✓ Geld-zurück-Garantie
        </p>
      </div>
    </section>
  );
}
