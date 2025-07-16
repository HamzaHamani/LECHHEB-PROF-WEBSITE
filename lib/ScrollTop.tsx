"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollTop: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Use smooth scroll optionally
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

export default ScrollTop;
