import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { getStaticPageMetadata } from "@/lib/seo";
import { fraunces, roboto } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = getStaticPageMetadata("terms");

const LAST_UPDATED = "February 20, 2026";
const COMPANY_NAME = "ArkCabin";
const COMPANY_EMAIL = "hello@arkcabin.com";
const COMPANY_WEBSITE = "https://arkcabin.com";

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: `By accessing or using ${COMPANY_WEBSITE} (the "Website"), or by engaging ${COMPANY_NAME} for any design or development services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to all of these Terms, please do not use our Website or services.

These Terms apply to all visitors, clients, and any others who access the Website or engage our services. ${COMPANY_NAME} reserves the right to modify these Terms at any time. Continued use of the Website after any changes constitutes your acceptance of the new Terms.`,
  },
  {
    id: "services",
    title: "2. Services",
    content: `${COMPANY_NAME} is a design and web development studio offering services including, but not limited to:

- UI/UX design and prototyping
- Next.js and React web application development
- Landing page and marketing website design
- Frontend performance optimisation
- Brand identity and visual systems
- Ongoing support and maintenance retainers

The specific scope, deliverables, timeline, and pricing for any client engagement will be agreed upon in writing (via a proposal, statement of work, or project agreement) prior to commencement of work. In the event of any conflict between these Terms and a signed project agreement, the project agreement shall take precedence.`,
  },
  {
    id: "client-responsibilities",
    title: "3. Client Responsibilities",
    content: `As a client, you agree to:

- Provide accurate, complete, and timely information, feedback, and approvals required for project delivery.
- Supply all necessary content, assets, and third-party credentials required for the project on agreed timelines.
- Designate a single point of contact who has authority to make decisions on the project.
- Review and respond to deliverables within the timeframes specified in the project agreement.

Delays caused by late feedback, missing content, or unavailability on the client's part may result in revised timelines and are not grounds for refund or penalty against ${COMPANY_NAME}.`,
  },
  {
    id: "payment",
    title: "4. Payment Terms",
    content: `**Deposit**: All projects require a non-refundable deposit (typically 50% of the total project value) before work commences. The exact deposit amount will be stated in the project agreement.

**Milestone Payments**: Remaining project fees are structured around delivery milestones as outlined in the project agreement.

**Invoicing**: Invoices are issued at the completion of each milestone and are due within **7 calendar days** of the invoice date.

**Late Payments**: Invoices not settled within the due date may incur a late fee of 1.5% per month on the outstanding balance. ${COMPANY_NAME} reserves the right to pause work until outstanding invoices are settled.

**Currency**: Unless agreed otherwise, invoices are issued in USD or INR depending on the client's region. We do not accept cryptocurrency payments.`,
  },
  {
    id: "revisions",
    title: "5. Revisions & Scope of Work",
    content: `Each project tier includes a defined number of revision rounds as specified in the project agreement. A "revision" is defined as a set of consolidated feedback on a single deliverable — not multiple separate rounds of changes.

**Out-of-Scope Work**: Any requests exceeding the agreed scope will be quoted separately and require written approval before work begins. This includes but is not limited to: additional pages, new features, platform changes, or changes to core design direction after approval.

**Change Requests**: All change requests must be submitted in writing via email or the agreed project communication channel.`,
  },
  {
    id: "intellectual-property",
    title: "6. Intellectual Property",
    content: `**Client-Owned Assets**: Upon receipt of final payment in full, all original design and code deliverables created exclusively for the client project are assigned to the client.

**${COMPANY_NAME} Retained Rights**: We retain the right to display the work in our portfolio, case studies, social media, and marketing materials unless the client explicitly requests otherwise in writing before project commencement. We also retain rights to any internal tools, frameworks, boilerplates, or third-party libraries used in development that are not specific to the client's project.

**Third-Party Assets**: Fonts, stock imagery, icons, or plugins licensed during the project remain subject to their respective third-party licences. The client is responsible for maintaining those licences post-delivery.

**Pre-existing IP**: ${COMPANY_NAME} retains all rights to methodologies, templates, and intellectual property predating client engagements.`,
  },
  {
    id: "confidentiality",
    title: "7. Confidentiality",
    content: `Both parties agree to keep confidential any proprietary information, business strategies, technical specifications, or sensitive data shared during the engagement — unless disclosure is required by law.

This obligation survives termination of the project or business relationship. Neither party will disclose confidential information to third parties without prior written consent from the other party.`,
  },
  {
    id: "termination",
    title: "8. Termination",
    content: `**By Client**: A client may terminate a project engagement upon 14 days' written notice. All completed work up to the termination date is billable and payable. The initial deposit is non-refundable.

**By ${COMPANY_NAME}**: We reserve the right to terminate an engagement in the event of:
- Non-payment or repeated late payment
- Abusive, threatening, or inappropriate conduct
- Requests to produce content that is illegal, deceptive, or harmful

In these cases, the client will be invoiced for all work completed to date. No refunds will be issued for work already delivered.`,
  },
  {
    id: "warranty",
    title: "9. Warranty & Limitation of Liability",
    content: `${COMPANY_NAME} warrants that deliverables will function as described in the project agreement and be free of material defects at time of delivery. We provide a **30-day post-launch bug-fix warranty** for development projects, covering issues directly attributable to our implementation.

This warranty does **not** cover:
- Issues caused by third-party platform updates, CMS changes, or plugin conflicts after delivery.
- Changes made to the project by the client or third parties after handover.
- Browser or device compatibility issues arising from non-standard environments.

**Limitation of Liability**: To the fullest extent permitted by law, ${COMPANY_NAME}'s total liability to any client shall not exceed the total fees paid for the specific project giving rise to the claim. We are not liable for any indirect, incidental, consequential, or punitive damages.`,
  },
  {
    id: "website-use",
    title: "10. Website Use",
    content: `By using ${COMPANY_WEBSITE}, you agree not to:

- Scrape, copy, or reproduce our content, design, or code without written permission.
- Attempt to gain unauthorised access to any part of the website or its infrastructure.
- Use the website in any manner that could disable, damage, or impair its proper functioning.
- Transmit any viruses, malware, or malicious code.

All content on this website — including text, design, images, and code examples — is the intellectual property of ${COMPANY_NAME} and may not be reproduced without consent.`,
  },
  {
    id: "governing-law",
    title: "11. Governing Law",
    content: `These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in India.

For clients in other jurisdictions, applicable local consumer protection laws may take precedence to the extent required by law.`,
  },
  {
    id: "contact",
    title: "12. Contact",
    content: `If you have questions about these Terms of Service or any aspect of working with us, please get in touch:

**${COMPANY_NAME}**
Email: ${COMPANY_EMAIL}
Website: ${COMPANY_WEBSITE}`,
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
    i % 2 === 1 ? (
      <strong key={i} className="text-foreground font-semibold">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default function TermsPage() {
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
              <FileText className="size-5 text-primary" />
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
                Terms of Service
              </h1>
            </div>
          </div>

          <p className={cn("text-muted-foreground text-lg leading-relaxed max-w-2xl", roboto.className)}>
            These terms govern your use of the ArkCabin website and any services
            we provide. Please read them carefully before engaging with us.
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
            href="/privacy-policy"
            className="inline-flex items-center gap-2 px-8 h-12 rounded-full bg-primary/5 text-primary border border-primary/10 font-bold text-[11px] uppercase tracking-[0.15em] transition-all hover:bg-white/5 hover:border-primary"
          >
            View Privacy Policy
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
