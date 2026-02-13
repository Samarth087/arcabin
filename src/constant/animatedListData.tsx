export interface AgencyActivity {
  title: string;
  description: string;
  tag: string;
  color: string;
  time: string;
}

export const activities: AgencyActivity[] = [
  {
    title: "Landing Page Launched",
    description: "High-converting SaaS landing for fintech client.",
    time: "2h ago",
    tag: "Web Dev",
    color: "#2563EB",
  },
  {
    title: "SEO Optimization Completed",
    description: "Improved organic traffic by 38% in 30 days.",
    time: "5h ago",
    tag: "SEO",
    color: "#16A34A",
  },
  {
    title: "Performance Audit",
    description: "Core Web Vitals improved to 95+ score.",
    time: "Yesterday",
    tag: "Optimization",
    color: "#F59E0B",
  },
  {
    title: "Automation Setup",
    description: "CRM + Email workflow integration deployed.",
    time: "2d ago",
    tag: "Automation",
    color: "#9333EA",
  },
];
