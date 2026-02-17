import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const FooterLayout = () => {
  return (
    <footer className="relative bg-background/5 border-t border-foreground/10 mt-28">
      {/* ===== Large Blurred Background Logo ===== */}
      <div className="absolute inset-0 -top-100 opacity-60 flex items-center justify-center pointer-events-none">
        <Image
          src="/images/ArkCabin-logo.svg"
          alt="ArkCabin logo"
          width={500}
          height={200}
          className="w-[500px] h-auto"
        />
      </div>

      {/* ===== Social Glass Bar ===== */}
      <div className="relative backdrop-blur-xl bg-background/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { icon: Instagram, name: "Instagram" },
            { icon: Facebook, name: "Facebook" },
            { icon: Twitter, name: "Twitter" },
            { icon: Linkedin, name: "LinkedIn" },
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className="group flex items-center justify-between px-6 py-5 border border-foreground/10 hover:bg-foreground/10 transition"
            >
              <div className="flex items-center gap-3">
                <item.icon
                  size={18}
                  className="opacity-70 group-hover:opacity-100 transition"
                />
                <span className="text-sm opacity-70 group-hover:opacity-100 transition">
                  {item.name}
                </span>
              </div>

              <ArrowUpRight
                size={16}
                className="opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
              />
            </a>
          ))}
        </div>
      </div>

      {/* ===== Main Footer Grid ===== */}
      <div className="border-b border-foreground/10">
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-4 backdrop-blur-xl">
        {/* Company */}
        <div className="border border-foreground/10 py-16 w-full px-6">
          <h4 className="text-sm mb-4 text-foreground/60">Company</h4>
          <ul className="space-y-2 text-foreground/80 text-sm">
            <li>
              <Link href="/about" className="hover:text-foreground transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-foreground transition">
                Work
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-foreground transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-foreground transition">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="border border-foreground/10 py-16 w-full px-6">
          <h4 className="text-sm mb-4 text-foreground/60">Services</h4>
          <ul className="space-y-2 text-foreground/80 text-sm">
            <li>
              <Link href="/services" className="hover:text-foreground transition">
                Services Overview
              </Link>
            </li>
            <li className="text-foreground/40">App Development</li>
            <li className="text-foreground/40">Web Development</li>
            <li className="text-foreground/40">Custom Website Development</li>
            <li className="text-foreground/40">WordPress Plugin Development</li>
            <li className="text-foreground/40">API Development</li>
            <li className="text-foreground/40">CRM & CPR Systems</li>
            <li className="text-foreground/40">AI Automation</li>
            <li className="text-foreground/40">SEO & Meta Ads</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="border border-foreground/10 py-16 w-full px-6">
          <h4 className="text-sm mb-4 text-foreground/60">Resources</h4>
          <ul className="space-y-2 text-foreground/80 text-sm">
            <li>
              <Link href="/blog" className="hover:text-foreground transition">
                Blog
              </Link>
            </li>
            <li className="text-foreground/40 cursor-not-allowed">Templates</li>
            <li className="text-foreground/40 cursor-not-allowed">Process</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="border border-foreground/10 py-16 w-full px-6">
          <h4 className="text-sm mb-4 text-foreground/60">Contact</h4>
          <ul className="space-y-2 text-foreground/80 text-sm">
            <li>
              <a href="mailto:contact@arkcabin.com" className="hover:text-foreground transition">
                contact@arkcabin.com
              </a>
            </li>
            <li>
              <a href="tel:+917000460610" className="hover:text-foreground transition">
                +91 7000460610
              </a>
            </li>
            <li>India – Working globally</li>
          </ul>
        </div>
      </div>
      </div>

      {/* ===== Copyright ===== */}
      <div className="relative text-center text-xs text-foreground/40 py-6">
        © 2026 ArkCabin. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterLayout;
