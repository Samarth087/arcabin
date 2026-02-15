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
          alt="ArkCabin background logo"
          width={500}
          height={500}
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
          <ul className="space-y-2 text-foreground/80 text-sm cursor-pointer">
            <li className="hover:text-foreground transition">About</li>
            <li className="hover:text-foreground transition">Approach</li>
            <li className="hover:text-foreground transition">Work</li>
            <li className="hover:text-foreground transition">Privacy Policy</li>
          </ul>
        </div>

        {/* Services */}
        <div className="border border-foreground/10 py-16 w-full px-6">
          <h4 className="text-sm mb-4 text-foreground/60">Services</h4>
          <ul className="space-y-2 text-foreground/80 text-sm cursor-pointer">
            <li className="hover:text-foreground transition">Crafted Websites</li>
            <li className="hover:text-foreground transition">Website Redesign</li>
            <li className="hover:text-foreground transition">eCommerce Design</li>
            <li className="hover:text-foreground transition">CMS & Dynamic Sites</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="border border-foreground/10 py-16 w-full px-6">
          <h4 className="text-sm mb-4 text-foreground/60">Resources</h4>
          <ul className="space-y-2 text-foreground/80 text-sm cursor-pointer">
            <li className="hover:text-foreground transition">Blog</li>
            <li className="hover:text-foreground transition">Templates</li>
            <li className="hover:text-foreground transition">Process</li>
            <li className="hover:text-foreground transition">FAQs</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="border border-foreground/10 py-16 w-full px-6">
          <h4 className="text-sm mb-4 text-foreground/60">Contact</h4>
          <ul className="space-y-2 text-foreground/80 text-sm cursor-pointer">
            <li>Email: contact@arkcabin.com</li>
            <li>Phone: +91 7000460610</li>
            <li>WhatsApp</li>
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
