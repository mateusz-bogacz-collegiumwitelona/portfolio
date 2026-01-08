"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/constants/motion";
import {
  FileText,
  Download,
  GraduationCap,
  Briefcase,
  Cpu,
  Terminal,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#111827] pt-8 pb-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          <div className="space-y-10">
            <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
              <h2 className="text-blue-400 font-mono tracking-widest uppercase mb-2">
                Student & Developer
              </h2>
              <h1 className="text-5xl font-extrabold text-white mb-8">
                O{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  mnie
                </span>
              </h1>

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Witam, nazywam się{" "}
                  <span className="text-white font-semibold">Mateusz</span>.
                  Jestem studentem drugiego roku Informatyki na{" "}
                  <span className="text-blue-400">Collegium Witelona</span> w
                  Legnicy.
                </p>
                <p>
                  Moje zainteresowania obejmują szeroki zakres dziedzin
                  informatycznych, ze szczególnym naciskiem na
                  <span className="text-white font-medium">
                    {" "}
                    DevOps oraz wsparcie techniczne
                  </span>
                  . Rozwijam się również w Fullstack Development, czego
                  przykładem jest to portfolio.
                </p>
                <p>
                  Doświadczenie zawodowe zdobyłem podczas praktyk w{" "}
                  <span className="text-white">Drozapol-Profil S.A.</span>,
                  gdzie zajmowałem się administracją sieci i serwerów oraz
                  pełniłem rolę specjalisty Help Desk. Pozwoliło mi to rozwinąć
                  umiejętności techniczne oraz kompetencje miękkie.
                </p>
                <p>
                  W wolnym czasie zgłębiam systemy Linux oraz{" "}
                  <span className="text-purple-400">
                    Internet of Things (IoT)
                  </span>
                  , pracując z Raspberry Pi, Arduino oraz ESP.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="bg-gray-800/30 border border-gray-700 p-5 rounded-2xl hover:border-blue-500/50 transition-colors">
                <GraduationCap className="text-blue-400 mb-3" size={28} />
                <h3 className="text-white font-bold mb-1">Edukacja</h3>
                <p className="text-gray-400 text-sm">
                  Informatyka, Collegium Witelona (II Rok)
                </p>
              </div>
              <div className="bg-gray-800/30 border border-gray-700 p-5 rounded-2xl hover:border-purple-500/50 transition-colors">
                <Briefcase className="text-purple-400 mb-3" size={28} />
                <h3 className="text-white font-bold mb-1">Doświadczenie</h3>
                <p className="text-gray-400 text-sm">
                  Admin sieci & Help Desk, Drozapol-Profil S.A.
                </p>
              </div>
              <div className="bg-gray-800/30 border border-gray-700 p-5 rounded-2xl hover:border-blue-500/50 transition-colors">
                <Terminal className="text-blue-400 mb-3" size={28} />
                <h3 className="text-white font-bold mb-1">DevOps / Linux</h3>
                <p className="text-gray-400 text-sm">
                  Administracja serwerami, Bash, Sieci
                </p>
              </div>
              <div className="bg-gray-800/30 border border-gray-700 p-5 rounded-2xl hover:border-purple-500/50 transition-colors">
                <Cpu className="text-purple-400 mb-3" size={28} />
                <h3 className="text-white font-bold mb-1">IoT Projects</h3>
                <p className="text-gray-400 text-sm">
                  Raspberry Pi, Arduino, Embedded
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)}>
            <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 backdrop-blur-md shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <FileText className="text-blue-400" /> Życiorys (PDF)
                </h3>
                <a
                  href="/resource/Mateusz_Bogacz_Drewniak_PL.pdf"
                  download
                  className="flex items-center gap-2 text-sm font-mono text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Download size={18} /> Pobierz
                </a>
              </div>

              <div className="relative aspect-[1/1.4] w-full bg-gray-950 rounded-xl overflow-hidden border border-gray-700">
                <iframe
                  src="/resource/Mateusz_Bogacz_Drewniak_PL.pdf#view=FitH&toolbar=0"
                  className="w-full h-full border-none"
                  title="Podgląd CV"
                />

                <div className="absolute inset-0 bg-gray-900/90 flex flex-col items-center justify-center p-8 text-center lg:hidden">
                  <FileText size={48} className="text-blue-400 mb-4" />
                  <p className="text-white mb-6">
                    Podgląd PDF jest zoptymalizowany dla urządzeń desktopowych.
                  </p>
                  <a
                    href="/resource/Mateusz_Bogacz_Drewniak_PL.pdf"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-all"
                  >
                    Otwórz CV w nowej karcie
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
