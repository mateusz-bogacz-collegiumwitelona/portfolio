"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/[locale]/constants/motion";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  Github,
  Linkedin,
} from "lucide-react";
import { socialLinks } from "@/app/[locale]/constants/socialLinks";

export default function IndexContact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mlgdqwyn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.error("Form submission error:", error);
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 relative bg-white dark:bg-[#111827] pt-10 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300"
    >
      <motion.div
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="space-y-8"
          >
            <div>
              <h2 className="text-blue-600 dark:text-blue-400 text-sm font-mono tracking-widest uppercase mb-2">
                Contact
              </h2>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 transition-colors">
                Let's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                  Connect
                </span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed transition-colors">
                Najprostsza droga do komunikacji ze mną. Napisz maila lub znajdź
                mnie w mediach społecznościowych.
              </p>
            </div>

            <div className="flex gap-6">
              {[
                { icon: Github, href: socialLinks.github.href },
                { icon: Linkedin, href: socialLinks.linkedin.href },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-gray-100 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all text-gray-700 dark:text-white shadow-sm"
                >
                  <social.icon size={32} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-10 dark:opacity-20"></div>

            <form
              onSubmit={handleSubmit}
              className="relative bg-gray-50 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 backdrop-blur-md rounded-2xl p-8 space-y-5 shadow-xl dark:shadow-none transition-colors"
            >
              <input type="text" name="_gotcha" className="hidden" />

              {[
                {
                  label: "Imię",
                  name: "name",
                  type: "text",
                  placeholder: "Twoje Imię",
                  icon: User,
                },
                {
                  label: "Email",
                  name: "email",
                  type: "email",
                  placeholder: "twoj@email.com",
                  icon: Mail,
                },
              ].map((field) => (
                <div key={field.name} className="space-y-2">
                  <label className="text-blue-600 dark:text-blue-400 font-mono text-xs uppercase tracking-widest ml-1 flex items-center gap-2">
                    <field.icon size={14} /> {field.label}
                  </label>
                  <input
                    required
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-white dark:bg-[#1E2B45]/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all shadow-sm dark:shadow-none"
                  />
                </div>
              ))}

              <div className="space-y-2">
                <label className="text-blue-600 dark:text-blue-400 font-mono text-xs uppercase tracking-widest ml-1 flex items-center gap-2">
                  <MessageSquare size={14} /> Wiadomość
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="W czym mogę pomóc?"
                  className="w-full bg-white dark:bg-[#1E2B45]/50 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all resize-none shadow-sm dark:shadow-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  status === "success"
                    ? "bg-green-600 dark:bg-green-500 text-white"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                } disabled:opacity-50 active:scale-[0.98]`}
              >
                {status === "idle" && (
                  <>
                    Wyślij wiadomość <Send size={18} />
                  </>
                )}
                {status === "sending" && "Wysyłanie..."}
                {status === "success" && "Wiadomość wysłana!"}
                {status === "error" && "Błąd! Spróbuj ponownie."}
              </button>

              {status === "success" && (
                <p className="text-green-600 dark:text-green-400 text-center text-sm font-mono animate-pulse transition-colors">
                  Dziękuję! Odpowiem tak szybko, jak to możliwe.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
