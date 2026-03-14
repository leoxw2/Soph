import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary/5 text-foreground pt-16 pb-8 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-semibold text-primary flex items-baseline gap-2">
              Psychotherapie <span className="font-sans font-medium text-foreground text-base">Sophia Müller</span>
            </h3>
            <p className="text-foreground/80 max-w-sm">
              Approbierte Kinder- und Jugendlichenpsychotherapeutin in München. Empathische Begleitung für Kinder, Jugendliche und Eltern.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-xl font-medium text-primary mb-4">Kontakt</h4>
            <div className="space-y-3">
              <a href="mailto:praxis@psychotherapie-sophia.de" className="block text-foreground/80 hover:text-primary transition-colors">
                praxis@psychotherapie-sophia.de
              </a>
              <div className="text-foreground/80">
                089 / 123 456 78
              </div>
              <div className="text-foreground/80">
                <p>Musterstraße 123</p>
                <p>80331 München</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-xl font-medium text-primary mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/impressum" className="text-foreground/80 hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-foreground/80 hover:text-primary transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-foreground/80 hover:text-primary transition-colors">
                  FAQ & Ablauf
                </Link>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-primary/10 text-center text-foreground/60 text-sm">
          <p>© {currentYear} Psychotherapie Sophia Müller. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
