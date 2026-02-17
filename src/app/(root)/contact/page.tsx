import type { Metadata } from "next";
import Link from "next/link";

import { getStaticPageMetadata } from "@/lib/seo";
import ContactForm from "./contact-form";

export const metadata: Metadata = getStaticPageMetadata("contact");

export default function ContactPage() {
  return (
    <section className="px-4 md:px-6 pt-20 pb-32 md:pt-24 md:pb-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column: Header & Info */}
          <div className="flex flex-col justify-center">
            <header className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-foreground/60">
                  Contact
                </p>
                <h1 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight">
                  Contact{" "}
                  <span className="font-display font-medium italic">
                    ArkCabin
                  </span>
                </h1>
              </div>
              <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
                Tell us about your project or question. We usually reply within{" "}
                <span className="font-medium text-foreground">24–48 hours</span>{" "}
                with next steps.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                  <span className="text-xs uppercase tracking-wider text-foreground/40">Email</span>
                  <Link
                    href="mailto:contact@arkcabin.com"
                    className="text-foreground hover:underline"
                  >
                    contact@arkcabin.com
                  </Link>
                </div>
                
                <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                  <span className="text-xs uppercase tracking-wider text-foreground/40">Phone / WhatsApp</span>
                  <Link href="tel:+917000460610" className="text-foreground hover:underline">
                    +91 7000460610
                  </Link>
                </div>
              </div>
            </header>
          </div>

          {/* Right Column: Form */}
          <div className="rounded-[1.5rem] border border-border/60 bg-background/60 px-5 py-6 md:px-8 md:py-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-sm font-semibold tracking-tight">
                  Project outline
                </h2>
                <p className="mt-1 text-xs text-muted-foreground">
                  A few quick details help us understand scope and timelines.
                </p>
              </div>
              <span className="text-[10px] text-foreground/50 uppercase tracking-wider">* Required</span>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
