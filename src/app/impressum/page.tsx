export const metadata = {
  title: "Impressum | Psychotherapie Sophia Müller",
};

export default function Impressum() {
  return (
    <div className="bg-background min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-primary mb-10">Impressum</h1>
        
        <div className="space-y-8 text-foreground/80 font-sans leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-foreground mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Sophia Müller<br />
              Approbierte Kinder- und Jugendlichenpsychotherapeutin<br />
              MVZ für Psychotherapie Musteradresse<br />
              Musterstraße 123<br />
              80331 München
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-medium text-foreground mb-2">Kontakt</h2>
            <p>
              Telefon: 089 / 12345678<br />
              Mobil: 0123 / 4567890<br />
              E-Mail: praxis@psychotherapie-sophia.de
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-medium text-foreground mb-2">Gesetzliche Berufsbezeichnung</h2>
            <p>
              Kinder- und Jugendlichenpsychotherapeutin (verliehen in der Bundesrepublik Deutschland)
            </p>
            <p className="mt-2">
              <strong>Zuständige Aufsichtsbehörde:</strong><br />
              Regierung von Oberbayern<br />
              Maximilianstraße 39<br />
              80538 München
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-medium text-foreground mb-2">Streitschlichtung</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen. Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
