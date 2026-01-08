"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Moon, Languages, Menu, X, Code2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/app/constants/navigation";

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="fixed top-0 w-full z-50 bg-[#111827]/80 backdrop-blur-md border-b border-gray-800"
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
                <span className="text-[#E5E7EB] font-bold tracking-tight hidden sm:block">
                  Mateusz{" "}
                  <span className="text-blue-400 font-mono">Bogacz</span>
                </span>
              </Link>

              <div className="hidden md:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-blue-400 transition-all rounded-lg hover:bg-white/5"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="flex items-center ml-4 pl-4 border-l border-gray-800 space-x-2">
                  <button className="p-2 text-gray-400 hover:text-yellow-400 transition-colors">
                    <Moon size={20} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-400 transition-colors">
                    <Languages size={20} />
                  </button>
                </div>
              </div>

              <div className="md:hidden flex items-center">
                <DisclosureButton className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg">
                  {open ? <X size={24} /> : <Menu size={24} />}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden bg-[#111827] border-b border-gray-800 animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <DisclosureButton
                  key={link.name}
                  as={Link}
                  href={link.href}
                  className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-white/5 rounded-xl"
                >
                  {link.name}
                </DisclosureButton>
              ))}
              <div className="flex items-center justify-around py-4 mt-4 border-t border-gray-800">
                <button className="flex items-center gap-2 text-gray-400">
                  <Moon size={20} /> Mode
                </button>
                <button className="flex items-center gap-2 text-gray-400">
                  <Languages size={20} /> Lang
                </button>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
