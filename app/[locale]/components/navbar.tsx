"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Moon, Menu, X, Sun } from "lucide-react";
import Image from "next/image";
import { navLinks } from "@/app/[locale]/constants/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LanguageSwitch from "./languageSwitch";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center group">
                <div className="relative h-8 w-8 mr-3 transition-transform group-hover:scale-110">
                  <Image
                    src="/favicon.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-gray-900 dark:text-[#E5E7EB] font-bold tracking-tight hidden sm:block transition-colors">
                  Mateusz{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-mono">
                    Bogacz
                  </span>
                </span>
              </Link>

              <div className="hidden md:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.nameKey}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
                  >
                    {t(link.nameKey)}{" "}
                  </Link>
                ))}

                <div className="flex items-center ml-4 pl-4 border-l border-gray-200 dark:border-gray-800 space-x-2">
                  <button
                    onClick={toggleTheme}
                    className="p-2 text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                  <LanguageSwitch />
                </div>
              </div>

              <div className="md:hidden flex items-center">
                <DisclosureButton className="p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  {open ? <X size={24} /> : <Menu size={24} />}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden bg-white dark:bg-[#111827] border-b border-gray-200 dark:border-gray-800 animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <DisclosureButton
                  key={link.nameKey}
                  as={Link}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-colors"
                >
                  {t(link.nameKey)}
                </DisclosureButton>
              ))}
              <div className="flex items-center justify-around py-4 mt-4 border-t border-gray-200 dark:border-gray-800">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 p-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun size={20} /> Light Mode
                    </>
                  ) : (
                    <>
                      <Moon size={20} /> Dark Mode
                    </>
                  )}
                </button>
                <div className="flex items-center gap-2 p-2 text-gray-500 dark:text-gray-400">
                  <LanguageSwitch /> Lang
                </div>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
