"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Menu, X, Tv } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/212663254137?text=Hallo!%20Ich%20m%C3%B6chte%20gerne%20einen%20IPTV%20Test%20anfordern.";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-2xl shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-22">
          {/* 3D Animated Logo */}
          <a href="#" className="flex items-center gap-3 group logo-3d">
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 via-red-500 to-orange-600 flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:shadow-red-500/50 transition-all duration-500 group-hover:scale-110">
              <Tv className="w-5 h-5 text-white drop-shadow-lg" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-500" />
            </div>
            <span className="text-xl font-extrabold tracking-tight logo-glow">
              <span className="logo-gradient-animated">Bester</span>
              <span className="logo-gradient-animated" style={{ animationDelay: "0.5s" }}>IPTV</span>
              <span className="text-gray-500 text-sm ml-1.5 font-medium logo-text-3d" style={{ WebkitTextFillColor: "initial" }}>
                Shop
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { href: "#entertainment", label: "Unterhaltung" },
              { href: "#features", label: "Funktionen" },
              { href: "#pricing", label: "Preise" },
              { href: "#faq", label: "FAQ" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              id="whatsapp-btn"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600/90 hover:bg-green-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-green-600/20 hover:shadow-green-500/30"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Support
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-400 hover:text-white p-2 transition-colors duration-300"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden glass rounded-2xl mt-2 p-5 animate-fade-in-up mb-4">
            <div className="flex flex-col gap-1">
              {[
                { href: "#entertainment", label: "Unterhaltung" },
                { href: "#features", label: "Funktionen" },
                { href: "#pricing", label: "Preise" },
                { href: "#faq", label: "FAQ" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white px-5 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 mt-3"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Support
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
