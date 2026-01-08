"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/constants/motion";
import Button from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  const educationData = [
    { id: 1, title: "Education", school: "Collegium Witelona" },
    { id: 2, title: "Education", school: "Collegium Witelona" },
    { id: 3, title: "Education", school: "Collegium Witelona" },
    { id: 4, title: "Education", school: "Collegium Witelona" },
  ];

  return (
    <section className="relative bg-[#111827] pt-24 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 w-full order-2 lg:order-1">
            <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
              <h2 className="text-blue-400 text-sm md:text-base font-mono tracking-widest uppercase mb-2">
                Get to know me
              </h2>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Me
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={fadeIn("right", "tween", 0.4, 1)}
              className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl"
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {educationData.map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                  className="bg-gray-800/50 border border-gray-700 p-5 rounded-xl backdrop-blur-sm hover:border-purple-500/50 transition-colors group"
                >
                  <p className="text-blue-400 font-mono text-xs uppercase tracking-wider mb-1">
                    {item.title}
                  </p>
                  <p className="text-white font-bold text-lg group-hover:text-purple-400 transition-colors">
                    {item.school}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeIn("up", "tween", 0.6, 1)}>
              <Button href="/about" icon={ArrowRight}>
                Read More
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className="flex-1 w-full order-1 lg:order-2"
          >
            <div className="relative group mx-auto max-w-[600px] lg:max-w-none">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827]">
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#111827]/80 via-transparent to-blue-500/10 pointer-events-none" />

                <img
                  src="/data-center-facility-employing-deep-learning-technology.jpg" // Podstaw tutaj ten nowy obrazek
                  alt="Workspace"
                  className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105 group-hover:rotate-1"
                />

                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent h-1/2 w-full animate-[scan_3s_linear_infinite]" />
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/10 blur-3xl -z-10"></div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
