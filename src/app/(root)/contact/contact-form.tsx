"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  company: z.string().optional(),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  typeOfWork: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }).optional(), 
  details: z.string().min(10, {
    message: "Please provide a bit more detail (at least 10 characters).",
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

function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      typeOfWork: [],
      details: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Form submitted! (Check console for data)");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-[10px] uppercase tracking-wider text-foreground/60">Your Full Name *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Ark Cabin" 
                    className="h-8 rounded-lg border-border/60 bg-secondary/30 px-3 text-xs focus-visible:ring-offset-0 placeholder:text-muted-foreground/50" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel className="text-[10px] uppercase tracking-wider text-foreground/60">Your Company</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="ArkCabin Studio" 
                    className="h-8 rounded-lg border-border/60 bg-secondary/30 px-3 text-xs focus-visible:ring-offset-0 placeholder:text-muted-foreground/50" 
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
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="text-[10px] uppercase tracking-wider text-foreground/60">Email Address *</FormLabel>
              <FormControl>
                <Input 
                  placeholder="hello@arkcabin.com" 
                  className="h-8 rounded-lg border-border/60 bg-secondary/30 px-3 text-xs focus-visible:ring-offset-0 placeholder:text-muted-foreground/50" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="typeOfWork"
          render={() => (
            <FormItem className="space-y-2">
              <div className="mb-1">
                <FormLabel className="text-[10px] uppercase tracking-wider text-foreground/60">Type of Work *</FormLabel>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {workTypes.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="typeOfWork"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-center space-x-2 space-y-0 rounded-md border border-border/60 bg-secondary/20 px-3 py-2 hover:bg-secondary/40 transition-colors cursor-pointer"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...(field.value || []), item.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== item.id
                                      )
                                    )
                              }}
                              className="size-3.5 border-primary/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                            />
                          </FormControl>
                          <FormLabel className="font-normal text-xs cursor-pointer w-full pt-0">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="text-[10px] uppercase tracking-wider text-foreground/60">Project Details</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Context, goals, and reference links..."
                  className="min-h-[80px] rounded-xl border-border/60 bg-secondary/30 px-3 py-2 text-xs focus-visible:ring-offset-0 resize-none placeholder:text-muted-foreground/50"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              </FormItem>
            )}
          />

        <div className="flex items-center justify-between pt-2">
            <Button type="submit" size="sm" className="rounded-full px-6 h-8 text-xs font-medium">
                Send Message
            </Button>
            <span className="text-[10px] text-muted-foreground hidden sm:inline-block">
                Not sure? <Link href="#" className="underline hover:text-foreground">Book intro call</Link>
            </span>
        </div>
      </form>
    </Form>
  );
}

export default ContactForm;
