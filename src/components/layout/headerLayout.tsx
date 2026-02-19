"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const NavContent = ({ mobile = false }: { mobile?: boolean }) => (
    <ul className={cn("flex", mobile ? "flex-col space-y-6 text-base" : "gap-8 text-sm")}>
      {menuItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(
                "block transition-all duration-150",
                isActive
                  ? "text-foreground font-bold" + (mobile ? " underline underline-offset-8" : "")
                  : "text-muted-foreground hover:text-accent-foreground"
              )}
            >
              <span>{item.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header>
      <nav className="fixed z-50 w-full px-2">
        <div
          className={cn(
            "mx-auto mt-4 max-w-6xl px-6 transition-all duration-500 lg:px-12",
            isScrolled && "bg-background/80 max-w-4xl rounded-full border border-border/40 backdrop-blur-xl lg:px-6 shadow-sm"
          )}
        >
          <div className="relative flex items-center justify-between py-3">
            {/* Logo */}
            <Link href="/" aria-label="home" className="flex items-center space-x-2 shrink-0">
              <Image
                src="/images/ArkCabin-text-logo-updated.svg"
                alt="ArkCabin"
                width={140}
                height={38}
                priority
                className="w-auto h-8 lg:h-9"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <NavContent />
            </div>

            {/* Actions & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Button
                asChild
                size="sm"
                variant={isScrolled ? "outline" : "default"}
                className="hidden sm:inline-flex rounded-full px-5"
              >
                <Link href="/contact">{isScrolled ? "Contact Us" : "Hire Us"}</Link>
              </Button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close Menu" : "Open Menu"}
                className="relative z-50 p-2 text-foreground lg:hidden focus:outline-none"
              >
                {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 z-40 bg-background/95 backdrop-blur-md transition-transform duration-300 transform lg:hidden",
            menuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full p-8 pt-24">
            <NavContent mobile />
            <div className="mt-auto pt-8 flex flex-col gap-4">
              <Button asChild size="lg" className="w-full rounded-2xl">
                <Link href="/contact">Hire Us Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
