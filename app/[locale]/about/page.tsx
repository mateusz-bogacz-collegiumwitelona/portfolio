"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/[locale]/constants/motion";
import {
  FileText,
  Download,
  GraduationCap,
  Briefcase,
  Cpu,
  Terminal,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutMe.page");
  const tCards = useTranslations("AboutMe");
  const cvFileName = t("cvFile");
  const cvPath = `/resource/${cvFileName}`;

  const infoCards = [
    {
      icon: GraduationCap,
      color: "text-blue-600 dark:text-blue-400",
      title: tCards("card1_title"),
      desc: tCards("card1_data"),
    },
    {
      icon: Briefcase,
      color: "text-purple-600 dark:text-purple-400",
      title: tCards("card2_title"),
      desc: tCards("card2_data"),
    },
    {
      icon: Terminal,
      color: "text-blue-600 dark:text-blue-400",
      title: tCards("card3_title"),
      desc: tCards("card3_data"),
    },
    {
      icon: Cpu,
      color: "text-purple-600 dark:text-purple-400",
      title: tCards("card4_title"),
      desc: tCards("card4_data"),
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-[#111827] pt-24 pb-12 px-4 sm:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          <div className="space-y-10">
            <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
              <h2 className="text-blue-600 dark:text-blue-400 font-mono tracking-widest uppercase mb-2">
                {t("subtitle")}
              </h2>
              <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-8 transition-colors">
                {t("title_main")}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                  {t("title_colored")}
                </span>
              </h1>

              <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed transition-colors">
                <p>
                  {t.rich("p1", {
                    name: "Mateusz",
                    school: "Collegium Witelona",
                    b1: (chunks) => (
                      <span className="text-gray-900 dark:text-white font-semibold">
                        {chunks}
                      </span>
                    ),
                    blue: (chunks) => (
                      <span className="text-blue-600 dark:text-blue-400 font-medium">
                        {chunks}
                      </span>
                    ),
                  })}
                </p>
                <p>
                  {t.rich("p2", {
                    focus: "DevOps oraz wsparcie techniczne",
                    b2: (chunks) => (
                      <span className="text-gray-900 dark:text-white font-medium">
                        {chunks}
                      </span>
                    ),
                  })}
                </p>
                <p>
                  {t.rich("p3", {
                    company: "Drozapol-Profil S.A.",
                    b2: (chunks) => (
                      <span className="text-gray-900 dark:text-white font-medium">
                        {chunks}
                      </span>
                    ),
                  })}
                </p>
                <p>
                  {t.rich("p4", {
                    iot: "Internet of Things (IoT)",
                    purple: (chunks) => (
                      <span className="text-purple-600 dark:text-purple-400 font-medium">
                        {chunks}
                      </span>
                    ),
                  })}
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {infoCards.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700 p-5 rounded-2xl hover:border-blue-500/50 transition-all shadow-sm dark:shadow-none"
                >
                  <item.icon className={`${item.color} mb-3`} size={28} />
                  <h3 className="text-gray-900 dark:text-white font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)}>
            <div className="bg-gray-100/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 backdrop-blur-md shadow-2xl transition-colors">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  <FileText className="text-blue-600 dark:text-blue-400" />{" "}
                  {t("cvTitle")}
                </h3>
                <a
                  href={cvPath}
                  download={cvFileName}
                  className="flex items-center gap-2 text-sm font-mono text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-bold"
                >
                  <Download size={18} /> {t("download")}
                </a>
              </div>

              <div className="relative aspect-[1/1.4] w-full bg-white dark:bg-gray-950 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors">
                <iframe
                  src={`${cvPath}#view=FitH&toolbar=0`}
                  className="w-full h-full border-none"
                  title={t("cvPreview")}
                />

                <div className="absolute inset-0 bg-white/95 dark:bg-gray-900/90 flex flex-col items-center justify-center p-8 text-center lg:hidden">
                  <FileText
                    size={48}
                    className="text-blue-600 dark:text-blue-400 mb-4"
                  />
                  <p className="text-gray-900 dark:text-white mb-6 font-medium">
                    {t("mobilePreview")}
                  </p>
                  <a
                    href="{cvPath}"
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg"
                  >
                    {t("openNewTab")}
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
