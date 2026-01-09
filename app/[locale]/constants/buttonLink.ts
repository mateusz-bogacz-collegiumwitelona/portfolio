import { ArrowRight, Mail, Download } from "lucide-react";

export const ButtonLink = [
  {
    nameKey: "projects",
    src: "/projects",
    icon: ArrowRight,
  },
  {
    nameKey: "contact",
    src: "/#contact",
    icon: Mail,
  },
  {
    nameKey: "cv",
    src: "",
    icon: Download,
    isCV: true,
  },
] as const;
