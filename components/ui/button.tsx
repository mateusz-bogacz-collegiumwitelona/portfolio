import Link from "next/link";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react"; // Importujemy typ dla ikony

interface ButtonProps {
  children: ReactNode;
  href: string;
  icon: LucideIcon; // Używamy konkretnego typu LucideIcon
}

export default function Button({
  children,
  href = "#",
  icon: Icon,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all cursor-pointer inline-flex items-center justify-center whitespace-nowrap ml-5 mt-5"
    >
      <span className="mr-2">{children}</span>
      <Icon size={18} />
    </Link>
  );
}
