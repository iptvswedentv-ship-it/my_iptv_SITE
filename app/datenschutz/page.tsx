import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | BesterIPTV Shop",
  description: "Datenschutzerklärung von BesterIPTV Shop. Erfahren Sie, wie wir Ihre personenbezogenen Daten verarbeiten und schützen.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-600/20">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                Datenschutzerklärung
              </h1>
              <p className="text-sm text-gray-500 mt-1">Zuletzt aktualisiert: April 2026</p>
            </div>
          </div>

          <div className="prose prose-invert prose-gray max-w-none space-y-8">
            <div className="bg-gray-900/50 border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6">
              <section>
                <h2 className="text-xl font-bold text-white mb-3">1. Verantwortlicher</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist BesterIPTV Shop. Bei Fragen zum Datenschutz können Sie uns jederzeit über unseren WhatsApp-Support unter +212 663254137 kontaktieren.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">2. Erhebung und Speicherung personenbezogener Daten</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst (sog. Server-Logfiles). Diese umfassen den verwendeten Browsertyp und die -version, das verwendete Betriebssystem, die Referrer-URL, den Hostnamen des zugreifenden Rechners, die Uhrzeit der Serveranfrage und die IP-Adresse. Diese Daten werden nur für statistische Zwecke ausgewertet und nach 30 Tagen automatisch gelöscht.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">3. Nutzung Ihrer Daten</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Die von Ihnen bereitgestellten personenbezogenen Daten (z. B. E-Mail-Adresse bei Bestellungen) verwenden wir ausschließlich zur Abwicklung Ihrer Bestellung und zur Bereitstellung unseres IPTV-Dienstes. Eine Weitergabe Ihrer Daten an Dritte erfolgt nicht, es sei denn, dies ist zur Vertragserfüllung erforderlich (z. B. an Zahlungsdienstleister).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">4. Cookies</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Unsere Website verwendet Cookies, um die Nutzererfahrung zu verbessern. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie können Ihren Browser so einstellen, dass er über das Setzen von Cookies informiert und Sie nur im Einzelfall erlauben. Bei Deaktivierung von Cookies kann die Funktionalität unserer Website eingeschränkt sein.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">5. SSL-Verschlüsselung</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">6. Ihre Rechte</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Sie haben gemäß DSGVO das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten, auf Berichtigung unrichtiger Daten, auf Löschung (Recht auf Vergessenwerden), auf Einschränkung der Verarbeitung, auf Datenübertragbarkeit und auf Widerspruch gegen die Verarbeitung. Zur Ausübung dieser Rechte kontaktieren Sie uns bitte über WhatsApp.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">7. Analyse-Tools und Werbung</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Wir verwenden auf unserer Website keine Tracking- oder Analyse-Tools von Drittanbietern. Es werden keine Daten zu Werbezwecken an Dritte weitergegeben. Der Schutz Ihrer Privatsphäre hat für uns höchste Priorität.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">8. Änderungen dieser Datenschutzerklärung</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
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
