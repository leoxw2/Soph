export const metadata = {
  title: "Kontakt | Psychotherapie Sophia Müller",
  description: "Kontaktieren Sie Sophia Müller für ein Erstgespräch in München oder für eine Online-Therapie."
};

export default function Kontakt() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="bg-primary/5 pt-20 pb-16 border-b border-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Kontakt & Terminvereinbarung</h1>
          <p className="text-xl text-foreground/80 font-sans">
            Treten Sie gerne direkt mit mir in Verbindung. Ich melde mich in der Regel innerhalb von 48 Stunden bei Ihnen zurück.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Info Column */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif text-foreground mb-6">Ich bin gerne für Sie da</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Nutzen Sie das Kontaktformular rechts oder schreiben Sie mir direkt eine E-Mail, um einen Termin für ein unverbindliches Erstgespräch (Sprechstunde) in meiner Praxis oder als Videosprechstunde zu vereinbaren.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-full shrink-0 flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                    </div>
                    <h3 className="font-serif text-lg font-medium">Praxisadresse</h3>
                  </div>
                  <div className="text-foreground/80 pl-[52px]">
                    <p>MVZ für Psychotherapie</p>
                    <p>Musterstraße 123</p>
                    <p>80331 München</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-accent/10 rounded-full shrink-0 flex items-center justify-center">
                      <div className="w-3 h-3 bg-accent rounded-full" />
                    </div>
                    <h3 className="font-serif text-lg font-medium">Online-Option</h3>
                  </div>
                  <div className="text-foreground/80 pl-[52px]">
                    <p>Europaweite Therapie</p>
                    <p>Sichere Videosprechstunde</p>
                    <p>Flexibel für Jugendliche</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-full shrink-0 flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                    </div>
                    <h3 className="font-serif text-lg font-medium">E-Mail</h3>
                  </div>
                  <div className="text-foreground/80 pl-[52px]">
                    <a href="mailto:praxis@psychotherapie-sophia.de" className="hover:text-primary transition-colors">
                      praxis@psychotherapie-sophia.de
                    </a>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-full shrink-0 flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                    </div>
                    <h3 className="font-serif text-lg font-medium">Telefon</h3>
                  </div>
                  <div className="text-foreground/80 pl-[52px]">
                    <p>Mobil: 0123 / 4567890</p>
                    <p>Festnetz: 089 / 123456</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div>
              <div className="bg-background rounded-3xl p-8 shadow-sm border border-primary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full" />
                
                <h2 className="text-2xl font-serif text-primary mb-6 relative z-10">Schreiben Sie mir</h2>
                
                <form className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Ihr Name</label>
                      <input type="text" id="name" className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all" placeholder="Max Mustermann" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Ihre E-Mail</label>
                      <input type="email" id="email" className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all" placeholder="mail@beispiel.de" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">Thema (optional)</label>
                    <select id="subject" className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all text-foreground/80">
                      <option>Erstgespräch / Terminvereinbarung</option>
                      <option>Fragen zur Online-Therapie</option>
                      <option>Allgemeine Anfrage</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Ihre Nachricht</label>
                    <textarea id="message" rows={5} className="w-full bg-white border border-primary/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent transition-all resize-none" placeholder="Wie kann ich Ihnen helfen?"></textarea>
                  </div>

                  <p className="text-xs text-foreground/60">
                    Mit dem Absenden erklären Sie sich mit unserer <a href="/datenschutz" className="underline hover:text-primary">Datenschutzerklärung</a> einverstanden. Ihre Daten werden vertraulich behandelt und sicher übertragen.
                  </p>

                  <button type="button" className="w-full py-4 px-6 bg-accent hover:bg-accent/90 text-white font-medium rounded-xl shadow-md transition-all text-lg flex justify-center items-center">
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
