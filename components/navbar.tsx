"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { Moon, Languages, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants/navigation";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#111827] shadow-md">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Image src="/favicon.png" alt="Logo" width={32} height={32} />
                <span className="text-[#E5E7EB] ml-4 font-medium hidden sm:block">
                  Mateusz Bogacz-Drewniak
                </span>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-[#E5E7EB] hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex items-center space-x-4 border-l border-gray-700 pl-4">
                  <Moon
                    className="text-[#E5E7EB] cursor-pointer hover:text-blue-400"
                    size={20}
                  />
                  <Languages
                    className="text-[#E5E7EB] cursor-pointer hover:text-blue-400"
                    size={20}
                  />
                </div>
              </div>

              <div className="md:hidden flex items-center">
                {/* Zmiana: Disclosure.Button -> DisclosureButton */}
                <DisclosureButton className="inline-flex items-center justify-center p-2 text-[#E5E7EB] hover:bg-gray-800 rounded-md focus:outline-none">
                  {open ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Zmiana: Disclosure.Panel -> DisclosurePanel */}
          <DisclosurePanel className="md:hidden bg-[#1f2937] border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                /* Zmiana: Disclosure.Button -> DisclosureButton */
                <DisclosureButton
                  key={link.name}
                  as={Link}
                  href={link.href}
                  className="block px-3 py-2 text-[#E5E7EB] hover:bg-gray-700 rounded-md text-base font-medium"
                >
                  {link.name}
                </DisclosureButton>
              ))}
              <div className="flex items-center space-x-6 px-3 py-3 border-t border-gray-700 mt-2">
                <Moon className="text-[#E5E7EB]" size={20} />
                <Languages className="text-[#E5E7EB]" size={20} />
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
