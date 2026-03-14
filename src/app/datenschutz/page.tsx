export const metadata = {
  title: "Datenschutz | Psychotherapie Sophia Müller",
};

export default function Datenschutz() {
  return (
    <div className="bg-background min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-primary mb-10">Datenschutzerklärung</h1>
        
        <div className="space-y-8 text-foreground/80 font-sans leading-relaxed">
          <section>
            <h2 className="text-xl font-medium text-foreground mb-2">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-medium text-foreground mt-4 mb-2">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>
          
          <section>
            <h2 className="text-xl font-medium text-foreground mb-2">2. Datenerfassung auf dieser Website</h2>
            <h3 className="font-medium text-foreground mt-4 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
            <p>
              Die Datenverarbeitung auf dieser Website wird durch die Websitebetreiberin durchgeführt.
              Sophia Müller, Musterstraße 123, 80331 München. (siehe Impressum).
            </p>
            <h3 className="font-medium text-foreground mt-4 mb-2">Wie erfassen wir Ihre Daten?</h3>
            <p>
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
              Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground mb-2">3. Hinweis zur Online-Therapie in der Praxis</h2>
            <p>
              Bei Inanspruchnahme der Videosprechstunde werden Ihre Daten streng vertraulich und nach den gesetzlichen Bestimmungen (insbesondere nach dem Patientengeheimnis § 203 StGB) verarbeitet. Ein zertifizierter Anbieter (z.B. RED Medical oder ähnliche) stellt die Ende-zu-Ende verschlüsselte Verbindung her.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
