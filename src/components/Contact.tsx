import { MapPin, Phone, Clock } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    lines: [
      "Stall Ibs",
      "An der B5 Nr. 30",
      "25709 Helse",
      "Schleswig-Holstein",
    ],
  },
  {
    icon: Phone,
    title: "Telefon",
    lines: ["Melanie Ibs", "Tel: 0162 / 3066139"],
  },
  {
    icon: Clock,
    title: "Erreichbar",
    lines: ["Mo – Fr: 8:00 – 18:00 Uhr", "Sa – So: 9:00 – 16:00 Uhr"],
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="kontakt" className="py-16 sm:py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 sm:mb-20">
          <span className="inline-block text-forest-600 font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3">
            Kontakt
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-forest-900 mb-6">
            Wir freuen uns auf <span className="text-earth-500">Sie</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-forest-500 to-earth-400 mx-auto rounded-full mb-6" />

          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Haben Sie Fragen? Rufen Sie uns gerne an oder besuchen Sie uns
            direkt vor Ort in Helse.
          </p>
        </div>

        {/* Contact Cards */}
        <div
          className={`max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {contactInfo.map((item, idx) => (
            <div
              key={item.title}
              className="bg-warm-50 rounded-3xl p-8 text-center hover:bg-white border border-transparent hover:border-forest-100 hover:shadow-xl transition-all duration-500"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-forest-100 flex items-center justify-center mx-auto mb-6">
                <item.icon size={28} className="text-forest-600" />
              </div>

              <h3 className="font-heading text-xl font-bold text-forest-800 mb-3">
                {item.title}
              </h3>

              <div className="space-y-1">
                {item.lines.map((line) => (
                  <p key={line} className="text-gray-600 text-sm">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Google Map */}
        <div className="max-w-5xl mx-auto mt-16 sm:mt-20">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2346.0602905926007!2d9.016004330932276!3d53.983953242454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b3f1368a75ca95%3A0xf7e7e4fccefe680e!2sAn%20d.%20B5%2030%2C%2025709%20Helse!5e0!3m2!1sde!2sde!4v1778609178548!5m2!1sde!2sde"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title="Stall Ibs Standort"
            />
          </div>
        </div>

      </div>
    </section>
  );
}