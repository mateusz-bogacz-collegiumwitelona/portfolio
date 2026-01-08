import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "../constants/socialLinks";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const currentYear = new Date().getFullYear();

  const t = await getTranslations("Footer");

  return (
    <footer className="bg-gray-50 dark:bg-[#111827] border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-gray-900 dark:text-white font-bold text-lg italic transition-colors">
              Mateusz.dev
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs transition-colors">
              {t("description")}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-blue-600 dark:text-blue-400 font-mono text-xs uppercase tracking-widest font-bold transition-colors">
              {t("navigation")}
            </h3>
            <ul className="space-y-2">
              {[
                { name: t("home"), href: "/" },
                { name: t("about"), href: "/about" },
                { name: t("projects"), href: "/projects" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-purple-600 dark:text-purple-400 font-mono text-xs uppercase tracking-widest font-bold transition-colors">
              {t("contact")}
            </h3>
            <div className="flex space-x-4">
              <a
                href={socialLinks.github.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href={socialLinks.linkedin.href}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors">
          <p className="text-gray-500 dark:text-gray-500 text-xs font-mono">
            © {currentYear} {t("info")}
          </p>
        </div>
      </div>
    </footer>
  );
}
