// src/components/layout/vscode-tree.ts

export type TreeNode = {
  id: string
  name: string
  type: "folder" | "file"
  children?: TreeNode[]
}

export const vscodeTree: TreeNode[] = [
  {
    id: "src",
    name: "src",
    type: "folder",
    children: [
      {
        id: "app",
        name: "app",
        type: "folder",
        children: [
          {
            id: "dashboard",
            name: "dashboard",
            type: "folder",
            children: [
              { id: "page", name: "page.tsx", type: "file" },
              { id: "layout", name: "layout.tsx", type: "file" },
            ],
          },
        ],
      },
      {
        id: "components",
        name: "components",
        type: "folder",
        children: [
          { id: "sidebar", name: "sidebar.tsx", type: "file" },
          { id: "header", name: "header.tsx", type: "file" },
        ],
      },
    ],
  },
]
