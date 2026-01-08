import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "../constants/socialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] border-t border-gray-800 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg italic">Mateusz.dev</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Student Informatyki z pasją do DevOps i IoT. Buduję nowoczesne
              rozwiązania i stale poszerzam swoje horyzonty.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-blue-400 font-mono text-xs uppercase tracking-widest font-bold">
              Nawigacja
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  O mnie
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  Projekty
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-purple-400 font-mono text-xs uppercase tracking-widest font-bold">
              Znajdź mnie
            </h3>
            <div className="flex space-x-4">
              <a
                href={socialLinks.github.href}
                target="_blank"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href={socialLinks.linkedin.href}
                target="_blank"
                className="p-2 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-mono">
            © {currentYear} Mateusz Bogacz-Drewniak. Built with Next.js &
            Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}
