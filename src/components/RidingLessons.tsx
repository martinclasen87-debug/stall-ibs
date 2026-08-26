import { Users, Award, BookOpen, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const lessonTypes = [
  {
    title: "Anfängerkurse",
    icon: BookOpen,
    description:
      "Der ideale Einstieg in die Reitwelt. Wir vermitteln Grundlagen im Umgang mit dem Pferd und erste Reiterfahrungen in sicherer Umgebung.",
    audience: "Kinder, Jugendliche & Erwachsene",
    color: "forest",
  },
  {
    title: "Fortgeschrittene",
    icon: Award,
    description:
      "Vertiefen Sie Ihre Reitkünste mit gezieltem Training. Dressur, Springen oder Geländereiten – wir fördern Ihre individuellen Stärken.",
    audience: "Reiter mit Vorkenntnissen",
    color: "earth",
  },
  {
    title: "Familien & Gruppen",
    icon: Users,
    description:
      "Gemeinsam reiten macht mehr Spaß! Unsere Gruppenstunden bieten ein tolles Erlebnis für Familien und Freunde in entspannter Atmosphäre.",
    audience: "Familien & Freizeitreiter",
    color: "warm",
  },
];

const benefits = [
  "Qualifizierter, erfahrener Reitunterricht",
  "Gut ausgebildete, verlässliche Schulpferde",
  "Kleine Gruppen für individuelle Betreuung",
  "Reitunterricht in der Reithalle & im Freien",
  "Für alle Altersgruppen geeignet",
  "Flexible Terminvereinbarung",
];

export default function RidingLessons() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="reitunterricht"
      className="py-24 bg-gradient-to-b from-forest-800 to-forest-950 text-white relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-forest-600/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-earth-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-warm-400 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Reitunterricht
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Reiten lernen auf <span className="text-warm-300">Stall Ibs</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-warm-400 to-earth-400 mx-auto rounded-full mb-6" />
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Professioneller Reitunterricht für Anfänger und Fortgeschrittene in
            Helse, Dithmarschen. Lernen Sie reiten in familiärer Atmosphäre.
          </p>
        </div>

        {/* Image + Content */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/3.png"
              alt="Reitunterricht auf Stall Ibs in Helse"
              className="w-full h-[380px] object-cover"
            />
          </div>

          <div>
            <h3 className="font-heading text-2xl font-bold mb-6">
              Warum Reitunterricht bei Stall Ibs?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-warm-400 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-white/80 text-sm">{b}</span>
                </div>
              ))}
            </div>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-warm-500 hover:bg-warm-400 text-forest-950 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Reitstunde buchen
            </a>
          </div>
        </div>

        {/* Lesson Types */}
        <div className="grid md:grid-cols-3 gap-6">
          {lessonTypes.map((lesson, idx) => (
            <div
              key={lesson.title}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                <lesson.icon size={26} className="text-warm-400" />
              </div>
              <h4 className="font-heading text-xl font-bold mb-3">
                {lesson.title}
              </h4>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {lesson.description}
              </p>
              <span className="inline-block bg-white/10 text-warm-300 text-xs font-medium px-3 py-1.5 rounded-full">
                {lesson.audience}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}