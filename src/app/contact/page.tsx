import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with ArkCabin for projects, support, or inquiries.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    title: "Contact ArkCabin",
    description:
      "Reach out to ArkCabin to start your project or ask questions.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="px-4 md:px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Contact{" "}
          <span className="font-display font-medium italic">ArkCabin</span>
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          Tell us about your project or question. We typically reply within 24–48 hours.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border p-6 bg-card">
            <h2 className="text-lg font-semibold">Direct</h2>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              <li>Email: contact@arkcabin.com</li>
              <li>Phone: +91 7000460610</li>
              <li>
                WhatsApp:{" "}
                <Link href="#" className="text-primary hover:underline">
                  message us
                </Link>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border p-6 bg-card">
            <h2 className="text-lg font-semibold">Prefer a form?</h2>
            <p className="text-sm text-muted-foreground">
              Use the form below to share details. We’ll follow up via email.
            </p>
            <form className="mt-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input className="h-9 rounded-md border bg-transparent px-3 text-sm" placeholder="Name" />
                <input className="h-9 rounded-md border bg-transparent px-3 text-sm" placeholder="Email" />
              </div>
              <input className="h-9 rounded-md border bg-transparent px-3 text-sm w-full" placeholder="Subject" />
              <textarea className="min-h-28 rounded-md border bg-transparent px-3 py-2 text-sm w-full" placeholder="Describe your project or question" />
              <button className="inline-flex items-center gap-2 rounded-md border bg-background px-4 py-2 text-sm">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
