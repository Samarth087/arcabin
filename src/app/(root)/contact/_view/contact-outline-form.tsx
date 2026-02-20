"use client";

import { useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { fraunces } from "@/app/fonts";
import { useContact } from "@/hooks/useContact";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    title: z.string().optional(),
    companyName: z.string().optional(),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    typeOfWork: z.array(z.string()).min(1, {
        message: "Please select at least one type of work.",
    }),
    message: z.string().min(10, {
        message: "Please provide a bit more detail (at least 10 characters).",
    }),
    source: z.string().optional(),
    page: z.string().optional(),
    consent: z.boolean().refine((val) => val === true, {
        message: "You must consent to data processing.",
    }),
});

const workTypes = [
    { id: "product-design", label: "Product Design" },
    { id: "branding", label: "Branding" },
    { id: "ui-ux", label: "UI/UX" },
    { id: "motion-design", label: "Motion Design" },
    { id: "development", label: "Development" },
    { id: "other", label: "Other / Not sure" },
] as const;

export function ContactOutlineForm() {
    const pathname = usePathname();
    const { mutateAsync: createContactLead, isPending, isSuccess } = useContact();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
        defaultValues: {
            name: "",
            title: "",
            companyName: "",
            email: "",
            typeOfWork: [],
            message: "",
            source: "direct",
            page: pathname,
            consent: false,
        },
    });

    const isFormValid = form.formState.isValid;

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            await createContactLead({
                ...values,
                page: values.page || pathname,
            });
            form.reset();
        } catch (error) {
            console.error("Submission error:", error);
        }
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-6 md:p-8 rounded-[1.5rem] bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl relative overflow-hidden group">
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50 pointer-events-none" />

            <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                    <div>
                        <h2 className={cn("text-xl md:text-2xl font-bold text-white mb-1", fraunces.className)}>
                            Project <span className="text-primary italic">outline</span>
                        </h2>
                        <p className="text-xs text-muted-foreground font-medium">
                            A few quick details help us understand scope and timelines.
                        </p>
                    </div>
                    <span className="text-[9px] font-black tracking-[0.2em] text-muted-foreground/60 uppercase">
                        * Required
                    </span>
                </div>

                <AnimatePresence mode="wait">
                    {isSuccess ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="py-12 text-center"
                        >
                            <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary border border-primary/20">
                                <Check className="size-6" />
                            </div>
                            <h3 className={cn("text-xl font-bold text-white mb-2", fraunces.className)}>Message Sent!</h3>
                            <p className="text-sm text-muted-foreground mb-6">We'll get back to you within 24-48 hours.</p>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => form.reset()}
                                className="rounded-full px-6 h-8 border-primary/20 hover:bg-primary/5"
                            >
                                Send Another
                            </Button>
                        </motion.div>
                    ) : (
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem className="space-y-1.5">
                                                <FormLabel className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/80">Your Full Name *</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Ark Cabin"
                                                        className="h-8 rounded-lg border-white/5 bg-white/[0.03] px-3 text-xs transition-all focus-visible:ring-offset-0 focus-visible:ring-primary/30 focus-visible:bg-white/[0.05] placeholder:text-muted-foreground/20"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-[9px] uppercase font-bold tracking-wider" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="companyName"
                                        render={({ field }) => (
                                            <FormItem className="space-y-1.5">
                                                <FormLabel className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/80">Your Company</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="ArkCabin Studio"
                                                        className="h-8 rounded-lg border-white/5 bg-white/[0.03] px-3 text-xs transition-all focus-visible:ring-offset-0 focus-visible:ring-primary/30 focus-visible:bg-white/[0.05] placeholder:text-muted-foreground/20"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className="space-y-1.5">
                                                <FormLabel className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/80">Email Address *</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="hello@arkcabin.com"
                                                        className="h-8 rounded-lg border-white/5 bg-white/[0.03] px-3 text-xs transition-all focus-visible:ring-offset-0 focus-visible:ring-primary/30 focus-visible:bg-white/[0.05] placeholder:text-muted-foreground/20"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-[9px] uppercase font-bold tracking-wider" />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="title"
                                        render={({ field }) => (
                                            <FormItem className="space-y-1.5">
                                                <FormLabel className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/80">Your Title</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Founder / CEO"
                                                        className="h-8 rounded-lg border-white/5 bg-white/[0.03] px-3 text-xs transition-all focus-visible:ring-offset-0 focus-visible:ring-primary/30 focus-visible:bg-white/[0.05] placeholder:text-muted-foreground/20"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="typeOfWork"
                                    render={() => (
                                        <FormItem className="space-y-3">
                                            <FormLabel className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/80">Type of Work *</FormLabel>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                                {workTypes.map((item) => (
                                                    <FormField
                                                        key={item.id}
                                                        control={form.control}
                                                        name="typeOfWork"
                                                        render={({ field }) => {
                                                            const isChecked = field.value?.includes(item.id);
                                                            return (
                                                                <FormItem
                                                                    key={item.id}
                                                                    className={cn(
                                                                        "flex flex-row items-center gap-2 space-y-0 rounded-lg border px-3 h-10 cursor-pointer transition-all duration-300",
                                                                        isChecked
                                                                            ? "border-primary/50 bg-primary/5"
                                                                            : "border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10"
                                                                    )}
                                                                    onClick={() => {
                                                                        const value = field.value || [];
                                                                        if (isChecked) {
                                                                            field.onChange(value.filter((v) => v !== item.id));
                                                                        } else {
                                                                            field.onChange([...value, item.id]);
                                                                        }
                                                                    }}
                                                                >
                                                                    <FormControl>
                                                                        <div className={cn(
                                                                            "size-3 rounded-full border flex items-center justify-center transition-all duration-300",
                                                                            isChecked ? "border-primary bg-primary" : "border-white/20"
                                                                        )}>
                                                                            <AnimatePresence>
                                                                                {isChecked && (
                                                                                    <motion.div
                                                                                        initial={{ scale: 0 }}
                                                                                        animate={{ scale: 1 }}
                                                                                        exit={{ scale: 0 }}
                                                                                    >
                                                                                        <Check className="size-2 text-black stroke-[4px]" />
                                                                                    </motion.div>
                                                                                )}
                                                                            </AnimatePresence>
                                                                        </div>
                                                                    </FormControl>
                                                                    <FormLabel className="flex-1 font-bold text-[10px] uppercase tracking-wider cursor-pointer select-none line-clamp-1">
                                                                        {item.label}
                                                                    </FormLabel>
                                                                </FormItem>
                                                            )
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                            <FormMessage className="text-[9px] uppercase font-bold tracking-wider" />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1.5">
                                            <FormLabel className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground/80">Project Details *</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Context, goals, and reference links..."
                                                    className="min-h-[80px] rounded-xl border-white/5 bg-white/[0.03] px-3 py-2 text-xs transition-all focus-visible:ring-offset-0 focus-visible:ring-primary/30 focus-visible:bg-white/[0.05] resize-none placeholder:text-muted-foreground/20 leading-relaxed"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-[9px] uppercase font-bold tracking-wider" />
                                        </FormItem>
                                    )}
                                />

                                <div className="flex flex-col gap-4 pt-2">
                                    <FormField
                                        control={form.control}
                                        name="consent"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                        className="size-4 rounded border-white/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                                    />
                                                </FormControl>
                                                <div className="leading-none">
                                                    <FormLabel className="text-[10px] font-medium text-muted-foreground leading-relaxed cursor-pointer select-none">
                                                        I consent to the processing of my data in accordance with the{" "}
                                                        <Link href="/privacy" className="text-primary hover:underline underline-offset-4">Privacy Policy</Link>.
                                                    </FormLabel>
                                                </div>
                                            </FormItem>
                                        )}
                                    />

                                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                        <Button
                                            type="submit"
                                            size="sm"
                                            disabled={isPending || !isFormValid}
                                            className="w-full sm:w-auto rounded-full px-8 h-10 text-[10px] font-bold uppercase tracking-[0.2em] bg-white text-black hover:bg-primary transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isPending ? (
                                                <>
                                                    <Loader2 className="mr-2 size-3 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                "Send Message"
                                            )}
                                        </Button>
                                        <div className="text-[10px] font-medium text-muted-foreground">
                                            Not sure?{" "}
                                            <Link href="/book" className="text-white border-b border-white/20 hover:border-primary hover:text-primary transition-all pb-0.5">
                                                Book intro call
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Form>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
