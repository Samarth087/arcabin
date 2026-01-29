"use client"

import { ChevronRight, Folder, File } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { TreeNode } from "@/constant/vscodeFolderData"

function TreeItem({
  node,
  level = 0,
}: {
  node: TreeNode
  level?: number
}) {
  const indentStyle = { paddingLeft: level * 16 }

  if (node.type === "file") {
    return (
      <div
        style={indentStyle}
        className="flex items-center gap-2 rounded-md px-2 py-1 text-xs text-muted-foreground hover:bg-muted"
      >
        <File className="size-4 opacity-70" />
        {node.name}
      </div>
    )
  }

  return (
    <Collapsible defaultOpen className="group">
      <CollapsibleTrigger asChild>
        <div
          style={indentStyle}
          className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 text-xs font-medium hover:bg-muted"
        >
          <ChevronRight className="size-3 transition-transform group-data-[state=open]:rotate-90" />
          <Folder className="size-4 text-blue-400" />
          {node.name}
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <div className="space-y-0.5">
          {node.children?.map((child) => (
            <TreeItem
              key={child.id}
              node={child}
              level={level + 1}
            />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}

export function VscodeExplorer({ tree }: { tree: TreeNode[] }) {
  return (
    <aside className="w-60 shrink-0 border-r bg-background/80 backdrop-blur-sm">
      <div className="px-3 py-2 text-xs font-semibold text-muted-foreground">
        Explorer
      </div>

      <div className="space-y-1 px-1">
        {tree.map((node) => (
          <TreeItem key={node.id} node={node} />
        ))}
      </div>
    </aside>
  )
}
