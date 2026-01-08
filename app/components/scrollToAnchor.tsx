"use client";

import { use, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollToAnchor() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;

      if (hash) {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }

      scrollToHash();
      const timeout = setTimeout(scrollToHash, 500);
    };
  }, [pathname, searchParams]);

  return null;
}
