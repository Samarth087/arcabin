import { cn } from "@/lib/utils";
import type React from "react";
import { GridPattern } from "@/components/ui/grid-pattern";
import { ZapIcon, CpuIcon, FingerprintIcon, PencilIcon, Settings2Icon, SparklesIcon } from "lucide-react";

type FeatureType = {
	title: string;
	icon: React.ReactNode;
	description: string;
};

export function FeatureSection() {
	return (
		<div className="mx-auto w-full max-w-5xl space-y-8">
			<div className="mx-auto max-w-3xl text-center">
				<h2 className="text-balance font-medium text-2xl md:text-4xl lg:text-5xl">
					Why ArkCabin?
				</h2>
				<p className="mt-4 text-balance text-muted-foreground text-sm md:text-base">
					We build digital products that are fast, secure, and designed to grow with your business.
				</p>
			</div>

			<div className="overflow-hidden rounded-lg border">
				<div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 md:grid-cols-3">
					{features.map((feature) => (
						<FeatureCard feature={feature} key={feature.title} />
					))}
				</div>
			</div>
		</div>
	);
}

export function FeatureCard({
	feature,
	className,
	...props
}: React.ComponentProps<"div"> & {
	feature: FeatureType;
}) {
	return (
		<div
			className={cn("relative overflow-hidden bg-background p-8 md:p-10 transition-all duration-500 group", className)}
			{...props}
		>
			<div className="mask-[radial-gradient(farthest-side_at_top,white,transparent)] pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 size-full opacity-20 group-hover:opacity-40 transition-opacity duration-500">
				<GridPattern
					className="absolute inset-0 size-full stroke-foreground/20"
					height={40}
					width={40}
					x={20}
				/>
			</div>
			{/* Professional Radial Highlight on Hover */}
			<div className="absolute inset-0 bg-gradient-to-b from-white/[0.07] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

			<div className="relative z-10">
				<div className="[&_svg]:size-6 text-foreground/40 group-hover:text-white transition-all duration-500 group-hover:scale-110">
					{feature.icon}
				</div>
				<h3 className="mt-8 text-base font-medium text-white group-hover:text-white transition-colors">{feature.title}</h3>
				<p className="mt-2 font-normal text-muted-foreground/60 text-sm leading-relaxed group-hover:text-white/50 transition-colors">
					{feature.description}
				</p>
			</div>
		</div>
	);
}

const features: FeatureType[] = [
	{
		title: "Blazing Fast",
		icon: <ZapIcon />,
		description: "Next.js powered sites that load instantly and rank high on Google.",
	},
	{
		title: "Scalable Tech",
		icon: <CpuIcon />,
		description: "Built on modern architecture to handle traffic as you grow.",
	},
	{
		title: "Enterprise Security",
		icon: <FingerprintIcon />,
		description: "Best-in-class security practices to protect your data and users.",
	},
	{
		title: "Custom Design",
		icon: <PencilIcon />,
		description: "Unique, brand-tailored interfaces that stand out from templates.",
	},
	{
		title: "Full Control",
		icon: <Settings2Icon />,
		description: "Easy-to-manage CMS and admin panels for your team.",
	},
	{
		title: "Future Proof",
		icon: <SparklesIcon />,
		description: "Leveraging the latest in AI and web standards to keep you ahead.",
	},
];
