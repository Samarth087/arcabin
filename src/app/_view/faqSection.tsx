"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQsSection() {
  const faqItems = [
    {
      id: "item-1",
      question: "How do I get started with ArkCabin?",
      answer:
        "Simply fill out the contact form, and we'll reach out through email or WhatsApp based on your preferred method of communication.",
    },
    {
      id: "item-2",
      question: "How involved do I need to be during the project?",
      answer:
        "You only need to share your content, preferences, and feedback at important stages. We handle the complete design, development, testing, and launch process.",
    },
    {
      id: "item-3",
      question: "How long does it take to build a website?",
      answer:
        "Most websites are completed within 2–6 weeks, depending on the number of pages, design direction, and required features.",
    },
    {
      id: "item-4",
      question: "Do you provide support after the website is launched?",
      answer:
        "Yes. We offer post-launch maintenance, content updates, and technical support to ensure your website continues to perform well.",
    },
    {
      id: "item-5",
      question: "Do you create responsive and eCommerce websites?",
      answer:
        "Absolutely. Every site we build is fully responsive, and we also develop complete eCommerce stores with payment integration and custom product layouts.",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked{" "}
            <span className="font-display font-medium italic">Questions</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-balance">
            Discover quick and comprehensive answers to common questions about
            our platform, services, and features.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
          >
            {faqItems.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-muted-foreground mt-6 px-8">
            Can&apos;t find what you&apos;re looking for? Contact our{" "}
            <Link href="#" className="text-primary font-medium hover:underline">
              customer support team
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
