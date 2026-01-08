"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
// @ts-ignore
import NET from "vanta/dist/vanta.net.min";
import { fadeIn, staggerContainer } from "@/app/constants/motion";
import { ButtonLink } from "@/app/constants/buttonLink";
import Button from "../ui/button";

export function HeroSection() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
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
        color: 0x3f81ff,
        backgroundColor: 0x111827,
        points: 12.0,
        maxDistance: 20.0,
        spacing: 16.0,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#111827]">
      <div ref={vantaRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 z-[1] bg-black/40 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          animate="show"
          className="w-full"
        >
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-blue-400 text-lg md:text-xl font-mono mb-4 tracking-widest uppercase"
          >
            Computer Science Engineering
          </motion.h2>

          <motion.h1
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Mateusz's
            </span>{" "}
            Portfolio
          </motion.h1>

          <motion.p
            variants={fadeIn("up", "tween", 0.6, 1)}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          >
            A showcase of my projects, skills, and achievements in the field of
            software engineering.
          </motion.p>
          {ButtonLink.map((button) => (
            <Button key={button.src} href={button.src} icon={button.icon}>
              {button.text}
            </Button>
          ))}
          <motion.div
            variants={fadeIn("up", "tween", 0.8, 1)}
            className="mt-10 flex gap-4 justify-center"
          ></motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111827] to-transparent z-20"></div>
    </section>
  );
}
