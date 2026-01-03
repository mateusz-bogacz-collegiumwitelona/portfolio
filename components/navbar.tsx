import { Moon, Languages } from "lucide-react";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-[#111827] shadow-md">
      <Image src="/favicon.png" alt="Logo" width={32} height={32} />
      <p className="text-[#E5E7EB] ml-4 mr-auto">Mateusz Bogacz-Drewniak</p>

      <p className="ml-4 text-[#E5E7EB]">Contact</p>
      <p className="ml-4 text-[#E5E7EB]">Project</p>
      <p className="ml-4 text-[#E5E7EB]">About Me</p>
      <p className="ml-4 text-[#E5E7EB]">Home</p>
      <Moon className="text-[#E5E7EB] ml-4" />
      <Languages className="text-[#E5E7EB] ml-4" />
    </nav>
  );
}
