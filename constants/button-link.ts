import { ArrowRight, Mail, Download } from "lucide-react";

export const ButtonLink = [
  { text: "View Projects", src: "/projects", icon: ArrowRight }, // małe 't'
  { text: "Contact Me", src: "/contact", icon: Mail },
  { text: "Download CV", src: "/", icon: Download },
] as const;
