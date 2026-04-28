import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "AGB – Allgemeine Geschäftsbedingungen | BesterIPTV Shop",
  description: "Allgemeine Geschäftsbedingungen von BesterIPTV Shop. Lesen Sie unsere Nutzungsbedingungen.",
};

export default function AGBPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg shadow-red-600/20">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                Allgemeine Geschäftsbedingungen
              </h1>
              <p className="text-sm text-gray-500 mt-1">Zuletzt aktualisiert: April 2026</p>
            </div>
          </div>

          <div className="prose prose-invert prose-gray max-w-none space-y-8">
            <div className="bg-gray-900/50 border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6">
              <section>
                <h2 className="text-xl font-bold text-white mb-3">§1 Geltungsbereich</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, die zwischen BesterIPTV Shop (nachfolgend &quot;Anbieter&quot;) und dem Kunden (nachfolgend &quot;Nutzer&quot;) über die Website besteriptv.shop geschlossen werden. Abweichende AGB des Nutzers werden nicht anerkannt, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">§2 Vertragsgegenstand</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Der Anbieter stellt dem Nutzer einen IPTV-Dienst zur Verfügung, der den Zugang zu Live-TV-Sendern, Video-on-Demand-Inhalten und weiteren digitalen Medieninhalten umfasst. Der genaue Umfang des Dienstes richtet sich nach dem vom Nutzer gewählten Abonnement-Paket.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">§3 Vertragsschluss</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Der Vertrag kommt durch die Bestellung des Nutzers und die Bestätigung des Anbieters zustande. Die Darstellung der Produkte auf der Website stellt kein rechtlich bindendes Angebot dar, sondern eine Aufforderung zur Abgabe einer Bestellung. Nach Eingang der Bestellung und Zahlungsbestätigung erhält der Nutzer eine Auftragsbestätigung nebst Zugangsdaten.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">§4 Preise und Zahlungsbedingungen</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Alle angegebenen Preise verstehen sich als Endpreise inklusive eventuell anfallender gesetzlicher Mehrwertsteuer. Die Zahlung erfolgt über die auf der Website angebotenen Zahlungsmethoden (PayPal, Kreditkarte, Banküberweisung, Kryptowährungen). Der Zugang zum Dienst wird nach Zahlungseingang freigeschaltet.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">§5 Laufzeit und Kündigung</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Das Abonnement läuft für den gewählten Zeitraum (3, 6 oder 12 Monate) und endet automatisch nach Ablauf der vereinbarten Laufzeit. Es erfolgt keine automatische Verlängerung. Eine vorzeitige Kündigung ist nicht vorgesehen, da es sich um Prepaid-Abonnements handelt.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">§6 Nutzungsrechte und Pflichten</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Der Nutzer erhält ein nicht übertragbares, nicht exklusives Nutzungsrecht für den persönlichen Gebrauch. Die Weitergabe der Zugangsdaten an Dritte ist untersagt. Der Nutzer verpflichtet sich, den Dienst nicht für rechtswidrige Zwecke zu nutzen und die geltenden Urheberrechte zu beachten.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">§7 Haftungsbeschränkung</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Der Anbieter haftet nicht für Unterbrechungen des Dienstes, die durch höhere Gewalt, technische Störungen bei Dritten oder Wartungsarbeiten verursacht werden. Die Haftung des Anbieters ist auf den Betrag des vom Nutzer gezahlten Abonnementpreises beschränkt.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">§8 Schlussbestimmungen</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Es gilt das Recht der Bundesrepublik Deutschland. Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen hiervon unberührt. Bei Fragen kontaktieren Sie uns bitte über unseren WhatsApp-Support.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
