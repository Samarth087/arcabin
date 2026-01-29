"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { TypingText } from "@/components/ui/typing-text";

export default function HeroCodePanel() {
  return (
    <div className="relative w-full h-full min-h-0 rounded-lg bg-background text-zinc-200 font-mono overflow-hidden ">
      <div className="px-2 py-1">
        <Breadcrumb>
          <BreadcrumbList className="text-xs text-zinc-400 font-mono sm:gap-0">
            <BreadcrumbItem>
              <BreadcrumbLink href="#">src</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href="#">app</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href="#">_layout</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <span className="text-zinc-200">navProject.tsx</span>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-hidden p-4 leading-relaxed text-[13px]">
          <pre className="whitespace-pre-wrap text-zinc-300">
            {`import { TeamSwitcher } from "./teamSwitcher"
import { VscodeExplorer } from "./navProject"
import { NavMain } from "./navMain"
import { vscodeTree } from "@/constant/vscodeFolderData"
            
export function CardLayout() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="rounded-xl bg-white/5 p-4">
        <h3 className="text-sm font-medium">
           Analytics
        </h3>
      </div>

      <div className="col-span-2 rounded-xl bg-white/5 p-4">
        <h3 className="text-sm font-medium">
           Performance
        </h3>
      </div>`}
          </pre>

          <TypingText
            speed={80}
            delay={400}
            showCursor={false}
            className="block whitespace-pre-wrap text-zinc-200"
            text={`      
      <div className="rounded-xl bg-white/5 p-4">
        <h3 className="text-sm font-medium">
          Users
        </h3>
      </div>
    </div>
  )}`}
          />
        </div>
      </div>
    </div>
  );
}
