import Link from "next/link";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  icon: LucideIcon;
}

export default function Button({
  children,
  href = "#",
  icon: Icon,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className="
        px-8 py-3 
        bg-blue-600 hover:bg-blue-700 
        dark:bg-blue-500 dark:hover:bg-blue-600 
        text-white rounded-full font-medium 
        transition-all duration-300 cursor-pointer 
        inline-flex items-center justify-center 
        whitespace-nowrap ml-5 mt-5
        shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40
        dark:shadow-none dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]
      "
    >
      <span className="mr-2">{children}</span>
      <Icon
        size={18}
        className="transition-transform group-hover:translate-x-1"
      />
    </Link>
  );
}
