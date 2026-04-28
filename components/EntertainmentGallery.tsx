import Image from "next/image";
import { Trophy, Film, Star, Sparkles } from "lucide-react";

export default function EntertainmentGallery() {
  return (
    <section id="entertainment" className="py-24 sm:py-32 relative section-glow">
      {/* Ambient orbs */}
      <div className="ambient-orb w-[400px] h-[400px] bg-blue-900/10 top-0 right-0" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.06] rounded-full px-6 py-2.5 mb-8 backdrop-blur-sm">
            <Star className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-medium text-gray-400 uppercase tracking-[0.15em]">
              Premium Entertainment
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Alles was Sie brauchen,{" "}
            <span className="gradient-text">an einem Ort</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Von Live-Sport bis zu den neuesten Blockbustern – genießen Sie
            unbegrenztes Entertainment in brillanter Qualität.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Sports Card */}
          <div className="group relative rounded-2xl overflow-hidden card-hover cursor-default shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-300">
            <div className="aspect-[16/10] relative">
              <Image
                src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop"
                alt="Fußballstadion bei Nacht unter strahlenden Flutlichtern – Live Sport Streaming"
                fill
                className="object-cover rounded-2xl hover:scale-105 group-hover:scale-105 transition-transform duration-300 ease-in-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
              <div className="absolute inset-0 rounded-2xl bg-red-600/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-orange-500 backdrop-blur flex items-center justify-center shadow-lg shadow-red-600/30">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center gap-1.5 bg-red-600/15 border border-red-500/20 rounded-full px-3 py-1 backdrop-blur-sm">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-bold text-red-400 uppercase tracking-[0.2em]">
                    Live
                  </span>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                Live Sport & WM
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Bundesliga, Champions League, Weltmeisterschaft & alle großen
                Sport-Events in Echtzeit.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["⚽ Fußball", "🎾 Tennis", "🏀 Basketball", "🏎️ F1", "🥊 Boxing"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-3 py-1.5 rounded-full bg-white/[0.04] text-gray-400 backdrop-blur-sm border border-white/[0.04] transition-all duration-300 hover:border-white/10 hover:text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Movies Card */}
          <div className="group relative rounded-2xl overflow-hidden card-hover cursor-default">
            <div className="aspect-[16/10] relative">
              <Image
                src="https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=1200&q=90"
                alt="Dunkles Heimkino mit 4K Bildschirm – Premium Film Streaming"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
              <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 backdrop-blur flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <Film className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center gap-1.5 bg-blue-600/15 border border-blue-500/20 rounded-full px-3 py-1 backdrop-blur-sm">
                  <Sparkles className="w-3 h-3 text-blue-400" />
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em]">
                    60.000+ VODs
                  </span>
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
                Filme & Serien
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Riesige Bibliothek an Blockbustern, Serien und Dokumentationen.
                Neue Inhalte täglich.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["🎬 Action", "🎭 Drama", "😂 Komödie", "📺 Serien", "📖 Doku"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-3 py-1.5 rounded-full bg-white/[0.04] text-gray-400 backdrop-blur-sm border border-white/[0.04] transition-all duration-300 hover:border-white/10 hover:text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Ultra-wide 4K banner */}
        <div className="mt-8 group relative rounded-2xl overflow-hidden card-hover cursor-default">
          <div className="aspect-[21/7] sm:aspect-[21/6] relative">
            <Image
              src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1400&q=90"
              alt="Cinematic Neon Entertainment Erlebnis"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                Alles in <span className="text-red-400">4K Ultra HD</span>
              </h3>
              <p className="text-gray-400 text-sm sm:text-base max-w-lg leading-relaxed">
                Kristallklare Bildqualität auf jedem Gerät. Entertainment wie im Kino.
              </p>
            </div>
            <div className="flex gap-2">
              {["4K", "UHD", "HDR", "Dolby"].map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] font-bold px-3 py-1.5 rounded-lg bg-white/[0.04] text-gray-300 border border-white/[0.06] backdrop-blur-sm uppercase tracking-widest"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
