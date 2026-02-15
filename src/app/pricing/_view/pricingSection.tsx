"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FeatureRow from "../_widget/featureRow";

export default function PricingSection() {
  return (
    <section className="w-full bg-background pb-56 pt-32">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">
            Choose the Right Plan for You
          </h2>
          <p className="text-muted-foreground mt-3">
            Compare our plans to find the perfect fit for your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-14">
          {/* Free */}
          <div></div>
          <Card className="border border-border bg-secondary/40">
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <CardDescription>For personal projects</CardDescription>
              <div className="mt-4 text-3xl font-bold">$0</div>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Pro (Most Popular) */}
          <Card className="border border-border bg-secondary/40 relative shadow-lg shadow-primary/10">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
              Most Popular
            </Badge>

            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>
                For professionals and small teams
              </CardDescription>
              <div className="mt-4 text-3xl font-bold">
                $29{" "}
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Start Free Trial</Button>
            </CardContent>
          </Card>

          {/* Enterprise */}
          <Card className="border border-border bg-secondary/40">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For large organizations</CardDescription>
              <div className="mt-4 text-3xl font-bold">
                $99{" "}
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <Button className="w-full" variant="outline">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <div className="rounded-xl  overflow-hidden space-y-16">
          {/* Core Features */}
          <div className="space-y-5">
            <h2 className="text-xl">Core Features</h2>
              <div className="border border-border bg-secondary/40 rounded-xl">
                <FeatureRow
                  title="Projects"
                  values={["3 projects", "Unlimited", "Unlimited"]}
                />
                <FeatureRow
                  title="Team members"
                  values={["1 member", "10 members", "Unlimited"]}
                />
                <FeatureRow title="Storage" values={["5GB", "50GB", "Unlimited"]} />
              </div>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl">Security & Support</h2>
              <div className="border border-border bg-secondary/40 rounded-xl">
                <FeatureRow
                  title="Shared workspaces"
                  values={[false, true, true]}
                  type="boolean"
                />
                <FeatureRow
                  title="User permissions"
                  values={["Basic", "Advanced", "Custom"]}
                />
                <FeatureRow
                  title="Version history"
                  values={["7 days", "30 days", "Unlimited"]}
                />
              </div>
          </div>

          <div className="space-y-5">
            <h2 className="text-xl">Service after Project</h2>
              <div className="border border-border bg-secondary/40 rounded-xl">
                <FeatureRow
                  title="Two-factor authentication"
                  values={[false, true, true]}
                  type="boolean"
                />
                <FeatureRow
                  title="Priority support"
                  values={[false, true, true]}
                  type="boolean"
                />
                <FeatureRow
                  title="SLA guarantee"
                  values={[false, false, true]}
                  type="boolean"
                />
              </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <Card className="bg-secondary/80 border-border text-center">
            <CardHeader>
              <CardTitle>Need help choosing?</CardTitle>
              <CardDescription>
                Our team can help you find the perfect plan for your specific
                needs.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center gap-4">
              <Button variant="outline">Schedule a Demo</Button>
              <Button>Talk to Sales</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
