import { Heart, Shield, Users, Clock } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const values = [
  {
    icon: Heart,
    title: "Herzlichkeit",
    text: "Bei uns steht das Wohl von Pferd und Reiter im Mittelpunkt.",
  },
  {
    icon: Shield,
    title: "Vertrauen",
    text: "Seit über 30 Jahren vertrauen Pferdebesitzer aus Dithmarschen auf unseren Familienbetrieb.",
  },
  {
    icon: Users,
    title: "Familie",
    text: "Unser Hof wird in Familientradition geführt – mit persönlichem Engagement und Leidenschaft.",
  },
];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="ueber-uns" className="py-16 sm:py-24 bg-warm-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-forest-600 font-semibold text-xs sm:text-sm uppercase tracking-[0.18em] sm:tracking-[0.2em] mb-3">
            Über uns
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mb-5 sm:mb-6">
            Ein Hof mit <span className="text-earth-500">Geschichte</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-forest-500 to-earth-400 mx-auto rounded-full mb-6 sm:mb-8" />
        </div>

        {/* Story */}
        <div
          className={`grid lg:grid-cols-2 gap-10 sm:gap-12 items-center mb-16 sm:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-forest-800 mb-5 sm:mb-6 leading-tight">
              Familienbetrieb seit 1980 – <br />
              <span className="text-earth-500">mitten in Dithmarschen</span>
            </h3>

            <p className="text-gray-600 leading-relaxed mb-5 text-base sm:text-lg">
              Seit über 30 Jahren ist Stall Ibs ein Ort, an dem Pferde und
              Menschen sich wohlfühlen. Was einst als kleiner Bauernhof in Helse
              begann, ist heute ein moderner Pferdehof mit familiärer Atmosphäre
              – gelegen im Herzen von Dithmarschen.
            </p>

            <p className="text-gray-700 font-medium mb-4 text-base sm:text-lg">
              Wir bieten folgende Haltungsmöglichkeiten und Ausstattung:
            </p>

            {/* Leistungen als Grid */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 text-gray-600 text-sm sm:text-base">
              <li>• Einzelboxen (3 × 3 m)</li>
              <li>• Einzelboxen mit eigenem Außenpaddock (3 × 6 m)</li>
              <li>• Offenstallhaltung</li>
              <li>• Reithalle (20 × 40 m)</li>
              <li>• Reitplatz</li>
              <li>• Weiden direkt am Stall</li>
              <li>• Waschbox</li>
              <li>• Sattelkammer mit Aufenthaltsmöglichkeit</li>
              <li>• Wohnhaus direkt auf dem Gelände</li>
              <li>• Videoüberwachte Hofstelle und Stallgasse</li>
              <li>• Keine Ruhetage, tägliche Stallruhe ab 21 Uhr</li>
              <li>• Freie Tierarzt- und Hufschmiedwahl</li>
            </ul>

            <p className="text-gray-600 leading-relaxed mb-5 text-sm sm:text-base">
              Die Anlage liegt nur ca. 10 km von der Nordsee entfernt und
              garantiert eine gesunde, frische Luft sowie weitläufige Koppeln.
              Die flache, wunderschöne Landschaft Dithmarschens lädt zu
              ausgedehnten Ausritten auf naturnahen Reitwegen ein.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              Bei uns steht das Miteinander im Vordergrund: Wir sind nicht nur
              ein Pferdehof, sondern eine Gemeinschaft von Pferdeliebhabern, die
              sich gegenseitig unterstützen. Ob Freizeitreiter, Familie oder
              ambitionierte Reitsportler – bei uns sind alle willkommen.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}images/2.png`}
                alt="Einblick in Stall Ibs in Helse"
                className="w-full h-[300px] sm:h-[400px] object-cover"
              />
            </div>

            <div className="absolute -bottom-4 left-4 sm:-bottom-6 sm:left-6 bg-white rounded-2xl shadow-xl px-4 py-3 sm:p-5 border border-forest-100">
              <div className="text-forest-700 font-heading text-2xl sm:text-3xl font-bold">
                Seit 1890
              </div>
              <div className="text-gray-500 text-xs sm:text-sm">
                Tradition & Leidenschaft
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12">
          {values.map((item, idx) => (
            <div
              key={item.title}
              className={`bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-1 group ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-forest-50 flex items-center justify-center mb-4 group-hover:bg-forest-100 transition-colors">
                <item.icon size={24} className="text-forest-600" />
              </div>
              <h4 className="font-heading text-lg font-bold text-forest-800 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
