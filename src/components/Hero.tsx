import { ChevronDown, MapPin, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="start"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}images/1.png`}
          alt="Stall Ibs Pferdehof in Helse, Dithmarschen"
          className="w-full h-full object-cover object-[45%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/80 via-forest-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/55 via-transparent to-forest-950/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-32 sm:pb-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-3 py-2 sm:px-4 sm:py-2 mb-6 sm:mb-8">
            <Star size={14} className="text-warm-400 fill-warm-400 shrink-0" />
            <span className="text-white/90 text-sm font-medium">
              Familienbetrieb seit 1980
            </span>
          </div>

          <h2 className="animate-fade-in-up animation-delay-200 font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5 sm:mb-6">
            <span className="text-warm-300">Willkommen</span>
          </h2>

          <p className="animate-fade-in-up animation-delay-400 text-base sm:text-xl text-white/85 leading-relaxed mb-4 max-w-xl">
            Ihr familiärer Pferdehof in Helse. Hier finden Sie und Ihr Pferd ein
            zweites Zuhause – mit Herz, Kompetenz und über 30 Jahren Erfahrung.
          </p>

          <div className="animate-fade-in-up animation-delay-400 flex items-start gap-2 text-white/70 text-sm sm:text-sm mb-8 sm:mb-10">
            <MapPin size={15} className="text-warm-400 mt-0.5 shrink-0" />
            <span>
              An der B5, Nr 30 in 25709 Helse, Dithmarschen – Schleswig-Holstein
            </span>
          </div>

          <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#angebote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-forest-600 hover:bg-forest-500 text-white rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-forest-900/30"
            >
              Unsere Angebote
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/25 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up animation-delay-800 mt-14 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl">
          {[
            { value: "30+", label: "Jahre Tradition" },
            { value: "Familiäre", label: "Atmosphäre" },
            { value: "Ganzjährig", label: "Verfügbar" },
            { value: "Individuelle", label: "Betreuung" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-3 sm:p-4 text-center"
            >
              <div className="text-warm-300 font-heading text-xl sm:text-2xl font-bold">
                {stat.value}
              </div>
              <div className="text-white/70 text-[10px] sm:text-xs mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#ueber-uns"
        className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white animate-bounce transition-colors"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown size={28} className="sm:w-8 sm:h-8" />
      </a>
    </section>
  );
}
