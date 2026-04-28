import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "DMCA Policy | BesterIPTV Shop",
  description: "DMCA (Digital Millennium Copyright Act) Policy von BesterIPTV Shop. Erfahren Sie, wie Sie eine Urheberrechtsbeschwerde einreichen können.",
};

export default function DMCAPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center shadow-lg shadow-orange-600/20">
              <ShieldAlert className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                DMCA Policy
              </h1>
              <p className="text-sm text-gray-500 mt-1">Digital Millennium Copyright Act</p>
            </div>
          </div>

          <div className="prose prose-invert prose-gray max-w-none space-y-8">
            <div className="bg-gray-900/50 border border-white/5 rounded-2xl p-6 sm:p-8 space-y-6">
              <section>
                <h2 className="text-xl font-bold text-white mb-3">1. Einleitung</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  BesterIPTV Shop respektiert das geistige Eigentum anderer und erwartet von seinen Nutzern dasselbe. Wir reagieren auf Benachrichtigungen über mutmaßliche Urheberrechtsverletzungen gemäß dem Digital Millennium Copyright Act (DMCA) und anwendbaren nationalen und internationalen Urheberrechtsgesetzen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">2. Meldung von Urheberrechtsverletzungen</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Wenn Sie der Meinung sind, dass Ihre urheberrechtlich geschützten Werke auf eine Art und Weise kopiert wurden, die eine Urheberrechtsverletzung darstellt, senden Sie uns bitte eine schriftliche Benachrichtigung mit folgenden Informationen:
                </p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Eine physische oder elektronische Unterschrift der Person, die befugt ist, im Namen des Inhabers des ausschließlichen Rechts zu handeln.",
                    "Eine Beschreibung des urheberrechtlich geschützten Werkes, von dem behauptet wird, dass es verletzt wurde.",
                    "Eine Beschreibung, wo sich das mutmaßlich verletzende Material auf unserer Website befindet.",
                    "Ihre Adresse, Telefonnummer und E-Mail-Adresse.",
                    "Eine Erklärung, dass Sie in gutem Glauben davon ausgehen, dass die strittige Nutzung nicht vom Urheberrechtsinhaber genehmigt wurde.",
                    "Eine eidesstattliche Erklärung, dass die obigen Angaben korrekt sind.",
                  ].map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                      <span className="text-red-400 font-bold shrink-0">{i + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">3. Kontakt für DMCA-Benachrichtigungen</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Bitte senden Sie Ihre DMCA-Benachrichtigungen per WhatsApp an <span className="text-white font-semibold">+212 663254137</span>. Wir werden Ihre Anfrage innerhalb von 48 Stunden bearbeiten und gegebenenfalls das beanstandete Material entfernen oder den Zugang dazu sperren.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">4. Gegenbenachrichtigung</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Wenn Sie der Meinung sind, dass Ihr Material fälschlicherweise aufgrund einer DMCA-Benachrichtigung entfernt wurde, können Sie eine Gegenbenachrichtigung einreichen. Diese muss Ihre Kontaktdaten, eine Beschreibung des entfernten Materials und eine eidesstattliche Erklärung enthalten, dass Sie in gutem Glauben davon ausgehen, dass das Material aufgrund eines Irrtums entfernt wurde.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">5. Richtlinie bei wiederholten Verstößen</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Gemäß den Bestimmungen des DMCA und anderer geltender Gesetze behält sich BesterIPTV Shop das Recht vor, unter geeigneten Umständen den Zugang von Nutzern zu sperren, die wiederholt Urheberrechte verletzen.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mb-3">6. Haftungsausschluss</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  BesterIPTV Shop ist ein reiner Dienstleister und übernimmt keine Verantwortung für die von Dritten bereitgestellten Inhalte. Wir bemühen uns, alle Anfragen bezüglich Urheberrechtsverletzungen zeitnah und gründlich zu bearbeiten.
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
