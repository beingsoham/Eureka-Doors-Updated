"use client";
import { useEffect, useState } from "react";

export function useNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleMobile = () => {
    setMobileOpen(!mobileOpen);
    if (mobileOpen) setMobileDropdown(false);
  };
  const closeMobile = () => {
    setMobileOpen(false);
    setMobileDropdown(false);
  };

  return { scrolled, mobileOpen, mobileDropdown, setMobileDropdown, toggleMobile, closeMobile };
}
