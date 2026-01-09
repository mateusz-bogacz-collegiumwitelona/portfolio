"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
// @ts-ignore
import NET from "vanta/dist/vanta.net.min";
import { fadeIn, staggerContainer } from "@/app/[locale]/constants/motion";
import { ButtonLink } from "@/app/[locale]/constants/buttonLink";
import Button from "../ui/button";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("Hero");

  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (mounted && vantaRef.current) {
      if (vantaEffect.current) vantaEffect.current.destroy();

      const isDark = resolvedTheme === "dark";

      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: isDark ? 0x3f81ff : 0x2563eb,
        backgroundColor: isDark ? 0x111827 : 0xffffff,
        points: 12.0,
        maxDistance: 20.0,
        spacing: 16.0,
      });
    }

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, [mounted, resolvedTheme]);

  if (!mounted) return <section className="min-h-screen bg-[#111827]" />;

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-[#111827] transition-colors duration-300">
      <div ref={vantaRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 z-[1] bg-white/10 dark:bg-black/40 pointer-events-none transition-colors" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          animate="show"
          className="w-full"
        >
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-blue-600 dark:text-blue-400 text-lg md:text-xl font-mono mb-4 tracking-widest uppercase transition-colors"
          >
            {t("title")}
          </motion.h2>

          <motion.h1
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white leading-tight transition-colors"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
              {t("name")}
            </span>{" "}
            {t("portfolio")}
          </motion.h1>

          <motion.p
            variants={fadeIn("up", "tween", 0.6, 1)}
            className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors"
          >
            {t("description")}
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-2 justify-center">
            {ButtonLink.map((button) => {
              const isCVButton = "isCV" in button && button.isCV;

              const finalHref = isCVButton
                ? `/resource/${t("cvFile")}`
                : button.src;

              return (
                <Button
                  key={button.nameKey}
                  href={finalHref}
                  icon={button.icon}
                  download={isCVButton ? t("cvFile") : undefined}
                >
                  {t(button.nameKey)}
                </Button>
              );
            })}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-[#111827] to-transparent z-20 transition-colors duration-300"></div>
    </section>
  );
}
