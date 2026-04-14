"use client";
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useNavbar } from "@/hooks/useNavbar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Gallery from "@/components/Gallery";
import Products from "@/components/Products";
import CoreValues from "@/components/CoreValues";
import Architects from "@/components/Architects";
import WhyEureka from "@/components/WhyEureka";
import Awards from "@/components/Awards";
import Testimonials from "@/components/Testimonials";
import ClientMarquee from "@/components/ClientMarquee";
import GroupCompanies from "@/components/GroupCompanies";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  useScrollReveal();
  const nav = useNavbar();
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<string | undefined>();

  const openQuote = (product?: string) => {
    setQuoteProduct(product);
    setQuoteOpen(true);
  };

  return (
    <>
      <Navbar scrolled={nav.scrolled} mobileOpen={nav.mobileOpen} mobileDropdown={nav.mobileDropdown} setMobileDropdown={nav.setMobileDropdown} toggleMobile={nav.toggleMobile} closeMobile={nav.closeMobile} onQuoteModal={openQuote} />
      <Hero onQuoteModal={openQuote} />
      <Stats />
      <Gallery />
      <Products onQuoteModal={openQuote} />
      <CoreValues />
      <Architects onQuoteModal={openQuote} />
      <WhyEureka />
      <Awards />
      <Testimonials />
      <ClientMarquee />
      <GroupCompanies />
      <CTA onQuoteModal={openQuote} />
      <Contact />
      <Footer onQuoteModal={openQuote} />
      <WhatsAppFloat />
      <QuoteModal isOpen={quoteOpen} onClose={() => { setQuoteOpen(false); setQuoteProduct(undefined); }} preselectedProduct={quoteProduct} />
    </>
  );
}
