import { ArrowRight, Mail, Download } from "lucide-react";

export const ButtonLink = [
  {
    text: "View Projects",
    src: "/projects",
    icon: ArrowRight,
  },
  {
    text: "Contact Me",
    src: "/#contact",
    icon: Mail,
  },
  {
    text: "Download CV",
    src: "/resource/Mateusz_Bogacz_Drewniak_PL.pdf",
    icon: Download,
  },
] as const;
