import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { getStaticPageMetadata } from "@/lib/seo";
import { fraunces, roboto } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = getStaticPageMetadata("privacy");

const LAST_UPDATED = "February 20, 2026";
const COMPANY_NAME = "ArkCabin";
const COMPANY_EMAIL = "hello@arkcabin.com";
const COMPANY_WEBSITE = "https://arkcabin.com";

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, as well as information generated through your use of our website and services.

**Information You Provide**
- Contact details such as your name, email address, phone number, and company name when you fill out our contact or inquiry forms.
- Project briefs, requirements, and any files you share with us during the discovery or onboarding phase.
- Payment and billing information (processed securely through our payment providers — we do not store raw card data).
- Communications you send us via email or any chat channel.

**Information Collected Automatically**
- Usage data including pages visited, time spent, links clicked, and referral sources, collected through Google Analytics (GA4).
- Device and browser metadata such as IP address, browser type, operating system, and screen resolution.
- Cookies and similar tracking technologies as described in Section 6.`,
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: `We use the information we collect to operate, improve, and personalise your experience with ArkCabin. Specifically, we use your data to:

- Respond to your inquiries and provide the services you request.
- Manage and fulfil client projects, including sending proposals, invoices, and project updates.
- Send transactional emails such as onboarding confirmations or delivery notifications.
- Analyse website performance and improve our content, design, and user experience.
- Comply with legal obligations and protect our rights.

We do **not** sell, rent, or trade your personal information to third parties for their marketing purposes.`,
  },
  {
    id: "data-sharing",
    title: "3. Data Sharing & Disclosure",
    content: `We may share your information with trusted third-party service providers who assist us in operating our website and delivering services, including:

- **Google Analytics** — for website analytics and usage tracking.
- **Google Workspace** — for email and document collaboration.
- **Hygraph (GraphCMS)** — our content management backend.
- **Payment Processors** (e.g., Razorpay, Stripe) — for secure billing.
- **Hosting Providers** (e.g., Vercel) — for serving our website.

Each of these providers is contractually bound to protect your data and use it only for the purposes we specify. We may also disclose information when required by law, court order, or to protect the rights and safety of ArkCabin and its users.`,
  },
  {
    id: "data-retention",
    title: "4. Data Retention",
    content: `We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law.

- **Inquiry data**: Retained for up to 2 years after the initial contact, unless a project engagement is established.
- **Client project data**: Retained for up to 5 years following project completion for legal and accounting purposes.
- **Analytics data**: Retained for 14 months per our Google Analytics configuration.

You may request deletion of your data at any time by contacting us at ${COMPANY_EMAIL}.`,
  },
  {
    id: "your-rights",
    title: "5. Your Rights",
    content: `Depending on your location, you may have the following rights regarding your personal data:

- **Access**: Request a copy of the personal data we hold about you.
- **Correction**: Request correction of inaccurate or incomplete data.
- **Deletion**: Request that we delete your personal data ("right to be forgotten").
- **Restriction**: Request that we limit how we process your data.
- **Portability**: Receive your data in a structured, machine-readable format.
- **Objection**: Object to processing based on our legitimate interests.

To exercise any of these rights, please email us at **${COMPANY_EMAIL}**. We will respond within 30 days.`,
  },
  {
    id: "cookies",
    title: "6. Cookies",
    content: `Our website uses cookies and similar technologies to enhance your experience:

- **Essential Cookies**: Required for basic site functionality (e.g., theme preference).
- **Analytics Cookies**: Google Analytics (GA4) uses cookies to understand how visitors interact with our website. This data is anonymised and aggregated.

You can control cookie settings through your browser preferences. Disabling analytics cookies will not affect the functionality of our website, but it will limit our ability to understand how visitors use our site.`,
  },
  {
    id: "security",
    title: "7. Security",
    content: `We implement industry-standard security measures to protect your information, including:

- HTTPS encryption across all pages of our website.
- Access controls ensuring only authorised team members can access client data.
- Regular security reviews of our third-party service providers.

While we take these precautions seriously, no method of transmission over the internet is 100% secure. We cannot guarantee the absolute security of your data.`,
  },
  {
    id: "children",
    title: "8. Children's Privacy",
    content: `Our website and services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately at ${COMPANY_EMAIL} so we can delete it.`,
  },
  {
    id: "changes",
    title: "9. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. When we do, we will revise the "Last Updated" date at the top of this page. We encourage you to review this policy periodically. Your continued use of ${COMPANY_WEBSITE} after any changes constitutes your acceptance of the updated policy.`,
  },
  {
    id: "contact",
    title: "10. Contact Us",
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please reach out:

**ArkCabin**
Email: ${COMPANY_EMAIL}
Website: ${COMPANY_WEBSITE}

We are committed to resolving any complaint or concern you may have.`,
  },
];

function parseContent(text: string) {
  const lines = text.split("\n");
  return lines.map((line, i) => {
    if (line.startsWith("- ")) {
      return (
        <li key={i} className="ml-4 list-disc">
          {parseBold(line.slice(2))}
        </li>
      );
    }
    if (line === "") return <br key={i} />;
    return <p key={i} className="mb-2">{parseBold(line)}</p>;
  });
}

function parseBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i} className="text-foreground font-semibold">{part}</strong> : part
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <div className="relative w-full pt-28 pb-12 md:pt-40 md:pb-20 border-b border-border/50 bg-muted/5">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] to-transparent -z-10" />
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-primary mb-10 group transition-colors hover:text-primary/70"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            BACK TO HOME
          </Link>

          <div className="flex items-start gap-4 mb-8">
            <div className="mt-1 size-10 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
              <Shield className="size-5 text-primary" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-2">
                Legal
              </p>
              <h1
                className={cn(
                  "text-4xl md:text-6xl font-bold tracking-tight leading-tight text-balance",
                  fraunces.className
                )}
              >
                Privacy Policy
              </h1>
            </div>
          </div>

          <p className={cn("text-muted-foreground text-lg leading-relaxed max-w-2xl", roboto.className)}>
            We value your privacy and are committed to being transparent about how we collect and use
            your information. This policy explains our practices clearly and plainly.
          </p>

          <p className="text-xs text-muted-foreground mt-6 font-medium">
            Last updated: <span className="text-foreground">{LAST_UPDATED}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 md:px-6 py-16 md:py-24">
        {/* Quick Nav */}
        <div className="mb-16 p-6 rounded-2xl bg-muted/5 border border-border/50">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">
            Table of Contents
          </p>
          <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={cn(
                    "text-sm text-muted-foreground hover:text-primary transition-colors",
                    roboto.className
                  )}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Sections */}
        <div className="space-y-16">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-28">
              <h2
                className={cn(
                  "text-2xl md:text-3xl font-bold mb-6 text-balance",
                  fraunces.className
                )}
              >
                {section.title}
              </h2>
              <div
                className={cn(
                  "text-muted-foreground leading-relaxed space-y-2 text-base",
                  roboto.className
                )}
              >
                {parseContent(section.content)}
              </div>
              <div className="mt-10 border-b border-border/30" />
            </section>
          ))}
        </div>

        {/* Footer Nav */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link
            href="/terms"
            className="inline-flex items-center gap-2 px-8 h-12 rounded-full bg-primary/5 text-primary border border-primary/10 font-bold text-[11px] uppercase tracking-[0.15em] transition-all hover:bg-white/5 hover:border-primary"
          >
            View Terms of Service
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 h-12 rounded-full bg-muted/30 text-muted-foreground border border-border/50 font-bold text-[11px] uppercase tracking-[0.15em] transition-all hover:bg-muted/50 hover:text-foreground"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="border-t border-border/50">
        <CTASection />
      </div>
    </main>
  );
}
