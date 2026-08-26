export default function Impressum() {
  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-forest-900 mb-6">
            Impressum
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-forest-500 to-earth-400 mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div className="space-y-10 text-gray-700 leading-relaxed text-sm sm:text-base">

          <div>
            <h2 className="font-heading text-xl font-bold text-forest-800 mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Stall Ibs<br />
              An der B5 Nr. 30<br />
              25709 Helse<br />
              Schleswig-Holstein
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-forest-800 mb-3">
              Kontakt
            </h2>
            <p>
              Telefon: 0162 / 3066139<br />
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-forest-800 mb-3">
              Verantwortlich für den Inhalt nach § 18 MStV
            </h2>
            <p>
              Melanie Ibs<br />
              Anschrift wie oben
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl font-bold text-forest-800 mb-3">
              Haftungsausschluss
            </h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}   