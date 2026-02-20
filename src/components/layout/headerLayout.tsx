"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useProject } from "@/hooks/useProjects";
import { fraunces } from "@/app/fonts";

const menuItems = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

const NavContent = ({ mobile = false, pathname = "" }: { mobile?: boolean; pathname?: string }) => (
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

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isProjectPage = pathname.startsWith('/portfolio/') && pathname !== '/portfolio';
  const projectSlug = isProjectPage ? pathname.split('/').pop() : null;
  const { data: project } = useProject(projectSlug || "");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    if (menuOpen) setMenuOpen(false);
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <header>
      <nav className="fixed z-50 w-full px-2">
        <div
          className={cn(
            "mx-auto mt-4 max-w-7xl px-6 transition-all duration-500 lg:px-12",
            isScrolled && "bg-background/80 max-w-5xl rounded-full border border-border/40 backdrop-blur-xl lg:px-6 shadow-sm",
            isProjectPage && "max-w-[95%] lg:max-w-7xl"
          )}
        >
          <div className="relative flex items-center justify-between py-3">

            {/* Left side: Logo or Back Link */}
            <div className="flex items-center gap-8">
              {isProjectPage ? (
                <Link
                  href="/portfolio"
                  className="group flex items-center gap-2 text-white/30 hover:text-white transition-colors duration-300 font-mono text-[10px] uppercase tracking-[0.2em] whitespace-nowrap"
                >
                  <ArrowLeft className="size-3.5 group-hover:-translate-x-1 transition-transform duration-300" />
                  <span className="hidden sm:inline">Back to Portfolio</span>
                  <span className="sm:hidden text-xs">Back</span>
                </Link>
              ) : (
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
              )}
            </div>

            {/* Center: Logo (only on Project Page) or Nav */}
            <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center">
              {isProjectPage ? (
                <Link href="/" aria-label="home" className="flex items-center shrink-0">
                  <Image
                    src="/images/ArkCabin-text-logo-updated.svg"
                    alt="ArkCabin"
                    width={120}
                    height={32}
                    priority
                    className="w-auto h-6 lg:h-7 opacity-80 hover:opacity-100 transition-opacity"
                  />
                </Link>
              ) : (
                <div className="hidden lg:block">
                  <NavContent pathname={pathname} />
                </div>
              )}
            </div>

            {/* Right side: Breadcrumbs (Project Page) or Actions */}
            <div className="flex items-center gap-4">
              {isProjectPage && (
                <div className="hidden xl:flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/20 font-black whitespace-nowrap mr-4">
                  <span className="max-w-[100px] truncate">{projectSlug}</span>
                  <ChevronRight className="size-3" />
                  <span className={cn("text-primary truncate max-w-[150px]", fraunces.className)}>{project?.name || "..."}</span>
                </div>
              )}

              <Button
                asChild
                size="sm"
                variant={isScrolled ? "outline" : "default"}
                className="hidden sm:inline-flex rounded-full px-5 h-9"
              >
                <Link href="/contact">{isScrolled ? "Get in touch" : "Contact us"}</Link>
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
            <NavContent mobile pathname={pathname} />
            <div className="mt-auto pt-8 flex flex-col gap-4">
              <Button asChild size="lg" className="w-full rounded-2xl">
                <Link href="/contact">Contact us today</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
