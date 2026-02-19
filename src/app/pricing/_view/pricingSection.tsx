"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Check, ArrowRight, Info } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fraunces, roboto } from "@/app/fonts";
import { cn } from "@/lib/utils";
import FeatureRow from "../_widget/featureRow";
import pricingData from "@/content/pricing/data.json";

type Currency = "INR" | "USD";

export default function PricingSection() {
  const [currency, setCurrency] = React.useState<Currency>("USD");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    // Simple geo-detection based on timezone
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (timezone === "Asia/Kolkata") {
        setCurrency("INR");
      }
    } catch (e) {
      console.error("Timezone detection failed", e);
    }
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative w-full bg-background pt-32 pb-40 lg:pt-48 lg:pb-60 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-linear-to-b from-primary/[0.03] to-transparent -z-10" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6 px-4 py-1 rounded-full border-primary/20 text-primary bg-primary/5 font-black uppercase tracking-[0.2em] text-[10px]">
              Simple & Transparent
            </Badge>
            <h1 className={cn(
              "text-5xl md:text-7xl font-bold tracking-tight mb-8 text-balance",
              fraunces.className
            )}>
              Ready to invest in <span className="text-primary italic">excellence?</span>
            </h1>
            <p className={cn(
              "text-lg md:text-xl text-muted-foreground leading-relaxed",
              roboto.className
            )}>
              Choose a plan that fits your stage of growth. No hidden fees, no complex tiers.
              Just high-performance digital craft.
            </p>
          </motion.div>

          {/* Currency Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center mt-12"
          >
            <div className="inline-flex items-center p-1 bg-muted/50 rounded-full border border-border/50 shadow-sm backdrop-blur-md">
              <button
                onClick={() => setCurrency("INR")}
                className={cn(
                  "px-6 py-2 rounded-full text-xs font-black tracking-widest transition-all",
                  currency === "INR"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                INR (₹)
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={cn(
                  "px-6 py-2 rounded-full text-xs font-black tracking-widest transition-all",
                  currency === "USD"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                USD ($)
              </button>
            </div>

            <div className="ml-4 group relative inline-flex items-center justify-center">
              <Info className="size-4 text-muted-foreground cursor-help" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-popover text-popover-foreground text-[10px] rounded-lg border border-border shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-center">
                Prices are fixed based on region. No dynamic conversion.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-24 lg:mb-32">
          {pricingData.map((tier, idx) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className={cn(
                "relative flex flex-col p-8 lg:p-10 rounded-[2.5rem] border transition-all duration-500",
                tier.highlight
                  ? "bg-muted/10 border-primary/20 shadow-2xl shadow-primary/5 ring-1 ring-primary/10"
                  : "bg-background border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
              )}
            >
              {tier.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border-4 border-background shadow-lg">
                    BEST VALUE
                  </Badge>
                </div>
              )}

              <div className="mb-10">
                <h3 className={cn(
                  "text-2xl font-bold mb-3",
                  fraunces.className
                )}>
                  {tier.name}
                </h3>
                <p className={cn(
                  "text-sm text-muted-foreground leading-relaxed",
                  roboto.className
                )}>
                  {tier.description}
                </p>
              </div>

              <div className="mb-10">
                <div className="flex items-baseline gap-1">
                  <span className={cn(
                    "text-5xl lg:text-6xl font-black tracking-tight",
                    fraunces.className
                  )}>
                    {tier.prices[currency]}
                  </span>
                  <span className="text-xs text-muted-foreground font-black uppercase tracking-widest">
                    {tier.id === "starter" ? "/setup" : "/project"}
                  </span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10">
                {tier.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 size-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="size-2.5 text-primary stroke-[3]" />
                    </div>
                    <span className={cn(
                      "text-sm text-foreground/80 font-medium",
                      roboto.className
                    )}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                variant={tier.highlight ? "default" : "outline"}
                className={cn(
                  "w-full rounded-2xl h-14 font-black text-xs tracking-[0.2em] transition-all group",
                  tier.highlight ? "shadow-xl shadow-primary/20" : "hover:bg-white/5 hover:border-primary"
                )}
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  GET STARTED
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 lg:mt-40"
        >
          <div className="text-center mb-16 lg:mb-20">
            <h2 className={cn("text-3xl lg:text-5xl font-bold mb-6", fraunces.className)}>
              Detailed <span className="text-primary italic">comparison</span>
            </h2>
            <p className={cn("text-muted-foreground", roboto.className)}>
              Everything you need to know about what&apos;s included in each plan.
            </p>
          </div>

          <div className="relative">
            {/* Header Sticky Placeholder (Mobile UX) */}
            <div className="grid grid-cols-4 px-6 py-4 bg-muted/30 backdrop-blur-sm sticky top-[72px] z-20 border-b border-border/50 rounded-t-3xl">
              <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Feature</div>
              <div className="text-center text-[10px] font-black uppercase tracking-widest text-primary">Standard</div>
              <div className="text-center text-[10px] font-black uppercase tracking-widest text-primary">Studio Pack</div>
              <div className="text-center text-[10px] font-black uppercase tracking-widest text-primary">Enterprise</div>
            </div>

            <div className="border-x border-b border-border/50 rounded-b-3xl overflow-hidden shadow-2xl shadow-primary/5">
              {/* Core Features */}
              <div className="bg-muted/5 px-6 py-3 border-b border-border/30">
                <span className={cn("text-xs font-black uppercase tracking-[0.2em] text-primary/70", fraunces.className)}>Core Fundamentals</span>
              </div>
              <FeatureRow title="Custom UI/UX Design" values={["1-2 Pages", "8 Pages", "Unlimited"]} />
              <FeatureRow title="Performance Optimization" values={[true, true, true]} type="boolean" />
              <FeatureRow title="SEO Strategy" values={["Basic", "Advanced", "Full Audit"]} />
              <FeatureRow title="Content Management" values={["Static", "Dynamic", "Custom CMS"]} />

              {/* Development */}
              <div className="bg-muted/5 px-6 py-3 border-y border-border/30">
                <span className={cn("text-xs font-black uppercase tracking-[0.2em] text-primary/70", fraunces.className)}>Technical Excellence</span>
              </div>
              <FeatureRow title="Mobile-First Responsive" values={[true, true, true]} type="boolean" />
              <FeatureRow title="Animations & Motion" values={["Subtle", "Premium", "Complex"]} />
              <FeatureRow title="Third-Party Integrations" values={["Standard", "Pro", "Custom"]} />
              <FeatureRow title="Security & Compliance" values={["Basic", "Standard", "Enterprise"]} />

              {/* Support */}
              <div className="bg-muted/5 px-6 py-3 border-y border-border/30">
                <span className={cn("text-xs font-black uppercase tracking-[0.2em] text-primary/70", fraunces.className)}>Success & Support</span>
              </div>
              <FeatureRow title="Monthly Support" values={["1 Month", "3 Months", "Priority"]} />
              <FeatureRow title="Discovery Phase" values={["Email", "1-on-1", "Full Audit"]} />
              <FeatureRow title="Emergency Response" values={[false, false, "24/7"]} isLast />
            </div>
          </div>
        </motion.div>

        {/* Comparison CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto mt-24 lg:mt-40 rounded-[3rem] bg-muted/5 border border-border/50 p-10 lg:p-16 text-center overflow-hidden"
        >
          {/* Decorative gradients */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-primary/10 blur-3xl -z-10" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 blur-3xl -z-10" />

          <h3 className={cn(
            "text-3xl lg:text-4xl font-bold mb-6",
            fraunces.className
          )}>
            Need something <span className="text-primary italic">bespoke?</span>
          </h3>
          <p className={cn(
            "text-lg text-muted-foreground mb-12 max-w-2xl mx-auto",
            roboto.className
          )}>
            If your requirements don&apos;t fit into these tiers, we offer custom retainers and phase-based
            pricing tailored for high-growth enterprises.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full px-10 h-14 font-black text-[11px] uppercase tracking-[0.2em] bg-primary text-primary-foreground hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20"
              asChild
            >
              <Link href="/contact">
                BOOK A DISCOVERY CALL
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full px-10 h-14 font-black text-[11px] uppercase tracking-[0.2em] hover:bg-muted transition-all"
              asChild
            >
              <Link href="/portfolio">
                VIEW OUR WORK
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
